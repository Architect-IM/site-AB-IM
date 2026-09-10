import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProductPage } from "@/components/product-page";
import { bureauCopy } from "@/lib/content";
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
  const t = bureauCopy[lang];

  return (
    <ProductPage product={product} site="bureau" backTo="/bureau/stadii" backLabel={t.stagesTitle} />
  );
}
