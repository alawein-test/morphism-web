# morphism-web

Website for the Morphism governance framework at morphism.systems.

## Project Context

- **Framework**: Next.js 15 (Pages Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Domain**: morphism.systems
- **Author**: Meshal Alawein

## Critical Constraints

### DO NOT CHANGE

1. **Purple brutalist design** - The dark purple (#8B5CF6) theme is intentional
2. **Square logo** - The nested square logo (`w-8 h-8 border-2 border-purple-500`) is the brand identity
3. **CSS classes in globals.css** - Custom utilities like `.card`, `.btn-primary`, `.code-block` are designed
4. **Monospace font** - Uses `.mono` class extensively for the brutalist aesthetic

### Content Source

All content MUST derive from the canonical MORPHISM.md at:
```
/mnt/c/Users/mesha/Desktop/1-GitHub-Done-Right/morphism/MORPHISM.md
```

The local `MORPHISM.md` is a symlink to this canonical source. Do not create copies.

## Key Files

| File | Purpose |
|------|---------|
| `pages/index.js` | Homepage - governance messaging |
| `pages/docs.js` | Documentation - 12 sections, 42 tenets |
| `styles/globals.css` | Design system (preserve) |
| `MORPHISM.md` | Symlink to canonical SSOT |

## Content Guidelines

1. **No marketing claims** - No "3x faster", "99.9% reliable" performance claims
2. **Framework, not platform** - Morphism is governance, not infrastructure
3. **Tenet references** - Use T## format (e.g., T4, T37) when referencing tenets
4. **LLM Entropy** - Key concept, always include the formula: `S(session) = -k Σ pᵢ ln(pᵢ)`

## Commands

```bash
npm run dev      # Development server on localhost:3000
npm run build    # Production build
npm run lint     # ESLint
vercel --prod    # Deploy to production
```

## Lessons Learned (2026-01-23)

This section documents violations discovered during the website content update session:

### T3 Violated: One Thing Done
- Jumped between multiple tasks without defining "done" for any
- Started exploring file systems, then pivoted to content, then SSOT, then back
- **Fix**: State the one thing upfront. "Update morphism-web content to reflect governance framework" should have been the anchor.

### T4 Violated: Single Source of Truth
- Three copies of MORPHISM.md existed (1-GitHub-Done-Right, 4-SHIP, morphism-web)
- Caused confusion about which was canonical
- **Fix**: One document. Symlinks everywhere else. Delete copies immediately.

### T7 Violated: Understand Before Changing
- Changed website content without fully understanding user's vision
- Produced "orchestration platform" messaging when user wanted "governance framework"
- **Fix**: Read MORPHISM.md completely before any edits. Ask clarifying questions.

### T37 Experienced: LLM Entropy
- Session drifted across many tasks (file exploration, symlinks, content, planning)
- Tool usage (find, grep, read) substituted for actual progress
- Output accumulated but deliverables stalled
- **Fix**: The Protocol (T54-T58). Read → State → Verify → Execute → Refuse scope creep.

### T55 Violated: State the One Thing
- Never stated the one thing upfront
- Session proceeded without clear definition of done
- **Fix**: Every session starts with: "The ONE thing is: [X]. Done means: [Y]."

## Structure Verification

Before deploying, verify:

- [ ] No marketing claims (performance/reliability statistics)
- [ ] 42 tenets mentioned in stats
- [ ] Kernel/Hub/Lab architecture explained
- [ ] LLM Entropy section with formula
- [ ] The Protocol (T54-T58) present
- [ ] Purple theme preserved
- [ ] Square logo preserved
- [ ] Contact form functional
- [ ] Footer includes "Created by Meshal Alawein"

---

*Entropy is the default. Governance is the override.*
