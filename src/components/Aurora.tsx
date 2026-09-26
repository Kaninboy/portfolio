// Fixed animated aurora behind the page (Glass Aurora design, intensity = 1).
const INTENSITY = 1;

const blobs = [
  {
    background:
      "radial-gradient(closest-side, oklch(0.6 0.16 262 / 0.55), transparent)",
    width: "70vw",
    height: "45vw",
    top: "-18vw",
    left: "-10vw",
    animation: "au1 34s ease-in-out infinite",
  },
  {
    background:
      "radial-gradient(closest-side, oklch(0.58 0.16 300 / 0.5), transparent)",
    width: "60vw",
    height: "40vw",
    top: "-8vw",
    left: "45vw",
    animation: "au2 40s ease-in-out infinite",
  },
  {
    background:
      "radial-gradient(closest-side, oklch(0.6 0.14 280 / 0.35), transparent)",
    width: "55vw",
    height: "35vw",
    top: "55vh",
    left: "20vw",
    animation: "au3 46s ease-in-out infinite",
  },
];

export default function Aurora() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {blobs.map((style) => (
        <div
          key={style.animation}
          className="aurora-blob"
          style={{ ...style, opacity: INTENSITY }}
        />
      ))}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 40%, var(--vig) 100%)",
        }}
      />
    </div>
  );
}
