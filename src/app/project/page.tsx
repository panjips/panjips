import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import Project from "@/components/project/project";
import React from "react";

export default function ProjectPage() {
  return (
    <section className="h-screen bg-slate-950 flex flex-col">
      <Navbar />
      <Project />
      <Footer />
    </section>
  );
}
