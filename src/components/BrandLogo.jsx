import React from "react";

export default function BrandLogo({ id = "", name = "", size = 48, className = "" }) {
  const str = (id + " " + name).toLowerCase();

  // YouTube Premium
  if (str.includes("youtube")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="12" fill="#FF0000" />
        <path d="M9.5 8L16 12L9.5 16V8Z" fill="white" />
      </svg>
    );
  }

  // Google Gemini Pro
  if (str.includes("gemini")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <defs>
          <linearGradient id="gemini-spark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="40%" stopColor="#A855F7" />
            <stop offset="80%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
        <path
          d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4771 12 22C12 16.4771 16.4771 12 22 12C16.4771 12 12 7.52285 12 2Z"
          fill="url(#gemini-spark)"
        />
        <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" opacity="0.9" />
      </svg>
    );
  }

  // Google VEO 3 / VEO 3.1 Ultra
  if (str.includes("veo")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <defs>
          <linearGradient id="veo-spark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#F43F5E" />
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="8" fill="#0F172A" />
        <path d="M7 7.5L15 12L7 16.5V7.5Z" fill="url(#veo-spark)" />
        <circle cx="17" cy="8" r="2.5" fill="#60A5FA" />
        <circle cx="17" cy="16" r="2.5" fill="#F43F5E" />
      </svg>
    );
  }

  // CapCut Pro
  if (str.includes("capcut")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="12" fill="#000000" />
        <path d="M6 6H11V11H6V6ZM13 6H18V11H13V6ZM6 13H11V18H6V13ZM13 13H18V18H13V13Z" fill="white" />
        <path d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5" stroke="#FE2C55" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // ChatGPT Plus / OpenAI
  if (str.includes("chatgpt") || str.includes("openai")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="12" fill="#10A37F" />
        <path
          d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7Z"
          fill="white"
        />
        <path d="M12 8.5V15.5M8.5 12H15.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // Lovable AI Pro
  if (str.includes("lovable")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <defs>
          <linearGradient id="lovable-spark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F43F5E" />
            <stop offset="50%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <path
          d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
          fill="url(#lovable-spark)"
        />
      </svg>
    );
  }

  // Notion Plus
  if (str.includes("notion")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="6" fill="#FFFFFF" />
        <path
          d="M6.5 5.5L16.2 5.5C16.8 5.5 17.2 5.9 17.2 6.5V17.5C17.2 18.1 16.8 18.5 16.2 18.5H6.5C5.9 18.5 5.5 18.1 5.5 17.5V6.5C5.5 5.9 5.9 5.5 6.5 5.5ZM8.5 8V16H10.2L13.8 10.8V16H15.5V8H13.8L10.2 13.2V8H8.5Z"
          fill="#000000"
        />
      </svg>
    );
  }

  // NordVPN
  if (str.includes("nord")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="12" fill="#0060FF" />
        <path d="M12 5.5L17 17.5H13.8L12 12.5L10.2 17.5H7L12 5.5Z" fill="white" />
      </svg>
    );
  }

  // Surfshark VPN
  if (str.includes("surfshark")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="12" fill="#0EA5E9" />
        <path
          d="M6.5 16.5C6.5 16.5 9.5 12 12 12C14.5 12 17.5 16.5 17.5 16.5M12 6.5V12"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // SuperGrok / Grok
  if (str.includes("grok") || str.includes("supergrok")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="12" fill="#000000" />
        <path d="M6.5 17.5L17.5 6.5M6.5 6.5L17.5 17.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  // Canva Pro
  if (str.includes("canva")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="12" fill="#00C4CC" />
        <path
          d="M12 5.5C8.41 5.5 5.5 8.41 5.5 12C5.5 15.59 8.41 18.5 12 18.5C15.59 18.5 18.5 15.59 18.5 12C18.5 8.41 15.59 5.5 12 5.5ZM12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
          fill="white"
        />
      </svg>
    );
  }

  // Figma Pro
  if (str.includes("figma")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="9" cy="6" r="3" fill="#F24E1E" />
        <circle cx="15" cy="6" r="3" fill="#FF7262" />
        <circle cx="9" cy="12" r="3" fill="#A259FF" />
        <circle cx="15" cy="12" r="3" fill="#1ABCFE" />
        <circle cx="9" cy="18" r="3" fill="#0ACF83" />
      </svg>
    );
  }

  // TikTok
  if (str.includes("tiktok")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="12" fill="#000000" />
        <path
          d="M16.6 8.2C15.5 8.2 14.5 7.6 14 6.7V14.5C14 16.9 12 18.9 9.6 18.9C7.2 18.9 5.2 16.9 5.2 14.5C5.2 12.1 7.2 10.1 9.6 10.1V12.3C8.4 12.3 7.4 13.3 7.4 14.5C7.4 15.7 8.4 16.7 9.6 16.7C10.8 16.7 11.8 15.7 11.8 14.5V4.5H14C14.5 5.8 15.7 6.8 17.1 6.9V8.2H16.6Z"
          fill="white"
        />
      </svg>
    );
  }

  // Fallback icon
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="#38BDF8" strokeWidth="2" />
      <path d="M12 8V16M8 12H16" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
