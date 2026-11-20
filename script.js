import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

// ============================================================================
// 1. PORTFOLIO DATA & WAYPOINTS
// ============================================================================
const SCENES = [
  {
    id: "hero",
    index: "01",
    label: "Identity",
    figureZ: 0,
    cameraPos: [-1.45, 1.85, 5.4],
    lookAt: [0.55, 1.35, -10],
    mobileCameraPos: [0, 2.1, 6.8],
    mobileLookAt: [0, 1.2, -10],
  },
  {
    id: "philosophy",
    index: "02",
    label: "Philosophy",
    figureZ: -14,
    cameraPos: [-1.55, 1.85, -8.4],
    lookAt: [0.85, 1.35, -16.5],
    mobileCameraPos: [0, 2.05, -7.0],
    mobileLookAt: [0.35, 1.25, -16.5],
  },
  {
    id: "skills",
    index: "03",
    label: "Skills",
    figureZ: -28,
    cameraPos: [1.65, 2.05, -22.2],
    lookAt: [-0.45, 1.48, -29.5],
    mobileCameraPos: [0, 2.3, -20.8],
    mobileLookAt: [0, 1.35, -29.5],
  },
  {
    id: "projects",
    index: "04",
    label: "Projects",
    figureZ: -42,
    cameraPos: [0, 1.95, -35.0],
    lookAt: [0, 1.5, -44],
    mobileCameraPos: [0, 2.25, -33.2],
    mobileLookAt: [0, 1.35, -44],
  },
  {
    id: "business",
    index: "05",
    label: "Experience",
    figureZ: -56,
    cameraPos: [1.5, 1.85, -50.0],
    lookAt: [-0.4, 1.4, -58.5],
    mobileCameraPos: [0, 2.1, -48.5],
    mobileLookAt: [0, 1.3, -58.5],
  },
  {
    id: "leadership",
    index: "06",
    label: "Leadership",
    figureZ: -70,
    cameraPos: [-1.55, 1.85, -64.2],
    lookAt: [0.55, 1.4, -72.5],
    mobileCameraPos: [0, 2.1, -62.8],
    mobileLookAt: [0, 1.3, -72.5],
  },
  {
    id: "timeline",
    index: "07",
    label: "Archive & Timeline",
    figureZ: -84,
    cameraPos: [1.55, 2.0, -78.0],
    lookAt: [-0.45, 1.45, -86.5],
    mobileCameraPos: [0, 2.2, -76.5],
    mobileLookAt: [0, 1.35, -86.5],
  },
  {
    id: "contact",
    index: "08",
    label: "Contact",
    figureZ: -97.5,
    cameraPos: [0, 1.75, -90.5],
    lookAt: [0, 1.55, -106],
    mobileCameraPos: [0, 1.95, -89.2],
    mobileLookAt: [0, 1.45, -106],
  },
];

const THINKING_REFLECTIONS = [
  {
    label: "I",
    text: "Understanding is different from memorizing.",
  },
  {
    label: "II",
    text: "An assumption is not a conclusion.",
  },
  {
    label: "III",
    text: "Complexity becomes manageable when we understand its structure.",
  },
];

const SKILL_CATEGORIES = [
  {
    id: "programming",
    label: "Programming",
    items: ["C", "C++", "JavaScript", "Go"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: ["HTML", "CSS", "Tailwind CSS", "React"],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["MongoDB (OnQuest)", "SQL"],
  },
  {
    id: "other",
    label: "Other",
    items: [
      "Software Engineering Principles",
      "Problem Solving",
      "Competitive Programming",
      "Basic Cloud Concepts",
      "Basic CI/CD Understanding",
      "Rocketry Telemetry Basics",
    ],
  },
];

const PROJECTS = [
  {
    index: "01",
    name: "Book Vibe",
    description:
      "A modern, responsive book discovery and management application built with React and Vite. Explore curated books, manage your reading list, and visualize your reading progress with an interactive dashboard.",
    technologies: ["React", "Git", "GitHub"],
    githubUrl: "https://github.com/Rafidul-Islam/Book-Vibe",
    liveUrl: "https://book-vibe-by-rafid.netlify.app/",
  },
  {
    index: "02",
    name: "Meal-Board",
    description:
      "An online restaurant application displaying available items to customers.",
    technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    githubUrl: "https://github.com/Rafidul-Islam/meal-board",
    liveUrl: "https://meal-board.netlify.app/",
  },
  {
    index: "03",
    name: "Self Made Dev",
    description:
      "A full-stack club management platform enabling event publishing, member onboarding, resource sharing, and internal program coordination for the Self Made Dev community.",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "React",
      "Vite",
      "Git",
      "GitHub",
      "Python",
      "Django",
    ],
    githubUrl: "https://github.com/Rafidul-Islam/self-made-devs",
    liveUrl: "https://selfmade-dev.vercel.app/",
  },
  {
    index: "04",
    name: "DevQuest Preli",
    description:
      "A club program website for conducting preliminary examinations.",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "React",
      "Vite",
      "Git",
      "GitHub",
      "Python",
      "Django",
    ],
    githubUrl: "https://github.com/Rafidul-Islam/Devquest_preli",
    liveUrl: "https://devquest-preli.vercel.app/",
  },
  {
    index: "05",
    name: "English Janala",
    description: "A vocabulary learning web application.",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "React",
      "Vite",
      "Git",
      "GitHub",
    ],
    githubUrl: "https://github.com/Rafidul-Islam?tab=repositories",
    liveUrl: "https://english-janala-by-rafid.netlify.app/",
  },
  {
    index: "06",
    name: "Auction Gallery",
    description:
      "A web application for exploring bids on different items and collections.",
    technologies: ["TypeScript", "React", "Vite", "react-beautiful-dnd"],
    githubUrl: "https://github.com/Rafidul-Islam?tab=repositories",
    liveUrl: "https://auctiion-gallery-by-rafid.netlify.app/",
  },
  {
    index: "07",
    name: "SoilSync",
    description:
      "Made with Team Arekta for the NASA Space Apps Challenge 2026 (“Field Shift: Adapting Farms with NASA Data”). A Bangla-first decision-support tool that turns NASA Earth observations into explainable crop-rotation options for farmers in Bangladesh’s Barind Tract. I was the developer on a six-person team. The demo runs on clearly labelled sample data.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/Rafidul-Islam/SoilSync",
    liveUrl: "https://cropwisebyarektateam.netlify.app/",
  },
  {
    index: "08",
    name: "DIUSEC ERP",
    description:
      "An ERP system for DIUSEC, the Software Engineering Club at DIU.",
    technologies: [],
    githubUrl: "https://github.com/Rafidul-Islam/DIUSEC",
    liveUrl: "https://diusec.swe.bd/",
  },
  {
    index: "09",
    name: "P2P LAN Chat System",
    description:
      "A peer-to-peer chat system for local networks, written in C with separate client and server programs.",
    technologies: ["C"],
    githubUrl: "https://github.com/Rafidul-Islam/p2p_lan_chat_system",
    liveUrl: "",
  },
];

const LEADERSHIP_ROLES = [
  {
    role: "General Member",
    period: "January 2025 – September 2025",
    summary:
      "Participated in problem-solving sessions, software engineering discussions, and collaborative student builds.",
  },
  {
    role: "Senior Executive",
    period: "October 2025 – December 2025",
    summary:
      "Coordinated technical tracks, member execution, and collaborative club initiatives.",
  },
  {
    role: "Development Secretary",
    period: "Current role",
    summary:
      "Leading software development initiatives, technical publications, and shared engineering efforts at the Software Engineering Club.",
  },
];

const TIMELINE_MILESTONES = [
  {
    year: "2025",
    items: [
      "Began B.Sc. in Software Engineering at Daffodil International University (DIU), Dhaka.",
      "General Member, Software Engineering Club.",
      "Senior Executive, Software Engineering Club.",
    ],
  },
  {
    year: "2026",
    items: [
      "Development Secretary, Software Engineering Club.",
      "SWEOrbit club magazine completed and published.",
      "SoilSync built with Team Arekta for NASA Space Apps Challenge 2026.",
      "DIUSEC ERP built for the Software Engineering Club at DIU.",
      "Business Associate at Drops (Sanitary Goods Importer).",
    ],
  },
];

const MEMORY_ARTIFACTS = [
  {
    id: "projects",
    label: "Projects",
    category: "01 · Systems Built",
    title: "Software Projects",
    summary:
      "Nine practical applications turning ideas into usable systems across React, TypeScript, Django, C, and vanilla web foundations.",
    details: [
      "Book Vibe · Meal-Board · Self Made Dev",
      "DevQuest Preli · English Janala · Auction Gallery",
      "SoilSync · DIUSEC ERP · P2P LAN Chat System",
    ],
  },
  {
    id: "business",
    label: "Experience",
    category: "02 · Work Experience",
    title: "Business Associate — Drops",
    summary:
      "Sanitary Goods Importer — managing software administration, assisting with trade documentation, and supporting commercial revenue growth.",
    details: [
      "Software administration and operational tool management",
      "Export and import documentation assistance",
      "Supporting business operations to help increase revenue",
    ],
  },
  {
    id: "academic",
    label: "Academic",
    category: "03 · Academic Background",
    title: "B.Sc. in Software Engineering",
    summary:
      "Daffodil International University (DIU), Dhaka (2025 – 2028) — building strong foundations in software engineering principles, algorithms, and system architecture.",
    details: [
      "Institution: Daffodil International University (DIU)",
      "Program: Bachelor of Science in Software Engineering (2025 – 2028)",
      "Focus: Backend Systems, Data Structures & Problem Solving",
    ],
  },
  {
    id: "milestones",
    label: "Milestones",
    category: "04 · Achievements",
    title: "Key Achievements & Milestones",
    summary:
      "Real engineering deliverables, collaborative builds, and community publications shipped to completion.",
    details: [
      "NASA Space Apps Challenge 2026 — SoilSync developer on Team Arekta",
      "SWEOrbit — Club Magazine completed and published",
      "DIUSEC ERP — Built club operations system (diusec.swe.bd)",
      "Software Engineering Club — Progressed to Development Secretary",
    ],
  },
  {
    id: "leadership",
    label: "Leadership",
    category: "05 · Roles & Inquiry",
    title: "Roles & Intellectual Focus",
    summary:
      "Progression through club responsibilities paired with core technical and philosophical inquiry.",
    details: [
      "General Member (Jan – Sep 2025) → Senior Executive (Oct – Dec 2025) → Development Secretary (Current)",
      "Backend Engineering, System Design & Competitive Programming",
    ],
  },
];

const VISITOR_OPTIONS = [
  "The choices they make.",
  "The experiences they collect.",
  "The thoughts they hold.",
  "The things they create.",
];

// ============================================================================
// 2. UI STATE & DOM BINDINGS
// ============================================================================
const state = {
  activeSceneId: "",
  selectedThinking: 0,
  selectedSkill: 0,
  hoveredSkill: null,
  selectedProject: 0,
  hoveredProject: null,
  selectedRole: 2,
  archiveMode: "timeline",
  selectedTimelineYear: 0,
  hoveredTimelineYear: null,
  selectedMemory: 0,
  hoveredMemory: null,
  selectedVisitorOption: null,
  answerRevealTimer: 0,
  contentRevealTimer: 0,
  reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
};

const loadingScreen = document.getElementById("loading-screen");
const loadingBarFill = document.getElementById("loading-bar-fill");
const loadingPercent = document.getElementById("loading-percent");
const webglMount = document.getElementById("webgl-mount");
const webglFallback = document.getElementById("webgl-fallback");
const mobileToggle = document.getElementById("mobile-menu-toggle");
const mobileNav = document.getElementById("mobile-nav");

function setLoadingProgress(pct) {
  const clamped = Math.min(Math.max(pct, 0), 100);
  if (loadingBarFill) {
    loadingBarFill.style.transform = `scaleX(${clamped / 100})`;
  }
  if (loadingPercent) {
    loadingPercent.textContent = `${Math.round(clamped)}%`;
  }
}

function hideLoadingScreen() {
  if (!loadingScreen) return;
  loadingScreen.classList.add("is-fading");
  window.setTimeout(() => {
    loadingScreen.classList.add("hidden");
  }, 460);
}

function renderSkillsUI() {
  const tabsEl = document.getElementById("skill-tabs");
  const titleEl = document.getElementById("active-skill-title");
  const listEl = document.getElementById("active-skill-list");
  if (!tabsEl || !titleEl || !listEl) return;

  const activeIdx =
    state.hoveredSkill !== null ? state.hoveredSkill : state.selectedSkill;
  const activeCat = SKILL_CATEGORIES[activeIdx] || SKILL_CATEGORIES[0];

  tabsEl.innerHTML = "";
  SKILL_CATEGORIES.forEach((cat, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.role = "tab";
    btn.className = `tab-btn${idx === activeIdx ? " is-active" : ""}`;
    btn.setAttribute("aria-selected", String(idx === activeIdx));
    btn.textContent = cat.label;
    btn.addEventListener("click", () => {
      state.selectedSkill = idx;
      renderSkillsUI();
    });
    tabsEl.appendChild(btn);
  });

  titleEl.textContent = activeCat.label;
  listEl.innerHTML = "";
  activeCat.items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    listEl.appendChild(li);
  });
}

function renderProjectsUI() {
  const tabsEl = document.getElementById("project-tabs");
  const nameEl = document.getElementById("project-name");
  const counterEl = document.getElementById("project-counter");
  const descEl = document.getElementById("project-desc");
  const techEl = document.getElementById("project-tech");
  const githubEl = document.getElementById("project-github");
  const liveEl = document.getElementById("project-live");
  if (
    !tabsEl ||
    !nameEl ||
    !counterEl ||
    !descEl ||
    !techEl ||
    !githubEl ||
    !liveEl
  ) {
    return;
  }

  const activeIdx =
    state.hoveredProject !== null
      ? state.hoveredProject
      : state.selectedProject;
  const proj = PROJECTS[activeIdx] || PROJECTS[0];

  tabsEl.innerHTML = "";
  PROJECTS.forEach((p, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.role = "tab";
    btn.className = `tab-btn num${idx === activeIdx ? " is-active" : ""}`;
    btn.setAttribute("aria-selected", String(idx === activeIdx));
    btn.textContent = `${p.index} · ${p.name}`;
    btn.addEventListener("click", () => {
      state.selectedProject = idx;
      renderProjectsUI();
    });
    tabsEl.appendChild(btn);
  });

  nameEl.textContent = proj.name;
  counterEl.textContent = `Project ${proj.index} / ${String(PROJECTS.length).padStart(2, "0")}`;
  descEl.textContent = proj.description;
  if (proj.technologies.length > 0) {
    techEl.textContent = proj.technologies.join(" · ");
    techEl.classList.remove("hidden");
  } else {
    techEl.textContent = "";
    techEl.classList.add("hidden");
  }
  githubEl.setAttribute("href", proj.githubUrl);
  if (proj.liveUrl) {
    liveEl.setAttribute("href", proj.liveUrl);
    liveEl.classList.remove("hidden");
  } else {
    liveEl.removeAttribute("href");
    liveEl.classList.add("hidden");
  }
}

function renderThinkingUI() {
  const tabsEl = document.getElementById("thinking-tabs");
  const quoteEl = document.getElementById("thinking-quote");
  if (!tabsEl || !quoteEl) return;

  tabsEl.innerHTML = "";
  THINKING_REFLECTIONS.forEach((item, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.role = "tab";
    const isActive = idx === state.selectedThinking;
    btn.className = `tab-btn${isActive ? " is-active" : ""}`;
    btn.setAttribute("aria-selected", String(isActive));
    btn.textContent = `Note ${item.label}`;
    btn.addEventListener("click", () => {
      state.selectedThinking = idx;
      renderThinkingUI();
    });
    tabsEl.appendChild(btn);
  });

  const active =
    THINKING_REFLECTIONS[state.selectedThinking] || THINKING_REFLECTIONS[0];
  quoteEl.textContent = `“${active.text}”`;
}

function renderLeadershipUI() {
  const container = document.getElementById("leadership-timeline");
  if (!container) return;

  container.innerHTML = "";
  LEADERSHIP_ROLES.forEach((item, idx) => {
    const isSelected = idx === state.selectedRole;
    const wrapper = document.createElement("div");
    wrapper.className = `timeline-entry${isSelected ? " is-selected" : ""}`;

    const node = document.createElement("span");
    node.className = "timeline-node";
    node.setAttribute("aria-hidden", "true");

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "timeline-card-btn";
    btn.setAttribute("aria-expanded", String(isSelected));
    btn.innerHTML = `
      <div class="timeline-top">
        <span class="timeline-role">${item.role}</span>
        <span class="timeline-period">${item.period}</span>
      </div>
      ${isSelected ? `<p class="timeline-summary">${item.summary}</p>` : ""}
    `;
    btn.addEventListener("click", () => {
      state.selectedRole = idx;
      renderLeadershipUI();
    });

    wrapper.appendChild(node);
    wrapper.appendChild(btn);
    container.appendChild(wrapper);
  });
}

function renderArchiveModeUI() {
  const timelineBtn = document.getElementById("mode-timeline-btn");
  const memoryBtn = document.getElementById("mode-memory-btn");
  const timelineView = document.getElementById("view-timeline");
  const memoryView = document.getElementById("view-memory");
  if (!timelineBtn || !memoryBtn || !timelineView || !memoryView) return;

  const isTimeline = state.archiveMode === "timeline";
  timelineBtn.classList.toggle("is-active", isTimeline);
  timelineBtn.setAttribute("aria-selected", String(isTimeline));
  memoryBtn.classList.toggle("is-active", !isTimeline);
  memoryBtn.setAttribute("aria-selected", String(!isTimeline));

  timelineView.classList.toggle("hidden", !isTimeline);
  memoryView.classList.toggle("hidden", isTimeline);
}

function renderTimelineUI() {
  const tabsEl = document.getElementById("timeline-year-tabs");
  const headingEl = document.getElementById("timeline-year-heading");
  const listEl = document.getElementById("timeline-milestones-list");
  if (!tabsEl || !headingEl || !listEl) return;

  const activeIdx =
    state.hoveredTimelineYear !== null
      ? state.hoveredTimelineYear
      : state.selectedTimelineYear;
  const activeYear = TIMELINE_MILESTONES[activeIdx] || TIMELINE_MILESTONES[0];

  tabsEl.innerHTML = "";
  TIMELINE_MILESTONES.forEach((entry, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.role = "tab";
    btn.className = `tab-btn num${idx === activeIdx ? " is-active" : ""}`;
    btn.setAttribute("aria-selected", String(idx === activeIdx));
    btn.textContent = entry.year;
    btn.addEventListener("click", () => {
      state.selectedTimelineYear = idx;
      renderTimelineUI();
    });
    tabsEl.appendChild(btn);
  });

  headingEl.textContent = activeYear.year;
  listEl.innerHTML = "";
  activeYear.items.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    listEl.appendChild(li);
  });
}

function renderMemoryUI() {
  const tabsEl = document.getElementById("memory-tabs");
  const titleEl = document.getElementById("memory-title");
  const categoryEl = document.getElementById("memory-category");
  const summaryEl = document.getElementById("memory-summary");
  const detailsEl = document.getElementById("memory-details");
  if (!tabsEl || !titleEl || !categoryEl || !summaryEl || !detailsEl) return;

  const activeIdx =
    state.hoveredMemory !== null ? state.hoveredMemory : state.selectedMemory;
  const artifact = MEMORY_ARTIFACTS[activeIdx] || MEMORY_ARTIFACTS[0];

  tabsEl.innerHTML = "";
  MEMORY_ARTIFACTS.forEach((item, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.role = "tab";
    btn.className = `tab-btn${idx === activeIdx ? " is-active" : ""}`;
    btn.setAttribute("aria-selected", String(idx === activeIdx));
    btn.textContent = item.label;
    btn.addEventListener("click", () => {
      state.selectedMemory = idx;
      renderMemoryUI();
    });
    tabsEl.appendChild(btn);
  });

  titleEl.textContent = artifact.title;
  categoryEl.textContent = artifact.category;
  summaryEl.textContent = artifact.summary;
  detailsEl.innerHTML = "";
  artifact.details.forEach((line) => {
    const li = document.createElement("li");
    li.textContent = line;
    detailsEl.appendChild(li);
  });
}

function renderVisitorUI() {
  const optionsEl = document.getElementById("visitor-options");
  const responseEl = document.getElementById("visitor-response");
  if (!optionsEl || !responseEl) return;

  optionsEl.innerHTML = "";
  VISITOR_OPTIONS.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    const isSelected = state.selectedVisitorOption === idx;
    btn.className = `visitor-option-btn${isSelected ? " is-selected" : ""}`;
    btn.setAttribute("aria-pressed", String(isSelected));
    btn.textContent = opt;
    btn.addEventListener("click", () => {
      state.selectedVisitorOption = idx;
      renderVisitorUI();
    });
    optionsEl.appendChild(btn);
  });

  if (state.selectedVisitorOption !== null) {
    responseEl.textContent = "“Perhaps no single answer is enough.”";
    responseEl.classList.remove("hidden");
  } else {
    responseEl.classList.add("hidden");
  }
}

function clearRevealTimers() {
  window.clearTimeout(state.answerRevealTimer);
  window.clearTimeout(state.contentRevealTimer);
}

function scheduleRevealSequence(panel) {
  clearRevealTimers();
  if (!panel) return;
  if (state.reducedMotion) {
    panel.classList.add("is-answer-revealed", "is-content-revealed");
    return;
  }
  state.answerRevealTimer = window.setTimeout(() => {
    if (
      !panel.hasAttribute("hidden") &&
      panel.classList.contains("is-visible")
    ) {
      panel.classList.add("is-answer-revealed");
      state.contentRevealTimer = window.setTimeout(() => {
        if (
          !panel.hasAttribute("hidden") &&
          panel.classList.contains("is-answer-revealed")
        ) {
          panel.classList.add("is-content-revealed");
        }
      }, 420);
    }
  }, 750);
}

function updateActiveSceneUI(nextId) {
  if (state.activeSceneId === nextId) return;
  state.activeSceneId = nextId;
  clearRevealTimers();

  SCENES.forEach((s) => {
    const panel = document.getElementById(`panel-${s.id}`);
    if (panel) {
      panel.classList.remove(
        "is-visible",
        "is-answer-revealed",
        "is-content-revealed",
      );
      if (s.id === nextId) {
        panel.removeAttribute("hidden");
      } else {
        panel.setAttribute("hidden", "");
      }
    }
  });

  document.querySelectorAll("[data-nav]").forEach((el) => {
    const target = el.getAttribute("data-nav");
    const isActive = target === nextId;
    el.classList.toggle("is-active", isActive);
  });
}

function initPanelVisibilityObserver() {
  const panels = Array.from(document.querySelectorAll(".scene-panel"));
  if (!("IntersectionObserver" in window)) {
    panels.forEach((panel) => {
      panel.classList.add(
        "is-visible",
        "is-answer-revealed",
        "is-content-revealed",
      );
    });
    return;
  }

  const panelObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (entry.target.hasAttribute("hidden")) return;
              entry.target.classList.add("is-visible");
              scheduleRevealSequence(entry.target);
            });
          });
        } else if (!entry.isIntersecting) {
          entry.target.classList.remove(
            "is-visible",
            "is-answer-revealed",
            "is-content-revealed",
          );
        }
      });
    },
    {
      root: null,
      threshold: [0, 0.5, 0.85, 1.0],
    },
  );

  panels.forEach((panel) => panelObserver.observe(panel));

  // Also observe full-viewport scroll stops so chapter arrival syncs cleanly
  const stops = Array.from(document.querySelectorAll(".scroll-stop"));
  const stopObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          entry.intersectionRatio >= 0.9 &&
          entry.target.id
        ) {
          updateActiveSceneUI(entry.target.id);
        }
      });
    },
    {
      root: null,
      threshold: [0.9],
    },
  );

  stops.forEach((stop) => stopObserver.observe(stop));
}

function navigateToScene(sceneId) {
  const idx = SCENES.findIndex((s) => s.id === sceneId);
  if (idx < 0) return;

  if (mobileNav && mobileToggle) {
    mobileNav.classList.add("hidden");
    mobileToggle.setAttribute("aria-expanded", "false");
  }

  const maxScroll = Math.max(
    document.documentElement.scrollHeight - window.innerHeight,
    1,
  );
  const targetY = (idx / (SCENES.length - 1)) * maxScroll;
  window.scrollTo({
    top: targetY,
    behavior: state.reducedMotion ? "auto" : "smooth",
  });
}

// ============================================================================
// 3. PROCEDURAL MATERIALS & TEXTURES
// ============================================================================
function createDarkSlateTexture(anisotropy) {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.fillStyle = "#12151d";
    ctx.fillRect(0, 0, size, size);

    let seed = 109;
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };

    for (let i = 0; i < 4500; i++) {
      const x = rand() * size;
      const y = rand() * size;
      const r = 0.6 + rand() * 1.8;
      ctx.fillStyle =
        rand() > 0.5 ? "rgba(255,255,255,0.028)" : "rgba(4,5,8,0.22)";
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.strokeStyle = "rgba(197, 204, 216, 0.08)";
    ctx.lineWidth = 1;
    for (let y = 0; y <= size; y += 128) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(size, y);
      ctx.stroke();
    }
    ctx.strokeStyle = "rgba(197, 204, 216, 0.04)";
    ctx.beginPath();
    ctx.moveTo(size / 2, 0);
    ctx.lineTo(size / 2, size);
    ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(2, 34);
  tex.anisotropy = anisotropy;
  return tex;
}

function createRadialTexture(innerRgba, midRgba, outerRgba) {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const grad = ctx.createRadialGradient(
      size / 2,
      size / 2,
      size * 0.02,
      size / 2,
      size / 2,
      size * 0.5,
    );
    grad.addColorStop(0, innerRgba);
    grad.addColorStop(0.45, midRgba);
    grad.addColorStop(1, outerRgba);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function createBeamTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const grad = ctx.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0, "rgba(239, 228, 210, 0.24)");
    grad.addColorStop(0.45, "rgba(239, 228, 210, 0.08)");
    grad.addColorStop(1, "rgba(239, 228, 210, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 256);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function createMaterials(renderer, isSoftwareGl) {
  const anisotropy = isSoftwareGl
    ? 1
    : Math.min(8, renderer.capabilities.getMaxAnisotropy());

  const slateMap = createDarkSlateTexture(anisotropy);
  const dustMap = createRadialTexture(
    "rgba(241, 241, 241, 0.85)",
    "rgba(197, 204, 216, 0.28)",
    "rgba(197, 204, 216, 0)",
  );
  const shadowMap = createRadialTexture(
    "rgba(0, 0, 0, 0.72)",
    "rgba(0, 0, 0, 0.28)",
    "rgba(0, 0, 0, 0)",
  );
  const beamMap = createBeamTexture();

  const mats = {
    pathwayStone: new THREE.MeshStandardMaterial({
      map: slateMap,
      color: 0xffffff,
      roughness: 0.64,
      metalness: 0.14,
    }),
    architectureBasalt: new THREE.MeshStandardMaterial({
      color: 0x13161f,
      roughness: 0.76,
      metalness: 0.18,
    }),
    cardMonolith: new THREE.MeshStandardMaterial({
      color: 0x151821,
      roughness: 0.56,
      metalness: 0.22,
    }),
    mutedSilver: new THREE.MeshPhysicalMaterial({
      color: 0xc5ccd8,
      roughness: 0.26,
      metalness: 0.88,
      anisotropy: 0.55,
      clearcoat: 0.2,
    }),
    desaturatedBlue: new THREE.MeshPhysicalMaterial({
      color: 0x6f86a6,
      roughness: 0.32,
      metalness: 0.72,
      emissive: 0x1c2533,
      emissiveIntensity: 0.35,
    }),
    smokedGlass: new THREE.MeshPhysicalMaterial({
      color: 0x1d2330,
      roughness: 0.16,
      metalness: 0.08,
      transmission: isSoftwareGl ? 0 : 0.74,
      transparent: true,
      opacity: isSoftwareGl ? 0.55 : 0.94,
      ior: 1.5,
      thickness: 0.4,
      clearcoat: 0.9,
      clearcoatRoughness: 0.12,
    }),
    warmBeacon: new THREE.MeshBasicMaterial({ color: 0xefe4d2 }),
    volumetricBeam: new THREE.MeshBasicMaterial({
      map: beamMap,
      transparent: true,
      opacity: 0.48,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
    particleMat: new THREE.PointsMaterial({
      map: dustMap,
      color: 0xd9e0ec,
      size: 0.08,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
    coatFabric: new THREE.MeshPhysicalMaterial({
      color: 0x141720,
      roughness: 0.84,
      metalness: 0.04,
      sheen: 0.42,
      sheenRoughness: 0.7,
      sheenColor: new THREE.Color(0x3f4759),
    }),
    trouserFabric: new THREE.MeshStandardMaterial({
      color: 0x0c0e14,
      roughness: 0.88,
      metalness: 0.02,
    }),
    leatherShoe: new THREE.MeshStandardMaterial({
      color: 0x090a0e,
      roughness: 0.32,
      metalness: 0.25,
    }),
    skinTone: new THREE.MeshStandardMaterial({
      color: 0xc2ab99,
      roughness: 0.68,
      metalness: 0.02,
    }),
    hairMat: new THREE.MeshStandardMaterial({
      color: 0x111218,
      roughness: 0.78,
      metalness: 0.05,
    }),
    contactShadow: new THREE.MeshBasicMaterial({
      map: shadowMap,
      transparent: true,
      depthWrite: false,
      opacity: 0.75,
    }),
    dispose() {
      slateMap.dispose();
      dustMap.dispose();
      shadowMap.dispose();
      beamMap.dispose();
      Object.values(this).forEach((val) => {
        if (val && typeof val.dispose === "function" && val !== this.dispose) {
          val.dispose();
        }
      });
    },
  };

  return mats;
}

// ============================================================================
// 4. ARTICULATED CENTRAL HUMAN FIGURE
// ============================================================================
function buildHumanFigure(mats, disposables) {
  const root = new THREE.Group();

  const shadowGeo = new THREE.PlaneGeometry(1.15, 1.35);
  disposables.push(shadowGeo);
  const shadowMesh = new THREE.Mesh(shadowGeo, mats.contactShadow);
  shadowMesh.rotation.x = -Math.PI / 2;
  shadowMesh.position.y = 0.015;
  root.add(shadowMesh);

  const pelvis = new THREE.Group();
  pelvis.position.set(0, 0.94, 0);
  root.add(pelvis);

  const pelvisGeo = new THREE.CylinderGeometry(0.14, 0.145, 0.16, 16);
  const waistGeo = new THREE.CylinderGeometry(0.158, 0.138, 0.24, 18);
  const chestGeo = new THREE.CylinderGeometry(0.195, 0.158, 0.28, 18);
  const shoulderCapGeo = new THREE.SphereGeometry(0.072, 14, 12);
  const collarGeo = new THREE.TorusGeometry(
    0.088,
    0.022,
    10,
    24,
    Math.PI * 1.45,
  );
  const coatBackGeo = new THREE.BoxGeometry(0.32, 0.38, 0.035);
  const coatSideGeo = new THREE.BoxGeometry(0.04, 0.36, 0.2);
  const neckGeo = new THREE.CylinderGeometry(0.046, 0.054, 0.1, 14);
  const craniumGeo = new THREE.SphereGeometry(0.098, 22, 18);
  const jawGeo = new THREE.SphereGeometry(0.082, 18, 14);
  const hairCapGeo = new THREE.SphereGeometry(
    0.103,
    22,
    16,
    0,
    Math.PI * 2,
    0,
    Math.PI * 0.62,
  );
  const hairBackGeo = new THREE.BoxGeometry(0.13, 0.075, 0.055);
  const upperArmGeo = new THREE.CylinderGeometry(0.052, 0.044, 0.28, 14);
  const forearmGeo = new THREE.CylinderGeometry(0.042, 0.032, 0.26, 14);
  const handGeo = new THREE.SphereGeometry(0.034, 12, 10);
  const thighGeo = new THREE.CylinderGeometry(0.072, 0.056, 0.44, 16);
  const shinGeo = new THREE.CylinderGeometry(0.052, 0.038, 0.43, 14);
  const shoeGeo = new THREE.BoxGeometry(0.078, 0.055, 0.21);
  const shoeToeGeo = new THREE.SphereGeometry(0.039, 12, 10);

  disposables.push(
    pelvisGeo,
    waistGeo,
    chestGeo,
    shoulderCapGeo,
    collarGeo,
    coatBackGeo,
    coatSideGeo,
    neckGeo,
    craniumGeo,
    jawGeo,
    hairCapGeo,
    hairBackGeo,
    upperArmGeo,
    forearmGeo,
    handGeo,
    thighGeo,
    shinGeo,
    shoeGeo,
    shoeToeGeo,
  );

  const pelvisMesh = new THREE.Mesh(pelvisGeo, mats.coatFabric);
  pelvisMesh.scale.set(1.08, 1, 0.72);
  pelvisMesh.castShadow = true;
  pelvis.add(pelvisMesh);

  const torso = new THREE.Group();
  torso.position.set(0, 0.08, 0);
  pelvis.add(torso);

  const waistMesh = new THREE.Mesh(waistGeo, mats.coatFabric);
  waistMesh.position.y = 0.11;
  waistMesh.scale.set(1.08, 1, 0.72);
  waistMesh.castShadow = true;
  torso.add(waistMesh);

  const chestMesh = new THREE.Mesh(chestGeo, mats.coatFabric);
  chestMesh.position.y = 0.34;
  chestMesh.scale.set(1.12, 1, 0.72);
  chestMesh.castShadow = true;
  torso.add(chestMesh);

  const collarMesh = new THREE.Mesh(collarGeo, mats.coatFabric);
  collarMesh.position.set(0, 0.49, 0.01);
  collarMesh.rotation.x = Math.PI / 2 - 0.15;
  collarMesh.rotation.z = -Math.PI * 0.22;
  collarMesh.castShadow = true;
  torso.add(collarMesh);

  const coatBack = new THREE.Mesh(coatBackGeo, mats.coatFabric);
  coatBack.position.set(0, -0.17, 0.092);
  coatBack.rotation.x = 0.06;
  coatBack.castShadow = true;
  pelvis.add(coatBack);

  const coatSideL = new THREE.Mesh(coatSideGeo, mats.coatFabric);
  coatSideL.position.set(-0.155, -0.16, 0);
  coatSideL.rotation.z = -0.05;
  coatSideL.castShadow = true;
  pelvis.add(coatSideL);

  const coatSideR = new THREE.Mesh(coatSideGeo, mats.coatFabric);
  coatSideR.position.set(0.155, -0.16, 0);
  coatSideR.rotation.z = 0.05;
  coatSideR.castShadow = true;
  pelvis.add(coatSideR);

  const neckGroup = new THREE.Group();
  neckGroup.position.set(0, 0.48, 0);
  torso.add(neckGroup);

  const neckMesh = new THREE.Mesh(neckGeo, mats.skinTone);
  neckMesh.position.y = 0.045;
  neckMesh.castShadow = true;
  neckGroup.add(neckMesh);

  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.165, -0.008);
  neckGroup.add(headGroup);

  const cranium = new THREE.Mesh(craniumGeo, mats.skinTone);
  cranium.scale.set(0.88, 1.05, 0.98);
  cranium.castShadow = true;
  headGroup.add(cranium);

  const jaw = new THREE.Mesh(jawGeo, mats.skinTone);
  jaw.position.set(0, -0.048, -0.018);
  jaw.scale.set(0.8, 0.86, 0.88);
  headGroup.add(jaw);

  const hairCap = new THREE.Mesh(hairCapGeo, mats.hairMat);
  hairCap.position.set(0, 0.012, 0.008);
  hairCap.rotation.x = 0.18;
  hairCap.scale.set(0.9, 1.04, 1.0);
  hairCap.castShadow = true;
  headGroup.add(hairCap);

  const hairBack = new THREE.Mesh(hairBackGeo, mats.hairMat);
  hairBack.position.set(0, -0.02, 0.068);
  hairBack.rotation.x = -0.15;
  headGroup.add(hairBack);

  function createArm(side) {
    const shoulder = new THREE.Group();
    shoulder.position.set(side * 0.225, 0.43, 0);
    torso.add(shoulder);

    const cap = new THREE.Mesh(shoulderCapGeo, mats.coatFabric);
    cap.castShadow = true;
    shoulder.add(cap);

    const upperArm = new THREE.Mesh(upperArmGeo, mats.coatFabric);
    upperArm.position.y = -0.14;
    upperArm.castShadow = true;
    shoulder.add(upperArm);

    const elbow = new THREE.Group();
    elbow.position.set(0, -0.28, 0);
    shoulder.add(elbow);

    const forearm = new THREE.Mesh(forearmGeo, mats.coatFabric);
    forearm.position.y = -0.13;
    forearm.castShadow = true;
    elbow.add(forearm);

    const hand = new THREE.Mesh(handGeo, mats.skinTone);
    hand.position.y = -0.275;
    hand.scale.set(0.78, 1.25, 0.55);
    elbow.add(hand);

    return { shoulder, elbow };
  }

  function createLeg(side) {
    const hip = new THREE.Group();
    hip.position.set(side * 0.095, -0.03, 0);
    pelvis.add(hip);

    const thigh = new THREE.Mesh(thighGeo, mats.trouserFabric);
    thigh.position.y = -0.22;
    thigh.castShadow = true;
    hip.add(thigh);

    const knee = new THREE.Group();
    knee.position.set(0, -0.44, 0);
    hip.add(knee);

    const shin = new THREE.Mesh(shinGeo, mats.trouserFabric);
    shin.position.y = -0.215;
    shin.castShadow = true;
    knee.add(shin);

    const ankle = new THREE.Group();
    ankle.position.set(0, -0.43, 0);
    knee.add(ankle);

    const shoe = new THREE.Mesh(shoeGeo, mats.leatherShoe);
    shoe.position.set(0, -0.02, -0.04);
    shoe.castShadow = true;
    ankle.add(shoe);

    const toe = new THREE.Mesh(shoeToeGeo, mats.leatherShoe);
    toe.position.set(0, -0.024, -0.145);
    toe.scale.set(0.95, 0.65, 1.15);
    ankle.add(toe);

    return { hip, knee, ankle };
  }

  const leftArm = createArm(-1);
  const rightArm = createArm(1);
  const leftLeg = createLeg(-1);
  const rightLeg = createLeg(1);

  function updateWalkCycle(phase, amp) {
    const s = Math.sin(phase);
    const c = Math.cos(phase);

    pelvis.position.y = 0.94 + Math.abs(s) * 0.024 * amp;
    pelvis.rotation.y = s * 0.045 * amp;
    torso.rotation.y = -s * 0.06 * amp;
    torso.rotation.x = 0.025;

    const leftSwing = s * 0.34 * amp;
    leftLeg.hip.rotation.x = leftSwing;
    leftLeg.knee.rotation.x = Math.max(0, -c * 0.42 + 0.1) * amp;
    leftLeg.ankle.rotation.x = -leftSwing * 0.35;

    const rightSwing = -s * 0.34 * amp;
    rightLeg.hip.rotation.x = rightSwing;
    rightLeg.knee.rotation.x = Math.max(0, c * 0.42 + 0.1) * amp;
    rightLeg.ankle.rotation.x = -rightSwing * 0.35;

    leftArm.shoulder.rotation.x = -leftSwing * 0.62;
    leftArm.shoulder.rotation.z = 0.06;
    leftArm.elbow.rotation.x = -0.16 - Math.max(0, -s) * 0.14 * amp;

    rightArm.shoulder.rotation.x = -rightSwing * 0.62;
    rightArm.shoulder.rotation.z = -0.06;
    rightArm.elbow.rotation.x = -0.16 - Math.max(0, s) * 0.14 * amp;

    coatBack.rotation.x = 0.07 + Math.abs(s) * 0.05 * amp;
  }

  updateWalkCycle(0.4, 1);

  return { root, updateWalkCycle };
}

// ============================================================================
// 5. ARCHITECTURAL PATHWAY & 3D STRUCTURES
// ============================================================================
function buildWorld(scene, mats, disposables, isMobile) {
  const interactiveHitMeshes = [];
  const floatingGeos = [];
  const skillRings = [];
  const projectMonoliths = [];
  const timelineNodes = [];
  const memoryObjects = [];

  // Suspended dark slate pathway (extends to z = -116)
  const pathGeo = new THREE.BoxGeometry(3.2, 0.24, 128);
  const curbGeo = new THREE.BoxGeometry(0.18, 0.3, 128);
  const railGeo = new THREE.BoxGeometry(0.024, 0.02, 128);
  disposables.push(pathGeo, curbGeo, railGeo);

  const walkway = new THREE.Mesh(pathGeo, mats.pathwayStone);
  walkway.position.set(0, -0.12, -52);
  walkway.receiveShadow = !isMobile;
  scene.add(walkway);

  [-1.68, 1.68].forEach((x) => {
    const curb = new THREE.Mesh(curbGeo, mats.architectureBasalt);
    curb.position.set(x, -0.1, -52);
    curb.receiveShadow = !isMobile;
    scene.add(curb);
  });

  [-1.56, 1.56].forEach((x) => {
    const rail = new THREE.Mesh(railGeo, mats.mutedSilver);
    rail.position.set(x, 0.012, -52);
    scene.add(rail);
  });

  // Progressive pathway silver cross-seams (denser toward the light)
  const seamPositions = [];
  let seamZ = -10;
  let step = 4.5;
  while (seamZ > -105) {
    seamPositions.push(seamZ);
    step = Math.max(1.45, step * 0.93);
    seamZ -= step;
  }
  const seamGeo = new THREE.BoxGeometry(3.06, 0.008, 0.028);
  disposables.push(seamGeo);
  const seamInstanced = new THREE.InstancedMesh(
    seamGeo,
    mats.mutedSilver,
    seamPositions.length,
  );
  const seamDummy = new THREE.Object3D();
  seamPositions.forEach((z, idx) => {
    seamDummy.position.set(0, 0.006, z);
    seamDummy.updateMatrix();
    seamInstanced.setMatrixAt(idx, seamDummy.matrix);
  });
  seamInstanced.instanceMatrix.needsUpdate = true;
  seamInstanced.computeBoundingSphere();
  scene.add(seamInstanced);

  // Flanking colonnade portals
  const frameCount = 18;
  const pillarGeo = new THREE.BoxGeometry(0.28, 5.2, 0.32);
  const lintelGeo = new THREE.BoxGeometry(7.8, 0.18, 0.32);
  disposables.push(pillarGeo, lintelGeo);

  const pillars = new THREE.InstancedMesh(
    pillarGeo,
    mats.architectureBasalt,
    frameCount * 2,
  );
  pillars.castShadow = !isMobile;
  pillars.receiveShadow = !isMobile;

  const lintels = new THREE.InstancedMesh(
    lintelGeo,
    mats.architectureBasalt,
    frameCount,
  );
  lintels.castShadow = !isMobile;

  const dummy = new THREE.Object3D();
  for (let i = 0; i < frameCount; i++) {
    const z = 4 - i * 6.4;
    dummy.position.set(-3.75, 2.5, z);
    dummy.updateMatrix();
    pillars.setMatrixAt(i * 2, dummy.matrix);

    dummy.position.set(3.75, 2.5, z);
    dummy.updateMatrix();
    pillars.setMatrixAt(i * 2 + 1, dummy.matrix);

    dummy.position.set(0, 5.15, z);
    dummy.updateMatrix();
    lintels.setMatrixAt(i, dummy.matrix);
  }
  pillars.instanceMatrix.needsUpdate = true;
  pillars.computeBoundingSphere();
  lintels.instanceMatrix.needsUpdate = true;
  lintels.computeBoundingSphere();
  scene.add(pillars, lintels);

  // Distant light threshold & volumetric shafts (z = -106)
  const portalGroup = new THREE.Group();
  portalGroup.position.set(0, 0, -106);
  scene.add(portalGroup);

  const portalPillarGeo = new THREE.BoxGeometry(0.55, 6.4, 0.65);
  const portalTopGeo = new THREE.BoxGeometry(4.6, 0.55, 0.65);
  const beaconPlaneGeo = new THREE.PlaneGeometry(3.2, 5.6);
  const beamPlaneGeo = new THREE.PlaneGeometry(5.6, 22);
  disposables.push(portalPillarGeo, portalTopGeo, beaconPlaneGeo, beamPlaneGeo);

  const pLeft = new THREE.Mesh(portalPillarGeo, mats.architectureBasalt);
  pLeft.position.set(-1.95, 3.2, 0);
  const pRight = new THREE.Mesh(portalPillarGeo, mats.architectureBasalt);
  pRight.position.set(1.95, 3.2, 0);
  const pTop = new THREE.Mesh(portalTopGeo, mats.architectureBasalt);
  pTop.position.set(0, 6.4, 0);
  const beacon = new THREE.Mesh(beaconPlaneGeo, mats.warmBeacon);
  beacon.position.set(0, 2.8, -0.12);

  const beam1 = new THREE.Mesh(beamPlaneGeo, mats.volumetricBeam);
  beam1.rotation.x = Math.PI / 2;
  beam1.position.set(0, 1.5, 11);

  const beam2 = new THREE.Mesh(beamPlaneGeo, mats.volumetricBeam);
  beam2.rotation.x = Math.PI / 2;
  beam2.rotation.z = Math.PI / 2;
  beam2.position.set(0, 1.8, 11);

  portalGroup.add(pLeft, pRight, pTop, beacon, beam1, beam2);

  // Floating geometric forms
  const octaGeo = new THREE.OctahedronGeometry(0.45, 0);
  const wireRingGeo = new THREE.TorusGeometry(0.68, 0.012, 10, 42);
  disposables.push(octaGeo, wireRingGeo);

  [
    [3.4, 2.3, -4],
    [-3.8, 3.1, -18],
    [4.1, 1.9, -32],
    [-4.2, 2.8, -48],
    [3.9, 2.6, -64],
    [-3.7, 2.1, -94],
  ].forEach((pos, idx) => {
    const g = new THREE.Group();
    g.position.set(pos[0], pos[1], pos[2]);
    g.userData = { baseY: pos[1], phase: idx * 1.1 };

    const core = new THREE.Mesh(octaGeo, mats.smokedGlass);
    core.castShadow = !isMobile;
    const ring = new THREE.Mesh(wireRingGeo, mats.mutedSilver);
    ring.rotation.x = Math.PI / 3 + idx * 0.3;

    g.add(core, ring);
    scene.add(g);
    floatingGeos.push(g);
  });

  // THE THINKING ROOM (Chapter 02: Desk, Chair, Tall Architectural Window at z = -15.5)
  const roomGroup = new THREE.Group();
  roomGroup.position.set(2.85, 0, -15.5);
  roomGroup.rotation.y = -0.26;
  scene.add(roomGroup);

  const roomFloorGeo = new THREE.BoxGeometry(2.6, 0.08, 2.4);
  const backWallGeo = new THREE.BoxGeometry(2.6, 3.1, 0.1);
  const sideWallGeo = new THREE.BoxGeometry(0.1, 3.1, 0.72);
  const sideHeaderGeo = new THREE.BoxGeometry(0.1, 0.55, 1.0);
  const windowGlassGeo = new THREE.BoxGeometry(0.03, 2.55, 0.96);
  const deskTopGeo = new THREE.BoxGeometry(1.15, 0.05, 0.62);
  const deskLegGeo = new THREE.BoxGeometry(0.04, 0.74, 0.58);
  const chairSeatGeo = new THREE.BoxGeometry(0.42, 0.045, 0.42);
  const chairBackGeo = new THREE.BoxGeometry(0.42, 0.48, 0.045);
  const chairLegGeo = new THREE.BoxGeometry(0.035, 0.44, 0.035);
  const lampBarGeo = new THREE.BoxGeometry(0.28, 0.025, 0.04);
  disposables.push(
    roomFloorGeo,
    backWallGeo,
    sideWallGeo,
    sideHeaderGeo,
    windowGlassGeo,
    deskTopGeo,
    deskLegGeo,
    chairSeatGeo,
    chairBackGeo,
    chairLegGeo,
    lampBarGeo,
  );

  const roomFloor = new THREE.Mesh(roomFloorGeo, mats.architectureBasalt);
  roomFloor.position.set(0, 0.04, 0);
  roomFloor.receiveShadow = !isMobile;

  const backWall = new THREE.Mesh(backWallGeo, mats.cardMonolith);
  backWall.position.set(0, 1.55, -1.15);

  const sideWallFront = new THREE.Mesh(sideWallGeo, mats.cardMonolith);
  sideWallFront.position.set(1.25, 1.55, 0.84);
  const sideWallRear = new THREE.Mesh(sideWallGeo, mats.cardMonolith);
  sideWallRear.position.set(1.25, 1.55, -0.84);
  const sideHeader = new THREE.Mesh(sideHeaderGeo, mats.cardMonolith);
  sideHeader.position.set(1.25, 2.82, 0);

  const windowPane = new THREE.Mesh(windowGlassGeo, mats.smokedGlass);
  windowPane.position.set(1.25, 1.28, 0);
  const windowGlow = new THREE.Mesh(
    new THREE.PlaneGeometry(0.92, 2.45),
    mats.volumetricBeam,
  );
  disposables.push(windowGlow.geometry);
  windowGlow.rotation.y = -Math.PI / 2;
  windowGlow.position.set(1.18, 1.28, 0);

  const deskTop = new THREE.Mesh(deskTopGeo, mats.architectureBasalt);
  deskTop.position.set(0.1, 0.76, -0.25);
  deskTop.castShadow = !isMobile;
  const deskLegL = new THREE.Mesh(deskLegGeo, mats.cardMonolith);
  deskLegL.position.set(-0.44, 0.37, -0.25);
  const deskLegR = new THREE.Mesh(deskLegGeo, mats.cardMonolith);
  deskLegR.position.set(0.64, 0.37, -0.25);
  const lampStrip = new THREE.Mesh(lampBarGeo, mats.warmBeacon);
  lampStrip.position.set(0.45, 0.8, -0.42);

  const chairSeat = new THREE.Mesh(chairSeatGeo, mats.cardMonolith);
  chairSeat.position.set(0.08, 0.46, 0.34);
  const chairBack = new THREE.Mesh(chairBackGeo, mats.cardMonolith);
  chairBack.position.set(0.08, 0.7, 0.53);
  [
    [-0.1, 0.16],
    [0.26, 0.16],
    [-0.1, 0.52],
    [0.26, 0.52],
  ].forEach(([lx, lz]) => {
    const leg = new THREE.Mesh(chairLegGeo, mats.mutedSilver);
    leg.position.set(lx, 0.22, lz);
    roomGroup.add(leg);
  });

  roomGroup.add(
    roomFloor,
    backWall,
    sideWallFront,
    sideWallRear,
    sideHeader,
    windowPane,
    windowGlow,
    deskTop,
    deskLegL,
    deskLegR,
    lampStrip,
    chairSeat,
    chairBack,
  );

  // Interactive Connected 3D Skill System (Chapter 03: z = -28.5)
  const skillStructure = new THREE.Group();
  skillStructure.position.set(-1.7, 1.55, -28.5);
  scene.add(skillStructure);

  const skillCoreGeo = new THREE.OctahedronGeometry(0.26, 0);
  const skillSpindleGeo = new THREE.CylinderGeometry(0.018, 0.018, 1.25, 10);
  const skillNodeGeo = new THREE.BoxGeometry(0.09, 0.09, 0.09);
  const skillHitGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.24, 16);
  const hitMat = new THREE.MeshBasicMaterial({ visible: false });
  disposables.push(skillCoreGeo, skillSpindleGeo, skillNodeGeo, skillHitGeo);

  skillStructure.add(
    new THREE.Mesh(skillCoreGeo, mats.mutedSilver),
    new THREE.Mesh(skillSpindleGeo, mats.desaturatedBlue),
  );

  const ringRadii = [0.55, 0.72, 0.88, 1.04, 1.2];
  const ringYOffsets = [0.46, 0.23, 0, -0.23, -0.46];

  ringRadii.forEach((radius, idx) => {
    const ringGeo = new THREE.TorusGeometry(radius, 0.018, 14, 56);
    disposables.push(ringGeo);

    const ringGroup = new THREE.Group();
    ringGroup.position.set(0, ringYOffsets[idx], 0);
    skillStructure.add(ringGroup);

    const torus = new THREE.Mesh(
      ringGeo,
      idx === 0 ? mats.desaturatedBlue : mats.mutedSilver,
    );
    torus.rotation.x = Math.PI / 2 - 0.18;
    ringGroup.add(torus);

    const nodeMesh = new THREE.Mesh(skillNodeGeo, mats.desaturatedBlue);
    const angle = idx * ((Math.PI * 2) / 5);
    nodeMesh.position.set(
      Math.cos(angle) * radius,
      0,
      Math.sin(angle) * radius,
    );
    ringGroup.add(nodeMesh);

    const hitMesh = new THREE.Mesh(skillHitGeo, hitMat);
    hitMesh.layers.set(1);
    hitMesh.userData = { type: "skill", index: idx };
    ringGroup.add(hitMesh);
    interactiveHitMeshes.push(hitMesh);

    skillRings.push({ index: idx, group: ringGroup, accentMesh: torus });
  });

  // 9 Floating Smoked-Glass Project Monoliths (Chapter 04: z = -39.8 to -45.4)
  const panelGlassGeo = new THREE.BoxGeometry(1.05, 1.42, 0.035);
  const panelBackGeo = new THREE.BoxGeometry(0.95, 1.3, 0.025);
  const panelTrimGeo = new THREE.BoxGeometry(1.08, 0.028, 0.055);
  const panelHitGeo = new THREE.BoxGeometry(1.22, 1.6, 0.35);
  disposables.push(panelGlassGeo, panelBackGeo, panelTrimGeo, panelHitGeo);

  [
    { pos: [-2.1, 1.64, -39.8], rotY: 0.34 },
    { pos: [2.1, 1.64, -39.8], rotY: -0.34 },
    { pos: [-2.42, 1.72, -41.2], rotY: 0.28 },
    { pos: [2.42, 1.72, -41.2], rotY: -0.28 },
    { pos: [-2.25, 1.66, -42.6], rotY: 0.22 },
    { pos: [2.25, 1.66, -42.6], rotY: -0.22 },
    { pos: [-1.95, 1.62, -44.0], rotY: 0.16 },
    { pos: [1.95, 1.62, -44.0], rotY: -0.16 },
    { pos: [0, 2.38, -45.4], rotY: 0 },
  ].forEach((cfg, idx) => {
    const group = new THREE.Group();
    const basePos = new THREE.Vector3(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
    group.position.copy(basePos);
    group.rotation.y = cfg.rotY;
    scene.add(group);

    const backing = new THREE.Mesh(panelBackGeo, mats.cardMonolith);
    backing.castShadow = !isMobile;
    const glass = new THREE.Mesh(panelGlassGeo, mats.smokedGlass);
    glass.position.z = 0.03;
    glass.renderOrder = 2;

    const topTrim = new THREE.Mesh(panelTrimGeo, mats.mutedSilver);
    topTrim.position.set(0, 0.72, 0.015);
    const bottomTrim = new THREE.Mesh(panelTrimGeo, mats.mutedSilver);
    bottomTrim.position.set(0, -0.72, 0.015);

    const hitMesh = new THREE.Mesh(panelHitGeo, hitMat);
    hitMesh.layers.set(1);
    hitMesh.userData = { type: "project", index: idx };

    group.add(backing, glass, topTrim, bottomTrim, hitMesh);
    interactiveHitMeshes.push(hitMesh);

    projectMonoliths.push({
      index: idx,
      group,
      basePos,
      accentMesh: topTrim,
    });
  });

  // Business & Operations Architectural Steles (Chapter 05: z = -56.5)
  const achGroup = new THREE.Group();
  achGroup.position.set(-1.75, 0, -56.5);
  scene.add(achGroup);
  const steleGeo1 = new THREE.BoxGeometry(0.45, 2.1, 0.14);
  const steleGeo2 = new THREE.BoxGeometry(0.45, 1.65, 0.14);
  const steleCapGeo = new THREE.BoxGeometry(0.49, 0.04, 0.18);
  disposables.push(steleGeo1, steleGeo2, steleCapGeo);

  const stele1 = new THREE.Mesh(steleGeo1, mats.cardMonolith);
  stele1.position.set(-0.35, 1.05, -0.2);
  stele1.castShadow = !isMobile;
  const stele1Cap = new THREE.Mesh(steleCapGeo, mats.mutedSilver);
  stele1Cap.position.set(-0.35, 2.12, -0.2);
  const stele2 = new THREE.Mesh(steleGeo2, mats.cardMonolith);
  stele2.position.set(0.42, 0.825, 0.25);
  stele2.castShadow = !isMobile;
  const stele2Cap = new THREE.Mesh(steleCapGeo, mats.desaturatedBlue);
  stele2Cap.position.set(0.42, 1.67, 0.25);
  achGroup.add(stele1, stele1Cap, stele2, stele2Cap);

  // Leadership Columns & SWEOrbit Publication Folio (Chapter 06: z = -69.5 to -72.2)
  const leadGroup = new THREE.Group();
  leadGroup.position.set(1.65, 0, -69.5);
  scene.add(leadGroup);
  [0.85, 1.35, 1.95].forEach((h, idx) => {
    const tGeo = new THREE.BoxGeometry(0.32, h, 0.32);
    const capGeo = new THREE.BoxGeometry(0.36, 0.03, 0.36);
    disposables.push(tGeo, capGeo);
    const tier = new THREE.Mesh(tGeo, mats.cardMonolith);
    tier.position.set((idx - 1) * 0.52, h / 2, (1 - idx) * 0.32);
    tier.castShadow = !isMobile;
    const cap = new THREE.Mesh(
      capGeo,
      idx === 2 ? mats.mutedSilver : mats.desaturatedBlue,
    );
    cap.position.set((idx - 1) * 0.52, h + 0.015, (1 - idx) * 0.32);
    leadGroup.add(tier, cap);
  });

  // SWEOrbit — Editorial Folio Display
  const pubGroup = new THREE.Group();
  pubGroup.position.set(2.05, 0, -72.3);
  pubGroup.rotation.y = -0.38;
  scene.add(pubGroup);

  const pubPedestalGeo = new THREE.BoxGeometry(0.9, 0.72, 0.65);
  const pubCoverGeo = new THREE.BoxGeometry(0.68, 0.94, 0.055);
  const pubSpineGeo = new THREE.BoxGeometry(0.06, 0.95, 0.075);
  const pubPageEdgeGeo = new THREE.BoxGeometry(0.62, 0.9, 0.065);
  disposables.push(pubPedestalGeo, pubCoverGeo, pubSpineGeo, pubPageEdgeGeo);

  const pubPedestal = new THREE.Mesh(pubPedestalGeo, mats.architectureBasalt);
  pubPedestal.position.set(0, 0.36, 0);
  const pubPages = new THREE.Mesh(pubPageEdgeGeo, mats.mutedSilver);
  pubPages.position.set(0.02, 1.32, 0);
  pubPages.rotation.x = -0.22;
  const pubCover = new THREE.Mesh(pubCoverGeo, mats.smokedGlass);
  pubCover.position.set(0, 1.32, 0.015);
  pubCover.rotation.x = -0.22;
  const pubSpine = new THREE.Mesh(pubSpineGeo, mats.desaturatedBlue);
  pubSpine.position.set(-0.33, 1.32, 0.01);
  pubSpine.rotation.x = -0.22;
  pubGroup.add(pubPedestal, pubPages, pubCover, pubSpine);

  // Interactive 3D Timeline Spine & Memory Archive Artifacts (Chapter 07: z = -84.0 to -88.5)
  const timelineGroup = new THREE.Group();
  timelineGroup.position.set(-1.85, 0, -86.0);
  scene.add(timelineGroup);

  const spineGeo = new THREE.BoxGeometry(0.04, 0.04, 3.8);
  const nodeGeo = new THREE.OctahedronGeometry(0.17, 0);
  const nodeHitGeo = new THREE.SphereGeometry(0.32, 10, 10);
  disposables.push(spineGeo, nodeGeo, nodeHitGeo);

  const spineBar = new THREE.Mesh(spineGeo, mats.mutedSilver);
  spineBar.position.set(0, 0.65, 0);
  timelineGroup.add(spineBar);

  [-1.2, 1.2].forEach((zOff, idx) => {
    const nGroup = new THREE.Group();
    nGroup.position.set(0, 0.75 + idx * 0.28, zOff);
    timelineGroup.add(nGroup);

    const nodeMesh = new THREE.Mesh(
      nodeGeo,
      idx === 0 ? mats.desaturatedBlue : mats.mutedSilver,
    );
    const hitMesh = new THREE.Mesh(nodeHitGeo, hitMat);
    hitMesh.layers.set(1);
    hitMesh.userData = { type: "timeline-year", index: idx };

    nGroup.add(nodeMesh, hitMesh);
    interactiveHitMeshes.push(hitMesh);
    timelineNodes.push({ index: idx, group: nGroup, mesh: nodeMesh });
  });

  // 5 Interactive Floating Memory Archive Objects
  const memGlassGeo = new THREE.BoxGeometry(0.42, 0.56, 0.05);
  const memFrameGeo = new THREE.BoxGeometry(0.45, 0.025, 0.065);
  const memHitGeo = new THREE.BoxGeometry(0.58, 0.72, 0.28);
  disposables.push(memGlassGeo, memFrameGeo, memHitGeo);

  for (let i = 0; i < 5; i++) {
    const mGroup = new THREE.Group();
    const angle = (i - 2) * 0.34;
    const basePos = new THREE.Vector3(
      -2.25 + Math.cos(angle) * 0.45,
      1.95 + (i % 2) * 0.28,
      -87.8 + i * 0.85,
    );
    mGroup.position.copy(basePos);
    mGroup.rotation.y = 0.45;
    scene.add(mGroup);

    const pane = new THREE.Mesh(memGlassGeo, mats.smokedGlass);
    const topBar = new THREE.Mesh(memFrameGeo, mats.mutedSilver);
    topBar.position.y = 0.29;
    const hitMesh = new THREE.Mesh(memHitGeo, hitMat);
    hitMesh.layers.set(1);
    hitMesh.userData = { type: "memory", index: i };

    mGroup.add(pane, topBar, hitMesh);
    interactiveHitMeshes.push(hitMesh);
    memoryObjects.push({
      index: i,
      group: mGroup,
      basePos,
      accentMesh: topBar,
    });
  }

  // Atmospheric Dust Particles (simplified count on mobile)
  const particleCount = isMobile ? 130 : 260;
  const positions = new Float32Array(particleCount * 3);
  let seed = 777;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (rand() - 0.5) * 10;
    positions[i * 3 + 1] = 0.2 + rand() * 4.5;
    positions[i * 3 + 2] = 6 - rand() * 114;
  }
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  disposables.push(particleGeo);
  const particles = new THREE.Points(particleGeo, mats.particleMat);
  scene.add(particles);

  return {
    floatingGeos,
    skillStructure,
    skillRings,
    projectMonoliths,
    timelineNodes,
    memoryObjects,
    particles,
    interactiveHitMeshes,
  };
}

// ============================================================================
// 6. PROCEDURAL CLASSICAL CHAMBER THEME (WEB AUDIO API)
// ============================================================================
function createAmbientSoundscape() {
  let ctx = null;
  let masterGain = null;
  let dryBus = null;
  let reverbBus = null;
  let chamberFilter = null;
  let stringBedGain = null;
  let schedulerTimer = 0;
  let isPlaying = false;
  let userMuted = false;
  let journeyProgress = 0;
  let currentStep = 0;
  let nextStepTime = 0;

  const TARGET_MASTER_GAIN = 0.28;
  const STEP_DURATION = 0.54; // ~111 eighth-notes/min (unhurried adagio 6/8)

  // 8-bar D-minor classical nocturne progression (6 eighth-note steps per bar)
  const SCORE = [
    {
      strings: [146.83, 220.0], // Dm: D3 + A3
      arp: [146.83, 220.0, 293.66, 349.23, 220.0, 293.66],
      melody: [440.0, null, null, 349.23, null, null],
    },
    {
      strings: [130.81, 220.0], // Am/C: C3 + A3
      arp: [130.81, 220.0, 329.63, 440.0, 329.63, 220.0],
      melody: [329.63, null, null, 392.0, null, 440.0],
    },
    {
      strings: [116.54, 174.61], // Bbmaj7: Bb2 + F3
      arp: [116.54, 174.61, 233.08, 293.66, 349.23, 293.66],
      melody: [349.23, null, 587.33, null, 523.25, null],
    },
    {
      strings: [110.0, 164.81], // A7sus4 -> A7: A2 + E3
      arp: [110.0, 164.81, 220.0, 293.66, 277.18, 220.0],
      melody: [466.16, null, null, 440.0, null, null],
    },
    {
      strings: [98.0, 196.0], // Gm7: G2 + G3
      arp: [98.0, 146.83, 233.08, 293.66, 349.23, 293.66],
      melody: [392.0, null, null, 466.16, null, null],
    },
    {
      strings: [174.61, 220.0], // Dm/F: F3 + A3
      arp: [174.61, 220.0, 293.66, 349.23, 293.66, 220.0],
      melody: [440.0, null, null, 349.23, null, 329.63],
    },
    {
      strings: [98.0, 164.81], // Gm6 / Em7b5 color: G2 + E3
      arp: [98.0, 164.81, 233.08, 293.66, 233.08, 164.81],
      melody: [329.63, null, 392.0, null, 349.23, null],
    },
    {
      strings: [110.0, 164.81], // A7: A2 + E3
      arp: [110.0, 164.81, 220.0, 277.18, 329.63, 220.0],
      melody: [329.63, null, null, 277.18, null, null],
    },
  ];

  const toggleBtn = document.getElementById("sound-toggle");
  const labelEl = document.getElementById("sound-label");
  const iconOn = document.getElementById("sound-icon-on");
  const iconOff = document.getElementById("sound-icon-off");

  function updateToggleUI() {
    if (!toggleBtn) return;
    toggleBtn.setAttribute("aria-pressed", String(isPlaying));
    if (labelEl) labelEl.textContent = isPlaying ? "Sound: On" : "Sound: Off";
    if (iconOn) iconOn.classList.toggle("hidden", !isPlaying);
    if (iconOff) iconOff.classList.toggle("hidden", isPlaying);
  }

  function createHallImpulse(audioCtx, durationSec) {
    const length = Math.floor(audioCtx.sampleRate * durationSec);
    const impulse = audioCtx.createBuffer(2, length, audioCtx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const data = impulse.getChannelData(ch);
      let lp = 0;
      for (let i = 0; i < length; i++) {
        const t = i / length;
        const env = Math.pow(1 - t, 2.6) * (i < 900 ? i / 900 : 1);
        const white = Math.random() * 2 - 1;
        lp = lp * 0.65 + white * 0.35;
        data[i] = lp * env;
      }
    }
    return impulse;
  }

  function buildGraph() {
    if (ctx) return true;
    const AudioCtx =
      window.AudioContext ||
      /** @type {typeof AudioContext | undefined} */ (
        /** @type {any} */ (window).webkitAudioContext
      );
    if (!AudioCtx) return false;

    ctx = new AudioCtx();

    const compressor = ctx.createDynamicsCompressor();
    compressor.threshold.setValueAtTime(-16, ctx.currentTime);
    compressor.knee.setValueAtTime(18, ctx.currentTime);
    compressor.ratio.setValueAtTime(3, ctx.currentTime);
    compressor.attack.setValueAtTime(0.015, ctx.currentTime);
    compressor.release.setValueAtTime(0.25, ctx.currentTime);
    compressor.connect(ctx.destination);

    masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
    masterGain.connect(compressor);

    chamberFilter = ctx.createBiquadFilter();
    chamberFilter.type = "lowpass";
    chamberFilter.frequency.setValueAtTime(1950, ctx.currentTime);
    chamberFilter.Q.setValueAtTime(0.55, ctx.currentTime);
    chamberFilter.connect(masterGain);

    dryBus = ctx.createGain();
    dryBus.gain.setValueAtTime(0.76, ctx.currentTime);
    dryBus.connect(chamberFilter);

    const convolver = ctx.createConvolver();
    convolver.buffer = createHallImpulse(ctx, 2.6);

    const reverbTone = ctx.createBiquadFilter();
    reverbTone.type = "lowpass";
    reverbTone.frequency.setValueAtTime(1800, ctx.currentTime);

    reverbBus = ctx.createGain();
    reverbBus.gain.setValueAtTime(0.42, ctx.currentTime);
    reverbBus.connect(convolver);
    convolver.connect(reverbTone);
    reverbTone.connect(chamberFilter);

    stringBedGain = ctx.createGain();
    stringBedGain.gain.setValueAtTime(0.42, ctx.currentTime);
    stringBedGain.connect(dryBus);
    stringBedGain.connect(reverbBus);

    return true;
  }

  function playPianoNote(freq, startTime, duration, velocity) {
    if (!ctx || !dryBus || !reverbBus) return;

    const noteGain = ctx.createGain();
    noteGain.gain.setValueAtTime(0.0001, startTime);
    noteGain.gain.linearRampToValueAtTime(velocity, startTime + 0.014);
    noteGain.gain.exponentialRampToValueAtTime(
      Math.max(velocity * 0.28, 0.001),
      startTime + duration * 0.45,
    );
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    const toneFilter = ctx.createBiquadFilter();
    toneFilter.type = "lowpass";
    const brightCutoff = Math.min(freq * (3.6 + journeyProgress * 1.4), 2400);
    const warmCutoff = Math.max(freq * 1.55, 320);
    toneFilter.frequency.setValueAtTime(brightCutoff, startTime);
    toneFilter.frequency.exponentialRampToValueAtTime(
      warmCutoff,
      startTime + Math.min(duration * 0.55, 1.3),
    );
    toneFilter.Q.setValueAtTime(0.6, startTime);

    toneFilter.connect(noteGain);
    noteGain.connect(dryBus);
    noteGain.connect(reverbBus);

    const partials = [
      { mult: 1, type: "sine", amp: 0.72, decay: duration },
      { mult: 2, type: "sine", amp: 0.22, decay: duration * 0.62 },
      { mult: 3, type: "triangle", amp: 0.07, decay: duration * 0.36 },
    ];

    partials.forEach((p) => {
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const pGain = ctx.createGain();
      osc.type = /** @type {OscillatorType} */ (p.type);
      osc.frequency.setValueAtTime(freq * p.mult, startTime);
      pGain.gain.setValueAtTime(p.amp, startTime);
      pGain.gain.exponentialRampToValueAtTime(0.0001, startTime + p.decay);
      osc.connect(pGain);
      pGain.connect(toneFilter);
      osc.start(startTime);
      osc.stop(startTime + p.decay + 0.05);
    });
  }

  function playChamberStrings(freqs, startTime, barDuration) {
    if (!ctx || !stringBedGain) return;

    const padFilter = ctx.createBiquadFilter();
    padFilter.type = "lowpass";
    padFilter.frequency.setValueAtTime(520 + journeyProgress * 260, startTime);
    padFilter.Q.setValueAtTime(0.5, startTime);

    const env = ctx.createGain();
    env.gain.setValueAtTime(0.0001, startTime);
    env.gain.linearRampToValueAtTime(0.11, startTime + 1.05);
    env.gain.setValueAtTime(0.11, startTime + barDuration - 0.55);
    env.gain.exponentialRampToValueAtTime(
      0.0001,
      startTime + barDuration + 0.85,
    );

    padFilter.connect(env);
    env.connect(stringBedGain);

    freqs.forEach((freq) => {
      [-4.5, 4.5].forEach((cents) => {
        if (!ctx) return;
        const osc = ctx.createOscillator();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, startTime);
        osc.detune.setValueAtTime(cents, startTime);
        osc.connect(padFilter);
        osc.start(startTime);
        osc.stop(startTime + barDuration + 0.9);
      });
    });
  }

  function scheduleStep(stepIndex, time) {
    const totalSteps = SCORE.length * 6;
    const wrapped = ((stepIndex % totalSteps) + totalSteps) % totalSteps;
    const barIdx = Math.floor(wrapped / 6);
    const beatInBar = wrapped % 6;
    const bar = SCORE[barIdx];

    if (beatInBar === 0) {
      playChamberStrings(bar.strings, time, STEP_DURATION * 6);
    }

    const arpFreq = bar.arp[beatInBar];
    if (arpFreq) {
      const isDownbeat = beatInBar === 0;
      playPianoNote(
        arpFreq,
        time,
        isDownbeat ? 2.9 : 2.1,
        isDownbeat ? 0.24 : 0.16,
      );
    }

    const melFreq = bar.melody[beatInBar];
    if (melFreq) {
      playPianoNote(melFreq, time + 0.012, 3.0, 0.22);
    }
  }

  function runScheduler() {
    if (!ctx || !isPlaying) return;
    const lookahead = 0.26;
    while (nextStepTime < ctx.currentTime + lookahead) {
      scheduleStep(currentStep, nextStepTime);
      nextStepTime += STEP_DURATION;
      currentStep += 1;
    }
  }

  function startScheduler() {
    if (!ctx) return;
    window.clearInterval(schedulerTimer);
    nextStepTime = ctx.currentTime + 0.03;
    runScheduler();
    schedulerTimer = window.setInterval(runScheduler, 110);
  }

  function stopScheduler() {
    window.clearInterval(schedulerTimer);
    schedulerTimer = 0;
  }

  function startAudioFromGesture() {
    if (!buildGraph() || !ctx || !masterGain) return;

    const finishStart = () => {
      if (!ctx || !masterGain || ctx.state !== "running") return;
      cleanupGestureListeners();
      const now = ctx.currentTime;
      masterGain.gain.cancelScheduledValues(now);
      masterGain.gain.setValueAtTime(
        Math.max(masterGain.gain.value, 0.0001),
        now,
      );
      masterGain.gain.linearRampToValueAtTime(TARGET_MASTER_GAIN, now + 0.9);
      if (!isPlaying) {
        isPlaying = true;
        startScheduler();
      }
      updateToggleUI();
    };

    if (ctx.state === "suspended") {
      ctx
        .resume()
        .then(finishStart)
        .catch(() => {});
    } else {
      finishStart();
    }
  }

  function fadeOut() {
    isPlaying = false;
    stopScheduler();
    updateToggleUI();
    if (!ctx || !masterGain) return;
    const now = ctx.currentTime;
    masterGain.gain.cancelScheduledValues(now);
    masterGain.gain.setValueAtTime(
      Math.max(masterGain.gain.value, 0.0001),
      now,
    );
    masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.35);
  }

  const gestureEvents = ["pointerdown", "click", "keydown", "touchend"];

  function cleanupGestureListeners() {
    gestureEvents.forEach((evt) => {
      window.removeEventListener(evt, startOnInteraction);
    });
  }

  function startOnInteraction(event) {
    const target = event?.target instanceof HTMLElement ? event.target : null;
    if (target && target.closest("#sound-toggle")) {
      return;
    }
    if (userMuted || isPlaying) {
      cleanupGestureListeners();
      return;
    }
    startAudioFromGesture();
  }

  function toggle() {
    cleanupGestureListeners();
    if (isPlaying) {
      userMuted = true;
      fadeOut();
    } else {
      userMuted = false;
      startAudioFromGesture();
    }
  }

  function setJourneyDepth(progress) {
    journeyProgress = THREE.MathUtils.clamp(progress, 0, 1);
    if (!ctx || !chamberFilter || !stringBedGain || !isPlaying) return;
    const now = ctx.currentTime;
    const cutoff = 1650 + journeyProgress * 750;
    chamberFilter.frequency.setTargetAtTime(cutoff, now, 0.35);
    stringBedGain.gain.setTargetAtTime(0.38 + journeyProgress * 0.16, now, 0.4);
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggle();
    });
  }

  document.addEventListener("visibilitychange", () => {
    if (!ctx || !masterGain) return;
    if (document.hidden && isPlaying) {
      stopScheduler();
      masterGain.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.12);
    } else if (!document.hidden && isPlaying && !userMuted) {
      const resumeAndPlay = () => {
        if (!ctx || !masterGain || !isPlaying || userMuted) return;
        masterGain.gain.setTargetAtTime(
          TARGET_MASTER_GAIN,
          ctx.currentTime,
          0.45,
        );
        startScheduler();
      };
      if (ctx.state === "suspended") {
        ctx
          .resume()
          .then(resumeAndPlay)
          .catch(() => {});
      } else {
        resumeAndPlay();
      }
    }
  });

  gestureEvents.forEach((evt) => {
    window.addEventListener(evt, startOnInteraction, { passive: true });
  });

  updateToggleUI();
  return { setJourneyDepth };
}

const soundscape = createAmbientSoundscape();

// ============================================================================
// 7. WEBGL SCENE ENGINE & ANIMATION LOOP
// ============================================================================
function detectSoftwareWebGL() {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    if (!gl) return true;
    const ext = gl.getExtension("WEBGL_debug_renderer_info");
    const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
    const gpu = String(gl.getParameter(param) || "");
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
  } catch {
    return true;
  }
}

function initExperience() {
  const isSoftwareGl = detectSoftwareWebGL();
  setLoadingProgress(20);

  const scene = new THREE.Scene();
  const bgStart = new THREE.Color(0x08090d);
  const bgEnd = new THREE.Color(0x0d1018);
  const bgCurrent = bgStart.clone();
  const fog = new THREE.FogExp2(0x08090d, 0.043);
  scene.background = bgCurrent;
  scene.fog = fog;

  const width = webglMount?.clientWidth || window.innerWidth;
  const height = webglMount?.clientHeight || window.innerHeight;
  const isMobileInit = width < 768;

  const camera = new THREE.PerspectiveCamera(
    isMobileInit ? 52 : 42,
    width / Math.max(height, 1),
    0.1,
    135,
  );
  const first = SCENES[0];
  camera.position.set(
    ...(isMobileInit ? first.mobileCameraPos : first.cameraPos),
  );
  const currentLookAt = new THREE.Vector3(
    ...(isMobileInit ? first.mobileLookAt : first.lookAt),
  );
  camera.lookAt(currentLookAt);

  // Lighting (evolves from muted dark beginning toward warm clarity ahead)
  const hemiLight = new THREE.HemisphereLight(0x8fa4c4, 0x0c0e14, 0.42);
  scene.add(hemiLight);

  const followLight = new THREE.DirectionalLight(0xefe4d2, 1.28);
  followLight.position.set(4, 9, -6);
  followLight.castShadow = !isSoftwareGl;
  followLight.shadow.mapSize.set(
    isMobileInit ? 1024 : 2048,
    isMobileInit ? 1024 : 2048,
  );
  followLight.shadow.camera.near = 1;
  followLight.shadow.camera.far = 36;
  followLight.shadow.camera.left = -10;
  followLight.shadow.camera.right = 10;
  followLight.shadow.camera.top = 10;
  followLight.shadow.camera.bottom = -10;
  followLight.shadow.bias = -0.0005;
  followLight.shadow.normalBias = 0.02;
  scene.add(followLight, followLight.target);

  const rimColorStart = new THREE.Color(0x6f86a6);
  const rimColorEnd = new THREE.Color(0xc9d1df);
  const rimLight = new THREE.DirectionalLight(0x6f86a6, 0.8);
  rimLight.position.set(-6, 5, 4);
  scene.add(rimLight);

  const portalLight = new THREE.PointLight(0xefe4d2, 12, 48, 1.45);
  portalLight.position.set(0, 2.8, -104);
  scene.add(portalLight);

  let renderer;
  try {
    setLoadingProgress(45);
    renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: "high-performance",
    });
  } catch {
    if (webglFallback) webglFallback.classList.remove("hidden");
    setLoadingProgress(100);
    hideLoadingScreen();
    return;
  }

  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.setPixelRatio(
    isSoftwareGl
      ? 1
      : Math.min(window.devicePixelRatio, isMobileInit ? 1.5 : 2),
  );
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = !isSoftwareGl && !isMobileInit;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.domElement.style.display = "block";
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";

  if (webglMount) webglMount.appendChild(renderer.domElement);

  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  const roomEnv = new RoomEnvironment();
  const envRT = pmremGenerator.fromScene(roomEnv, 0.04);
  scene.environment = envRT.texture;
  scene.environmentIntensity = 0.45;
  roomEnv.dispose();
  pmremGenerator.dispose();

  setLoadingProgress(70);

  const disposables = [];
  const mats = createMaterials(renderer, isSoftwareGl);
  const world = buildWorld(scene, mats, disposables, isMobileInit);
  const figure = buildHumanFigure(mats, disposables);
  figure.root.position.set(0.32, 0, SCENES[0].figureZ);
  scene.add(figure.root);

  const raycaster = new THREE.Raycaster();
  raycaster.layers.set(1);

  if (!isSoftwareGl) {
    renderer.compile(scene, camera);
  }

  setLoadingProgress(100);
  window.setTimeout(hideLoadingScreen, 260);

  // Pre-allocated math helpers
  const targetCamPos = new THREE.Vector3();
  const targetLookAt = new THREE.Vector3();
  const p0 = new THREE.Vector3();
  const p1 = new THREE.Vector3();
  const l0 = new THREE.Vector3();
  const l1 = new THREE.Vector3();
  const pointerNdc = new THREE.Vector2();

  let scrollProgress = 0;
  let smoothedProgress = 0;
  let walkPhase = 0.4;
  let pointerX = 0;
  let pointerY = 0;
  let lastRaycastTime = 0;
  let frameId = 0;
  let contextLost = false;
  const clock = new THREE.Clock();

  function syncScroll() {
    const maxScroll = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1,
    );
    scrollProgress = THREE.MathUtils.clamp(window.scrollY / maxScroll, 0, 1);
    const sceneIdx = Math.min(
      SCENES.length - 1,
      Math.max(0, Math.round(scrollProgress * (SCENES.length - 1))),
    );
    updateActiveSceneUI(SCENES[sceneIdx].id);
  }

  window.addEventListener("scroll", syncScroll, { passive: true });
  window.addEventListener("resize", () => {
    syncScroll();
    const w = webglMount?.clientWidth || window.innerWidth;
    const h = webglMount?.clientHeight || window.innerHeight;
    const isMob = w < 768;
    camera.fov = isMob ? 52 : 42;
    camera.aspect = w / Math.max(h, 1);
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    renderer.setPixelRatio(
      isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2),
    );
  });

  window.addEventListener("pointermove", (event) => {
    const w = window.innerWidth || 1;
    const h = window.innerHeight || 1;
    pointerX = (event.clientX / w) * 2 - 1;
    pointerY = -(event.clientY / h) * 2 + 1;

    const now = performance.now();
    if (now - lastRaycastTime < 48) return;
    lastRaycastTime = now;

    const targetEl = event.target instanceof HTMLElement ? event.target : null;
    if (
      targetEl &&
      targetEl.closest('button, a, nav, [data-ui-interactive="true"]')
    ) {
      let changed = false;
      if (state.hoveredSkill !== null) {
        state.hoveredSkill = null;
        renderSkillsUI();
        changed = true;
      }
      if (state.hoveredProject !== null) {
        state.hoveredProject = null;
        renderProjectsUI();
        changed = true;
      }
      if (state.hoveredTimelineYear !== null) {
        state.hoveredTimelineYear = null;
        renderTimelineUI();
        changed = true;
      }
      if (state.hoveredMemory !== null) {
        state.hoveredMemory = null;
        renderMemoryUI();
        changed = true;
      }
      if (changed) document.body.style.cursor = "";
      document.body.style.cursor = "";
      return;
    }

    pointerNdc.set(pointerX, pointerY);
    raycaster.setFromCamera(pointerNdc, camera);
    const hits = raycaster.intersectObjects(world.interactiveHitMeshes, false);

    if (hits.length > 0) {
      const { type, index } = hits[0].object.userData;
      if (type !== "skill" && state.hoveredSkill !== null) {
        state.hoveredSkill = null;
        renderSkillsUI();
      }
      if (type !== "project" && state.hoveredProject !== null) {
        state.hoveredProject = null;
        renderProjectsUI();
      }
      if (type !== "timeline-year" && state.hoveredTimelineYear !== null) {
        state.hoveredTimelineYear = null;
        renderTimelineUI();
      }
      if (type !== "memory" && state.hoveredMemory !== null) {
        state.hoveredMemory = null;
        renderMemoryUI();
      }

      if (type === "skill" && state.hoveredSkill !== index) {
        state.hoveredSkill = index;
        renderSkillsUI();
      } else if (type === "project" && state.hoveredProject !== index) {
        state.hoveredProject = index;
        renderProjectsUI();
      } else if (
        type === "timeline-year" &&
        state.hoveredTimelineYear !== index
      ) {
        state.hoveredTimelineYear = index;
        renderTimelineUI();
      } else if (type === "memory" && state.hoveredMemory !== index) {
        state.hoveredMemory = index;
        renderMemoryUI();
      }
      document.body.style.cursor = "pointer";
    } else {
      if (state.hoveredSkill !== null) {
        state.hoveredSkill = null;
        renderSkillsUI();
      }
      if (state.hoveredProject !== null) {
        state.hoveredProject = null;
        renderProjectsUI();
      }
      if (state.hoveredTimelineYear !== null) {
        state.hoveredTimelineYear = null;
        renderTimelineUI();
      }
      if (state.hoveredMemory !== null) {
        state.hoveredMemory = null;
        renderMemoryUI();
      }
      document.body.style.cursor = "";
    }
  });

  window.addEventListener("click", (event) => {
    const targetEl = event.target instanceof HTMLElement ? event.target : null;
    if (
      targetEl &&
      targetEl.closest('button, a, nav, [data-ui-interactive="true"]')
    ) {
      return;
    }
    const w = window.innerWidth || 1;
    const h = window.innerHeight || 1;
    pointerNdc.set((event.clientX / w) * 2 - 1, -(event.clientY / h) * 2 + 1);
    raycaster.setFromCamera(pointerNdc, camera);
    const hits = raycaster.intersectObjects(world.interactiveHitMeshes, false);
    if (hits.length > 0) {
      const { type, index } = hits[0].object.userData;
      if (type === "skill") {
        state.selectedSkill = index;
        renderSkillsUI();
      } else if (type === "project") {
        state.selectedProject = index;
        renderProjectsUI();
      } else if (type === "timeline-year") {
        state.archiveMode = "timeline";
        state.selectedTimelineYear = index;
        renderArchiveModeUI();
        renderTimelineUI();
      } else if (type === "memory") {
        state.archiveMode = "memory";
        state.selectedMemory = index;
        renderArchiveModeUI();
        renderMemoryUI();
      }
    }
  });

  renderer.domElement.addEventListener("webglcontextlost", (e) => {
    e.preventDefault();
    contextLost = true;
    cancelAnimationFrame(frameId);
    clearTimeout(frameId);
    if (webglFallback) webglFallback.classList.remove("hidden");
  });

  renderer.domElement.addEventListener("webglcontextrestored", () => {
    contextLost = false;
    if (webglFallback) webglFallback.classList.add("hidden");
    tick();
  });

  function afterDraw(cb) {
    const gl = renderer.getContext();
    if (!gl || typeof gl.fenceSync !== "function") {
      frameId = window.setTimeout(cb, 80);
      return;
    }
    const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
    gl.flush();
    const poll = () => {
      if (contextLost) return;
      const syncState = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
      if (syncState === gl.UNSIGNALED) {
        frameId = window.setTimeout(poll, 5);
      } else {
        if (sync) gl.deleteSync(sync);
        frameId = window.setTimeout(cb, 80);
      }
    };
    frameId = window.setTimeout(poll, 5);
  }

  function tick() {
    if (contextLost) return;

    const delta = Math.min(clock.getDelta(), 0.08);
    const elapsed = clock.getElapsedTime();
    const isMob = (webglMount?.clientWidth || window.innerWidth) < 768;
    const motionScale = state.reducedMotion ? 0 : 1;

    const prevSmoothed = smoothedProgress;
    smoothedProgress = THREE.MathUtils.damp(
      smoothedProgress,
      scrollProgress,
      state.reducedMotion ? 20 : 4.8,
      delta,
    );

    const totalSegments = SCENES.length - 1;
    const scaled = smoothedProgress * totalSegments;
    const idx0 = Math.min(Math.floor(scaled), totalSegments);
    const idx1 = Math.min(idx0 + 1, totalSegments);
    const localT = THREE.MathUtils.smoothstep(scaled - idx0, 0, 1);

    const s0 = SCENES[idx0];
    const s1 = SCENES[idx1];
    p0.set(...(isMob ? s0.mobileCameraPos : s0.cameraPos));
    p1.set(...(isMob ? s1.mobileCameraPos : s1.cameraPos));
    l0.set(...(isMob ? s0.mobileLookAt : s0.lookAt));
    l1.set(...(isMob ? s1.mobileLookAt : s1.lookAt));

    targetCamPos.lerpVectors(p0, p1, localT);
    targetLookAt.lerpVectors(l0, l1, localT);

    if (!state.reducedMotion && !isMob) {
      targetCamPos.x += pointerX * 0.24;
      targetCamPos.y += pointerY * 0.14;
    }

    camera.position.copy(targetCamPos);
    currentLookAt.copy(targetLookAt);
    camera.lookAt(currentLookAt);

    // Human figure movement & gait
    const figZ = THREE.MathUtils.lerp(s0.figureZ, s1.figureZ, localT);
    const figX = isMob
      ? 0
      : THREE.MathUtils.lerp(
          0.32,
          0,
          THREE.MathUtils.smoothstep(smoothedProgress, 0.25, 0.85),
        );
    figure.root.position.set(figX, 0, figZ);

    const scrollVelocity = Math.abs(smoothedProgress - prevSmoothed) * 65;
    walkPhase +=
      (0.95 + Math.min(scrollVelocity * 3.5, 4.0)) * delta * motionScale;
    figure.updateWalkCycle(walkPhase, motionScale);

    followLight.position.set(figX + 4.5, 9, figZ - 6);
    followLight.target.position.set(figX, 1, figZ);

    // Environmental & interactive animations
    world.floatingGeos.forEach((g) => {
      const { baseY, phase } = g.userData;
      g.rotation.y += delta * 0.14 * motionScale;
      g.position.y =
        baseY + Math.sin(elapsed * 0.6 + phase) * 0.12 * motionScale;
    });

    world.skillStructure.rotation.y += delta * 0.12 * motionScale;
    world.skillRings.forEach((ring) => {
      const active =
        state.hoveredSkill === ring.index || state.selectedSkill === ring.index;
      const nextScale = THREE.MathUtils.damp(
        ring.group.scale.x,
        active ? 1.12 : 1.0,
        7,
        delta,
      );
      ring.group.scale.setScalar(nextScale);
      ring.accentMesh.material = active
        ? mats.desaturatedBlue
        : mats.mutedSilver;
    });

    world.projectMonoliths.forEach((panel) => {
      const active =
        state.hoveredProject === panel.index ||
        state.selectedProject === panel.index;
      const targetY =
        panel.basePos.y +
        (active ? 0.18 : 0) +
        Math.sin(elapsed * 0.55 + panel.index * 0.9) * 0.03 * motionScale;
      panel.group.position.y = THREE.MathUtils.damp(
        panel.group.position.y,
        targetY,
        6,
        delta,
      );
      const nextScale = THREE.MathUtils.damp(
        panel.group.scale.x,
        active ? 1.07 : 1.0,
        6,
        delta,
      );
      panel.group.scale.setScalar(nextScale);
      panel.accentMesh.material = active
        ? mats.desaturatedBlue
        : mats.mutedSilver;
    });

    world.timelineNodes.forEach((node) => {
      const active =
        state.hoveredTimelineYear === node.index ||
        state.selectedTimelineYear === node.index;
      const nextScale = THREE.MathUtils.damp(
        node.group.scale.x,
        active ? 1.38 : 1.0,
        7,
        delta,
      );
      node.group.scale.setScalar(nextScale);
      node.mesh.rotation.y += delta * (active ? 0.8 : 0.25) * motionScale;
      node.mesh.material = active ? mats.desaturatedBlue : mats.mutedSilver;
    });

    world.memoryObjects.forEach((mem) => {
      const active =
        state.hoveredMemory === mem.index || state.selectedMemory === mem.index;
      const targetY =
        mem.basePos.y +
        (active ? 0.16 : 0) +
        Math.sin(elapsed * 0.7 + mem.index * 1.1) * 0.04 * motionScale;
      mem.group.position.y = THREE.MathUtils.damp(
        mem.group.position.y,
        targetY,
        6,
        delta,
      );
      const nextScale = THREE.MathUtils.damp(
        mem.group.scale.x,
        active ? 1.15 : 1.0,
        7,
        delta,
      );
      mem.group.scale.setScalar(nextScale);
      mem.accentMesh.material = active
        ? mats.desaturatedBlue
        : mats.mutedSilver;
    });

    world.particles.rotation.z = Math.sin(elapsed * 0.08) * 0.025 * motionScale;

    // Evolve darkness, fog clarity, and warm horizon light as the journey unfolds
    bgCurrent.lerpColors(bgStart, bgEnd, smoothedProgress);
    fog.color.copy(bgCurrent);
    fog.density = THREE.MathUtils.lerp(0.043, 0.02, smoothedProgress);
    hemiLight.intensity = THREE.MathUtils.lerp(0.42, 0.78, smoothedProgress);
    followLight.intensity = THREE.MathUtils.lerp(1.22, 1.48, smoothedProgress);
    rimLight.color.lerpColors(rimColorStart, rimColorEnd, smoothedProgress);
    rimLight.intensity = THREE.MathUtils.lerp(0.75, 1.05, smoothedProgress);
    portalLight.intensity = THREE.MathUtils.lerp(12, 28, smoothedProgress);
    mats.volumetricBeam.opacity = THREE.MathUtils.lerp(
      0.32,
      0.58,
      smoothedProgress,
    );

    soundscape.setJourneyDepth(smoothedProgress);

    renderer.render(scene, camera);

    if (isSoftwareGl) {
      afterDraw(tick);
    } else {
      frameId = requestAnimationFrame(tick);
    }
  }

  syncScroll();
  tick();
}

// ============================================================================
// 8. BOOTSTRAP
// ============================================================================
renderThinkingUI();
renderSkillsUI();
renderProjectsUI();
renderLeadershipUI();
renderArchiveModeUI();
renderTimelineUI();
renderMemoryUI();
renderVisitorUI();
initPanelVisibilityObserver();

const modeTimelineBtn = document.getElementById("mode-timeline-btn");
const modeMemoryBtn = document.getElementById("mode-memory-btn");
if (modeTimelineBtn && modeMemoryBtn) {
  modeTimelineBtn.addEventListener("click", () => {
    state.archiveMode = "timeline";
    renderArchiveModeUI();
  });
  modeMemoryBtn.addEventListener("click", () => {
    state.archiveMode = "memory";
    renderArchiveModeUI();
  });
}

document.addEventListener("click", (event) => {
  const target = event.target instanceof HTMLElement ? event.target : null;
  const navBtn = target?.closest("[data-nav]");
  if (navBtn) {
    const dest = navBtn.getAttribute("data-nav");
    if (dest) navigateToScene(dest);
  }
});

if (mobileToggle && mobileNav) {
  mobileToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("hidden") === false;
    mobileToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

window
  .matchMedia("(prefers-reduced-motion: reduce)")
  .addEventListener("change", (e) => {
    state.reducedMotion = e.matches;
    if (e.matches && state.activeSceneId) {
      const activePanel = document.getElementById(
        `panel-${state.activeSceneId}`,
      );
      if (activePanel && !activePanel.hasAttribute("hidden")) {
        activePanel.classList.add(
          "is-visible",
          "is-answer-revealed",
          "is-content-revealed",
        );
      }
    }
  });

initExperience();
