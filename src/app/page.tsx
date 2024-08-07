import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/home/hero";
import Project from "@/components/home/project";
import Meteors from "@/components/magicui/meteors";

export default function Home() {
  return (
    <>
      <section className="h-screen bg-slate-950 flex flex-col">
        <Navbar />
        <Hero />
        <Project />
        <Footer />
      </section>
    </>
  );
}
