# Sri Lakshmi Venkateshwara Chats Centre

Signage + website for the chaat shop now located **opposite Atal Bihari Vajpayee
Badminton Centre, Mariyappana Palya, Bengaluru** (moved from next to Gayathri
Devi Park). Owner: **Devaraju V** · **90363 79288**.

## What's in here

```
index.html              → the website (mobile-first, one page)
assets/                 → drop your food photos here (see assets/README.txt)
print/
  main-standee.svg      → standee for the NEW shop (menu, contact, QR)
  redirect-standee.svg  → "We've Moved" piece for the OLD spot (by the park)
```

## Printing the standees

The two files in `print/` are **vector artwork** — they stay razor-sharp at any
size, so the printer can scale them to whatever you need.

- **Main standee** (new shop): print as a **roll-up standee**, portrait,
  3 ft × 6 ft (or 2.5×6 / 4×6 — your choice).
- **Redirect piece** (old spot, outdoors by the park): print the SAME artwork on
  **weatherproof flex** with corner eyelets, so it survives sun/rain and ties to
  a pole. ~3 ft × 6 ft portrait.

**To hand the printer a PDF:** open the `.svg` in Google Chrome →
Print (Cmd/Ctrl+P) → Destination "Save as PDF" → Save. Do this on a computer
where the Kannada text shows correctly, so it bakes into the PDF.
Or just give the printer the `.svg` file directly — most flex printers accept it.

**Before printing, confirm:** prices, opening timings, and the Kannada text
(get a quick native-speaker check).

## Publishing the website (GitHub Pages, free)

1. Create a GitHub account for **Devaraju** (if not already).
2. Make a new **public** repository, e.g. `sri-lakshmi-venkateshwara-chats`.
3. Upload everything in this folder (or `git push`).
4. Repo → **Settings → Pages** → Source: `main` branch, `/root` → Save.
5. In a minute the site is live at
   `https://<username>.github.io/sri-lakshmi-venkateshwara-chats/`.
6. Put THAT link into a QR code and it replaces the placeholder QR on the
   standees.

## Updating later (menu, prices, offers, photos)

Edit `index.html` (prices/timings live near the bottom, in the "Full Menu" and
"Visit Us" sections) or drop new images into `assets/`. The **printed standees
stay the same** — only the website changes. That's the point: the banner is
evergreen, the website is your living menu.
