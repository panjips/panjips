import React from "react";
import Link from "next/link";

interface IButtonProps {
  className: string;
  children: React.ReactNode;
  path: string;
}

export default function Button({ className, children, path }: IButtonProps) {
  return (
    <>
      <Link href={path}>
        <button
          className={`mt-3 rounded-xl px-4 py-2 text-slate-200 ${className}`}
        >
          {children}
        </button>
      </Link>
    </>
  );
}
