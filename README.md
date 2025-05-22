This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
whiskers
├─ .next
│  ├─ BUILD_ID
│  ├─ app-build-manifest.json
│  ├─ app-path-routes-manifest.json
│  ├─ build
│  │  └─ chunks
│  │     ├─ [root-of-the-server]__04d7a048._.js
│  │     ├─ [root-of-the-server]__04d7a048._.js.map
│  │     ├─ [root-of-the-server]__05f88b00._.js
│  │     ├─ [root-of-the-server]__05f88b00._.js.map
│  │     ├─ [turbopack]_runtime.js
│  │     ├─ [turbopack]_runtime.js.map
│  │     ├─ postcss_config_mjs_transform_ts_f0ffbaad._.js
│  │     └─ postcss_config_mjs_transform_ts_f0ffbaad._.js.map
│  ├─ build-manifest.json
│  ├─ cache
│  │  ├─ .rscinfo
│  │  ├─ eslint
│  │  │  └─ .cache_a9dd5h
│  │  ├─ images
│  │  │  └─ uwtTefau58tlznGP5s637P4STuC1ZCIs04-La18kt0o
│  │  │     └─ 60.1747770114505.5LGJbtWuDvJf1QNDfjcEcXJfVjkF-12-z2M373rkdZI.Vy8iODdjYi0xOTZjZmJjY2IzOSI.webp
│  │  ├─ swc
│  │  │  └─ plugins
│  │  │     └─ v7_linux_x86_64_9.0.0
│  │  └─ webpack
│  │     ├─ client-production
│  │     │  ├─ 0.pack
│  │     │  └─ index.pack
│  │     ├─ edge-server-production
│  │     │  ├─ 0.pack
│  │     │  └─ index.pack
│  │     └─ server-production
│  │        ├─ 0.pack
│  │        ├─ 1.pack
│  │        ├─ 2.pack
│  │        ├─ index.pack
│  │        └─ index.pack.old
│  ├─ diagnostics
│  │  ├─ build-diagnostics.json
│  │  └─ framework.json
│  ├─ export-marker.json
│  ├─ fallback-build-manifest.json
│  ├─ images-manifest.json
│  ├─ next-minimal-server.js.nft.json
│  ├─ next-server.js.nft.json
│  ├─ package.json
│  ├─ prerender-manifest.json
│  ├─ react-loadable-manifest.json
│  ├─ required-server-files.json
│  ├─ routes-manifest.json
│  ├─ server
│  │  ├─ app
│  │  │  ├─ _not-found
│  │  │  │  ├─ page
│  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  ├─ page.js
│  │  │  │  ├─ page.js.map
│  │  │  │  ├─ page.js.nft.json
│  │  │  │  └─ page_client-reference-manifest.js
│  │  │  ├─ _not-found.html
│  │  │  ├─ _not-found.meta
│  │  │  ├─ _not-found.rsc
│  │  │  ├─ api
│  │  │  │  ├─ auth
│  │  │  │  │  └─ [...nextauth]
│  │  │  │  │     ├─ route
│  │  │  │  │     │  ├─ app-build-manifest.json
│  │  │  │  │     │  ├─ app-paths-manifest.json
│  │  │  │  │     │  ├─ build-manifest.json
│  │  │  │  │     │  ├─ next-font-manifest.json
│  │  │  │  │     │  ├─ react-loadable-manifest.json
│  │  │  │  │     │  └─ server-reference-manifest.json
│  │  │  │  │     ├─ route.js
│  │  │  │  │     ├─ route.js.map
│  │  │  │  │     ├─ route.js.nft.json
│  │  │  │  │     └─ route_client-reference-manifest.js
│  │  │  │  ├─ books
│  │  │  │  │  ├─ [bookId]
│  │  │  │  │  │  ├─ route.js
│  │  │  │  │  │  ├─ route.js.nft.json
│  │  │  │  │  │  └─ route_client-reference-manifest.js
│  │  │  │  │  ├─ route.js
│  │  │  │  │  ├─ route.js.nft.json
│  │  │  │  │  └─ route_client-reference-manifest.js
│  │  │  │  └─ users
│  │  │  │     ├─ [name]
│  │  │  │     │  ├─ route
│  │  │  │     │  │  ├─ app-build-manifest.json
│  │  │  │     │  │  ├─ app-paths-manifest.json
│  │  │  │     │  │  ├─ build-manifest.json
│  │  │  │     │  │  ├─ next-font-manifest.json
│  │  │  │     │  │  ├─ react-loadable-manifest.json
│  │  │  │     │  │  └─ server-reference-manifest.json
│  │  │  │     │  ├─ route.js
│  │  │  │     │  ├─ route.js.map
│  │  │  │     │  └─ route_client-reference-manifest.js
│  │  │  │     ├─ [userId]
│  │  │  │     │  ├─ books
│  │  │  │     │  │  ├─ [bookId]
│  │  │  │     │  │  │  ├─ route.js
│  │  │  │     │  │  │  ├─ route.js.nft.json
│  │  │  │     │  │  │  └─ route_client-reference-manifest.js
│  │  │  │     │  │  ├─ route.js
│  │  │  │     │  │  ├─ route.js.nft.json
│  │  │  │     │  │  └─ route_client-reference-manifest.js
│  │  │  │     │  ├─ route
│  │  │  │     │  │  ├─ app-build-manifest.json
│  │  │  │     │  │  ├─ app-paths-manifest.json
│  │  │  │     │  │  ├─ build-manifest.json
│  │  │  │     │  │  ├─ next-font-manifest.json
│  │  │  │     │  │  ├─ react-loadable-manifest.json
│  │  │  │     │  │  └─ server-reference-manifest.json
│  │  │  │     │  ├─ route.js
│  │  │  │     │  ├─ route.js.map
│  │  │  │     │  ├─ route.js.nft.json
│  │  │  │     │  └─ route_client-reference-manifest.js
│  │  │  │     ├─ [username]
│  │  │  │     │  ├─ route
│  │  │  │     │  │  ├─ app-build-manifest.json
│  │  │  │     │  │  ├─ app-paths-manifest.json
│  │  │  │     │  │  ├─ build-manifest.json
│  │  │  │     │  │  ├─ next-font-manifest.json
│  │  │  │     │  │  ├─ react-loadable-manifest.json
│  │  │  │     │  │  └─ server-reference-manifest.json
│  │  │  │     │  ├─ route.js
│  │  │  │     │  ├─ route.js.map
│  │  │  │     │  └─ route_client-reference-manifest.js
│  │  │  │     └─ me
│  │  │  │        ├─ route.js
│  │  │  │        ├─ route.js.nft.json
│  │  │  │        └─ route_client-reference-manifest.js
│  │  │  ├─ index.html
│  │  │  ├─ index.meta
│  │  │  ├─ index.rsc
│  │  │  ├─ library
│  │  │  │  ├─ page
│  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  ├─ page.js
│  │  │  │  ├─ page.js.map
│  │  │  │  ├─ page.js.nft.json
│  │  │  │  └─ page_client-reference-manifest.js
│  │  │  ├─ library.html
│  │  │  ├─ library.meta
│  │  │  ├─ library.rsc
│  │  │  ├─ page
│  │  │  │  ├─ app-build-manifest.json
│  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  ├─ build-manifest.json
│  │  │  │  ├─ next-font-manifest.json
│  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  └─ server-reference-manifest.json
│  │  │  ├─ page.js
│  │  │  ├─ page.js.map
│  │  │  ├─ page.js.nft.json
│  │  │  ├─ page_client-reference-manifest.js
│  │  │  ├─ search
│  │  │  │  ├─ page.js
│  │  │  │  ├─ page.js.nft.json
│  │  │  │  └─ page_client-reference-manifest.js
│  │  │  ├─ search.html
│  │  │  ├─ search.meta
│  │  │  └─ search.rsc
│  │  ├─ app-paths-manifest.json
│  │  ├─ chunks
│  │  │  ├─ 464.js
│  │  │  ├─ 501.js
│  │  │  ├─ 548.js
│  │  │  ├─ 719.js
│  │  │  ├─ [root-of-the-server]__2938188c._.js
│  │  │  ├─ [root-of-the-server]__2938188c._.js.map
│  │  │  ├─ [root-of-the-server]__6c70534a._.js
│  │  │  ├─ [root-of-the-server]__6c70534a._.js.map
│  │  │  ├─ [root-of-the-server]__799b44b7._.js
│  │  │  ├─ [root-of-the-server]__799b44b7._.js.map
│  │  │  ├─ [root-of-the-server]__831f9697._.js
│  │  │  ├─ [root-of-the-server]__831f9697._.js.map
│  │  │  ├─ [root-of-the-server]__cf232bac._.js
│  │  │  ├─ [root-of-the-server]__cf232bac._.js.map
│  │  │  ├─ [turbopack]_runtime.js
│  │  │  ├─ [turbopack]_runtime.js.map
│  │  │  └─ ssr
│  │  │     ├─ [root-of-the-server]__35251638._.js
│  │  │     ├─ [root-of-the-server]__35251638._.js.map
│  │  │     ├─ [root-of-the-server]__50a7c09c._.js
│  │  │     ├─ [root-of-the-server]__50a7c09c._.js.map
│  │  │     ├─ [root-of-the-server]__64260f83._.js
│  │  │     ├─ [root-of-the-server]__64260f83._.js.map
│  │  │     ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_1a623225._.js
│  │  │     ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_1a623225._.js.map
│  │  │     ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_59fa4ecd._.js
│  │  │     ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_59fa4ecd._.js.map
│  │  │     ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_9a470df1._.js
│  │  │     ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_9a470df1._.js.map
│  │  │     ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_ac033140._.js
│  │  │     ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_ac033140._.js.map
│  │  │     ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_e2073053._.js
│  │  │     ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_e2073053._.js.map
│  │  │     ├─ [turbopack]_runtime.js
│  │  │     ├─ [turbopack]_runtime.js.map
│  │  │     ├─ _41d9f410._.js
│  │  │     ├─ _41d9f410._.js.map
│  │  │     ├─ _58cc60aa._.js
│  │  │     ├─ _58cc60aa._.js.map
│  │  │     ├─ _be909a96._.js
│  │  │     ├─ _be909a96._.js.map
│  │  │     ├─ src_app_4fa9c9d5._.js
│  │  │     ├─ src_app_4fa9c9d5._.js.map
│  │  │     ├─ src_app_5cc8e1eb._.js
│  │  │     └─ src_app_5cc8e1eb._.js.map
│  │  ├─ functions-config-manifest.json
│  │  ├─ interception-route-rewrite-manifest.js
│  │  ├─ middleware-build-manifest.js
│  │  ├─ middleware-manifest.json
│  │  ├─ middleware-react-loadable-manifest.js
│  │  ├─ next-font-manifest.js
│  │  ├─ next-font-manifest.json
│  │  ├─ pages
│  │  │  ├─ 404.html
│  │  │  ├─ 500.html
│  │  │  ├─ _app.js
│  │  │  ├─ _app.js.nft.json
│  │  │  ├─ _document.js
│  │  │  ├─ _document.js.nft.json
│  │  │  ├─ _error.js
│  │  │  └─ _error.js.nft.json
│  │  ├─ pages-manifest.json
│  │  ├─ server-reference-manifest.js
│  │  ├─ server-reference-manifest.json
│  │  └─ webpack-runtime.js
│  ├─ static
│  │  ├─ chunks
│  │  │  ├─ 4bd1b696-d1354b491c8c2d32.js
│  │  │  ├─ 538-d1274c07e7875be2.js
│  │  │  ├─ 684-810aa4b7eba2a3c7.js
│  │  │  ├─ 704-c20c8b7e2e165f96.js
│  │  │  ├─ 766-8d5d0e0380b8db25.js
│  │  │  ├─ 91-fabef8d496d17d53.js
│  │  │  ├─ [next]_internal_font_google_atkinson_hyperlegible_ec3d8a79_module_css_f9ee138c._.single.css
│  │  │  ├─ [next]_internal_font_google_atkinson_hyperlegible_ec3d8a79_module_css_f9ee138c._.single.css.map
│  │  │  ├─ [next]_internal_font_google_crimson_pro_a5072383_module_css_f9ee138c._.single.css
│  │  │  ├─ [next]_internal_font_google_crimson_pro_a5072383_module_css_f9ee138c._.single.css.map
│  │  │  ├─ [next]_internal_font_google_jetbrains_mono_ac9c5bbf_module_css_f9ee138c._.single.css
│  │  │  ├─ [next]_internal_font_google_jetbrains_mono_ac9c5bbf_module_css_f9ee138c._.single.css.map
│  │  │  ├─ [next]_internal_font_google_literata_6da60e68_module_css_f9ee138c._.single.css
│  │  │  ├─ [next]_internal_font_google_literata_6da60e68_module_css_f9ee138c._.single.css.map
│  │  │  ├─ [root-of-the-server]__e024264a._.css
│  │  │  ├─ [root-of-the-server]__e024264a._.css.map
│  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_61dcf9ba._.js
│  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_61dcf9ba._.js.map
│  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_66796270._.js
│  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_fd44f5a4._.js
│  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_fd44f5a4._.js.map
│  │  │  ├─ _93808211._.js
│  │  │  ├─ _93808211._.js.map
│  │  │  ├─ _e69f0d32._.js
│  │  │  ├─ app
│  │  │  │  ├─ _not-found
│  │  │  │  │  └─ page-1b09f6ef81a754c6.js
│  │  │  │  ├─ api
│  │  │  │  │  ├─ auth
│  │  │  │  │  │  └─ [...nextauth]
│  │  │  │  │  │     └─ route-19ac913f0b016ad5.js
│  │  │  │  │  ├─ books
│  │  │  │  │  │  ├─ [bookId]
│  │  │  │  │  │  │  └─ route-29362bf4592f54f5.js
│  │  │  │  │  │  └─ route-ecea5fbc9c190f1e.js
│  │  │  │  │  └─ users
│  │  │  │  │     ├─ [userId]
│  │  │  │  │     │  ├─ books
│  │  │  │  │     │  │  ├─ [bookId]
│  │  │  │  │     │  │  │  └─ route-684196e1b05bc7f4.js
│  │  │  │  │     │  │  └─ route-fd866dbb54baf530.js
│  │  │  │  │     │  └─ route-65fa4f34827aa476.js
│  │  │  │  │     └─ me
│  │  │  │  │        └─ route-d1b0b2ab75c9edec.js
│  │  │  │  ├─ layout-3dd88231ec838ec4.js
│  │  │  │  ├─ library
│  │  │  │  │  └─ page-fab0b04f46c6dd66.js
│  │  │  │  ├─ page-ed3d5623831f615d.js
│  │  │  │  └─ search
│  │  │  │     └─ page-4cf145cbb4cfbd11.js
│  │  │  ├─ framework-f593a28cde54158e.js
│  │  │  ├─ main-app-bc72aa43ec2f713c.js
│  │  │  ├─ main-fd4a0e16a8e249ef.js
│  │  │  ├─ pages
│  │  │  │  ├─ _app-da15c11dea942c36.js
│  │  │  │  └─ _error-cc3f077a18ea1793.js
│  │  │  ├─ polyfills-42372ed130431b0a.js
│  │  │  ├─ src_81f60692._.js
│  │  │  ├─ src_81f60692._.js.map
│  │  │  ├─ src_app_3c375c12._.js
│  │  │  ├─ src_app_3c375c12._.js.map
│  │  │  ├─ src_app_72fc6059._.js
│  │  │  ├─ src_app_72fc6059._.js.map
│  │  │  ├─ src_app_css_globals_css_f9ee138c._.single.css
│  │  │  ├─ src_app_css_globals_css_f9ee138c._.single.css.map
│  │  │  ├─ src_app_layout_c0237562.js
│  │  │  ├─ src_app_library_page_3a89172b.js
│  │  │  ├─ src_app_page_3a89172b.js
│  │  │  └─ webpack-3d2bc7f518b374d2.js
│  │  ├─ css
│  │  │  └─ 6c2e6c326abbb2e7.css
│  │  ├─ development
│  │  │  ├─ _buildManifest.js
│  │  │  ├─ _clientMiddlewareManifest.json
│  │  │  └─ _ssgManifest.js
│  │  ├─ media
│  │  │  ├─ 032a563be9f1f5cc-s.woff2
│  │  │  ├─ 0ce685bf1f50a7cb-s.p.woff2
│  │  │  ├─ 2634cc58581c4751-s.woff2
│  │  │  ├─ 35e0afd5fd345b27-s.woff2
│  │  │  ├─ 459d333a67915c32-s.woff2
│  │  │  ├─ 558ca1a6aa3cb55e-s.p.woff2
│  │  │  ├─ 64d784ea54a4acde-s.woff2
│  │  │  ├─ 6d831b18ae5b01dc-s.woff2
│  │  │  ├─ 9Bt23C1KxNDXMspQ1lPyU89_1h6ONRlW45G04pIoWQeCbA-s.p.9bdc7f95.woff2
│  │  │  ├─ 9Bt23C1KxNDXMspQ1lPyU89_1h6ONRlW45G07JIoWQeCbGWn-s.eab7fd0e.woff2
│  │  │  ├─ 9Bt73C1KxNDXMspQ1lPyU89_1h6ONRlW45G8Wbc9dCWPRl_uFQ-s.p.0dd59b38.woff2
│  │  │  ├─ 9Bt73C1KxNDXMspQ1lPyU89_1h6ONRlW45G8Wbc9eiWPRl_uFV24-s.483159e5.woff2
│  │  │  ├─ 9c8b6b1b20cc50e4-s.p.woff2
│  │  │  ├─ a4339c33716f9df0-s.woff2
│  │  │  ├─ ac0e76ddaeeb7981-s.woff2
│  │  │  ├─ bd2cf75b10fc4232-s.p.woff2
│  │  │  ├─ d380ccc315ec26f1-s.woff2
│  │  │  ├─ ec487c9c32b30f6d-s.p.woff2
│  │  │  ├─ edc640959b0c7826-s.woff2
│  │  │  ├─ efc6474841e9fb95-s.woff2
│  │  │  ├─ f197db7ee325f928-s.woff2
│  │  │  ├─ f3b9b30dbf104167-s.woff2
│  │  │  ├─ fef4fc6ac7501163-s.woff2
│  │  │  ├─ ff71da380fbe67dd-s.woff2
│  │  │  ├─ or3aQ6P12_iJxAIgLa78DkrbXsDgk0oVDaDPYLanFLHpPf2TbBG_df3_vbgKBM6YoggA_vpA_7cHM524yN0-s.54e4df06.woff2
│  │  │  ├─ or3aQ6P12_iJxAIgLa78DkrbXsDgk0oVDaDPYLanFLHpPf2TbBG_df3_vbgKBM6YoggA_vpB_7cHM524yN0-s.8679af59.woff2
│  │  │  ├─ or3aQ6P12_iJxAIgLa78DkrbXsDgk0oVDaDPYLanFLHpPf2TbBG_df3_vbgKBM6YoggA_vpC_7cHM524yN0-s.7a321b5b.woff2
│  │  │  ├─ or3aQ6P12_iJxAIgLa78DkrbXsDgk0oVDaDPYLanFLHpPf2TbBG_df3_vbgKBM6YoggA_vpD_7cHM524yN0-s.244ed18a.woff2
│  │  │  ├─ or3aQ6P12_iJxAIgLa78DkrbXsDgk0oVDaDPYLanFLHpPf2TbBG_df3_vbgKBM6YoggA_vpK_7cHM524yN0-s.b5eaae7c.woff2
│  │  │  ├─ or3aQ6P12_iJxAIgLa78DkrbXsDgk0oVDaDPYLanFLHpPf2TbBG_df3_vbgKBM6YoggA_vpN_7cHM524yN0-s.e22e5246.woff2
│  │  │  ├─ or3aQ6P12_iJxAIgLa78DkrbXsDgk0oVDaDPYLanFLHpPf2TbBG_df3_vbgKBM6YoggA_vpO_7cHM524-s.p.a6de2d31.woff2
│  │  │  ├─ q5uDsoa5M_tv7IihmnkabARUoYF6CsKjnlQ-s.53196918.woff2
│  │  │  ├─ q5uDsoa5M_tv7IihmnkabARVoYF6CsKjnlQ-s.1ccbc11e.woff2
│  │  │  ├─ q5uDsoa5M_tv7IihmnkabARboYF6CsKj-s.p.7028aa05.woff2
│  │  │  ├─ tDbv2o_flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx3cwgknk_6nFg-s.50477c28.woff2
│  │  │  ├─ tDbv2o_flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx7cwgknk_6nFg-s.609cf8ca.woff2
│  │  │  ├─ tDbv2o_flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxDcwgknk_4-s.p.f1f9e17e.woff2
│  │  │  ├─ tDbv2o_flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxPcwgknk_6nFg-s.934c898d.woff2
│  │  │  ├─ tDbv2o_flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxTcwgknk_6nFg-s.2310bd97.woff2
│  │  │  └─ tDbv2o_flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx_cwgknk_6nFg-s.68597c94.woff2
│  │  └─ wsxJiXuQkcYSzEKk7-KpL
│  │     ├─ _buildManifest.js
│  │     └─ _ssgManifest.js
│  ├─ trace
│  ├─ transform.js
│  ├─ transform.js.map
│  └─ types
│     ├─ app
│     │  ├─ api
│     │  │  ├─ auth
│     │  │  │  └─ [...nextauth]
│     │  │  │     └─ route.ts
│     │  │  ├─ books
│     │  │  │  ├─ [bookId]
│     │  │  │  │  └─ route.ts
│     │  │  │  └─ route.ts
│     │  │  └─ users
│     │  │     ├─ [userId]
│     │  │     │  ├─ books
│     │  │     │  │  ├─ [bookId]
│     │  │     │  │  │  └─ route.ts
│     │  │     │  │  └─ route.ts
│     │  │     │  └─ route.ts
│     │  │     └─ me
│     │  │        └─ route.ts
│     │  ├─ layout.ts
│     │  ├─ library
│     │  │  └─ page.ts
│     │  ├─ page.ts
│     │  └─ search
│     │     └─ page.ts
│     ├─ cache-life.d.ts
│     └─ package.json
├─ README.md
├─ eslint.config.mjs
├─ jsconfig.json
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  └─ icon.jpg
└─ src
   ├─ app
   │  ├─ api
   │  │  ├─ auth
   │  │  │  └─ [...nextauth]
   │  │  │     └─ route.js
   │  │  ├─ books
   │  │  │  ├─ [bookId]
   │  │  │  │  └─ route.js
   │  │  │  └─ route.js
   │  │  └─ users
   │  │     ├─ [name]
   │  │     │  ├─ books
   │  │     │  │  ├─ [bookId]
   │  │     │  │  │  └─ route.js
   │  │     │  │  └─ route.js
   │  │     │  └─ route.js
   │  │     └─ me
   │  │        └─ route.js
   │  ├─ components
   │  │  ├─ Avatar.js
   │  │  ├─ Book.js
   │  │  ├─ Footer.js
   │  │  ├─ ListBooks.js
   │  │  ├─ Metadata.js
   │  │  ├─ MyBooks.js
   │  │  ├─ Stared.js
   │  │  ├─ Top.js
   │  │  └─ Validator.js
   │  ├─ css
   │  │  └─ globals.css
   │  ├─ hooks
   │  │  └─ useBooks.js
   │  ├─ layout.js
   │  ├─ library
   │  │  └─ page.js
   │  ├─ page.js
   │  └─ search
   │     └─ page.js
   ├─ lib
   │  ├─ auth.js
   │  ├─ mongoose.js
   │  ├─ sessionWrapper.js
   │  ├─ store.js
   │  └─ validateReq.js
   └─ models
      └─ User.js

```