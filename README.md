# SpanBiome Scalp Smart AI — Clinical Portal

A static website with no build step. Upload these files to the **root** of a GitHub repository and switch on GitHub Pages.

| File | What it is |
|---|---|
| `index.html` | The clinical portal (clinic login, patients, questionnaire, clinical exam, lab, algorithm, report). The site opens on this page. |
| `tmsi-calculator.html` | The TMSI Ingredient Calculator (OPMSS product scoring and the saved product catalog). |
| `qr-card.html` | A printable patient QR card that links to the hosted portal. |
| `support.js` | The page runtime. All three pages need it. |
| `shimd-data.js` | The ingredient database and scoring engine (785 ingredients across 17 modules). |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. |

## Deploy on GitHub Pages

1. Create a new repository on GitHub, for example `spanbiome-portal`.
2. Click **Add file → Upload files** and drag in **every file from this zip**, including `.nojekyll`. Commit the upload.
3. Go to **Settings → Pages**. Under **Build and deployment**, pick **Deploy from a branch**, branch `main`, folder `/ (root)`, and click **Save**.
4. Wait about a minute. The site will be live at `https://<your-username>.github.io/spanbiome-portal/`.
5. Open `qr-card.html` on the live site, paste the live link into **Hosted assessment link**, and print the card for patients.

Keep all the files in the same folder. The pages load `support.js` and `shimd-data.js` and link to each other by relative path.

## Good to know

- **Internet needed:** the pages load React and fonts from public CDNs (unpkg.com and Google Fonts), and the QR code library from cdnjs.
- **Where records live:** clinics, patients, assessments and saved products are stored in each device's browser (`localStorage`, keys starting with `spanbiome_`). Records do not sync between phones, computers or browsers. Shared, multi-device records need a backend.
- **Pages are linked:** products saved in the Ingredient Calculator feed the portal's product recommendations, as long as both pages are on the same site.
- **Works on phones and tablets:** on screens narrower than 860px, the sidebar becomes a swipeable top menu and the panels stack into a single column.
- **Opening locally:** pages opened straight from disk (`file://`) won't load. To test on your computer, run `python3 -m http.server 8000` in this folder and open `http://localhost:8000`.
