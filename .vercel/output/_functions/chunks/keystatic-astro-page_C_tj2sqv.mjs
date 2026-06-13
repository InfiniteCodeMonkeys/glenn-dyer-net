import { c as createComponent } from './astro-component_CwYS93GY.mjs';
import 'piccolore';
import { o as renderComponent, k as renderTemplate } from './entrypoint_61vA-kYJ.mjs';

const prerender = false;
const $$KeystaticAstroPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Keystatic", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/mike/projects/glenn-dyer-net/node_modules/.pnpm/@keystatic+astro@5.1.0_220a3fa5c94a4367d9501fd20f3a83e2/node_modules/@keystatic/astro/internal/keystatic-page.js", "client:component-export": "Keystatic" })}`;
}, "/Users/mike/projects/glenn-dyer-net/node_modules/.pnpm/@keystatic+astro@5.1.0_220a3fa5c94a4367d9501fd20f3a83e2/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", void 0);

const $$file = "/Users/mike/projects/glenn-dyer-net/node_modules/.pnpm/@keystatic+astro@5.1.0_220a3fa5c94a4367d9501fd20f3a83e2/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$KeystaticAstroPage,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
