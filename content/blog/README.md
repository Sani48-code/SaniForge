# Publishing a blog post

Posts are MDX files in this folder. The blog listing, featured slot, article pages,
sitemap and homepage preview all read from here, so there is no list to edit by hand.

Required frontmatter: `title`, `slug`, `excerpt`, `category`, `date` (YYYY-MM-DD), `image`,
`seoTitle`, `seoDescription`.

Optional frontmatter:
- `status: "draft"` hides the post everywhere.
- `date` in the future schedules the post; it goes live once the date passes.
- `featured: true` shows it in the Featured Insight slot (newest featured post wins;
  with none featured, the newest post is used).
- `updated: "YYYY-MM-DD"` shows an Updated date and is used in the sitemap.
- `tags: ["n8n", "seo"]` improves related-article matching.
- `problem`, `approach`, `outcome`: one-line summaries. Posts with `problem` appear in
  "Problems I've Solved". Only write outcomes you can back up.

Categories: Web Development, Automation, SEO & Content, SaaS & Systems, Engineering Lessons.

## Plain Markdown (.md) drafts

`.md` files work too and accept the alternative frontmatter used by drafting templates:
`meta_title` (→ seoTitle), `description` (→ excerpt and seoDescription), `og_title`, `og_description`,
`og_image` (also used as the cover image when `image` is missing), `modified` (→ updated),
`primary_keyword` and `secondary_keywords` (→ keywords). Unquoted YAML dates are fine.

Before rendering, a `.md` body is cleaned: a leading `# Title`, a leading `*By ...*` byline and a
leading cover image are removed (the page template renders those), and everything from
`## Developer Notes` to the end is dropped. `.md` files are parsed as plain Markdown, so `<` and `{`
are safe; use `.mdx` when you need components.

If a `.md` and an `.mdx` share a slug, the `.mdx` version is published.
