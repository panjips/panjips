interface IPillsProps {
  title: string;
}

export default function Pills({ title }: IPillsProps) {
  return (
    <>
      <div className="border rounded-xl border-slate-800 hover:border-slate-600 hover:bg-slate-800 hover:ease-in hover:transition hover:delay-150">
        <p className="text-slate-500 text-xs lg:text-base py-2 px-4 lg:px-6 hover:text-slate-300 hover:ease-in hover:transition hover:delay-150">
          {title}
        </p>
      </div>
    </>
  );
}
