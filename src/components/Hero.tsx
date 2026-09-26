import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";
import { hero } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen items-center justify-center pb-20 pt-[120px]"
    >
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-14">
        <div data-reveal className="flex-shrink-0">
          {/* Upright pill at the photo's native 3:4 ratio (1774×2363) — no crop */}
          <Image
            src="/profile.jpg"
            alt={hero.name}
            width={300}
            height={400}
            priority
            className="h-[320px] w-[240px] rounded-full object-cover md:h-[400px] md:w-[300px]"
          />
        </div>
        <div data-reveal className="text-center md:text-left">
          <p className="text-4xl font-bold tracking-tight text-fgx md:text-6xl">
            Hello!
          </p>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-fg md:mt-6 md:text-4xl">
            I&apos;m {hero.name} ({hero.nickname})
          </h1>
          <p className="mt-4 text-base leading-7 text-soft md:mt-6 md:text-lg md:leading-8">
            {hero.tagline}
          </p>
          <p className="mt-1 text-base leading-7 text-muted md:text-lg md:leading-8">
            {hero.interests}
          </p>
          <SocialLinks className="mt-8 justify-center md:mt-10 md:justify-start" />
        </div>
      </div>
    </section>
  );
}
