import { createFileRoute, notFound } from "@tanstack/react-router";
import { GroupPage } from "@/components/group-page";
import { ProductPage } from "@/components/product-page";
import { directions } from "@/lib/content";
import { childrenOf, findProduct, topOffers } from "@/lib/products";
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

  if (product.kind === "bundle") {
    return (
      <GroupPage bundle={product} directionSlug={slug} directionLabel={group[lang].group} />
    );
  }

  const parent = product.parent ? findProduct("irina", product.parent) : null;
  const peerList = parent
    ? childrenOf("irina", parent.slug)
    : topOffers("irina", slug).filter((p) => p.kind === "product");
  const siblings = peerList.map((p) => ({
    slug: p.slug,
    title: p[lang].title,
    href: `/napravleniya/${slug}/${p.slug}`,
    image: p.image,
  }));
  const backTo = parent ? `/napravleniya/${slug}/${parent.slug}` : `/napravleniya/${slug}`;
  const backLabel = parent ? parent[lang].title : group[lang].group;

  return (
    <ProductPage
      product={product}
      site="irina"
      backTo={backTo}
      backLabel={backLabel}
      siblings={siblings}
    />
  );
}
