import simpleIcons from "@iconify-json/simple-icons/icons.json";
import { getIconData, iconToSVG } from "@iconify/utils";

export interface TechIconInfo {
  /** Name within the simple-icons set, e.g. "nodedotjs". null = no logo. */
  icon: string | null;
  color: string;
  label: string;
}

const MAP: Record<string, TechIconInfo> = {
  "node.js":     { icon: "nodedotjs",         color: "#5FA04E", label: "Node.js" },
  "express.js":  { icon: "express",           color: "#68A063", label: "Express.js" },
  "postgresql":  { icon: "postgresql",        color: "#4169E1", label: "PostgreSQL" },
  "redis":       { icon: "redis",             color: "#FF4438", label: "Redis" },
  "docker":      { icon: "docker",            color: "#2496ED", label: "Docker" },
  "kubernetes":  { icon: "kubernetes",        color: "#326CE5", label: "Kubernetes" },
  "vue.js":      { icon: "vuedotjs",          color: "#4FC08D", label: "Vue.js" },
  "nuxt":        { icon: "nuxt",              color: "#00DC82", label: "Nuxt" },
  "kotlin":      { icon: "kotlin",            color: "#7F52FF", label: "Kotlin" },
  "micronaut":   { icon: null,                             color: "#4C8CAE", label: "Micronaut" },
  "aws":         { icon: "amazonwebservices", color: "#FF9900", label: "AWS" },
  "typescript":  { icon: "typescript",        color: "#3178C6", label: "TypeScript" },
  "tailwind":    { icon: "tailwindcss",       color: "#06B6D4", label: "Tailwind" },
  "shadcn":      { icon: "shadcnui",          color: "#A1A1AA", label: "shadcn/ui" },
  "webrtc":      { icon: "webrtc",            color: "#FF7F50", label: "WebRTC" },
  "bash":        { icon: "gnubash",           color: "#4EAA25", label: "Bash" },
  "netlify":     { icon: "netlify",           color: "#00C7B7", label: "Netlify" },
  "html5":       { icon: "html5",             color: "#E34F26", label: "HTML5" },
  "css3":        { icon: "css3",              color: "#1572B6", label: "CSS3" },
  "wordpress":   { icon: "wordpress",         color: "#21759B", label: "WordPress" },
  "php":         { icon: "php",               color: "#777BB4", label: "PHP" },
  "nette":       { icon: null,                             color: "#3484D2", label: "Nette" },
  "elasticsearch": { icon: "elasticsearch",   color: "#005571", label: "Elasticsearch" },
  "mysql":       { icon: "mysql",             color: "#4479A1", label: "MySQL" },
  "mongodb":     { icon: "mongodb",           color: "#47A248", label: "MongoDB" },
  "rabbitmq":    { icon: "rabbitmq",          color: "#FF6600", label: "RabbitMQ" },
  "laravel":     { icon: "laravel",           color: "#FF2D20", label: "Laravel" },
  "inertia.js":  { icon: "inertia",           color: "#9553E9", label: "Inertia.js" },
  // Official #003545 disappears as a tint on the dark theme; use the brand's sea-lion accent.
  "mariadb":     { icon: "mariadb",           color: "#C0765A", label: "MariaDB" },
  "playwright":  { icon: "playwright",        color: "#2EAD33", label: "Playwright" },
};

const ALIASES: Record<string, string> = {
  "postgres": "postgresql",
  "vue.js (nuxt)": "nuxt",
  "nuxt.js": "nuxt",
  "node": "node.js",
  "nodejs": "node.js",
  "express": "express.js",
  "tailwindcss": "tailwind",
  "shadcn/ui": "shadcn",
  "amazon web services": "aws",
};

function normalize(tag: string): string {
  return tag.toLowerCase().trim();
}

export function resolveTechIcon(tag: string): TechIconInfo | null {
  const key = normalize(tag);
  const resolved = ALIASES[key] ?? key;
  const info = MAP[resolved];
  if (!info) {
    console.warn(`[techIcons] No icon mapping for tag: "${tag}"`);
    return null;
  }
  return info;
}

export interface TechIconSvg {
  body: string;
  viewBox: string;
}

/**
 * Reads an icon straight out of the simple-icons set at build time.
 *
 * This replaces the `astro-icon` integration, which was pulled in for this
 * single component (and dragged `@iconify/tools` along with it). The icon
 * bodies use `fill="currentColor"`, so `.tech-badge__icon { color }` still
 * drives them.
 */
export function getTechIconSvg(name: string): TechIconSvg | null {
  const data = getIconData(simpleIcons, name);
  if (!data) {
    console.warn(`[techIcons] "${name}" is not in the simple-icons set`);
    return null;
  }
  const { body, attributes } = iconToSVG(data, { height: "auto" });
  return { body, viewBox: attributes.viewBox };
}
