import AboutMe from "@/components/home/AboutMe";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Projects2 from "@/components/home/Projects2";
import Technologies from "@/components/home/Technologies";

export default function Home() {
  return (
    <div>
      <Hero />
      <Technologies />
      <Projects />
      <Projects2 />
      <AboutMe />
    </div>
  );
}
