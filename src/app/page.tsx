import About from "@/components/About";
import Aurora from "@/components/Aurora";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import RevealOnScroll from "@/components/RevealOnScroll";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Aurora />
      <Navbar />
      <main className="relative z-[1] mx-auto max-w-[1120px] px-5 sm:px-8 lg:px-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Footer />
      </main>
      <RevealOnScroll />
    </>
  );
}
