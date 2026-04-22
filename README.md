# SECES — Landing Page

Brutalist minimalist landing page. Built with Next.js 14 (App Router) + Tailwind CSS. Ready for one-click Netlify deployment.

---

## Deploy to Netlify

### Option A — Drag & Drop (fastest)

1. Run `npm run build` locally
2. Drag the `.next` folder into [app.netlify.com/drop](https://app.netlify.com/drop)

### Option B — Git (recommended)

1. Push this folder to a GitHub / GitLab repo
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**
3. Connect your repo
4. Netlify auto-detects the settings from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Click **Deploy site** — done.

> The `@netlify/plugin-nextjs` plugin is already listed in `package.json` and `netlify.toml`, so API routes work automatically as Netlify Functions.

---

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Project Structure

```
seces/
├── app/
│   ├── globals.css            # Base styles + Tailwind
│   ├── layout.js              # Root layout, fonts, metadata
│   ├── page.js                # Page assembly
│   └── api/submit/route.js   # POST /api/submit
├── components/
│   ├── Nav.js
│   ├── Hero.js
│   ├── Reality.js
│   ├── Definition.js
│   ├── Output.js
│   ├── Proof.js
│   ├── CtaSection.js
│   ├── FormSection.js
│   └── Footer.js
├── public/                    # Static assets (favicon, og image)
├── netlify.toml               # Netlify build config
├── .env.example               # Environment variable reference
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## Connecting the Form

Edit `app/api/submit/route.js`. The handler already receives:

```js
{ answers: [{ question: string, answer: string }] }
```

Plug in your data layer:

```js
// Supabase
const { error } = await supabase.from('submissions').insert({ answers: clean })

// Resend (email)
await resend.emails.send({ from: '...', to: '...', subject: 'New SECES submission', text: JSON.stringify(clean) })

// HubSpot / any webhook
await fetch(process.env.CRM_WEBHOOK_URL, { method: 'POST', body: JSON.stringify(clean) })
```

Set env vars in **Netlify → Site Settings → Environment Variables** (see `.env.example`).

---

## Customisation

| What | Where |
|------|-------|
| Form questions | `components/FormSection.js` → `QUESTIONS` array |
| All copy | Each component file |
| Accent colour | Replace `#14b8a6` globally |
| Metadata / SEO | `app/layout.js` → `metadata` export |
| Favicon | Drop `favicon.ico` into `public/` |
| OG image | Drop `og.png` into `public/` and add to metadata |

---

## Design Tokens

| Token | Value |
|-------|-------|
| Teal accent | `#14b8a6` |
| Background | `#0a0a0a` |
| Off-white | `#f5f5f0` |
| Border | `#222222` |
| Muted | `#888888` |
| Display font | Bebas Neue |
| Mono font | DM Mono |
| Body font | DM Sans |
