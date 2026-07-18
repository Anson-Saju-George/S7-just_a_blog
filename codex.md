## Task: Clean URLs (drop HashRouter #) + redirect / to /just-a-blog/
Status: OPEN

### Context (self-contained)
Static blog served under /just-a-blog/ (Vite base already '/just-a-blog/'). Two issues:
(1) http://localhost:8001/ shows the stock "Welcome to nginx" page (leftover index.html);
(2) routing uses HashRouter (src/App.tsx:2,20,32) → ugly `#/about` URLs.
Fix both: redirect `/` → `/just-a-blog/`, remove the stock welcome file, and switch to history routing.
Container listens on 8000; local host maps 8001. nginx already has SPA fallback for /just-a-blog/.

### Instructions
1. `src/App.tsx`: replace `HashRouter` with `BrowserRouter` and add the basename:
   - `import { BrowserRouter, Routes, Route } from 'react-router-dom';`
   - `<BrowserRouter basename="/just-a-blog">` … `</BrowserRouter>`
   - Do NOT change `vite.config.ts` base (stays '/just-a-blog/').
2. `src/components/Header.tsx` (and any nav): ensure links use `<Link to="/">`, `to="/about"`
   `to="/ai-tools"` (relative to basename) — remove any hardcoded `#`. With BrowserRouter+basename
   these render as `/just-a-blog/…` automatically.
3. `deploy/nginx.conf`: add, above the /just-a-blog/ block:
       location = / { return 301 /just-a-blog/; }
   Keep the existing `location /just-a-blog/ { try_files $uri $uri/ /just-a-blog/index.html; }`.
4. `Dockerfile` stage 2: after copying dist, remove the stock welcome file:
       RUN rm -f /usr/share/nginx/html/index.html

### Constraints
- Container port stays 8000; local compose maps 127.0.0.1:8001:8000. Non-root image. No content edits.
- No ACME/Traefik/tunnel/Dokploy changes.

### Acceptance criteria
- [ ] http://localhost:8001/ → 301 → /just-a-blog/ (blog loads; NO nginx welcome page).
- [ ] Nav produces clean URLs like /just-a-blog/about — NO `#`.
- [ ] Direct load of http://localhost:8001/just-a-blog/about → 200 and renders About (SPA fallback).
- [ ] Assets still load (no 404). Container still non-root.

### Verification (run + paste output)
    docker compose up --build -d
    curl -s -o /dev/null -w '%{http_code} -> %{redirect_url}\n' http://localhost:8001/
    curl -s -o /dev/null -w '%{http_code}\n' http://localhost:8001/just-a-blog/about
    curl -s http://localhost:8001/just-a-blog/ | grep -oE '/just-a-blog/assets/[^" ]+' | head -1

### Out of scope
App #1, Traefik/tunnel/Dokploy, host firewall, blog content (separate task).

---

## Task: Refresh blog content for 2026 (fill Tools page, add Agents, date-stamp)
Status: OPEN

### Context (self-contained)
"AI Strategy Blog" (static React). Pages: src/pages/HomePage.tsx (a "P.A.C.E." AI-adoption framework),
src/pages/AiToolsPage.tsx (currently a PLACEHOLDER — literally "A brief description of what this tool
does" with empty hrefs), src/pages/AboutPage.tsx. Built in 2025; needs a 2026 refresh. This i
content task — keep the existing layout/components; edit copy only.

### Instructions
1. AiToolsPage.tsx — replace the placeholder with a real curated directory, grouped by job-to
   Reasoning/strategy · Coding agents · Writing/marketing · Search & RAG · Automation/agents ·
   Voice/meeting · Image/video. For each tool: name, one-line "job it does", pricing tier, "b
2. HomePage.tsx — (a) add an "AI Agents / Autonomy" section or dimension to the P.A.C.E. framework
   (the biggest 2025→2026 shift: autonomous multi-step agents, agent governance); (b) keep th
   framework structure intact.
3. Add a `Last reviewed: <today's date>` line to each page.
4. ACCURACY RULES (important):
   - Do NOT fabricate statistics or cite fake sources. The existing "42% inadequate expertise" /
     "AI Adoption Paradox" figures are 2025 survey data — leave them but add an inline
     `{/* TODO(owner): verify with current-year survey */}` note; do not invent replacement n
   - Model/product names move fast and are past the knowledge horizon — where you name specific models
     or versions, add `{/* TODO(owner): confirm current version */}`. Prefer generational/neutral
     phrasing ("frontier reasoning models") over hard version claims.
5. Keep tone consistent with the existing copy (strategic, empowering). No layout overhaul.

### Constraints
- Content/copy only — no routing, nginx, Docker, or config changes. No new deps.
- No fabricated stats or sources; flag every uncertain fact with a TODO(owner) comment.

### Acceptance criteria
- [ ] AiToolsPage is a populated directory (no "brief description" placeholder, no empty hrefs).
- [ ] HomePage has an AI Agents/Autonomy section within P.A.C.E.
- [ ] Each page shows a "Last reviewed" date.
- [ ] Every uncertain stat/model-name carries a TODO(owner) verify note; nothing fabricated.
- [ ] `npm run build` succeeds.

### Verification
    npm run build   # must succeed
    grep -rn "TODO(owner)" src/pages/   # show the flagged items for owner review

### Out of scope
Routing/nginx/Docker (Task 1), deploy, app #1.
