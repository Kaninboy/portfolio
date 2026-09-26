"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { id: "about", name: "About" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
  { id: "skills", name: "Skills" },
  { id: "education", name: "Education" },
  { id: "contact", name: "Contact" },
];

type Theme = "dark" | "light";

// Circular glass button used for the theme toggle and the mobile menu button
const roundButton =
  "relative flex flex-none items-center justify-center rounded-full border border-line-mid bg-glass-btn text-fg transition-colors duration-300 hover:bg-glass-hover";

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`relative flex flex-none items-center rounded-full border border-[color:var(--ln-018)] bg-fg px-3.5 text-[13.5px] font-semibold tracking-tight text-bg hover:text-bg ${className}`}
    >
      Kaninboy
    </a>
  );
}

function ThemeToggle({
  theme,
  onToggle,
  className = "",
}: {
  theme: Theme;
  onToggle: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title="Toggle theme"
      className={`${roundButton} ${className}`}
    >
      {/* Both icons render; html[data-theme] picks one, so there's no flash before hydration */}
      <MoonIcon
        aria-hidden="true"
        className="absolute h-[18px] w-[18px] rotate-0 scale-100 opacity-100 transition-[transform,opacity] duration-500 ease-[cubic-bezier(.34,1.36,.5,1)] [html[data-theme=light]_&]:-rotate-90 [html[data-theme=light]_&]:scale-50 [html[data-theme=light]_&]:opacity-0"
      />
      <SunIcon
        aria-hidden="true"
        className="absolute h-[18px] w-[18px] rotate-90 scale-50 opacity-0 transition-[transform,opacity] duration-500 ease-[cubic-bezier(.34,1.36,.5,1)] [html[data-theme=light]_&]:rotate-0 [html[data-theme=light]_&]:scale-100 [html[data-theme=light]_&]:opacity-100"
      />
    </button>
  );
}

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const [theme, setTheme] = useState<Theme>("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const current = hover ?? active;

  // Desktop: slide the glass indicator under the hovered/active link
  const measure = useCallback(() => {
    const el = current ? linkRefs.current[current] : null;
    setIndicator((prev) =>
      el && el.offsetWidth > 0
        ? { left: el.offsetLeft, width: el.offsetWidth, opacity: 1 }
        : { ...prev, opacity: 0 }
    );
  }, [current]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // Track which section is under the upper 40% of the viewport
  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.4;
      let next: string | null = null;
      for (const { id } of navigation) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) next = id;
      }
      const doc = document.documentElement;
      if (window.scrollY > 0 && window.innerHeight + window.scrollY >= doc.scrollHeight - 4) {
        next = "contact";
      }
      setActive(next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: close on outside tap, Escape, or growing past the md breakpoint
  useEffect(() => {
    if (!menuOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onBreakpoint = () => desktop.matches && setMenuOpen(false);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [menuOpen]);

  useEffect(() => {
    setTheme(
      document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark"
    );
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("pf-theme", next);
    } catch {}
    setTheme(next);
  };

  return (
    <header
      ref={headerRef}
      className="fixed left-1/2 top-3 z-50 w-[calc(100vw-24px)] max-w-[440px] -translate-x-1/2 md:top-[18px] md:w-auto md:max-w-none"
    >
      {/* Desktop: full pill with sliding indicator */}
      <nav
        aria-label="Global"
        className="glass-nav hidden rounded-full p-1.5 transition-[border-color,box-shadow] duration-500 md:block"
      >
        <div
          className="relative flex items-center gap-0.5"
          onMouseLeave={() => setHover(null)}
        >
          <div
            aria-hidden="true"
            className="nav-indicator pointer-events-none absolute inset-y-0 rounded-full"
            style={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.opacity,
            }}
          />
          <Wordmark className="mr-1 h-[34px]" />
          {navigation.map(({ id, name }) => (
            <a
              key={id}
              ref={(el) => {
                linkRefs.current[id] = el;
              }}
              href={`#${id}`}
              onMouseEnter={() => setHover(id)}
              onFocus={() => setHover(id)}
              onBlur={() => setHover(null)}
              aria-current={active === id ? "location" : undefined}
              className={`relative whitespace-nowrap px-4 py-[9px] text-[13.5px] font-medium tracking-[-0.01em] transition-colors duration-300 ${
                current === id ? "text-fgx" : "text-muted"
              }`}
            >
              {name}
            </a>
          ))}
          <ThemeToggle
            theme={theme}
            onToggle={toggleTheme}
            className="ml-1 h-[34px] w-[34px]"
          />
        </div>
      </nav>

      {/* Mobile: compact bar + dropdown panel */}
      <div className="relative md:hidden">
        <div className="glass-nav flex items-center justify-between rounded-full p-1.5 transition-[border-color,box-shadow] duration-500">
          <Wordmark className="h-10 px-4" />
          <div className="flex items-center gap-1.5">
            <ThemeToggle theme={theme} onToggle={toggleTheme} className="h-10 w-10" />
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className={`${roundButton} h-10 w-10`}
            >
              <Bars3Icon
                aria-hidden="true"
                className={`absolute h-5 w-5 transition-[transform,opacity] duration-300 ${
                  menuOpen ? "rotate-90 scale-50 opacity-0" : "opacity-100"
                }`}
              />
              <XMarkIcon
                aria-hidden="true"
                className={`absolute h-5 w-5 transition-[transform,opacity] duration-300 ${
                  menuOpen ? "opacity-100" : "-rotate-90 scale-50 opacity-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Absolute so the closed panel takes no layout space — otherwise the
            header's (transparent) box would swallow taps on the page below */}
        <nav
          id="mobile-menu"
          aria-label="Sections"
          className={`glass-nav absolute inset-x-0 top-full mt-2 origin-top rounded-[24px] p-2 transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(.2,.8,.2,1)] ${
            menuOpen
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible -translate-y-2 scale-[0.98] opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-0.5">
            {navigation.map(({ id, name }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === id ? "location" : undefined}
                  className={`flex h-12 items-center rounded-2xl px-4 text-[15px] font-medium tracking-[-0.01em] transition-colors duration-300 ${
                    active === id
                      ? "nav-indicator text-fgx"
                      : "border border-transparent text-muted hover:text-fgx"
                  }`}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
