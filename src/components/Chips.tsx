export default function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line-mid bg-glass-chip px-[13px] py-[7px] text-[13px] text-soft2"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
