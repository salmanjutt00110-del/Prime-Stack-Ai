import os
from PIL import Image

def generate_favicons():
    source_path = 'Logo Prime Tools.png'
    public_dir = 'public'

    if not os.path.exists(source_path):
        raise FileNotFoundError(f"Source image '{source_path}' not found.")

    os.makedirs(public_dir, exist_ok=True)
    img = Image.open(source_path).convert('RGBA')

    sizes = {
        'favicon-16x16.png': (16, 16),
        'favicon-32x32.png': (32, 32),
        'favicon-48x48.png': (48, 48),
        'favicon.png': (48, 48),
        'apple-touch-icon.png': (180, 180),
        'android-chrome-192x192.png': (192, 192),
        'android-chrome-512x512.png': (512, 512),
    }

    for filename, (w, h) in sizes.items():
        resized = img.resize((w, h), Image.Resampling.LANCZOS)
        output_path = os.path.join(public_dir, filename)
        resized.save(output_path, 'PNG', optimize=True)
        print(f"Generated: {output_path} ({w}x{h})")

    # Generate multi-size favicon.ico (16, 32, 48)
    ico_path = os.path.join(public_dir, 'favicon.ico')
    img.save(
        ico_path,
        format='ICO',
        sizes=[(16, 16), (32, 32), (48, 48)]
    )
    print(f"Generated multi-resolution ICO: {ico_path} (16, 32, 48)")

if __name__ == '__main__':
    generate_favicons()
