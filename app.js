/* ═══════════════════════════════════════════════════════════════
   Bashewam School — STAFF MANAGEMENT SYSTEM
   Application Logic  (Bilingual: English + Amharic)
═══════════════════════════════════════════════════════════════ */

/* ════════════════════════════════════
   TRANSLATIONS
════════════════════════════════════ */
const TRANSLATIONS = {
  en: {
    schoolName:       "Bashewam School",
    motto:            "We Are Ready For Change",
    chooseLabel:      "Select a Level or Department",
    backLabel:        "Home",
    switchLabel:      "Switch to Amharic",
    searchPlaceholder:"Search staff…",
    staffDir:         "Staff Directory",
    totalStaff:       "Total Staff",
    teachers:         "Teachers",
    supportStaff:     "Support Staff",
    staffWord:        "staff member",
    staffWordPlural:  "staff members",
    shown:            "shown",
    viewProfile:      "View Profile",
    academicQualification:"📘Academic qualification",
    almaMater:        "🎓 Alma mater",
    experience:       "⏳ Experience",
	bashewamTeachingExp:"📚 Bashewam Teaching Exp",
    level:            "🏫 Level",
    role:             "🎭 Role",
    callBtn:          "Call",
    sendEmailBtn:     "Send Email",
    noStaff:          "No staff found",
    noStaffSub:       "Try a different search or filter",
    callingMsg:       "📞 Calling",
    emailMsg:         "✉️ Opening email client…",
    founded:          "📅 Est. 1992",
    address:          "📍 Addis Ketema Sub-city, Woreda 13, Addis Ababa, Ethiopia",
    phoneBadge:       "☎️ +251 11 234 5678",
    levels: {
      all:    "All Levels",
      kg:     "KG / Pre-K",
      "g1-4": "Grade 1 – 4",
      "g5-8": "Grade 5 – 8",
      "g9-12":"Grade 9 – 12",
      admin:  "Administration"
    },
    roles: {
      all:       "All Staff",
      director:  "Directors",
      teacher:   "Teachers",
      librarian: "Librarians",
      cleaner:   "Cleaners",
      security:  "Security",
      admin:     "Admin Staff"
    },
    roleLabels: {
      director:  "Director",
      teacher:   "Teacher",
      librarian: "Librarian",
      cleaner:   "Cleaner",
      security:  "Security",
      admin:     "Admin"
    }
  },
  am: {
    schoolName:       "ብሩህ ወደፊት አካዳሚ",
    motto:            "አዕምሮን ማስተማር፣ ወደፊትን መገንባት",
    chooseLabel:      "ደረጃ ወይም ክፍል ይምረጡ",
    backLabel:        "መነሻ",
    switchLabel:      "ወደ እንግሊዝኛ ቀይር",
    searchPlaceholder:"ሰራተኛ ፈልግ…",
    staffDir:         "የሰራተኞች ማውጫ",
    totalStaff:       "ጠቅላላ ሰራተኞች",
    teachers:         "አስተማሪዎች",
    supportStaff:     "ድጋፍ ሰራተኞች",
    staffWord:        "ሰራተኛ",
    staffWordPlural:  "ሰራተኞች",
    shown:            "ታይቷል",
    viewProfile:      "መገለጫ ይመልከቱ",
    academicQualification:            "📞 ስልክ",
    almaMater:            "✉️ ኢሜይል",
    experience:       "⏳ ልምድ",
    bashewamTeachingExp:           "📅 የተቀጠሩት",
    level:            "🏫 ደረጃ",
    role:             "🎭 ሚና",
    callBtn:          "ደውል",
    sendEmailBtn:     "ኢሜይል ላክ",
    noStaff:          "ምንም ሰራተኛ አልተገኘም",
    noStaffSub:       "ሌላ ፍለጋ ወይም ማጣሪያ ይሞክሩ",
    callingMsg:       "📞 እየደወሉ ነው",
    emailMsg:         "✉️ ኢሜይል እያዘጋጀ ነው…",
    founded:          "📅 ዓ.ም. 1998",
    address:          "📍 123 የትምህርት መንገድ",
    phoneBadge:       "☎️ +1 (555) 234-5678",
    levels: {
      all:    "ሁሉም ደረጃዎች",
      kg:     "ኬጂ / ቅድመ-ኬ",
      "g1-4": "ክፍል 1 – 4",
      "g5-8": "ክፍል 5 – 8",
      "g9-12":"ክፍል 9 – 12",
      admin:  "አስተዳደር"
    },
    roles: {
      all:       "ሁሉም ሰራተኞች",
      director:  "ዳይሬክተሮች",
      teacher:   "አስተማሪዎች",
      librarian: "የቤተ-መጻሕፍት ሰራተኞች",
      cleaner:   "አጽጂዎች",
      security:  "ደህንነት",
      admin:     "የአስተዳደር ሰራተኞች"
    },
    roleLabels: {
      director:  "ዳይሬክተር",
      teacher:   "አስተማሪ",
      librarian: "የቤተ-መጻሕፍት",
      cleaner:   "አጽጂ",
      security:  "ደህንነት",
      admin:     "አስተዳዳሪ"
    }
  }
};

/* ════════════════════════════════════
   STATE
════════════════════════════════════ */
let currentLang  = "en";
let currentLevel = "all";
let currentRole  = "all";
let searchQuery  = "";
let modalStaff   = null;

/* shorthand: current translation object */
function T() { return TRANSLATIONS[currentLang]; }

/* ── DOM refs ── */
const langScreen   = document.getElementById("lang-screen");
const heroEl       = document.getElementById("hero");
const staffPageEl  = document.getElementById("staff-page");
const levelGrid    = document.getElementById("level-grid");
const staffGrid    = document.getElementById("staff-grid");
const roleFilterWrap=document.getElementById("role-filter");
const searchInput  = document.getElementById("search-input");
const modalOverlay = document.getElementById("modal-overlay");
const bannerIcon   = document.getElementById("banner-icon");
const bannerTitle  = document.getElementById("banner-title");
const bannerSub    = document.getElementById("banner-sub");
const bannerStyle  = document.getElementById("banner-style");
const statsTotal   = document.getElementById("stat-total");
const statsTeach   = document.getElementById("stat-teachers");
const statsOther   = document.getElementById("stat-other");
const toastEl      = document.getElementById("toast");
const topbarTitle  = document.getElementById("topbar-title");

/* ════════════════════════════════════
   LANGUAGE SELECTION
════════════════════════════════════ */
function selectLanguage(lang) {
  currentLang = lang;

  /* apply Amharic font class */
  if (lang === "am") {
    document.body.classList.add("lang-am");
    document.documentElement.lang = "am";
  } else {
    document.body.classList.remove("lang-am");
    document.documentElement.lang = "en";
  }

  /* animate out language screen */
  langScreen.classList.add("hidden");
  setTimeout(() => { langScreen.style.display = "none"; }, 520);

  /* show hero */
  heroEl.style.display = "";

  applyStaticTranslations();
  createParticles();
  buildHome();
}

/* Update all static/fixed text elements */
function applyStaticTranslations() {
  const t = T();
  document.getElementById("hero-school-name").textContent  = t.schoolName;
  document.getElementById("hero-motto").textContent        = t.motto;
  document.getElementById("hero-choose-label").textContent = t.chooseLabel;
  document.getElementById("badge-founded").textContent     = t.founded;
  document.getElementById("badge-address").textContent     = t.address;
  document.getElementById("badge-phone").textContent       = t.phoneBadge;
  document.getElementById("lang-switch-label").textContent = t.switchLabel;
  document.getElementById("back-label").textContent        = t.backLabel;
  document.getElementById("stat-total-lbl").textContent    = t.totalStaff;
  document.getElementById("stat-teachers-lbl").textContent = t.teachers;
  document.getElementById("stat-other-lbl").textContent    = t.supportStaff;
  searchInput.placeholder = t.searchPlaceholder;

  /* modal labels */
const academic = document.getElementById("lbl-academicQualification");
if (academic) academic.textContent = t.academicQualification;

const alma = document.getElementById("lbl-almaMater");
if (alma) alma.textContent = t.almaMater;

const exp = document.getElementById("lbl-exp");
if (exp) exp.textContent = t.experience;

const bashewam = document.getElementById("lbl-bashewamTeachingExp");
if (bashewam) bashewam.textContent = t.bashewamTeachingExp;

const level = document.getElementById("lbl-level");
if (level) level.textContent = t.level;

const role = document.getElementById("lbl-role");
if (role) role.textContent = t.role;
  
}

/* Language switcher on home page */
document.getElementById("lang-switch-btn").addEventListener("click", () => {
  const newLang = currentLang === "en" ? "am" : "en";
  selectLanguage(newLang);

  /* if already on staff page, re-render everything */
  if (staffPageEl.classList.contains("visible")) {
    buildRoleFilter();
    renderStaff();
  }
});

/* Language card clicks */
document.getElementById("lang-en").addEventListener("click", () => selectLanguage("en"));
document.getElementById("lang-am").addEventListener("click", () => selectLanguage("am"));

/* ════════════════════════════════════
   PARTICLES
════════════════════════════════════ */
function createParticles() {
  const container = document.querySelector(".particles");
  container.innerHTML = "";
  const colours = ["#6C63FF","#FF6B9D","#4ECDC4","#FF9F43","#26de81","#A29BFE"];
  for (let i = 0; i < 28; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 6 + 2;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      background:${colours[Math.floor(Math.random()*colours.length)]};
      animation-duration:${Math.random()*12+8}s;
      animation-delay:${Math.random()*10}s;
    `;
    container.appendChild(p);
  }
}

/* ════════════════════════════════════
   BUILD HOME PAGE
════════════════════════════════════ */
function buildHome() {
  levelGrid.innerHTML = "";
  const t = T();

  LEVELS.forEach(lvl => {
    const count = lvl.id === "all"
      ? STAFF.length
      : STAFF.filter(s => s.level === lvl.id).length;

    const label = t.levels[lvl.id] || lvl.id;

    const card = document.createElement("div");
    card.className = "level-card";
    card.style.setProperty("--card-color", lvl.color);
    card.dataset.level = lvl.id;
    card.innerHTML = `
      <span class="level-icon">${lvl.icon}</span>
      <div class="level-label">${label}</div>
      <span class="level-count">${count} ${count === 1 ? t.staffWord : t.staffWordPlural}</span>
    `;
    card.addEventListener("click", () => selectLevel(lvl.id));
    levelGrid.appendChild(card);
  });
}

/* ════════════════════════════════════
   NAVIGATE TO STAFF PAGE
════════════════════════════════════ */
function selectLevel(levelId) {
  currentLevel = levelId;
  currentRole  = "all";
  searchQuery  = "";
  searchInput.value = "";

  const lvl = LEVELS.find(l => l.id === levelId);
  const t   = T();

  bannerIcon.textContent  = lvl.icon;
  bannerTitle.textContent = t.levels[levelId] || levelId;
  bannerStyle.textContent = `:root { --banner-color: ${lvl.color}; }`;
  topbarTitle.textContent = `${lvl.icon} ${t.levels[levelId] || levelId}`;

  heroEl.style.display = "none";
  staffPageEl.classList.add("visible");

  buildRoleFilter();
  renderStaff();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {
  staffPageEl.classList.remove("visible");
  heroEl.style.display = "";
  currentLevel = "all";
  buildHome();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ════════════════════════════════════
   ROLE FILTER
════════════════════════════════════ */
function buildRoleFilter() {
  roleFilterWrap.innerHTML = "";
  const t = T();

  const pool = currentLevel === "all" ? STAFF : STAFF.filter(s => s.level === currentLevel);
  const presentRoles = new Set(pool.map(s => s.role));

  ROLES.forEach(role => {
    if (role.id !== "all" && !presentRoles.has(role.id)) return;

    const count = role.id === "all"
      ? pool.length
      : pool.filter(s => s.role === role.id).length;

    const label = t.roles[role.id] || role.id;

    const tab = document.createElement("button");
    tab.className = "role-tab" + (role.id === currentRole ? " active" : "");
    tab.dataset.role = role.id;
    tab.innerHTML = `${role.icon} ${label} <small>(${count})</small>`;
    tab.addEventListener("click", () => {
      currentRole = role.id;
      document.querySelectorAll(".role-tab").forEach(t => t.classList.toggle("active", t.dataset.role === role.id));
      renderStaff();
    });
    roleFilterWrap.appendChild(tab);
  });
}

/* ════════════════════════════════════
   RENDER STAFF CARDS
════════════════════════════════════ */
function getFilteredStaff() {
  let pool = STAFF;
  if (currentLevel !== "all") pool = pool.filter(s => s.level === currentLevel);
  if (currentRole  !== "all") pool = pool.filter(s => s.role  === currentRole);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    pool = pool.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.title.toLowerCase().includes(q) ||
      s.department.toLowerCase().includes(q)
    );
  }
  return pool;
}

function renderStaff() {
  const filtered = getFilteredStaff();
  const t = T();

  /* stats */
  statsTotal.textContent = filtered.length;
  statsTeach.textContent = filtered.filter(s => s.role === "teacher").length;
  statsOther.textContent = filtered.filter(s => s.role !== "teacher").length;

  /* banner sub */
  const count = filtered.length;
  bannerSub.textContent = `${count} ${count === 1 ? t.staffWord : t.staffWordPlural} ${t.shown}`;

  staffGrid.innerHTML = "";

  if (filtered.length === 0) {
    staffGrid.innerHTML = `
      <div class="empty-state">
        <span class="empty-state-icon">🔍</span>
        <h3>${t.noStaff}</h3>
        <p>${t.noStaffSub}</p>
      </div>`;
    return;
  }

  filtered.forEach((staff, i) => {
    const roleLabel = t.roleLabels[staff.role] || staff.role;

    const card = document.createElement("div");
    card.className = "staff-card";
    card.style.setProperty("--card-accent", staff.color);
    card.style.animationDelay = `${i * 0.04}s`;

    card.innerHTML = `
      <div class="card-accent-bar"></div>
      <div class="card-body">
        <div class="card-top">
          <div class="avatar-ring" style="background: linear-gradient(135deg, ${staff.color}, ${lighten(staff.color)})">
            ${staff.avatar}
          </div>
          <div class="card-info">
            <div class="card-name">${staff.name}</div>
            <div class="card-title">${staff.title}</div>
            <span class="card-role-badge">${roleLabel}</span>
          </div>
        </div>
        <div class="card-divider"></div>
        <div class="card-meta">
          <div class="meta-row"><span class="meta-icon">📘</span><span>${staff.academicQualification}</span></div>
          <div class="meta-row"><span class="meta-icon">🎓</span><span>${staff.almaMater}</span></div>
          <div class="meta-row"><span class="meta-icon">📅</span><span>${staff.experience}</span></div
        </div>
      </div>
      <div class="card-footer">
        <span class="card-dept">${staff.department}</span>
        <button class="view-btn" data-id="${staff.id}">${t.viewProfile}</button>
      </div>
    `;

    card.querySelector(".view-btn").addEventListener("click", e => { e.stopPropagation(); openModal(staff.id); });
    card.addEventListener("click", () => openModal(staff.id));
    staffGrid.appendChild(card);
  });
}

/* hex lightener for gradient */
function lighten(hex) {
  let r = parseInt(hex.slice(1,3),16);
  let g = parseInt(hex.slice(3,5),16);
  let b = parseInt(hex.slice(5,7),16);
  return `#${Math.min(255,r+60).toString(16).padStart(2,'0')}${Math.min(255,g+60).toString(16).padStart(2,'0')}${Math.min(255,b+60).toString(16).padStart(2,'0')}`;
}

/* ════════════════════════════════════
   MODAL
════════════════════════════════════ */
const roleIcons = {
  director:"🏆", teacher:"📖", librarian:"📕", cleaner:"🧹", security:"🛡️", admin:"💼"
};

function openModal(staffId) {
  const staff = STAFF.find(s => s.id === staffId);
  if (!staff) return;
  modalStaff = staff;
  const t = T();

  document.getElementById("m-avatar").textContent = staff.avatar;
  document.getElementById("m-avatar").style.background =
    `linear-gradient(135deg, ${staff.color}, ${lighten(staff.color)})`;

  document.getElementById("m-name").textContent  = staff.name;
  document.getElementById("m-title").textContent = staff.title;
  document.getElementById("m-dept").textContent  = staff.department;
  document.getElementById("m-bio").textContent   = staff.bio;
  const academic = document.getElementById("m-academicQualification");

if (academic) {
  academic.textContent = staff.academicQualification;
}
  document.getElementById("m-almaMater").textContent = staff.almaMater;
  document.getElementById("m-exp").textContent   = staff.experience;
  document.getElementById("m-bashewamTeachingExp").textContent = staff.bashewamTeachingExp;
  const level = document.getElementById("m-level");

if (level) {
  level.textContent =
    t.levels[staff.level] || staff.level;
}
  const role = document.getElementById("m-role");

if (role) {
  role.textContent =
    (roleIcons[staff.role] || "") + " " +
    (t.roleLabels[staff.role] || staff.role);
}

  /* refresh modal label text */
  document.getElementById("lbl-academicQualification").textContent      = t.academicQualification;
  document.getElementById("lbl-almaMater").textContent      = t.almaMater;
  document.getElementById("lbl-exp").textContent        = t.experience;
  document.getElementById("lbl-bashewamTeachingExp").textContent     = t.bashewamTeachingExp;
  document.getElementById("lbl-level").textContent      = t.level;
  document.getElementById("lbl-role").textContent       = t.role;
  

  document.documentElement.style.setProperty("--modal-accent", staff.color);
  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
  modalStaff = null;
}

/* ════════════════════════════════════
   TOAST
════════════════════════════════════ */
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.className = "toast show";
  clearTimeout(toastEl._timer);
  toastEl._timer = setTimeout(() => {
    toastEl.classList.add("hide");
    setTimeout(() => { toastEl.className = "toast"; }, 350);
  }, 2400);
}

/* ════════════════════════════════════
   EVENT LISTENERS
════════════════════════════════════ */
document.getElementById("back-btn").addEventListener("click", goHome);

searchInput.addEventListener("input", e => {
  searchQuery = e.target.value.trim();
  renderStaff();
});

modalOverlay.addEventListener("click", e => { if (e.target === modalOverlay) closeModal(); });
document.getElementById("modal-close").addEventListener("click", closeModal);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
