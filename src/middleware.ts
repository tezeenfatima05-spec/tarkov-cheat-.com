import { defineMiddleware } from 'astro:middleware';

/** Checkout paths are HTML landing pages (SEO + meta refresh), not instant 302. */
export const onRequest = defineMiddleware((_context, next) => next());
