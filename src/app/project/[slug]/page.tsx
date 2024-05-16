import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import { DetailProject } from "@/components/project/detail-project";

interface IParams {
  params: {
    slug: string;
  };
}

export default function Page({ params }: IParams) {
  const { slug } = params;
  return (
    <section className="h-screen bg-slate-950 flex flex-col">
      <Navbar />
      <DetailProject slug={slug} />
      <Footer />
    </section>
  );
}
