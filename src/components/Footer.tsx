import SocialLinks from "@/components/SocialLinks";
import { contactLine, hero } from "@/data/profile";

export default function Footer() {
  return (
    <section id="contact" className="scroll-mt-20 pb-10 pt-20 md:pt-[120px]">
      <div
        data-reveal
        className="glass-strong relative overflow-hidden rounded-[36px] px-6 py-12 text-center md:px-16 md:py-[88px]"
      >
        <span className="text-[12.5px] uppercase tracking-[0.06em] text-dim">
          06 — Contact
        </span>
        <h2 className="mx-auto mt-5 max-w-[14ch] text-[clamp(40px,6.5vw,84px)] font-normal leading-none tracking-[-0.045em]">
          Let&apos;s connect.
        </h2>
        <p className="mx-auto mt-6 max-w-[44ch] text-[17px] leading-relaxed text-muted">
          {contactLine}
        </p>
        <SocialLinks className="mt-10 justify-center" />
      </div>
      <footer className="mt-14 flex flex-wrap justify-between gap-3 border-t border-line-faint pt-6 text-[12.5px] text-dim">
        <span>
          © {new Date().getFullYear()} {hero.name}
        </span>
        <a href="#top" className="text-soft hover:text-fgx">
          Back to top ↑
        </a>
      </footer>
    </section>
  );
}
