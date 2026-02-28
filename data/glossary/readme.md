# 📚 Satoshium Glossary (Canonical)

This folder contains the **canonical glossary** used across the Satoshium ecosystem.

It exists to keep terminology consistent across:

- Satoshium Progress website pages
- Satoshium Labs demos
- future agent modes
- documentation and governance references

The glossary is designed to be:

✅ calm and institutional  
✅ consistent and reusable  
✅ machine-readable and future-proof  
✅ expandable without refactoring tools  

---

## ✅ Files in this folder

### 1) `glossary.json` (Source of Truth)
The canonical dataset used by tools and site modules.

- Structured for loading into apps (Replit, future agents, website widgets)
- Contains normalized term objects (IDs, tags, categories, etc.)

**Do not hand-edit structure** unless you update the schema too.

---

### 2) `glossary.schema.json` (Validation Contract)
The JSON Schema that defines what a valid glossary dataset looks like.

- Used for validation (manual or automated)
- Prevents drift as the glossary grows

If you add new fields to `glossary.json`, update the schema.

---

### 3) `glossary.md` (Human Reference)
A human-friendly glossary summary.

- Easy to read
- Can be linked directly from pages
- Useful for quick review and onboarding

This may not contain every term from `glossary.json`.

---

## ✍️ How to add a new term

1. Open `glossary.json`
2. Add a new object under `"terms": []`
3. Follow the required fields:

**Required fields**
- `id` (kebab-case unique identifier)
- `term` (human title)
- `short` (one-line summary ≤ 140 chars)
- `definition` (primary explanation)
- `category` (group bucket)
- `tags` (array of 1+ tags)

**Optional fields**
- `see_also` (array of related term IDs)
- `sources` (array of URLs or canonical references)

4. Update the dataset metadata:
- `meta.last_updated` (YYYY-MM-DD)

---

## 🧭 Writing rules (important)

All definitions must be:

- **non-hype**
- **verifiable in tone**
- written for clarity, not persuasion
- avoid absolutes unless they are definitional
- short definitions should still stand alone

**Avoid:**
- marketing language
- speculative claims framed as certainty
- “revolutionary / guaranteed / unstoppable” phrasing

---

## 🗂 Category guidance

Use categories to group terms consistently in the Glossary Builder UI.

Suggested categories:
- `core`
- `governance`
- `trust`
- `agents`
- `labs`
- `infrastructure`

---

## 🏷 Tag guidance

Tags are used for filtering and future agent routing.

Rules:
- use lowercase
- use singular where possible
- keep tags consistent across terms

Examples:
- `verification`
- `governance`
- `bitcoin`
- `audit`
- `signals`
- `alignment`
- `scenarios`

---

## 🔁 Editing workflow (recommended)

When using the **Glossary Builder app**:

1. Make changes in the app
2. Export JSON
3. Replace the content of `glossary.json` with the exported dataset
4. Commit with message:
   - `Update glossary terms`
   - or `Glossary: add <term>`

---

Built in public.  
No hype.  
Visible progress only.
