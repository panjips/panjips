import React from "react";

interface IInputFormProps {
  type: string;
  name: string;
  id: string;
  placeholder: string;
}

export default function InputForm({
  type,
  name,
  id,
  placeholder,
}: IInputFormProps) {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        className="text-xs lg:text-base md:text-sm border text-slate-400 bg-slate-900 border-slate-800 focus:outline-none focus:text-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 w-full py-2 px-4 rounded-md lg:rounded-xl required"
        placeholder={placeholder}
      />
    </>
  );
}
