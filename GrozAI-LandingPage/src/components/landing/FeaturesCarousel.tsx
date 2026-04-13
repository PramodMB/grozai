import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";

const features = [
  {
    id: 0,
    title: "Set Your Goals, GrozAI Does the Rest",
    description:
      "Tell GrozAI your goal — fat loss, muscle gain, maintenance — plus your diet (keto, vegan, etc.) and any allergies. GrozAI immediately builds a personalized grocery profile and adapts every recommendation to match.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=700&h=900&q=85",
    imageAlt: "Colorful healthy food representing personalized nutrition goals",
    tag: "Personalization",
  },
  {
    id: 1,
    title: "GrozAI Scans & Scores Every Product",
    description:
      "Point your camera at any barcode. GrozAI instantly decodes every ingredient, assigns a health score, detects hidden allergens, and surfaces smarter substitutes — based specifically on your goals, not generic advice.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&h=900&q=85",
    imageAlt: "Grocery store aisle representing AI-powered product analysis",
    tag: "AI Intelligence",
  },
  {
    id: 2,
    title: "Auto-Generate Your Weekly Grocery List",
    description:
      "GrozAI learns your eating habits and auto-builds your weekly list — organized by category (produce, dairy, protein, etc.). Paste a YouTube recipe link and watch it turn into a ready-to-shop list in seconds.",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=700&h=900&q=85",
    imageAlt: "Organized meal prep representing smart grocery list generation",
    tag: "Smart Lists",
  },
  {
    id: 3,
    title: "Track Nutrition & Close the Gaps",
    description:
      "Get weekly nutrition insights on protein, fiber, vitamins, and more. GrozAI detects deficiencies in your shopping patterns and suggests what to add — so your cart actively moves you toward your health goals.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&h=900&fit=crop&w=700&q=85",
    imageAlt: "Colorful vegetables and nutrients representing nutrition tracking",
    tag: "Insights",
  },
  {
    id: 4,
    title: "Shop Together as a Family",
    description:
      "Create household profiles for every family member — kids, elderly, or anyone with specific needs. GrozAI handles all preferences at once: one shared list, multiple dietary needs, zero conflicts.",
    image: "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop&w=700&h=900&q=85",
    imageAlt: "Family cooking together representing household grocery collaboration",
    tag: "Family Mode",
  },
  {
    id: 5,
    title: "Personalized Meal Suggestions",
    description:
      "Based on what's in your pantry and your weekly goals, GrozAI suggests meals you can actually make — no wasted groceries, no guessing. Approve a meal and it auto-fills your grocery list with only what's missing.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&h=900&q=85",
    imageAlt: "Healthy meal plate representing GrozAI-powered meal planning",
    tag: "Meal Planning",
  },
];

export const FeaturesCarousel = () => {
  const [active, setActive] = useState(0);
  const [imgVisible, setImgVisible] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const handleCardClick = (idx: number) => {
    if (idx === active) return;
    setImgVisible(false);
    setTimeout(() => {
      setActive(idx);
      setImgVisible(true);
    }, 180);
  };

  return (
    <section id="features" className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-black text-center mb-12"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
        >
          What does GrozAI include?
        </motion.h2>

        {/* ── MOBILE LAYOUT (hidden on lg+) ── */}
        <div className="lg:hidden">
          {/* Image at top — always visible */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden mb-6"
            style={{ height: "260px", boxShadow: "0 4px 32px rgba(0,0,0,0.10)", border: "1px solid #e5e7eb" }}
          >
            <img
              src={features[active].image}
              alt={features[active].imageAlt}
              className="w-full h-full object-cover transition-opacity duration-200"
              style={{ opacity: imgVisible ? 1 : 0 }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-4"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.28) 55%, transparent 100%)",
                opacity: imgVisible ? 1 : 0,
                transition: "opacity 0.2s",
              }}
            >
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-sans font-medium px-2.5 py-1 rounded-full mb-1.5">
                {features[active].tag}
              </span>
              <p className="text-white font-display font-semibold text-base leading-snug">
                {features[active].title}
              </p>
            </div>
          </motion.div>

          {/* Horizontal scrollable tag pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex gap-2 overflow-x-auto pb-3 mb-5 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {features.map((feat, i) => (
              <button
                key={feat.id}
                onClick={() => handleCardClick(i)}
                className="shrink-0 text-xs font-sans font-medium px-3.5 py-1.5 rounded-full transition-all duration-200"
                style={{
                  background: active === i ? "#000" : "#f3f4f6",
                  color: active === i ? "#fff" : "#6b7280",
                  border: active === i ? "1px solid #000" : "1px solid transparent",
                }}
              >
                {feat.tag}
              </button>
            ))}
          </motion.div>

          {/* Active feature description */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-gray-200 p-5 bg-gray-50"
          >
            <h3 className="font-display font-semibold text-black text-base mb-2 leading-snug">
              {features[active].title}
            </h3>
            <p className="text-gray-500 text-sm font-sans leading-relaxed">
              {features[active].description}
            </p>
          </motion.div>
        </div>

        {/* ── DESKTOP LAYOUT (hidden on mobile) ── */}
        <div className="hidden lg:flex gap-8 items-start">
          {/* Left: Feature cards (scrollable) */}
          <div className="flex-1 flex flex-col gap-3 lg:max-h-[620px] lg:overflow-y-auto pr-1">
            {features.map((feat, i) => (
              <motion.button
                key={feat.id}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.04 + i * 0.06 }}
                onClick={() => handleCardClick(i)}
                className="text-left w-full rounded-2xl border p-5 cursor-pointer transition-all duration-200"
                style={{
                  borderColor: active === i ? "#000" : "#e5e7eb",
                  backgroundColor: active === i ? "#f9fafb" : "#fff",
                  transform: active === i ? "scale(1.01)" : "scale(1)",
                  boxShadow: active === i ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
                }}
              >
                <span
                  className="inline-block text-xs font-sans font-medium px-2.5 py-0.5 rounded-full mb-2"
                  style={{
                    background: active === i ? "#000" : "#f3f4f6",
                    color: active === i ? "#fff" : "#6b7280",
                  }}
                >
                  {feat.tag}
                </span>
                <h3
                  className="font-display font-semibold text-black mb-1.5 leading-snug"
                  style={{ fontSize: "0.975rem" }}
                >
                  {feat.title}
                </h3>
                <p className="text-gray-500 text-sm font-sans leading-relaxed">
                  {feat.description}
                </p>
              </motion.button>
            ))}

            {/* Dot indicators */}
            <div className="flex items-center gap-2 pt-1 justify-start">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleCardClick(i)}
                  className="rounded-full transition-all duration-200"
                  style={{
                    width: active === i ? "20px" : "8px",
                    height: "8px",
                    background: active === i ? "#000" : "#d1d5db",
                  }}
                  aria-label={`Feature ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Feature image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex-1 flex justify-end"
          >
            <div
              className="relative rounded-3xl overflow-hidden w-full"
              style={{
                height: "600px",
                boxShadow: "0 4px 40px rgba(0,0,0,0.1)",
                border: "1px solid #e5e7eb",
              }}
            >
              <img
                src={features[active].image}
                alt={features[active].imageAlt}
                className="w-full h-full object-cover transition-opacity duration-200"
                style={{ opacity: imgVisible ? 1 : 0 }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                  transition: "opacity 0.2s",
                  opacity: imgVisible ? 1 : 0,
                }}
              >
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-sans font-medium px-2.5 py-1 rounded-full mb-2">
                  {features[active].tag}
                </span>
                <p className="text-white font-display font-semibold text-lg leading-snug">
                  {features[active].title}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
