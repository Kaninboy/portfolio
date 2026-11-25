"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import type { Certification } from "@/data/profile";

// Certificates as a carousel at every size: a native scroll-snap row (swipe,
// trackpad or the prev/next buttons). One card plus a peek on phones, two on
// tablets, three from lg. Tapping a card opens the full certificate in a native
// <dialog>, which handles focus, Esc and returning focus to the card.
export default function Certifications({ items }: { items: Certification[] }) {
  const row = useRef<HTMLUListElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  // First fully visible card and how many fit, for the "1–3 / 9" counter.
  const [view, setView] = useState({ first: 0, count: 1 });
  const [open, setOpen] = useState<Certification | null>(null);

  function step() {
    const el = row.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return 0;
    return first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0");
  }

  function update() {
    const el = row.current;
    const size = step();
    if (!el || !size) return;
    const style = getComputedStyle(el);
    const inner = el.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
    const gap = parseFloat(style.columnGap || "0");
    const count = Math.max(1, Math.min(items.length, Math.floor((inner + gap + 2) / size)));
    const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 2;
    const first = atEnd ? items.length - count : Math.round(el.scrollLeft / size);
    setView((prev) => (prev.first === first && prev.count === count ? prev : { first, count }));
  }

  useEffect(() => {
    const el = row.current;
    if (!el) return;
    // Fires once on observe, then on every resize (breakpoints change the card width).
    const observer = new ResizeObserver(() => update());
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function scrollByCard(direction: 1 | -1) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    row.current?.scrollBy({ left: direction * step(), behavior: reduce ? "auto" : "smooth" });
  }

  function show(cert: Certification) {
    setOpen(cert);
    dialog.current?.showModal();
  }

  return (
    <>
      <ul
        ref={row}
        onScroll={update}
        aria-label="Certifications"
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 pb-1 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:scroll-px-0 lg:gap-5 lg:px-0"
      >
        {items.map((cert) => (
          <li
            key={cert.name}
            className="w-[78%] max-w-[320px] shrink-0 snap-start lg:w-[calc((100%-2.5rem)/3)] lg:max-w-none"
          >
            <button
              type="button"
              aria-haspopup="dialog"
              onClick={() => show(cert)}
              className="group flex h-full w-full flex-col rounded-3xl border border-line bg-glass-chip p-2 text-left transition-colors duration-300 hover:border-line-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
            >
              <span className="relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-glass-btn">
                <Image
                  src={cert.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 340px, (min-width: 410px) 320px, 78vw"
                  className="object-contain p-2 motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-[1.02]"
                />
              </span>
              <span className="flex flex-1 flex-col gap-1 px-3 pb-3 pt-4">
                <span className="text-[15px] font-medium leading-snug tracking-[-0.015em] text-fg">
                  {cert.name}
                </span>
                <span className="mt-auto pt-1 text-[13px] leading-relaxed text-dim">
                  {cert.issuer} · <span className="tabular-nums">{cert.date}</span>
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-end gap-3">
        <span aria-hidden="true" className="mr-auto text-[13px] tabular-nums text-dim">
          {view.count > 1 ? `${view.first + 1}–${view.first + view.count}` : view.first + 1} / {items.length}
        </span>
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous certificate"
          className="glass-pill flex h-11 w-11 items-center justify-center rounded-full text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
        >
          <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next certificate"
          className="glass-pill flex h-11 w-11 items-center justify-center rounded-full text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
        >
          <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>

      <dialog
        ref={dialog}
        aria-labelledby="certificate-dialog-title"
        onClose={() => setOpen(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        className="glass-strong max-h-[92vh] w-[min(92vw,960px)] overflow-y-auto overscroll-contain rounded-[28px] p-3 text-fg backdrop:bg-[var(--vig)] md:p-4"
      >
        {open && (
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-glass-btn">
              <Image
                src={open.image}
                alt={`Certificate: ${open.name}, ${open.issuer}, ${open.date}`}
                fill
                sizes="(min-width: 1060px) 960px, 92vw"
                className="object-contain p-2"
              />
            </div>
            <div className="flex flex-col gap-4 px-2 pb-1 sm:flex-row sm:items-end sm:justify-between">
              <div className="min-w-0">
                <h4 id="certificate-dialog-title" className="text-lg font-medium leading-snug tracking-[-0.015em]">
                  {open.name}
                </h4>
                <p className="mt-1 text-[13px] text-dim">
                  {open.issuer} · <span className="tabular-nums">{open.date}</span>
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                {open.url && (
                  <a
                    href={open.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify ${open.name} on the issuer's site (opens in a new tab)`}
                    className="glass-pill inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fg"
                  >
                    Verify
                    <ArrowUpRightIcon aria-hidden="true" className="h-4 w-4" />
                  </a>
                )}
                <button
                  type="button"
                  autoFocus
                  onClick={() => dialog.current?.close()}
                  aria-label="Close certificate"
                  className="glass-pill flex h-11 w-11 items-center justify-center rounded-full text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
                >
                  <XMarkIcon aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
