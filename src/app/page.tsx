import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-white h-screen">
      {/* Glowing BG */}
      <div className="h-full flex items-center justify-center">
        <div
          aria-hidden="true"
          className="fixed inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* Hero Section */}
        <div className="mx-auto w-[90%] z-10">
          <div className="text-center">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900">
              Hello
            </h1>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900">
              My name is Kanin Sukittivarapunt
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I am a fourth-year Information and Communication Engineering
              student at Chulalongkorn University
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="https://github.com/Kaninboy">
                <FaGithub className="h-8 w-8" />
              </Link>
              <Link href="https://www.linkedin.com/in/kanin-sukittivarapunt">
                <FaLinkedin className="h-8 w-8" />
              </Link>
              <Link href="mailto:kanin.suk@outlook.com">
                <FaEnvelope className="h-8 w-8" />
              </Link>
            </div>
          </div>
        </div>

        {/* Glowing BG */}
        <div
          aria-hidden="true"
          className="fixed inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
