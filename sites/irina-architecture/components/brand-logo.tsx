export function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <span className={`brand-symbol${footer ? " brand-symbol-footer" : ""}`} aria-hidden="true">
      <img src="/assets/logo-irina.jpg" alt="" width={1280} height={678} />
    </span>
  );
}
