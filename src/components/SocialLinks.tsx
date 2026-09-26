import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { links } from "@/data/profile";

const iconButton =
  "glass-pill flex h-11 w-11 items-center justify-center rounded-full text-fg hover:text-fgx md:h-12 md:w-12";

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Link
        href={links.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub (opens in a new tab)"
        className={iconButton}
      >
        <FaGithub className="h-5 w-5 md:h-6 md:w-6" />
      </Link>
      <Link
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn (opens in a new tab)"
        className={iconButton}
      >
        <FaLinkedin className="h-5 w-5 md:h-6 md:w-6" />
      </Link>
      <Link href={`mailto:${links.email}`} aria-label="Email" className={iconButton}>
        <FaEnvelope className="h-5 w-5 md:h-6 md:w-6" />
      </Link>
      <Link
        href={links.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-solid ml-1 inline-flex items-center rounded-full px-6 py-3 text-sm font-medium md:py-3.5 md:text-[15px]"
      >
        Resume / CV
      </Link>
    </div>
  );
}
