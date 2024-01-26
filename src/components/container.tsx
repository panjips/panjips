import React from "react";

interface IContainerProps {
  children: React.ReactNode;
  className: string;
}

export default function Container({ children, className }: IContainerProps) {
  return (
    <div className={`w-full px-8 md:px-24 lg:px-64 ${className}`}>
      {children}
    </div>
  );
}
