# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Tim Burr's personal website and blog (https://timburr1.github.io), a Jekyll site hosted on GitHub Pages. Most of it is Markdown content, not code. There are no tests, no linter and no CI workflow. Pushing to `master` publishes the site through GitHub Pages' built-in Jekyll build.

## Commands

```sh
bundle install              # first time only
bundle exec jekyll serve    # serve at http://localhost:4000 with live rebuild
bundle exec jekyll build    # build into _site/ (gitignored)
```

`_config.yml` is not reloaded by `jekyll serve`, so restart the server after you edit it.

The local Gemfile pins Jekyll `~> 4.2`, but GitHub Pages builds with its own `github-pages` gem (Jekyll 3.x). Features that exist only in Jekyll 4 may work locally and then fail in production.

## Structure

- `_posts/YYYY-MM-DD-slug.md`: blog posts. Front matter follows this pattern:
  ```yaml
  layout: post
  title: "Title in APA Title Case"
  excerpt: One-line summary (shown on the home page index)
  author: Tim
  tags: gaming          # one or more of: fiction, gaming, links, school, tech, travel
  ```
- `drafts/`: unpublished posts and experiments. This is a plain directory, **not** Jekyll's `_drafts`, so it gets published as static files and `--drafts` ignores it. To publish a draft, move it into `_posts/` and replace its placeholder `excerpt: EXCERPT`. `drafts/OLD/` holds old imported blog posts.
- Top-level pages (`about.md`, `cv.md`, `media.md`, `StoryParser.md`, `index.html`, `404.html`) use `layout: default`.
- `_layouts/default.html` is the only local layout. It holds the site nav (Home/About/CV/Media/Story Parser), the footer, and links `/css/main.css`. The `post` layout comes from the `minima` theme gem and wraps this local `default` layout. Edit `default.html` to add a nav link.
- `css/main.css`: the site's only stylesheet. Pages use its helper classes such as `.highlight`, `.center` and `.row`/`.column`. `media.md` needs `{::options parse_block_html="true" /}` so that kramdown renders Markdown inside those `<div>`s.
- `blog/atom.xml`: hand-written Atom feed template (in addition to `jekyll-feed`).
- `papers/`: PDFs and other files that posts link to with absolute paths such as `/papers/40k/...pdf`. 
- `images/`: images that posts reference as `/images/...`.
- `_ref/`: reference material. `_config.yml` force-includes it (`include: ['_ref']`) even though the name starts with an underscore.
- Self-contained browser projects served as static files: `godot/<game>/` (Godot HTML5 exports, which are build artifacts and should not be hand-edited), `flappyBub/` (JS canvas game), `brython/` (Python run in the browser), and `StoryParser.md` (inline JS word counter).

## Conventions

- Post titles use APA title case (https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case).
- Link to internal files with root-relative paths (`/papers/...`, `/images/...`).
- The site obfuscates the contact email as "the reverse of moc.liamg@rrub.r.mit". Keep this and don't write out a plain address.
