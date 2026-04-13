import { useRef, useState } from "react";
import { motion } from "motion/react";
import HeroPhoneMockup from "@/components/HeroPhoneMockup";

const AppStoreBtn = () => (
  <a
    href="#get-started"
    className="inline-flex items-center gap-2.5 bg-black text-white rounded-2xl px-5 py-3.5 hover:bg-gray-900 transition-colors"
  >
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
    <div className="text-left">
      <div className="text-xs opacity-70 leading-none mb-0.5 font-sans">Download on the</div>
      <div className="text-sm font-semibold leading-none font-sans">App Store</div>
    </div>
  </a>
);

const GooglePlayBtn = () => (
  <a
    href="#get-started"
    className="inline-flex items-center gap-2.5 bg-black text-white rounded-2xl px-5 py-3.5 hover:bg-gray-900 transition-colors"
  >
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c.3.17.64.24 1 .2l12.49-7.17-2.71-2.71-10.78 9.68zM.5 1.05C.19 1.38 0 1.89 0 2.56v18.88c0 .67.19 1.18.5 1.51l.08.08 10.57-10.57v-.24L.58.97.5 1.05zM20.35 10.32l-2.99-1.72-2.99 1.72-.01 2.96 2.99 1.72 2.99-1.72.01-2.96zM4.18 1.24l12.49 7.17-2.71 2.71L3.18.24c.37-.04.71.03 1 .2l.01.01-.01-.01z" />
    </svg>
    <div className="text-left">
      <div className="text-xs opacity-70 leading-none mb-0.5 font-sans">Get it on</div>
      <div className="text-sm font-semibold leading-none font-sans">Google Play</div>
    </div>
  </a>
);

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const handleMouseLeave = () => setMouse({ x: 0.5, y: 0.5 });

  const rotateY = -14 + (mouse.x - 0.5) * 16;
  const rotateX = 5 - (mouse.y - 0.5) * 10;

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white pt-24 overflow-hidden"
      style={{ minHeight: "92vh" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 pt-12 pb-16">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-gray-400 text-sm font-sans mb-4 font-medium tracking-wide"
            >
              Meet GrozAI
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-black leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)" }}
            >
              Smarter groceries,
              <br />
              healthier choices,
              <br />
              powered by GrozAI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 text-base md:text-lg font-sans leading-relaxed mb-8 max-w-md mx-auto lg:mx-0"
            >
              GrozAI learns your health goals, diet preferences, and allergies — then auto-generates personalized grocery lists, scores every product, and finds smarter substitutes. Built for you, your goals, and your family.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-3 justify-center lg:justify-start"
            >
              <AppStoreBtn />
              <GooglePlayBtn />
            </motion.div>
          </div>

          {/* Right: 3D Interactive Phone */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex justify-center lg:justify-end items-center"
            style={{ perspective: "1200px" }}
          >
            <div className="relative flex items-center justify-center">

              {/* Ambient shadow below phone */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "220px",
                  height: "40px",
                  background: "radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, transparent 70%)",
                  filter: "blur(10px)",
                  borderRadius: "50%",
                }}
              />

              {/* 3D phone wrapper tracks mouse */}
              <div
                style={{
                  transform: `perspective(1200px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
                  transition: "transform 0.08s ease-out",
                  transformStyle: "preserve-3d",
                  position: "relative",
                }}
              >
                {/* Phone frame */}
                <div
                  className="phone-frame"
                  style={{
                    width: "285px",
                    boxShadow:
                      "0 40px 80px rgba(0,0,0,0.2), 0 10px 30px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="phone-notch" />
                  <div className="phone-screen" style={{ height: "560px" }}>
                    <HeroPhoneMockup />
                  </div>
                </div>

                {/* Floating depth card front left */}
                <div
                  style={{
                    position: "absolute",
                    left: "-100px",
                    top: "80px",
                    transform: "translateZ(50px)",
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "14px",
                    padding: "10px 14px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    width: "130px",
                    display: "none",
                  }}
                  className="lg:block"
                >
                  <div style={{ fontSize: "9px", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>Weekly Goal</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#000" }}>Fat Loss</div>
                  <div style={{ marginTop: "6px", height: "3px", background: "#f3f4f6", borderRadius: "3px" }}>
                    <div style={{ width: "68%", height: "100%", background: "#4ade80", borderRadius: "3px" }} />
                  </div>
                  <div style={{ fontSize: "9px", color: "#9ca3af", marginTop: "3px" }}>68% complete</div>
                </div>

                {/* Floating depth card front right */}
                <div
                  style={{
                    position: "absolute",
                    right: "-110px",
                    top: "220px",
                    transform: "translateZ(60px)",
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "14px",
                    padding: "10px 14px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    width: "140px",
                    display: "none",
                  }}
                  className="lg:block"
                >
                  <div style={{ fontSize: "9px", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>GrozAI Found</div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#000" }}>3 better options</div>
                  <div style={{ fontSize: "10px", color: "#4ade80", marginTop: "2px" }}>in your list</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
