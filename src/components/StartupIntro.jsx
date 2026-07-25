import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import Logo from "@/components/Logo";
import { Sparkles, ShieldCheck, Cpu, Zap, Activity, Terminal, ArrowRight, CheckCircle2 } from "lucide-react";

export default function StartupIntro({ onComplete }) {
  const mountRef = useRef(null);
  const [phase, setPhase] = useState("intro"); // "intro" (0-2.4s) -> "loading" (2.4s-4.4s) -> "complete"
  const [progress, setProgress] = useState(0);
  const [telemetryMsg, setTelemetryMsg] = useState("INITIALIZING SYSTEM CORE...");

  // THREE.JS 3D PARTICLE CANVAS
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 110;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3D Particles Matrix
    const count = 1400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const palette = [
      new THREE.Color("#3B82F6"), // Blue
      new THREE.Color("#8B5CF6"), // Purple
      new THREE.Color("#EC4899"), // Pink
      new THREE.Color("#10B981"), // Emerald
    ];

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 35 + Math.random() * 85;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const col = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 2.0,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Outer Holographic Wireframe Torus Ring
    const torusGeo = new THREE.TorusGeometry(38, 0.5, 16, 90);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const torusRing = new THREE.Mesh(torusGeo, torusMat);
    scene.add(torusRing);

    // Mouse movement interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.04;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.04;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      particles.rotation.y += 0.003;
      particles.rotation.x += 0.0015;
      torusRing.rotation.z += 0.006;
      torusRing.rotation.x += 0.003;

      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      torusGeo.dispose();
      torusMat.dispose();
    };
  }, []);

  // Intro -> Loading timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("loading");
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  // Progress Bar & Telemetry Messages
  useEffect(() => {
    if (phase !== "loading") return;

    const telemetryLogs = [
      { at: 10, msg: "AUTHENTICATING SECURE TOKENS & SSL..." },
      { at: 30, msg: "FETCHING AI CATALOG, CHATGPT & PREMIUM TOOLS..." },
      { at: 60, msg: "INITIALIZING AMIRADS DIGITAL AGENCY SERVICES..." },
      { at: 85, msg: "PREPARING HIGH-SPEED RESPONSIVE ENGINE..." },
      { at: 100, msg: "WELCOME TO PRIME TOOLS HUB!" },
    ];

    let animationFrameId;
    const startTime = performance.now();
    const duration = 1800; // 1.8 seconds smooth progress build

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      const matched = [...telemetryLogs].reverse().find((item) => pct >= item.at);
      if (matched) {
        setTelemetryMsg(matched.msg);
      }

      if (pct < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setPhase("complete");
          if (onComplete) onComplete();
        }, 400);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [phase, onComplete]);

  if (phase === "complete") return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="startup-overlay"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 1.15,
          filter: "blur(16px)",
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#010103] text-white overflow-hidden select-none py-8 px-4"
        style={{ perspective: "1200px" }}
      >
        {/* THREE.JS 3D BACKGROUND CANVAS */}
        <div ref={mountRef} className="absolute inset-0 pointer-events-none z-0" />

        {/* CYBERPUNK HUD TOP STATUS BAR */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-6xl flex items-center justify-between text-[11px] font-mono tracking-widest text-white/50 border-b border-white/10 pb-3"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              SYSTEM: ONLINE
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline">SECURITY: 256-BIT ENCRYPTED</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-purple-300 font-bold">PAKISTAN'S #1 AI MARKETPLACE</span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="text-blue-400 font-mono font-extrabold">v3.6 ULTRA 3D</span>
          </div>
        </motion.div>

        {/* STAGE 1: 3D WELCOME TYPOGRAPHY & FLOATING LOGO */}
        {phase === "intro" && (
          <motion.div
            key="intro-phase"
            initial={{ opacity: 0, rotateX: 25, scale: 0.85, y: 35 }}
            animate={{ opacity: 1, rotateX: 0, scale: 1, y: 0 }}
            exit={{ opacity: 0, rotateX: -20, scale: 1.1, y: -35 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center max-w-3xl relative z-10 my-auto"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Holographic Glowing Logo Container */}
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-8"
            >
              {/* Pulsing Backlight Halo */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-3xl opacity-60 animate-pulse" />

              {/* 3D Glass Box */}
              <div className="relative p-6 rounded-3xl bg-white/[0.04] border border-white/20 backdrop-blur-2xl shadow-[0_0_60px_rgba(139,92,246,0.5)] ps-logo-anim">
                <Logo size={90} animated={true} />
              </div>
            </motion.div>

            {/* Giant 3D Metallic Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white leading-tight mb-4"
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_45px_rgba(139,92,246,0.7)] ps-text-3d">
                Prime Tools Hub
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-base sm:text-xl text-white/85 font-body font-medium tracking-wide max-w-xl mb-7"
            >
              Pakistan's Premier Marketplace for AI Accounts, Custom Websites & High-ROAS Agency Ads
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-2.5 text-xs font-extrabold text-white/90"
            >
              <span className="px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/35 text-blue-300 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-blue-400" />
                100% Genuine Verified Accounts
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/35 text-purple-300 flex items-center gap-1.5">
                <Zap size={14} className="text-purple-400" />
                Instant Delivery
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-pink-500/15 border border-pink-500/35 text-pink-300 flex items-center gap-1.5">
                <Sparkles size={14} className="text-pink-400" />
                🔥 50% OFF Agency Web Dev
              </span>
            </motion.div>
          </motion.div>
        )}

        {/* STAGE 2: HOLOGRAPHIC CYBER TELEMETRY LOADER */}
        {phase === "loading" && (
          <motion.div
            key="loading-phase"
            initial={{ opacity: 0, rotateX: -15, scale: 0.88 }}
            animate={{ opacity: 1, rotateX: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center relative z-10 w-full max-w-lg my-auto"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Holographic Core Center */}
            <div className="relative flex items-center justify-center mb-9">
              <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 animate-pulse" />

              <div className="w-36 h-36 rounded-full border-2 border-blue-500/40 border-t-blue-400 border-b-purple-500 animate-spin flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.6)]">
                <div className="w-28 h-28 rounded-full border-2 border-dashed border-purple-400/50 border-r-pink-400 animate-[spin_4s_linear_infinite_reverse] flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-2xl flex items-center justify-center shadow-inner">
                    <Logo size={50} animated={true} />
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Title */}
            <div className="text-center mb-6">
              <h2 className="font-display font-black text-3xl text-white tracking-tight flex items-center justify-center gap-2">
                <span>Prime</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ps-text-3d">
                  Tools Hub
                </span>
              </h2>
              <p className="text-xs text-white/50 font-mono uppercase tracking-widest mt-1.5 flex items-center justify-center gap-2">
                <Terminal size={14} className="text-purple-400" />
                <span>INITIALIZING ENGINE CORE</span>
              </p>
            </div>

            {/* Cyber 3D Progress Bar */}
            <div className="w-full bg-white/[0.06] rounded-2xl p-1.5 border border-white/15 backdrop-blur-2xl overflow-hidden relative mb-4 shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
              <motion.div
                className="h-3.5 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative"
                style={{ width: `${progress}%` }}
              >
                <span className="ps-shimmer absolute inset-0 rounded-xl" />
                <div className="absolute right-0 top-0 bottom-0 w-3 bg-white blur-[2px] rounded-r-xl animate-pulse" />
              </motion.div>
            </div>

            {/* Telemetry Output Terminal Bar */}
            <div className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md text-xs font-mono">
              <div className="flex items-center gap-2 text-emerald-400 truncate max-w-[80%]">
                <Activity size={14} className="animate-spin shrink-0 text-blue-400" />
                <span className="truncate">{telemetryMsg}</span>
              </div>
              <span className="text-purple-300 font-extrabold text-sm ml-2">
                {progress}%
              </span>
            </div>
          </motion.div>
        )}

        {/* BOTTOM FOOTER INTRO BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10 text-[11px] font-mono text-white/40 tracking-widest text-center"
        >
          <span>AMIRADS & PRIME TOOLS HUB — ALL RIGHTS RESERVED</span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
