import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import Contact from "@/components/contact/contact";
import React from "react";

export default function ContactPage() {
  return (
    <section className="h-screen bg-slate-950 flex flex-col">
      <Navbar />
      <Contact />
      <Footer />
    </section>
  );
}
