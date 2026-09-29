export function BureauMark({ light }: { light?: boolean }) {
  return (
    <span
      className={
        light
          ? "inline-flex flex-col border border-white/70 px-2.5 py-1.5 leading-none"
          : "inline-flex flex-col border border-current px-2.5 py-1.5 leading-none"
      }
      aria-hidden
    >
      <span className="text-[10px] font-medium tracking-[0.32em]">БЮРО</span>
      <span className="mt-1 text-[8px] tracking-[0.22em] opacity-70">МИХЕЙКИНА</span>
    </span>
  );
}
