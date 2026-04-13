/**
 * Grozai logo - shopping cart + leaf, black and white.
 * Matches the brand icon: B&W version of the provided logo.
 */
interface GrozaiLogoProps {
  size?: number;
  variant?: "icon" | "full";
}

export function GrozaiLogo({ size = 36, variant = "icon" }: GrozaiLogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      {/* Black rounded square with cart+leaf icon */}
      <img
        src={`${import.meta.env.BASE_URL}grozai.png`}
        alt="GrozAI"
        style={{
          width: size,
          height: size,
          borderRadius: Math.round(size * 0.24),
          flexShrink: 0,
          display: "block",
          objectFit: "cover",
        }}
      />

      {/* Text - only shown in "full" variant */}
      {variant === "full" && (
        <span
          style={{
            fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: size * 0.6,
            color: "#000",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          GrozAI
        </span>
      )}
    </div>
  );
}
