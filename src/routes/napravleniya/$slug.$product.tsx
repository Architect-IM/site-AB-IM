import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProductPage } from "@/components/product-page";
import { directions } from "@/lib/content";
import { findProduct } from "@/lib/products";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/napravleniya/$slug/$product")({
  component: IrinaProduct,
});

function IrinaProduct() {
  const { slug, product: productSlug } = Route.useParams();
  const { lang } = useLang();
  const group = directions.find((d) => d.slug === slug);
  const product = findProduct("irina", productSlug);
  if (!group || !product || product.group !== slug) throw notFound();

  return (
    <ProductPage
      product={product}
      site="irina"
      backTo={`/napravleniya/${slug}`}
      backLabel={group[lang].group}
    />
  );
}
