import React from "react";
import Image from "next/image";

interface ICardProps {
  image: string;
  title: string;
  children: React.ReactNode;
}

export default function Card({ image, title, children }: ICardProps) {
  return (
    <>
      <div className="mt-4 w-full">
        <Image
          src={image}
          alt={`card-${title}`}
          width={1000}
          height={1000}
          className="rounded-lg transition ease-in-out hover:scale-105"
        />
        <h3 className="text-slate-100 font-semibold mt-2 lg:text-lg">
          {title}
        </h3>
        <p className="text-slate-400 font-light text-xs lg:text-sm">
          {children}
        </p>
      </div>
    </>
  );
}
