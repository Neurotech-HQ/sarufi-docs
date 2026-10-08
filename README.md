# Sarufi Documentation Website

The Sarufi documentation website is built on Next.js and exported as a static site.
Contributions are welcome.

## Getting Started

For small changes, fork the repository, edit it on GitHub and make a pull request.

For more extensive changes:

- fork the repository
- clone your fork onto your local machine
- make your changes
- preview your changes with `npm run dev`
- once satisfied with your changes, push to your fork and make a pull request

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/sarufi-docs
cd sarufi-docs
npm install
```

### Local Development

```bash
npm run dev
```

Starts a local development server at http://localhost:3000. Most changes are reflected live without restarting the server.

### Writing docs

Pages live in `content/docs/developer-api/` as MDX. Each page's frontmatter sets its `title`, `description` and sidebar `icon` (a [lucide](https://lucide.dev/icons) icon name). The sidebar order and section headings are in `content/docs/developer-api/meta.json`.

Use `<Callout type="info|idea|warn|error" title="...">` for notes and `<Tabs items={[...]}>` with `<Tab value="...">` for per-language examples.

### Build

```bash
npm run build
```

Generates the static site into the `out` directory, which can be served by any static hosting service.
