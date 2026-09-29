import { createFileRoute, notFound } from "@tanstack/react-router";
import { FinancePage } from "@/components/finance-page";
import { ProductPage } from "@/components/product-page";
import { findProduct } from "@/lib/products";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/bureau/stadii/$slug")({
  component: BureauProduct,
});

function BureauProduct() {
  const { slug } = Route.useParams();
  const { lang } = useLang();
  const product = findProduct("bureau", slug);
  if (!product) throw notFound();

  if (slug === "finance") return <FinancePage />;

  return (
    <ProductPage
      product={product}
      site="bureau"
      backTo="/bureau#raboty"
      backLabel={lang === "ru" ? "Все услуги" : "All services"}
    />
  );
}
