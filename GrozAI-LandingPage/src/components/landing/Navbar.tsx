import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GrozaiLogo } from "@/components/GrozaiLogo";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{ borderBottom: "1px solid #f3f4f6" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          <GrozaiLogo size={36} variant="full" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm text-gray-600 hover:text-black font-sans rounded-lg hover:bg-gray-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#get-started"
          className="hidden md:inline-block bg-black text-white text-sm font-sans font-medium px-5 py-2.5 rounded-full hover:bg-gray-900 transition-colors"
        >
          Get Early Access
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-sm text-gray-600 hover:text-black font-sans border-b border-gray-50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#get-started"
            onClick={() => setMobileOpen(false)}
            className="mt-3 bg-black text-white text-sm font-sans font-medium px-5 py-3 rounded-full text-center"
          >
            Get Early Access
          </a>
        </div>
      )}
    </header>
  );
};
