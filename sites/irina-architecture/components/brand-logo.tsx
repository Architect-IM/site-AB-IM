export function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <span className={`brand-mark${footer ? " brand-mark-footer" : ""}`} aria-hidden="true">ИМ</span>
  );
}
