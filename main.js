// Renders RESUME data (from resume.js) into the DOM.
// Follows the JSON Resume schema: https://jsonresume.org/schema/

(function () {
  const r = RESUME;
  const b = r.basics || {};

  // ── Helpers ────────────────────────────────────────────────
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function sectionTitle(title) {
    const row = el("div", "section-title-row");
    row.appendChild(el("h4", "section-title", title));
    return row;
  }

  function itemRow(dateText, contentEl) {
    const row = el("div", "item");
    row.appendChild(el("div", "item-date", dateText));
    const content = el("div", "item-content");
    content.appendChild(contentEl);
    row.appendChild(content);
    return row;
  }

  function yearRange(startDate, endDate) {
    const start = startDate ? startDate.split("-")[0] : "";
    const end = endDate ? endDate.split("-")[0] : "Present";
    if (!start) return end;
    if (start === end) return start;
    return start + "–" + end;
  }

  // ── Header ─────────────────────────────────────────────────
  const header = document.getElementById("header");
  header.appendChild(el("h1", "", b.name || ""));

  function metaLine(text) {
    const p = el("p", "header-meta");
    p.innerHTML = text;
    return p;
  }

  const parts = [];
  if (b.location)
    parts.push([b.location.city, b.location.region].filter(Boolean).join(", "));
  if (b.phone) parts.push(b.phone);
  if (b.email) parts.push(`<a href="mailto:${b.email}">${b.email}</a>`);
  if (parts.length) header.appendChild(metaLine(parts.join(" &#149; ")));

  if (b.profiles && b.profiles.length) {
    const links = b.profiles.map(
      (p) =>
        `<a href="${p.url}" target="_blank" rel="noopener noreferrer">${p.network}: ${p.username}</a>`,
    );
    header.appendChild(metaLine(links.join(" &#149; ")));
  }

  if (b.url) {
    header.appendChild(
      metaLine(
        `<a href="${b.url}" target="_blank" rel="noopener noreferrer">${b.url}</a>`,
      ),
    );
  }

  header.appendChild(el("hr"));

  // ── Summary ────────────────────────────────────────────────
  if (b.summary) {
    const sec = document.getElementById("summary-section");
    sec.appendChild(sectionTitle("Professional Summary"));
    const content = el("div");
    content.appendChild(el("p", "summary-text", b.summary));
    sec.appendChild(itemRow("", content));
  }

  // ── Experience ─────────────────────────────────────────────
  if (r.work && r.work.length) {
    const sec = document.getElementById("experience-section");
    sec.appendChild(sectionTitle("Selected Experience"));

    r.work.forEach((job) => {
      const content = el("div");

      // Company + location row
      const jobHeader = el("div", "job-header");
      jobHeader.appendChild(el("span", "item-title", job.name || ""));
      if (job.location)
        jobHeader.appendChild(el("span", "location", job.location));
      content.appendChild(jobHeader);

      // Job title
      content.appendChild(el("p", "jobtitle", job.position || ""));

      // Bullets
      if (job.highlights && job.highlights.length) {
        const ul = el("ul", "jobaccomp");
        job.highlights.forEach((h) => ul.appendChild(el("li", "", h)));
        content.appendChild(ul);
      }

      sec.appendChild(itemRow(yearRange(job.startDate, job.endDate), content));
    });
  }

  // ── Skills ─────────────────────────────────────────────────
  if (r.skills && r.skills.length) {
    const sec = document.getElementById("skills-section");
    sec.appendChild(sectionTitle("Technical Skills"));

    const grid = el("div", "skills-grid");
    r.skills.forEach((group) => {
      const row = el("div", "skill-row");
      row.innerHTML = `<strong>${group.name}:</strong> ${(group.keywords || []).join(", ")}`;
      grid.appendChild(row);
    });

    sec.appendChild(itemRow("", grid));
  }

  // ── Projects ───────────────────────────────────────────────
  if (r.projects && r.projects.length) {
    const sec = document.getElementById("projects-section");
    sec.appendChild(sectionTitle("Selected Projects"));

    const container = el("div");
    r.projects.forEach((proj) => {
      const div = el("div", "project");
      const nameEl = el("p", "project-name");
      if (proj.url) {
        nameEl.innerHTML = `<a href="${proj.url}" target="_blank" rel="noopener noreferrer">${proj.name}</a>`;
      } else {
        nameEl.textContent = proj.name;
      }
      div.appendChild(nameEl);
      if (proj.description)
        div.appendChild(el("p", "project-desc", proj.description));
      container.appendChild(div);
    });

    sec.appendChild(itemRow("", container));
  }

  // ── Hobbies ────────────────────────────────────────────────
  if (r.hobbies && r.hobbies.length) {
    const sec = document.getElementById("hobbies-section");
    sec.appendChild(sectionTitle("Interests & Hobbies"));

    const grid = el("div", "skills-grid");
    r.hobbies.forEach((hobby) => {
      const row = el("div", "skill-row");
      const desc = (hobby.keywords || []).join(", ");
      row.innerHTML = `<strong>${hobby.name}:</strong> ${desc}`;
      grid.appendChild(row);
    });

    sec.appendChild(itemRow("", grid));
  }

  // ── Education ──────────────────────────────────────────────
  if (r.education && r.education.length) {
    const sec = document.getElementById("education-section");
    sec.appendChild(sectionTitle("Education"));

    r.education.forEach((edu) => {
      const content = el("div");
      const degree = [edu.studyType, edu.area].filter(Boolean).join(", ");
      content.appendChild(el("div", "edu-degree", degree));
      content.appendChild(el("div", "edu-school", edu.institution || ""));
      if (edu.endDate)
        content.appendChild(el("div", "edu-date", edu.endDate.split("-")[0]));
      sec.appendChild(
        itemRow(edu.endDate ? edu.endDate.split("-")[0] : "", content),
      );
    });
  }
})();
