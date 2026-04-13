import { useRef } from "react";
import { motion, useInView } from "motion/react";
import AnalysisPhoneMockup from "@/components/AnalysisPhoneMockup";

const checkmarks = [
  "Instant health score for every product",
  "Smarter substitute recommendations",
  "Portion-size guidance based on your goals",
  "Personalized nutrition explanations",
];

export const FeatureHighlight = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  return (
    <section className="py-24 overflow-hidden border-t border-gray-100" style={{ background: "#f9fafb" }}>
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="flex flex-col md:flex-row items-center gap-14">

          {/* Phone mockup — real app screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex justify-center md:justify-start"
            style={{ perspective: "1000px" }}
          >
            <div
              className="animate-float"
              style={{
                transform: "rotateY(10deg) rotateX(-3deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="phone-frame"
                style={{
                  width: "240px",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.22), 0 8px 24px rgba(0,0,0,0.08)",
                }}
              >
                <div className="phone-notch" />
                <div className="phone-screen" style={{ height: "500px" }}>
                  <AnalysisPhoneMockup />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <span className="inline-flex items-center gap-2 bg-black text-white text-xs font-sans font-medium px-3.5 py-1.5 rounded-full mb-5">
              GrozAI-powered
            </span>

            <h2
              className="font-display font-bold text-black mb-5 leading-[1.08]"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Contextual food scoring
              <br />
              in plain English
            </h2>

            <p className="text-gray-500 text-base font-sans leading-relaxed mb-6 max-w-md">
              Every product gets a clear verdict — <strong className="text-black">Good</strong>, <strong className="text-black">Okay</strong>, or <strong className="text-black">Avoid</strong> — based on your exact goals, not generic nutrition tables. GrozAI explains why in simple language, not scientific jargon.
            </p>

            <ul className="space-y-3">
              {checkmarks.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div
                    className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "#f3f4f6" }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm font-sans">{item}</span>
                </li>
              ))}
            </ul>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
