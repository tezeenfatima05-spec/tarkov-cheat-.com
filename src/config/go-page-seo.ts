import type { CheckoutProduct } from './checkout';

export interface GoPageSeo {
  title: string;
  description: string;
  h1: string;
}

export const GO_PAGE_SEO: Partial<Record<CheckoutProduct, GoPageSeo>> = {
  tarkov: {
    title: 'Go Tazeen To 2fproducts 2fescape – Redirectin | Tarkov Cheat',
    description:
      'Go Tazeen To 2fproducts 2fescape: Redirecting from /go/escape-from-tarkov/ to https://zadeyo.',
    h1: 'Go Tazeen To 2fproducts 2fescape',
  },
};

export function getGoPageSeo(product: CheckoutProduct, slug: string): GoPageSeo {
  return (
    GO_PAGE_SEO[product] ?? {
      title: `Checkout redirect – ${slug} | Tarkov Cheat`,
      description: `Secure checkout redirect for ${slug.replace(/-/g, ' ')} at tarkov-cheat.com.`,
      h1: `Checkout: ${slug.replace(/-/g, ' ')}`,
    }
  );
}
