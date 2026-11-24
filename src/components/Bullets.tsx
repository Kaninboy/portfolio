import EmphasizedText from "@/components/EmphasizedText";

export default function Bullets({ items, emphasis }: { items: string[]; emphasis?: string[] }) {
  return (
    <ul className="list-disc space-y-3 pl-5 text-base leading-[1.7] text-muted marker:text-dim">
      {items.map((b) => (
        <li key={b}><EmphasizedText text={b} phrases={emphasis} /></li>
      ))}
    </ul>
  );
}
