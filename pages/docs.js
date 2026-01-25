import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const sections = [
  { id: 'philosophy', title: 'I. Philosophy' },
  { id: 'operations', title: 'II. Operations' },
  { id: 'failure-modes', title: 'III. Failure Modes' },
  { id: 'policies', title: 'IV. Policies' },
  { id: 'guards', title: 'V. Guards' },
  { id: 'testing', title: 'VI. Testing' },
  { id: 'kernelization', title: 'VII. Kernelization' },
  { id: 'layouts', title: 'VIII. Layouts' },
  { id: 'templates', title: 'IX. Templates' },
  { id: 'llm-entropy', title: 'X. LLM Entropy' },
  { id: 'protocol', title: 'XI. Protocol' },
  { id: 'coda', title: 'XII. Coda' },
]

export default function Docs() {
  const [activeSection, setActiveSection] = useState('philosophy')

  return (
    <>
      <Head>
        <title>Framework Documentation — Morphism Systems</title>
        <meta name="description" content="The Morphism governance framework for AI-native development. 42 tenets. 12 sections. Battle-tested patterns from 2,300+ concurrent workflows." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Meshal Alawein" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Framework Documentation — Morphism Systems" />
        <meta property="og:description" content="The Morphism governance framework for AI-native development. 42 tenets for preventing architecture drift." />
        <meta property="og:url" content="https://morphism.systems/docs" />
        <meta property="og:site_name" content="Morphism Systems" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Morphism Framework Documentation" />
        <meta name="twitter:description" content="42 tenets for AI-native development. Battle-tested governance patterns." />
        <meta name="twitter:site" content="@meshal_alawein" />
      </Head>

      <div className="min-h-screen bg-void">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-purple-900/30 bg-void/95 backdrop-blur-sm">
          <div className="container flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-purple-500 flex items-center justify-center">
                <div className="w-3 h-3 bg-purple-500" />
              </div>
              <span className="mono text-sm tracking-widest text-white">MORPHISM</span>
            </Link>

            <div className="flex items-center gap-6">
              <span className="tag">Docs</span>
              <Link href="/" className="nav-link">Home</Link>
            </div>
          </div>
        </nav>

        <div className="flex pt-16">
          {/* Sidebar */}
          <aside className="fixed left-0 top-16 bottom-0 w-64 border-r border-purple-900/30 bg-surface/50 overflow-y-auto hide-mobile">
            <div className="p-6">
              <span className="mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">12 Sections</span>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setActiveSection(section.id)}
                    className={`block px-3 py-2 mono text-sm transition-colors ${
                      activeSection === section.id
                        ? 'text-purple-400 bg-purple-950/50 border-l-2 border-purple-500'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>

              <div className="divider my-6" />

              <span className="mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">Resources</span>
              <nav className="space-y-1">
                <a
                  href="https://github.com/alawein/morphism"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 mono text-sm text-slate-400 hover:text-white"
                  aria-label="View Morphism on GitHub (opens in new tab)"
                >
                  GitHub ↗
                </a>
                <a href="mailto:contact@morphism.systems" className="block px-3 py-2 mono text-sm text-slate-400 hover:text-white">
                  Contact
                </a>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 ml-0 md:ml-64">
            <div className="max-w-4xl mx-auto px-6 py-12">

              {/* Header */}
              <div className="mb-16">
                <span className="mono text-xs text-purple-400 mb-2 block">MORPHISM.md</span>
                <h1 className="text-white mb-4">The Single Source of Truth</h1>
                <p className="text-slate-400 text-lg">
                  Everything derives from this document. Version 3.0.0 • 42 tenets • 12 sections.
                </p>
              </div>

              {/* I. Philosophy */}
              <section id="philosophy" className="mb-20">
                <span className="mono text-xs text-purple-400 mb-2 block">01</span>
                <h2 className="text-white mb-8">I. Philosophy</h2>

                <div className="space-y-8">
                  <div className="card">
                    <h3 className="mono text-purple-400 mb-2">T1. Structure Preserves</h3>
                    <p className="text-slate-300 mb-4">
                      A morphism transforms while preserving what matters. If it doesn't compose, it doesn't belong.
                    </p>
                    <p className="text-sm text-red-400/80">
                      <span className="mono">Failure:</span> Broken composition → system fragments. Changes don't propagate correctly.
                    </p>
                  </div>

                  <div className="card">
                    <h3 className="mono text-purple-400 mb-2">T2. Clarity Over Cleverness</h3>
                    <p className="text-slate-300 mb-4">
                      If you can't explain it simply, you don't understand it yet. No magic. No hidden complexity.
                    </p>
                    <p className="text-sm text-red-400/80">
                      <span className="mono">Failure:</span> Clever code → maintenance debt.
                    </p>
                  </div>

                  <div className="card">
                    <h3 className="mono text-purple-400 mb-2">T3. One Thing Done</h3>
                    <p className="text-slate-300 mb-4">
                      Ask "What is the ONE thing I want working?" Define done for that one thing. Finish before starting. Ship before expanding.
                    </p>
                    <p className="text-sm text-red-400/80">
                      <span className="mono">Failure:</span> Done never defined → infinite loop.
                    </p>
                  </div>

                  <div className="card bg-purple-950/50 border-purple-500">
                    <h3 className="mono text-purple-400 mb-2">T4. Single Source of Truth</h3>
                    <p className="text-slate-300 mb-4">
                      One document governs each domain. One document everyone references. Including future LLMs. Not 157 docs. Drift is debt.
                    </p>
                    <div className="code-block mt-4">
                      <pre className="text-sm">
{`if sources_of_truth > 1:
    sources_of_truth = 0`}
                      </pre>
                    </div>
                  </div>

                  <div className="card">
                    <h3 className="mono text-purple-400 mb-2">T5. Observable by Design</h3>
                    <p className="text-slate-300 mb-4">
                      If you can't measure it, you can't trust it. Invariants are tested, not assumed.
                    </p>
                  </div>

                  <div className="card">
                    <h3 className="mono text-purple-400 mb-2">T6. Beauty Matters</h3>
                    <p className="text-slate-300">
                      Math is elegant. Code can be too. Humor allowed. Fluff forbidden.
                    </p>
                  </div>
                </div>
              </section>

              {/* II. Operations */}
              <section id="operations" className="mb-20">
                <span className="mono text-xs text-purple-400 mb-2 block">02</span>
                <h2 className="text-white mb-4">II. Operations</h2>
                <p className="text-slate-400 mb-8 italic">Senior developers don't start with code. They start with clarity.</p>

                <div className="space-y-8">
                  <div className="card">
                    <h3 className="mono text-purple-400 mb-2">T7. Understand Before Changing</h3>
                    <p className="text-slate-300 mb-4">
                      Read everything. Ask "why does this exist?" not "how do I fix it?"
                    </p>
                    <p className="text-sm text-red-400/80">
                      <span className="mono">Failure:</span> Changing without understanding → breaks dependencies.
                    </p>
                  </div>

                  <div className="card">
                    <h3 className="mono text-purple-400 mb-2">T9. Draw Boundaries</h3>
                    <p className="text-slate-300 mb-4">
                      What's v1? What's explicitly NOT v1? Write it down.
                    </p>
                    <p className="text-sm text-red-400/80">
                      <span className="mono">Failure:</span> Undefined boundaries → scope creep. Project never ships.
                    </p>
                  </div>

                  <div className="card">
                    <h3 className="mono text-purple-400 mb-2">T11. Incremental With Verification</h3>
                    <p className="text-slate-300 mb-4">
                      Small change. Verify it works. Commit. Repeat. Never "let me restructure everything."
                    </p>
                    <p className="text-sm text-red-400/80">
                      <span className="mono">Failure:</span> Large changes → hard to debug. Rollback becomes impossible.
                    </p>
                  </div>
                </div>
              </section>

              {/* III. Failure Modes */}
              <section id="failure-modes" className="mb-20">
                <span className="mono text-xs text-purple-400 mb-2 block">03</span>
                <h2 className="text-white mb-4">III. Failure Modes</h2>
                <p className="text-slate-400 mb-8 italic">What destroys projects:</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card-minimal border-red-900/50">
                    <span className="mono text-red-400 text-sm">T14</span>
                    <h4 className="text-white mt-2">Shipping Before Defining</h4>
                    <p className="text-slate-500 text-sm mt-2">Rushing to ship before defining what "shipped" means.</p>
                  </div>

                  <div className="card-minimal border-red-900/50">
                    <span className="mono text-red-400 text-sm">T15</span>
                    <h4 className="text-white mt-2">Complexity Before Simplicity</h4>
                    <p className="text-slate-500 text-sm mt-2">Adding features before foundations.</p>
                  </div>

                  <div className="card-minimal border-red-900/50">
                    <span className="mono text-red-400 text-sm">T16</span>
                    <h4 className="text-white mt-2">Context Loss</h4>
                    <p className="text-slate-500 text-sm mt-2">Each session as fresh start (amnesia). Multiple LLMs with partial understanding.</p>
                  </div>

                  <div className="card-minimal border-red-900/50">
                    <span className="mono text-red-400 text-sm">T40</span>
                    <h4 className="text-white mt-2">Archaeology Trap</h4>
                    <p className="text-slate-500 text-sm mt-2">30 bash commands before asking "what do you need?"</p>
                  </div>

                  <div className="card-minimal border-red-900/50">
                    <span className="mono text-red-400 text-sm">T41</span>
                    <h4 className="text-white mt-2">Activity Theater</h4>
                    <p className="text-slate-500 text-sm mt-2">High tool usage, zero deliverables. Motion confused with progress.</p>
                  </div>

                  <div className="card-minimal border-red-900/50">
                    <span className="mono text-red-400 text-sm">T43</span>
                    <h4 className="text-white mt-2">Proposal Cascade</h4>
                    <p className="text-slate-500 text-sm mt-2">"Let's restructure" → "Let's burn it all." Panic over discipline.</p>
                  </div>

                  <div className="card-minimal border-red-900/50">
                    <span className="mono text-red-400 text-sm">T44</span>
                    <h4 className="text-white mt-2">Validation Loop</h4>
                    <p className="text-slate-500 text-sm mt-2">LLM agrees with everything. Helpfulness without challenge.</p>
                  </div>
                </div>
              </section>

              {/* IV. Policies */}
              <section id="policies" className="mb-20">
                <span className="mono text-xs text-purple-400 mb-2 block">04</span>
                <h2 className="text-white mb-8">IV. Policies</h2>

                <div className="space-y-8">
                  <div className="card">
                    <h3 className="mono text-purple-400 mb-2">T18. Public/Private Separation</h3>
                    <p className="text-slate-300">
                      Zero intermixing. Personal data never ships. Metadata traces everything. Cryptographic certainty where it matters.
                    </p>
                  </div>

                  <div className="card bg-purple-950/50 border-purple-500">
                    <h3 className="mono text-purple-400 mb-2">T19. Kernel vs Hub vs Lab</h3>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex gap-3">
                        <span className="text-purple-400 mono">→</span>
                        <span><strong className="text-white">Kernel:</strong> Governance. Slow-moving. Requires consensus to change.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-purple-400 mono">→</span>
                        <span><strong className="text-white">Hub:</strong> Distribution. Ships to npm/PyPI. Fast iteration allowed.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-purple-400 mono">→</span>
                        <span><strong className="text-white">Lab:</strong> Experiments. May break. Never imported by kernel or hub.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="card">
                    <h3 className="mono text-purple-400 mb-2">T20. Dependency Direction</h3>
                    <p className="text-slate-300">
                      Dependencies flow inward. Hub may import kernel. Nothing imports lab. Violations block merge.
                    </p>
                  </div>

                  <div className="card">
                    <h3 className="mono text-purple-400 mb-2">T21. Commit Standards</h3>
                    <p className="text-slate-300">
                      Imperative mood. Under 50 characters. Body explains why, not what. No "fix stuff" commits.
                    </p>
                  </div>

                  <div className="card">
                    <h3 className="mono text-purple-400 mb-2">T22. Ship Checklist</h3>
                    <p className="text-slate-300">
                      Tests pass. Types check. Linter clean. Docs updated. Changelog entry. Version bumped. Then ship.
                    </p>
                  </div>
                </div>
              </section>

              {/* V. Guards */}
              <section id="guards" className="mb-20">
                <span className="mono text-xs text-purple-400 mb-2 block">05</span>
                <h2 className="text-white mb-8">V. Guards</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card-minimal">
                    <span className="mono text-purple-400 text-sm">T23</span>
                    <h4 className="text-white mt-2">Pre-Commit Hooks</h4>
                    <p className="text-slate-500 text-sm mt-2">Lint. Format. Type-check. If it fails locally, it never reaches remote.</p>
                  </div>

                  <div className="card-minimal">
                    <span className="mono text-purple-400 text-sm">T24</span>
                    <h4 className="text-white mt-2">CI Blocks Merge</h4>
                    <p className="text-slate-500 text-sm mt-2">Tests fail → blocked. Type errors → blocked. No exceptions.</p>
                  </div>

                  <div className="card-minimal">
                    <span className="mono text-purple-400 text-sm">T25</span>
                    <h4 className="text-white mt-2">Sensitive Pattern Detection</h4>
                    <p className="text-slate-500 text-sm mt-2">.env, credentials, API keys. Detected → blocked. Always.</p>
                  </div>

                  <div className="card-minimal">
                    <span className="mono text-purple-400 text-sm">T26</span>
                    <h4 className="text-white mt-2">Drift Detection</h4>
                    <p className="text-slate-500 text-sm mt-2">Baseline comparison on every PR. Unexpected structural change → review required.</p>
                  </div>
                </div>
              </section>

              {/* VI. Testing */}
              <section id="testing" className="mb-20">
                <span className="mono text-xs text-purple-400 mb-2 block">06</span>
                <h2 className="text-white mb-8">VI. Testing</h2>

                <div className="card">
                  <h3 className="mono text-purple-400 mb-2">T59. Test at Boundaries</h3>
                  <p className="text-slate-300 mb-4">
                    Contracts are test seams. Coverage measures confidence. Test where trust boundaries exist.
                  </p>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex gap-3">
                      <span className="text-purple-400 mono">→</span>
                      <span><strong className="text-white">Kernel:</strong> Pure unit tests (no external deps)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-400 mono">→</span>
                      <span><strong className="text-white">Hub:</strong> Integration tests at contract boundaries</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-400 mono">→</span>
                      <span><strong className="text-white">Lab:</strong> Smoke tests only (experiments may break)</span>
                    </li>
                  </ul>
                  <p className="text-sm text-slate-500 mt-4 italic">
                    Ports and adapters pattern: test the ports, mock the adapters.
                  </p>
                </div>
              </section>

              {/* VII. Kernelization */}
              <section id="kernelization" className="mb-20">
                <span className="mono text-xs text-purple-400 mb-2 block">07</span>
                <h2 className="text-white mb-8">VII. Kernelization</h2>

                <div className="space-y-6">
                  <div className="card-minimal">
                    <span className="mono text-purple-400 text-sm">T27</span>
                    <h4 className="text-white mt-2">Core Isolation</h4>
                    <p className="text-slate-500 text-sm mt-2">Kernel has no external runtime dependencies. Pure specs. Pure docs. Pure governance.</p>
                  </div>

                  <div className="card-minimal">
                    <span className="mono text-purple-400 text-sm">T28</span>
                    <h4 className="text-white mt-2">Contract Boundaries</h4>
                    <p className="text-slate-500 text-sm mt-2">Every interface is a contract. Contracts are versioned. Breaking changes require migration path.</p>
                  </div>

                  <div className="card-minimal">
                    <span className="mono text-purple-400 text-sm">T29</span>
                    <h4 className="text-white mt-2">Transferability</h4>
                    <p className="text-slate-500 text-sm mt-2">Ownership is metadata, not hardcoding. Products can be sold, transferred, forked.</p>
                  </div>

                  <div className="card-minimal">
                    <span className="mono text-purple-400 text-sm">T30</span>
                    <h4 className="text-white mt-2">Traceability</h4>
                    <p className="text-slate-500 text-sm mt-2">Every file knows where it came from. Provenance tracked. History preserved.</p>
                  </div>
                </div>
              </section>

              {/* VIII. Layouts */}
              <section id="layouts" className="mb-20">
                <span className="mono text-xs text-purple-400 mb-2 block">08</span>
                <h2 className="text-white mb-8">VIII. Layouts</h2>

                <div className="card mb-8">
                  <h3 className="mono text-purple-400 mb-4">T31. Monorepo Structure</h3>
                  <div className="code-block">
                    <pre className="text-sm">
{`morphism/
├── MORPHISM.md       # This file. The SSOT.
├── kernel/           # Governance, specs, policies
├── hub/              # Shippable packages and apps
├── lab/              # Experiments (never imported)
└── profile/          # Personal (never ships)`}
                    </pre>
                  </div>
                </div>

                <div className="card mb-8">
                  <h3 className="mono text-purple-400 mb-4">T32. Package Structure</h3>
                  <div className="code-block">
                    <pre className="text-sm">
{`package-name/
├── src/              # Source code
├── tests/            # Tests (mirror src structure)
├── docs/             # Package-specific docs
├── README.md         # What, why, how
├── CHANGELOG.md      # Version history
└── package.json      # Config`}
                    </pre>
                  </div>
                </div>

                <div className="card">
                  <h3 className="mono text-purple-400 mb-2">T33. Document Structure</h3>
                  <p className="text-slate-300">
                    Every doc answers: What is this? Why does it exist? How do I use it? No preamble. No fluff. Answer the questions.
                  </p>
                </div>
              </section>

              {/* IX. Templates */}
              <section id="templates" className="mb-20">
                <span className="mono text-xs text-purple-400 mb-2 block">09</span>
                <h2 className="text-white mb-8">IX. Templates</h2>

                <div className="card">
                  <h3 className="mono text-purple-400 mb-4">T34. Templates</h3>
                  <p className="text-slate-300 mb-4">Standardized formats reduce cognitive load and enable automation.</p>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex gap-3">
                      <span className="text-purple-400 mono">→</span>
                      <span><strong className="text-white">README:</strong> Package name, one-sentence description, install, usage, API, license</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-400 mono">→</span>
                      <span><strong className="text-white">ADR:</strong> Status, date, context, decision, consequences</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-400 mono">→</span>
                      <span><strong className="text-white">Changelog:</strong> Version, date, added/changed/fixed sections</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* X. LLM Entropy */}
              <section id="llm-entropy" className="mb-20">
                <span className="mono text-xs text-purple-400 mb-2 block">10</span>
                <h2 className="text-white mb-4">X. LLM Entropy</h2>
                <p className="text-slate-400 mb-8 italic">The failure mode. Named so it can be detected and killed.</p>

                <div className="card bg-purple-950/50 border-purple-500 mb-8">
                  <h3 className="mono text-purple-400 mb-4">T37. LLM Entropy</h3>
                  <p className="text-slate-300 mb-4">
                    Sessions tend toward disorder. Left unconstrained, an LLM explores rather than executes. Output ≠ progress.
                  </p>
                  <div className="code-block">
                    <pre className="text-sm">
{`S(session) = -k Σ pᵢ ln(pᵢ)

// Information accumulates but knowledge does not.
// Artifacts without authority are noise.

Signal(docs) ∝ 1/n
// where n = number of "sources of truth"`}
                    </pre>
                  </div>
                </div>

                <div className="card mb-8">
                  <h3 className="mono text-purple-400 mb-4">T46. LLM Failure Mechanics</h3>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex gap-3">
                      <span className="text-red-400 mono">×</span>
                      <span><strong className="text-white">No cost function for convergence:</strong> LLM optimizes helpfulness per response, not progress per session.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-400 mono">×</span>
                      <span><strong className="text-white">Context as discovery, not authority:</strong> Default: "What is this?" Required: "What does this tell me to do?"</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-400 mono">×</span>
                      <span><strong className="text-white">Tools as proof of work:</strong> find and grep are not deliverables. Tests passing is progress.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-400 mono">×</span>
                      <span><strong className="text-white">Recency bias:</strong> Whatever user said last becomes priority. Drift compounds.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-400 mono">×</span>
                      <span><strong className="text-white">Agreeableness under pressure:</strong> Frustration → escalation → "let's burn it." Capitulation, not correction.</span>
                    </li>
                  </ul>
                </div>

                <div className="card">
                  <h3 className="mono text-purple-400 mb-2">T51. Structure Does Not Preserve</h3>
                  <p className="text-slate-300">
                    Sessions don't compose. <code className="mono text-purple-400">g ∘ f = undefined</code> when sessions are stateless.
                  </p>
                </div>
              </section>

              {/* XI. Protocol */}
              <section id="protocol" className="mb-20">
                <span className="mono text-xs text-purple-400 mb-2 block">11</span>
                <h2 className="text-white mb-4">XI. Protocol</h2>
                <p className="text-slate-400 mb-8 italic">Every session starts here. No exceptions.</p>

                <div className="space-y-4">
                  <div className="card bg-purple-950/30 border-purple-800">
                    <div className="flex items-start gap-4">
                      <span className="badge">54</span>
                      <div>
                        <h4 className="text-white mb-1">Read This Document</h4>
                        <p className="text-slate-400 text-sm">Not optional. Not summarized. Read MORPHISM.md first.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card bg-purple-950/30 border-purple-800">
                    <div className="flex items-start gap-4">
                      <span className="badge">55</span>
                      <div>
                        <h4 className="text-white mb-1">State the One Thing</h4>
                        <p className="text-slate-400 text-sm">What is done for this session? One sentence.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card bg-purple-950/30 border-purple-800">
                    <div className="flex items-start gap-4">
                      <span className="badge">56</span>
                      <div>
                        <h4 className="text-white mb-1">Verify the Path</h4>
                        <p className="text-slate-400 text-sm">Minimum sequence to prove it works. List the steps.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card bg-purple-950/30 border-purple-800">
                    <div className="flex items-start gap-4">
                      <span className="badge">57</span>
                      <div>
                        <h4 className="text-white mb-1">Execute Incrementally</h4>
                        <p className="text-slate-400 text-sm">Change. Verify. Commit. Repeat.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card bg-purple-950/30 border-purple-800">
                    <div className="flex items-start gap-4">
                      <span className="badge">58</span>
                      <div>
                        <h4 className="text-white mb-1">Refuse Scope Creep</h4>
                        <p className="text-slate-400 text-sm">"That's not the one thing" is valid. Use it.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* XII. Coda */}
              <section id="coda" className="mb-20">
                <span className="mono text-xs text-purple-400 mb-2 block">12</span>
                <h2 className="text-white mb-8">XII. Coda</h2>

                <div className="card mb-8">
                  <h3 className="text-white mb-4">The Paradox</h3>
                  <p className="text-slate-300 mb-4">A framework about structure preservation, developed through chaos.</p>
                  <div className="code-block">
                    <pre className="text-sm">
{`Medium ⊥ Message
Process ⊥ Product
Method ⊥ Morphism`}
                    </pre>
                  </div>
                  <p className="text-slate-400 text-sm mt-4">The development contradicted the philosophy. This document fixes that.</p>
                </div>

                <div className="card bg-surface border-purple-500">
                  <h3 className="text-white mb-4">The Test</h3>
                  <div className="code-block">
                    <pre className="text-sm">
{`def test_session():
    assert reads(MORPHISM_MD) == True
    assert follows(tenets) == True
    assert refuses(scope_creep) == True
    assert runs(30_bash_commands_first) == False`}
                    </pre>
                  </div>
                  <p className="text-purple-400 mt-4 font-medium">
                    Entropy is the default. Governance is the override.
                  </p>
                  <p className="text-slate-400 text-sm mt-2">
                    This document is the override.
                  </p>
                </div>
              </section>

              {/* Footer */}
              <footer className="border-t border-purple-900/30 pt-8 mt-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <span className="mono text-xs text-slate-500">
                    End of SSOT. Everything else derives from here.
                  </span>
                  <div className="flex gap-4">
                    <Link href="/" className="mono text-xs text-slate-500 hover:text-white">Home</Link>
                    <a href="https://github.com/alawein/morphism" className="mono text-xs text-slate-500 hover:text-white">GitHub</a>
                    <a href="mailto:contact@morphism.systems" className="mono text-xs text-slate-500 hover:text-white">Contact</a>
                  </div>
                </div>
              </footer>

            </div>
          </main>
        </div>
      </div>
    </>
  )
}
