export interface TechIconInfo {
  icon: string | null;
  color: string;
  label: string;
}

const MAP: Record<string, TechIconInfo> = {
  "node.js":     { icon: "simple-icons:nodedotjs",         color: "#5FA04E", label: "Node.js" },
  "express.js":  { icon: "simple-icons:express",           color: "#68A063", label: "Express.js" },
  "postgresql":  { icon: "simple-icons:postgresql",        color: "#4169E1", label: "PostgreSQL" },
  "redis":       { icon: "simple-icons:redis",             color: "#FF4438", label: "Redis" },
  "docker":      { icon: "simple-icons:docker",            color: "#2496ED", label: "Docker" },
  "kubernetes":  { icon: "simple-icons:kubernetes",        color: "#326CE5", label: "Kubernetes" },
  "vue.js":      { icon: "simple-icons:vuedotjs",          color: "#4FC08D", label: "Vue.js" },
  "nuxt":        { icon: "simple-icons:nuxt",              color: "#00DC82", label: "Nuxt" },
  "kotlin":      { icon: "simple-icons:kotlin",            color: "#7F52FF", label: "Kotlin" },
  "micronaut":   { icon: null,                             color: "#4C8CAE", label: "Micronaut" },
  "aws":         { icon: "simple-icons:amazonwebservices", color: "#FF9900", label: "AWS" },
  "typescript":  { icon: "simple-icons:typescript",        color: "#3178C6", label: "TypeScript" },
  "tailwind":    { icon: "simple-icons:tailwindcss",       color: "#06B6D4", label: "Tailwind" },
  "shadcn":      { icon: "simple-icons:shadcnui",          color: "#A1A1AA", label: "shadcn/ui" },
  "webrtc":      { icon: "simple-icons:webrtc",            color: "#FF7F50", label: "WebRTC" },
  "bash":        { icon: "simple-icons:gnubash",           color: "#4EAA25", label: "Bash" },
  "netlify":     { icon: "simple-icons:netlify",           color: "#00C7B7", label: "Netlify" },
  "html5":       { icon: "simple-icons:html5",             color: "#E34F26", label: "HTML5" },
  "css3":        { icon: "simple-icons:css3",              color: "#1572B6", label: "CSS3" },
  "wordpress":   { icon: "simple-icons:wordpress",         color: "#21759B", label: "WordPress" },
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
