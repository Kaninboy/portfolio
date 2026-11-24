"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import Bullets from "@/components/Bullets";
import type { SubProject } from "@/data/profile";

// One role's projects as tabs: a vertical list beside the panel on lg+, a
// segmented control above it below lg. Every panel stays rendered in one grid
// cell so the card keeps the tallest panel's height and never jumps on switch.
export default function ProjectTabs({
  projects,
  label,
}: {
  projects: SubProject[];
  label: string;
}) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  function select(index: number) {
    setActive(index);
    tabs.current[index]?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = projects.length - 1;
    const next =
      event.key === "ArrowRight" || event.key === "ArrowDown"
        ? index === last ? 0 : index + 1
        : event.key === "ArrowLeft" || event.key === "ArrowUp"
          ? index === 0 ? last : index - 1
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? last
              : null;
    if (next === null) return;
    event.preventDefault();
    select(next);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
      <div
        role="tablist"
        aria-label={label}
        className="grid grid-cols-3 gap-1 self-start rounded-2xl border border-line-faint bg-glass-chip p-1 lg:grid-cols-1 lg:gap-1.5 lg:border-0 lg:bg-transparent lg:p-0"
      >
        {projects.map((project, index) => {
          const selected = index === active;
          return (
            <button
              key={project.name}
              ref={(el) => {
                tabs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${index}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${index}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={`min-h-11 rounded-xl border px-3 py-2 text-center text-sm leading-snug transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg lg:rounded-2xl lg:px-4 lg:py-3 lg:text-left lg:text-[15px] ${
                selected
                  ? "border-line-strong bg-glass-hover text-fg"
                  : "border-transparent text-muted hover:bg-glass-btn hover:text-fg"
              }`}
            >
              <span className="lg:hidden">{project.tab.short}</span>
              <span className="hidden lg:block">{project.tab.label}</span>
              <span className="mt-1 hidden text-[13px] tabular-nums text-dim lg:block">
                {project.period}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid min-w-0 max-w-[75ch]">
        {projects.map((project, index) => {
          const selected = index === active;
          return (
            <div
              key={project.name}
              role="tabpanel"
              id={`${baseId}-panel-${index}`}
              aria-labelledby={`${baseId}-tab-${index}`}
              tabIndex={selected ? 0 : -1}
              className={`col-start-1 row-start-1 flex flex-col gap-4 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fg motion-safe:transition-[opacity,visibility] motion-safe:duration-300 ${
                selected ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold leading-snug tracking-[-0.01em] text-fg">
                  {project.name}
                </h4>
                <p className="text-[13px] tabular-nums text-dim">{project.period}</p>
              </div>
              <Bullets items={project.bullets} emphasis={project.emphasis} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
