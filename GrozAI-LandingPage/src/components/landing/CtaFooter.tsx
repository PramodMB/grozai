import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { GrozaiLogo } from "@/components/GrozaiLogo";
import HeroPhoneMockup from "@/components/HeroPhoneMockup";
import AnalysisPhoneMockup from "@/components/AnalysisPhoneMockup";

const footerLinks = {
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
  ],
  Company: [
    { label: "Contact", href: "#" },
    { label: "Jobs", href: "#" },
  ],
};

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export const CtaFooter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  return (
    <>
      {/* CTA Section */}
      <section
        className="py-24 border-t border-gray-100"
        style={{ background: "#f9fafb" }}
        id="get-started"
      >
        <div className="max-w-5xl mx-auto px-6 text-center" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-black uppercase tracking-wide mb-4"
            style={{ fontSize: "clamp(1.4rem, 4vw, 2.15rem)", letterSpacing: "0.04em" }}
          >
            CLAIM YOUR EARLY ACCESS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-500 font-sans text-base mb-10 max-w-md mx-auto"
          >
            Be among the first to experience GrozAI-powered grocery intelligence. No commitment. Cancel anytime.
          </motion.p>

          {/* Three phones — CSS-built UI, no garbled text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="flex items-end justify-center gap-5 mb-10"
            style={{ perspective: "1000px" }}
          >
            {/* Left phone — Analysis screen */}
            <div
              className="phone-frame hidden sm:block"
              style={{
                width: "170px",
                transform: "rotateY(15deg) rotateX(3deg) rotate(-5deg) translateY(18px)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.16)",
              }}
            >
              <div className="phone-notch" style={{ width: "60px", height: "18px" }} />
              <div className="phone-screen" style={{ height: "340px" }}>
                <AnalysisPhoneMockup />
              </div>
            </div>

            {/* Center phone — Goals/Home screen */}
            <div
              className="phone-frame"
              style={{
                width: "215px",
                boxShadow: "0 30px 70px rgba(0,0,0,0.2)",
                zIndex: 2,
              }}
            >
              <div className="phone-notch" />
              <div className="phone-screen" style={{ height: "430px" }}>
                <HeroPhoneMockup />
              </div>
            </div>

            {/* Right phone — Analysis screen mirrored */}
            <div
              className="phone-frame hidden sm:block"
              style={{
                width: "170px",
                transform: "rotateY(-15deg) rotateX(3deg) rotate(5deg) translateY(18px)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.16)",
              }}
            >
              <div className="phone-notch" style={{ width: "60px", height: "18px" }} />
              <div className="phone-screen" style={{ height: "340px" }}>
                <HeroPhoneMockup />
              </div>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2.5 bg-black text-white rounded-2xl px-6 py-3.5 hover:bg-gray-900 transition-colors"
            >
              <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-70 leading-none mb-0.5 font-sans">Download on the</div>
                <div className="text-sm font-semibold leading-none font-sans">App Store</div>
              </div>
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2.5 bg-black text-white rounded-2xl px-6 py-3.5 hover:bg-gray-900 transition-colors"
            >
              <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.24 1 .2l12.49-7.17-2.71-2.71-10.78 9.68zM.5 1.05C.19 1.38 0 1.89 0 2.56v18.88c0 .67.19 1.18.5 1.51l.08.08 10.57-10.57v-.24L.58.97.5 1.05zM20.35 10.32l-2.99-1.72-2.99 1.72-.01 2.96 2.99 1.72 2.99-1.72.01-2.96zM4.18 1.24l12.49 7.17-2.71 2.71L3.18.24c.37-.04.71.03 1 .2l.01.01-.01-.01z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-70 leading-none mb-0.5 font-sans">Get it on</div>
                <div className="text-sm font-semibold leading-none font-sans">Google Play</div>
              </div>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-gray-400 text-xs font-sans mt-4"
          >
            By signing up, you agree to our{" "}
            <a href="#" className="underline hover:text-gray-600 transition-colors">Terms of Service</a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-gray-600 transition-colors">Privacy Policy</a>.
            No commitment. Cancel anytime.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
            <div>
              <a href="#" className="flex items-center gap-2 mb-3">
                <GrozaiLogo size={32} variant="full" />
              </a>
              <p className="text-gray-400 text-sm font-sans max-w-xs leading-relaxed">
                GrozAI-powered grocery intelligence for healthier choices, smarter lists, and better habits.
              </p>
            </div>

            <div className="flex flex-wrap gap-12">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="font-sans font-semibold text-black text-sm mb-3">{category}</h4>
                  <ul className="flex flex-col gap-2">
                    {links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="text-gray-500 text-sm font-sans hover:text-black transition-colors">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-sans font-semibold text-black text-sm mb-3">Follow us</h4>
              <div className="flex items-center gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-black transition-colors"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 text-center">
            <p className="text-gray-400 text-xs font-sans">
              Copyright 2026, GrozAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
