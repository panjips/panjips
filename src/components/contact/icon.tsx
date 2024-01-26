import React from "react";

export default function IconBorder({ children }: {children: React.ReactNode}) {
    return (
      <>
        <div className="group">
          <div className="p-2 border rounded-xl border-slate-800 group-hover:border-slate-600 group-hover:bg-slate-800 group-hover:ease-in group-hover:transition group-hover:delay-150">
            {children}
          </div>
        </div>
      </>
    );
  }
  