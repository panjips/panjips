import React from "react";
import Link from "next/link";

interface ItemMenuProps {
  children: React.ReactNode;
  path: string;
}

export default function ItemMenu({ path, children }: ItemMenuProps) {
  return (
    <Link href={path} className="text-slate-100 mx-8 font-semibold">
      {children}
    </Link>
  );
}
