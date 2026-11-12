import { n as createComponent, t as createAstro } from "./compiler_Bl4Weti7.mjs";
import { a as Fragment, c as renderSlot, d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute, p as renderHead } from "./server_BytsQ_Bb.mjs";
// src/components/Logo.astro
createAstro("https://www.ai-biais-initiative.org");
var $$Logo = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Logo;
	const { class: className = "", variant = "light", showDomain = false } = Astro.props;
	const textColor = variant === "light" ? "#FFFFFF" : "#08102E";
	const subColor = variant === "light" ? "#8E99DD" : "#3D4878";
	const domainColor = variant === "light" ? "#3D4878" : "#8E96C4";
	return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 90"${addAttribute(className, "class")} aria-label="AI BIAIS INITIATIVE"><defs><linearGradient id="eyeGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1A2BCC"></stop><stop offset="55%" stop-color="#2D46F5"></stop><stop offset="100%" stop-color="#7B3FE4"></stop></linearGradient><radialGradient id="irisGrad" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#9B47FF" stop-opacity=".95"></stop><stop offset="45%" stop-color="#2D46F5"></stop><stop offset="100%" stop-color="#1A2BCC"></stop></radialGradient><clipPath id="irisClip"><circle cx="45" cy="45" r="24"></circle></clipPath></defs><path d="M 6,45 C 15,22 75,22 84,45 C 75,68 15,68 6,45 Z" fill="none" stroke="url(#eyeGrad)" stroke-width="2.2" stroke-linecap="round"></path><circle cx="45" cy="45" r="24" fill="url(#irisGrad)"></circle><g clip-path="url(#irisClip)" opacity="0.28" stroke="white" stroke-width="0.85" fill="none"><ellipse cx="45" cy="45" rx="24" ry="9"></ellipse><ellipse cx="45" cy="45" rx="24" ry="16"></ellipse><ellipse cx="45" cy="45" rx="9" ry="24"></ellipse><ellipse cx="45" cy="45" rx="16" ry="24"></ellipse><line x1="21" y1="45" x2="69" y2="45"></line><line x1="45" y1="21" x2="45" y2="69"></line></g><line x1="10" y1="45" x2="80" y2="45" stroke="white" stroke-width="0.5" opacity="0.35" stroke-dasharray="2 3"></line><circle cx="19" cy="45" r="1.2" fill="#5C7AFF" opacity="0.7"></circle><circle cx="71" cy="45" r="1.2" fill="#5C7AFF" opacity="0.7"></circle><circle cx="45" cy="45" r="7" fill="none" stroke="white" stroke-width="1" opacity="0.6"></circle><circle cx="45" cy="45" r="4.5" fill="white" opacity="0.95"></circle><circle cx="45" cy="45" r="2.2" fill="#6B1EE8"></circle><circle cx="47" cy="43" r="0.9" fill="white" opacity="0.8"></circle><text x="102" y="38" font-family="'Space Grotesk', system-ui, sans-serif" font-weight="800" font-size="26"${addAttribute(textColor, "fill")} letter-spacing="-0.5">AI BIAIS</text><rect x="102" y="44" width="172" height="2" rx="1" fill="url(#eyeGrad)" opacity="0.6"></rect><text x="103" y="64" font-family="'Space Grotesk', system-ui, sans-serif" font-weight="500" font-size="14"${addAttribute(subColor, "fill")} letter-spacing="3.5">INITIATIVE</text>${showDomain && renderTemplate`<text x="103" y="78" font-family="'Space Grotesk', system-ui, sans-serif" font-weight="400" font-size="10"${addAttribute(domainColor, "fill")} letter-spacing="1.5">ai-biais-initiative.org</text>`}</svg>`;
}, "C:/Users/SIDIBE/Desktop/AI BIAS Initiative/Documents Officiels/SITE_WEB/src/components/Logo.astro", void 0);
// src/layouts/BaseLayout.astro
createAstro("https://www.ai-biais-initiative.org");
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseLayout;
	const { title = "AI BIAIS INITIATIVE - Le référentiel mondial des biais algorithmiques", description = "API REST ouverte documentant 250 biais, 68 réglementations mondiales et 21 vues analytiques pour la gouvernance éthique de l'IA" } = Astro.props;
	const currentPath = Astro.url.pathname;
	const currentLang = currentPath.startsWith("/en") ? "en" : "fr";
	const otherLang = currentLang === "fr" ? "en" : "fr";
	const otherLangPath = currentPath.replace(`/${currentLang}/`, `/${otherLang}/`) || `/${otherLang}/`;
	const getLink = (href) => {
		if (href === "/") return `/${currentLang}/`;
		return `/${currentLang}${href}`;
	};
	const navLinks = currentLang === "fr" ? [
		{
			href: "/",
			label: "Accueil"
		},
		{
			href: "/biais",
			label: "Biais"
		},
		{
			href: "/reglementations",
			label: "Réglementations"
		},
		{
			href: "/methodologie",
			label: "Méthodologie"
		},
		{
			href: "/aexia",
			label: "AEXIA"
		},
		{
			href: "/rapports",
			label: "Rapports"
		},
		{
			href: "/api",
			label: "API"
		},
		{
			href: "/a-propos",
			label: "À propos"
		}
	] : [
		{
			href: "/",
			label: "Home"
		},
		{
			href: "/biais",
			label: "Biases"
		},
		{
			href: "/reglementations",
			label: "Regulations"
		},
		{
			href: "/methodologie",
			label: "Methodology"
		},
		{
			href: "/aexia",
			label: "AEXIA"
		},
		{
			href: "/rapports",
			label: "Reports"
		},
		{
			href: "/api",
			label: "API"
		},
		{
			href: "/a-propos",
			label: "About"
		}
	];
	return renderTemplate`<html${addAttribute(currentLang, "lang")}><head><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="google-site-verification" content="D_RVg-BAFn2BWJQrKM_G69GzWzOWA04Sk_Gvk0Swvm4">${renderHead($$result)}</head><body class="bg-slate-50 text-slate-800 font-sans antialiased min-h-screen flex flex-col"><header class="bg-slate-900 text-white shadow-md sticky top-0 z-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between items-center h-20"><!-- Logo --><div class="flex-shrink-0 flex items-center"><a${addAttribute(getLink("/"), "href")} class="flex items-center gap-3">${renderComponent($$result, "Logo", $$Logo, { "class": "h-12 w-auto" })}</a></div><nav class="hidden md:flex items-center space-x-1 lg:space-x-4">${navLinks.map((link) => renderTemplate`<a${addAttribute(getLink(link.href), "href")} class="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors">${link.label}</a>`)}<!-- Bouton FR / EN --><div class="ml-4 pl-4 border-l border-slate-700 flex items-center"><a${addAttribute(otherLangPath, "href")} class="px-3 py-1.5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-200 rounded uppercase transition-colors">${otherLang}</a></div></nav><!-- Bouton Mobile (Burger) --><div class="md:hidden flex items-center"><button id="mobile-menu-button" class="text-slate-300 hover:text-white focus:outline-none"><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div></div></div><!-- Menu Mobile (Caché par défaut) --><div id="mobile-menu" class="md:hidden hidden bg-slate-800"><div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">${navLinks.map((link) => renderTemplate`<a${addAttribute(getLink(link.href), "href")} class="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md">${link.label}</a>`)}<a${addAttribute(otherLangPath, "href")} class="block px-3 py-2 text-base font-bold text-slate-900 bg-white rounded-md mt-4 text-center uppercase">Passer en ${otherLang}</a></div></div></header><main class="flex-grow">${renderSlot($$result, $$slots["default"])}</main><!-- Footer --><footer class="bg-slate-900 border-t border-slate-800 text-slate-400 py-8 mt-auto"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4"><div class="flex flex-col items-center md:items-start"><p class="text-sm font-semibold text-slate-300">© 2026 AI BIAIS INITIATIVE</p><p class="text-xs mt-1">Observatoire Mondial des Biais dans l'Intelligence Artificielle</p></div><div class="flex items-center gap-6 text-sm"><a${addAttribute(`/${currentLang}/a-propos`, "href")} class="hover:text-white transition-colors">À propos</a><a${addAttribute(`/${currentLang}/rapports`, "href")} class="hover:text-white transition-colors">Rapports</a></div></div><div class="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-500"><details class="cursor-pointer"><summary class="hover:text-slate-300 transition-colors">${currentLang === "fr" ? "Mentions légales & Politique de confidentialité" : "Legal Notice & Privacy Policy"}</summary><div class="mt-4 space-y-2 pl-4 border-l-2 border-slate-700">${currentLang === "fr" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<p><strong>Éditeur :</strong> AI BIAIS INITIATIVE - Responsable de publication : Mohamadou SIDIBE.</p><p><strong>Hébergement :</strong> Vercel (Frontend), Render (API), Neon (Base de données).</p><p><strong>Propriété intellectuelle :</strong> Contenus sous licence CC BY 4.0 (réutilisation libre avec citation).</p><p><strong>Données personnelles :</strong> Aucun cookie de traçage ou publicitaire n'est utilisé. L'application SaaS utilise le stockage local (localStorage) uniquement pour maintenir votre connexion (JWT). Vous disposez d'un droit d'accès et de suppression de vos données en écrivant à contact@ai-biais-initiative.org.</p>` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<p><strong>Publisher:</strong> AI BIAIS INITIATIVE - Publication Director: Mohamadou SIDIBE.</p><p><strong>Hosting:</strong> Vercel (Frontend), Render (API), Neon (Database).</p><p><strong>Intellectual Property:</strong> Contents under CC BY 4.0 license (free reuse with citation).</p><p><strong>Personal Data:</strong> No tracking or advertising cookies are used. The SaaS application uses local storage (localStorage) only to maintain your connection (JWT). You have the right to access and delete your data by writing to contact@ai-biais-initiative.org.</p>` })}`}</div></details></div></footer></body></html><script>
  // Script pour faire fonctionner le menu burger sur mobile
  const btn = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
<\/script>`;
}, "C:/Users/SIDIBE/Desktop/AI BIAS Initiative/Documents Officiels/SITE_WEB/src/layouts/BaseLayout.astro", void 0);
export { $$BaseLayout as t };
