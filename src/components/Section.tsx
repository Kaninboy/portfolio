export default function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-20 md:py-[120px]">
      <div data-reveal className="mb-10 flex items-baseline gap-4 md:mb-12">
        <span className="text-[12.5px] tabular-nums text-dim">{index}</span>
        <h2 className="text-[clamp(34px,4.5vw,56px)] font-normal leading-tight tracking-[-0.04em]">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
