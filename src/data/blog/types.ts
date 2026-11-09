import type { BlogPost } from '../../i18n/types';

export type BlogBlock =
  | { type: 'h2' | 'h3' | 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'cta'; title: string; text: string; href: string };

export interface BlogPostFull extends BlogPost {
  featured?: boolean;
  author?: string;
  /** Overrides default <title> (e.g. keyword-led meta title). */
  metaTitle?: string;
  /** Optional H1 override for on-page heading. */
  h1?: string;
  body: BlogBlock[];
}
