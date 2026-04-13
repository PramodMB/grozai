import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { TiltCard } from "@/components/TiltCard";

const benefits = [
  {
    title: "Free up your time",
    description:
      "Stop reading ingredient labels and googling nutrition info. GrozAI does all the research instantly — goal-based product scoring, smart substitutes, and weekly list generation. All automatic.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&h=240&q=85",
    imageAlt: "Person running — time saved with GrozAI",
  },
  {
    title: "Eat healthier, automatically",
    description:
      "GrozAI detects nutrition deficiencies in your weekly shopping patterns and suggests what to add. Protein low this week? Fiber missing? GrozAI catches it before you even notice.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&h=240&q=85",
    imageAlt: "Healthy acai bowl representing automatic nutrition improvement",
  },
  {
    title: "Protect your entire family",
    description:
      "Set individual profiles for kids, elderly, or anyone with conditions. GrozAI flags every allergen, additive, and unsafe ingredient — and handles multiple dietary needs in one shared household list.",
    image: "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&h=240&q=85",
    imageAlt: "Family in kitchen — household grocery collaboration",
  },
];

export const WhyChoose = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-black text-center mb-16"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
        >
          Why choose GrozAI?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.1 }}
            >
              <TiltCard intensity={6} style={{ height: "100%" }}>
                <div
                  className="rounded-2xl border border-gray-200 overflow-hidden bg-white h-full"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                >
                  {/* Real image header — every card has a photo */}
                  <div className="relative overflow-hidden" style={{ height: "185px" }}>
                    <img
                      src={b.image}
                      alt={b.imageAlt}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.14) 100%)" }}
                    />
                  </div>

                  {/* Card content */}
                  <div className="p-7">
                    <h3 className="font-display font-semibold text-black text-xl mb-3 leading-snug">
                      {b.title}
                    </h3>
                    <p className="text-gray-500 text-sm font-sans leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
