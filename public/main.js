// ── Custom cursor ──────────────────────────────────────────
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  ring.style.left = e.clientX + "px";
  ring.style.top = e.clientY + "px";
});

document.querySelectorAll("a, button, .skill-pill").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("hovered");
    ring.classList.add("hovered");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("hovered");
    ring.classList.remove("hovered");
  });
});

// ── Nav scroll border ──────────────────────────────────────
window.addEventListener("scroll", () => {
  document
    .getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 20);
});

// ── Language toggle ────────────────────────────────────────
const html = document.documentElement;

document.getElementById("langToggle").addEventListener("click", () => {
  html.dataset.lang = html.dataset.lang === "es" ? "en" : "es";
});

// ── Scroll reveal ──────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));

// ── Contact form ───────────────────────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  const btns = e.target.querySelectorAll("button[type=submit]");

  btns.forEach((btn) => {
    btn.textContent = html.dataset.lang === "es" ? "Enviado ✓" : "Sent ✓";
    btn.style.cssText =
      "background:#8B5CF6;border-color:#8B5CF6;color:#fff;box-shadow:0 0 32px rgba(139,92,246,.5)";
  });

  setTimeout(() => {
    btns.forEach((btn) => {
      btn.style.cssText = "";
      btn.textContent =
        html.dataset.lang === "es" ? "Enviar mensaje →" : "Send message →";
    });
    e.target.reset();
  }, 3000);
}

// ── Skills with icons (Simple Icons CDN) ──────────────────
const SKILLS = {
  frontend: [
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS3", icon: "https://cdn.simpleicons.org/css/663399" },
    {
      name: "JavaScript",
      icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.simpleicons.org/typescript/3178C6",
    },
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
    {
      name: "Tailwind",
      icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    },
  ],
  backend: [
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
    { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
    { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/FFFFFF" },
    {
      name: "PostgreSQL",
      icon: "https://cdn.simpleicons.org/postgresql/4169E1",
    },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  ],
  data: [
    { name: "dbt Cloud", icon: "icons/dbt.svg" },
    { name: "Snowflake", icon: "icons/snowflake.svg" },
    { name: "SQL", icon: "icons/sql.svg" },
    { name: "Power BI", icon: "icons/powerbi.svg" },
  ],
  tools: [
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/21759B" },
    {
      name: "SEO",
      icon: "https://cdn.simpleicons.org/googlesearchconsole/458CF5",
    },
  ],
};

function renderSkills(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  items.forEach((skill) => {
    const pill = document.createElement("div");
    pill.className = "skill-pill";
    pill.innerHTML = `
      ${skill.icon ? `<img src="${skill.icon}" alt="${skill.name}" onerror="this.style.display='none'" />` : ""}
      <span>${skill.name}</span>
    `;
    container.appendChild(pill); 
  });
}

function renderConcepts(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  items.forEach(([es, en]) => {
    const pill = document.createElement("div");
    pill.className = "skill-pill";
    pill.innerHTML = `<span data-es>${es}</span><span data-en>${en}</span>`;
    container.appendChild(pill);
  });
}

renderSkills("skills-data", SKILLS.data);
renderSkills("skills-frontend", SKILLS.frontend);
renderSkills("skills-backend", SKILLS.backend);
renderSkills("skills-tools", SKILLS.tools);