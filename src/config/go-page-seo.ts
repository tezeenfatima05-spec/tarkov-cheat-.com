import type { CheckoutProduct } from './checkout';

export interface GoPageSeo {
  title: string;
  description: string;
  h1: string;
  /** Server-rendered body copy (plain paragraphs). */
  paragraphs?: string[];
}

export const GO_PAGE_SEO: Partial<Record<CheckoutProduct, GoPageSeo>> = {
  tarkov: {
    title: 'Go Tazeen To 2fproducts 2fescape – Redirectin | Tarkov Cheat',
    description:
      'Go Tazeen To 2fproducts 2fescape: Redirecting from /go/escape-from-tarkov/ to https://zadeyo. If nothing happens, continue to checkout.',
    h1: 'Go Tazeen To 2fproducts 2fescape – Redirectin | Tarkov Cheat',
    paragraphs: [
      'This page is the on-site checkout bridge for Escape from Tarkov products. You should land on the operator checkout within a few seconds. The internal /go/escape-from-tarkov/ path keeps links short while the secure payment session runs on the operator host.',
      'Before you continue, confirm your Windows build, game client version, and that you have read the setup FAQ. After payment you receive portal access, the current loader, and patch-day status notes.',
      'If your browser blocks automatic redirects, use the continue link above. For loader errors, HWID questions, or Cloud DMA compatibility, open Discord support or visit the Help Center FAQ. We do not store card data on tarkov-cheat.com.',
      'Returning visitors can bookmark this path; it always forwards to the latest checkout URL for the main raid package.',
    ],
  },
};

export function getGoPageSeo(product: CheckoutProduct, slug: string): GoPageSeo {
  return (
    GO_PAGE_SEO[product] ?? {
      title: `Checkout redirect – ${slug} | Tarkov Cheat`,
      description: `Secure checkout redirect for ${slug.replace(/-/g, ' ')} at tarkov-cheat.com.`,
      h1: `Checkout: ${slug.replace(/-/g, ' ')}`,
      paragraphs: [
        `This page forwards you to the operator checkout for ${slug.replace(/-/g, ' ')}.`,
        'If the redirect does not start, use the continue link on this page.',
      ],
    }
  );
}
