import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import About from "@/components/about/about";
import React from "react";

export default function AboutPage() {
  return (
    <section className="h-screen bg-slate-950 flex  flex-col">
      <Navbar />
      <About />
      <Footer />
    </section>
  );
}
