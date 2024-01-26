import React from "react";
import Container from "@/components/container";
import Card from "@/components/card";
import Link from "next/link";
import Image from "next/image";

export default function Project() {
  return (
    <>
      <Container className="bg-slate-950 pb-16 pt-4 lg:pt-16">
        <div>
          <div className="flex items-center pb-2">
            <h2 className="text-slate-100 text-2xl font-semibold lg:text-4xl">
              Highlight Projects
            </h2>
            <Image
              width={24}
              height={24}
              src="/images/flash.jpg"
              alt="flash"
              className="size-6 ml-1"
            />
          </div>
          <p className="text-slate-400 text-xs lg:text-base font-light">
            Some of the best
            <span className="font-bold text-indigo-600">* </span>
            projects i{"'"}ve created and it{"'"}s become a proof of my
            <span className="font-bold text-indigo-600"> consistency</span> and
            <span className="font-bold text-indigo-600"> commitment</span> to
            learn more and more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8 content-between">
            <Card image="/images/mockup-app.png" title="Yogyakarta Tourism App">
              Navigate Jogja like a local with our detailed travel guide.
            </Card>
            <Card image="/images/mockup-rent-car.png" title="Rent n Ride">
              At Rent n Ride, we understand that every journey is unique. That's
              why we offer flexible rental options.
            </Card>
            <Card image="/images/mockup-porto.png" title="Portofolio Website">
              My personal website for recruiter get first informations, etc.
            </Card>
          </div>
          <Link
            href={"/project"}
            className="float-right text-slate-300 mt-4 lg:mt-0 underline "
          >
            Explore more
          </Link>
        </div>
      </Container>
    </>
  );
}
