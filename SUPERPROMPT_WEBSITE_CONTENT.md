# Morphism Website Content Update — Execution Prompt

```
φ: Marketing Copy → Governance Framework
Location: 4-SHIP/morphism-web/
Preserve: Purple theme, square logo, dark void aesthetic
```

---

## MISSION

Update morphism-web content to accurately reflect the Morphism governance framework. The current site has placeholder marketing copy about "orchestration" — it needs to reflect what Morphism actually is: a governance framework for software development based on category theory.

**PRESERVE:** Purple theme, square logo, dark aesthetic, grid background, current CSS/styling
**UPDATE:** Copy, headlines, sections, messaging

---

## WHAT MORPHISM ACTUALLY IS

Read `./MORPHISM.md` (v3.0.0) for the full framework. Key points:

**Core Identity:**
- Governance framework for software development
- Based on category theory (structure-preserving transformations)
- 42 tenets across 12 sections
- Created by Meshal Alawein

**The Name:**
- "Morphism" = mathematical term for structure-preserving map
- `φ: A → B` where structure is preserved across transformation
- "If it doesn't compose, it doesn't belong"

**Key Concepts:**
1. **Structure Preserves** — Transformations maintain what matters
2. **Single Source of Truth** — One document governs each domain
3. **Kernel/Hub/Lab** — Architecture pattern (governance/shipping/experiments)
4. **LLM Entropy** — Sessions tend toward disorder without governance
5. **The Protocol** — How every session should start

**NOT About:**
- ~~Enterprise orchestration~~
- ~~Kubernetes competitor~~
- ~~Cloud infrastructure~~
- ~~3x performance claims~~

---

## CURRENT SITE STRUCTURE

```
pages/
├── index.js      # Main landing page (UPDATE)
├── docs.js       # Documentation page (UPDATE)
├── _app.js       # App wrapper (keep)
├── _document.js  # Document head (keep)
└── api/contact.js # Contact form (keep)
```

---

## CONTENT UPDATES

### Hero Section

**Current (wrong):**
```
Formal Orchestration
Category theory applied to infrastructure.
```

**Updated:**
```
Structure-Preserving Transformations
A governance framework for software development.
42 tenets. 12 sections. One truth.
```

Or alternative:
```
φ: Chaos → Order
Governance for developers who ship.
```

### Navigation

**Current:** Docs, Get Access
**Keep as-is** — these are fine

### Stats/Metrics Section

**Current (wrong):**
- 99.9% Reliability
- 3x Performance
- Enterprise Ready

**Updated:**
- 42 Tenets
- 12 Sections
- 1 SSOT (Single Source of Truth)

Or:
- Kernel (Governance)
- Hub (Shipping)
- Lab (Experiments)

### Problem Section

**Current (wrong):**
- "30-40% Overhead"
- "15% of Outages"
- "6-12 Month Migrations"

**Updated — "What Breaks Projects":**
- **LLM Entropy** — Sessions drift without governance. Output ≠ progress.
- **Context Loss** — Each session as fresh start. Fragmentation compounds.
- **Activity Theater** — High tool usage, zero deliverables. Motion ≠ progress.

### Solution Section

**Current (wrong):**
- "3x Performance"
- "Formal Guarantees"
- "Multi-Cloud Ready"

**Updated — "What Morphism Provides":**
- **Structure** — 42 tenets that preserve what matters across transformations
- **Clarity** — Single source of truth for each domain. No drift.
- **Protocol** — Every session starts the same. Read. State. Verify. Execute.

### Features Section

**Current (wrong):**
- Rigorous, Composable, Scalable, Cloud Native, AI/ML Ready, Scientific

**Updated — "Core Principles":**
- **Structure Preserves** — Transform while maintaining what matters
- **Clarity Over Cleverness** — If you can't explain it, you don't understand it
- **One Thing Done** — Define done. Finish before starting.
- **Observable by Design** — If you can't measure it, you can't trust it
- **Beauty Matters** — Math is elegant. Code can be too.
- **Incremental Verification** — Small change. Verify. Commit. Repeat.

### Architecture Section (NEW or UPDATE)

Add a section explaining Kernel/Hub/Lab:

```
## The Architecture

┌─────────────────────────────────────────┐
│              KERNEL                      │
│     Governance · Slow-moving · SSOT     │
├─────────────────────────────────────────┤
│               HUB                        │
│    Shipping · npm/PyPI · Fast iteration │
├─────────────────────────────────────────┤
│               LAB                        │
│   Experiments · May break · Never import │
└─────────────────────────────────────────┘

Dependencies flow inward. Hub imports kernel. Nothing imports lab.
```

### Footer

**Current:** © 2026 Morphism Systems LLC
**Updated:**
```
© 2026 Morphism Systems
Created by Meshal Alawein
"If it doesn't compose, it doesn't belong."
```

---

## DOCS PAGE UPDATE

The `/docs` page should provide:

1. **Quick overview** of the 12 sections
2. **Link to full MORPHISM.md** (or embed key tenets)
3. **The Protocol** — how to start a session

### Suggested Docs Structure

```markdown
## The Framework

Morphism is 42 tenets across 12 sections:

| Section | Focus |
|---------|-------|
| I. Philosophy | Core principles |
| II. Operations | How work gets done |
| III. Failure Modes | What breaks projects |
| IV. Policies | Rules and standards |
| V. Guards | Enforcement mechanisms |
| VI. Testing | Verification strategy |
| VII. Kernelization | Core isolation |
| VIII. Layouts | Canonical structures |
| IX. Templates | Standard formats |
| X. LLM Entropy | AI session governance |
| XI. Protocol | Session rules |
| XII. Coda | The paradox and the test |

## The Protocol

Every session starts here:

1. **Read MORPHISM.md** — Not optional. Not summarized.
2. **State the One Thing** — What is done for this session?
3. **Verify the Path** — Minimum sequence to prove it works.
4. **Execute Incrementally** — Change. Verify. Commit. Repeat.
5. **Refuse Scope Creep** — "That's not the one thing" is valid.

## Key Tenets

**T1. Structure Preserves**
A morphism transforms while preserving what matters.
*Failure mode: Transformation destroys essential properties.*

**T4. Single Source of Truth**
One document governs each domain.
*Failure mode: If sources_of_truth > 1 then sources_of_truth = 0.*

**T37. LLM Entropy**
Sessions tend toward disorder.
S(session) = -k Σ pᵢ ln(pᵢ)
*Failure mode: Information accumulates but knowledge does not.*
```

---

## STYLE GUIDELINES

**Preserve:**
- Purple/blue gradient accents
- Dark void background (`bg-void`)
- Monospace text for technical content (`mono` class)
- Grid background pattern
- Square logo

**Voice:**
- Technical but accessible
- Dry wit allowed (one joke per section max)
- No marketing fluff
- Developer-focused

**Typography:**
- Headlines: Bold, gradient text for emphasis
- Body: Slate gray on dark
- Code/technical: Monospace, purple accents

---

## FILES TO MODIFY

1. `pages/index.js` — Main content updates
2. `pages/docs.js` — Framework documentation
3. Optionally: `styles/globals.css` if new components needed

**DO NOT MODIFY:**
- Logo/favicon
- Color scheme
- Overall layout structure
- Navigation structure

---

## VERIFICATION

After updates:
- [ ] No marketing claims about performance/reliability
- [ ] 42 tenets mentioned (not 58, not other numbers)
- [ ] Kernel/Hub/Lab architecture explained
- [ ] LLM Entropy concept included
- [ ] The Protocol section present
- [ ] Purple theme preserved
- [ ] Square logo preserved
- [ ] No broken links
- [ ] Contact form still works

---

**Execute. Update content while preserving design.**
