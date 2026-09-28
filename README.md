# React Portfolio Site

A 6-page personal portfolio built with React, Vite, and React Router.
Pages: Home, About Me, Projects, Education, Services, Contact.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## 2. Personalize it

Everything you need to change is marked `// EDIT ME` in the source:

- `src/components/Logo.jsx` — your initials
- `src/pages/Home.jsx` — welcome message + mission statement
- `src/pages/About.jsx` — legal name, bio, headshot
- `src/pages/Projects.jsx` — your 3+ real projects
- `src/pages/Education.jsx` — your real qualifications
- `src/pages/Services.jsx` — services you actually offer
- `src/pages/Contact.jsx` — your real contact details

Add your own images to `public/`:
- `public/headshot.jpg` — used by the About page
- `public/resume.pdf` — used by the résumé download link
- `public/projects/*.png` — used by the Projects page (swap the `<div className="card__image">` placeholder for an `<img src={project.image} />` once these exist)

## 3. Put it on GitHub

```bash
git init
git add .
git commit -m "Initial commit: project scaffold"
git branch -M main
git remote add origin <your-empty-github-repo-url>
git push -u origin main
```

Commit again each time you finish a meaningful chunk (e.g. "Add real project content", "Add headshot and resume", "Style pass on Contact page") — a visible commit history is part of the rubric.

## 4. Deploy

**Vercel** (fastest for Vite):
```bash
npm install -g vercel
vercel
```
Follow the prompts; Vercel auto-detects the Vite build settings.

**Netlify**: connect the GitHub repo in the Netlify dashboard, or run `netlify deploy` with the Netlify CLI. Build command: `npm run build`, publish directory: `dist`.

**Render**: create a new Static Site, connect the repo, build command `npm run build`, publish directory `dist`.

Any of the three satisfies the cloud-hosting requirement — pick whichever you're most comfortable with.
