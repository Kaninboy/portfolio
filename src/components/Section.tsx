export default function Section({
  id,
  index,
  title,
  spacing = "editorial",
  children,
}: {
  id: string;
  index: string;
  title: string;
  spacing?: "editorial" | "supporting";
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 ${
        spacing === "supporting"
          ? "pb-8 pt-14 md:pb-10 md:pt-16"
          : "pb-8 pt-20 md:pb-12 md:pt-24"
      }`}
    >
      <div data-reveal className="mb-8 flex items-baseline gap-4 md:mb-10">
        <span className="text-[12.5px] tabular-nums text-dim">{index}</span>
        <h2 className="text-[clamp(34px,4.5vw,56px)] font-normal leading-tight tracking-[-0.04em]">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
