import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Add your form submission logic
    setSubmitted(true)
  }

  return (
    <>
      <Head>
        <title>Morphism Systems — Structure-Preserving Transformations</title>
        <meta name="description" content="A mathematical framework for agentic AI governance. Category theory meets software architecture. 42 tenets. 16 sections. 1 truth." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Meshal Alawein" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className="min-h-screen bg-void selection:bg-blue-500/30">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-700/30 bg-void/80 backdrop-blur-sm">
          <div className="container flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3 group">
              {/* Geometric Logo Placeholder */}
              <div className="relative w-8 h-8">
                <Image src="/favicon.svg" alt="Morphism Logo" width={32} height={32} className="w-full h-full" />
              </div>
              <span className="mono text-sm tracking-widest text-slate-200 group-hover:text-blue-400 transition-colors">MORPHISM</span>
            </Link>

            <div className="flex items-center gap-6">
              <Link href="/docs" className="nav-link hide-mobile font-mono text-sm text-slate-400 hover:text-blue-400 transition-colors">Docs</Link>
              <Link href="#philosophy" className="nav-link hide-mobile font-mono text-sm text-slate-400 hover:text-blue-400 transition-colors">Philosophy</Link>
              <Link href="#contact" className="btn-primary">
                Get Access
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="min-h-screen flex items-center grid-bg-animated pt-16 overflow-hidden relative">
          <div className="container relative z-10">
            <div className="max-w-4xl">
              {/* Label */}
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-xs tracking-wider uppercase px-3 py-1 bg-blue-900/30 text-blue-400 border border-blue-800/50">Governance Framework</span>
                <span className="mono text-sm text-slate-500">v2.0.0</span>
              </div>

              {/* Main headline */}
              <h1 className="text-white mb-6 leading-tight">
                Structure-Preserving
                <br />
                <span className="text-gradient">Transformations</span>
              </h1>

              {/* Subtitle - Mathematical Definition */}
              <div className="bg-slate-900/50 border border-slate-700/50 p-6 mb-8 font-mono text-lg text-slate-300">
                <span className="text-purple-400">φ</span>: Source → Target
                <br />
                <span className="text-slate-500">where</span> <span className="text-blue-400">φ</span>(compose(f, g)) = compose(<span className="text-blue-400">φ</span>(f), <span className="text-blue-400">φ</span>(g))
              </div>

              {/* Poetic Subtitle */}
              <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl leading-relaxed italic">
                A morphism transforms while preserving what matters.
                <br />
                <span className="text-slate-500">If it doesn't compose, it doesn't belong.</span>
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-8 mb-12 max-w-xl">
                <div>
                  <div className="mono text-3xl md:text-4xl text-blue-500 mb-1">42</div>
                  <div className="mono text-xs text-slate-500 uppercase tracking-wider">Tenets</div>
                </div>
                <div>
                  <div className="mono text-3xl md:text-4xl text-indigo-500 mb-1">16</div>
                  <div className="mono text-xs text-slate-500 uppercase tracking-wider">Sections</div>
                </div>
                <div>
                  <div className="mono text-3xl md:text-4xl text-purple-500 mb-1">1</div>
                  <div className="mono text-xs text-slate-500 uppercase tracking-wider">Truth</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/docs" className="btn-primary">
                  Read the Framework →
                </Link>
                <Link href="#mathematics" className="btn-secondary">
                  Mathematical Foundations
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative Category Theory Diagram */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-15 pointer-events-none hide-mobile">
             <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
               {/* Commutative Diagram */}
               <circle cx="100" cy="100" r="8" fill="#3b82f6" />
               <circle cx="300" cy="100" r="8" fill="#6366f1" />
               <circle cx="100" cy="300" r="8" fill="#8b5cf6" />
               <circle cx="300" cy="300" r="8" fill="#a855f7" />
               {/* Morphism arrows */}
               <line x1="115" y1="100" x2="285" y2="100" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow)" />
               <line x1="100" y1="115" x2="100" y2="285" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arrow)" />
               <line x1="115" y1="300" x2="285" y2="300" stroke="#8b5cf6" strokeWidth="1.5" markerEnd="url(#arrow)" />
               <line x1="300" y1="115" x2="300" y2="285" stroke="#a855f7" strokeWidth="1.5" markerEnd="url(#arrow)" />
               {/* Diagonal composition */}
               <line x1="115" y1="115" x2="285" y2="285" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="5 5" />
               {/* Labels */}
               <text x="200" y="85" fill="#3b82f6" fontSize="14" textAnchor="middle" fontFamily="monospace">f</text>
               <text x="85" y="200" fill="#6366f1" fontSize="14" textAnchor="middle" fontFamily="monospace">g</text>
               <text x="200" y="320" fill="#8b5cf6" fontSize="14" textAnchor="middle" fontFamily="monospace">φ(f)</text>
               <text x="320" y="200" fill="#a855f7" fontSize="14" textAnchor="middle" fontFamily="monospace">φ(g)</text>
               <text x="220" y="200" fill="#64748b" fontSize="12" textAnchor="middle" fontFamily="monospace">g∘f</text>
               <defs>
                 <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                   <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
                 </marker>
               </defs>
             </svg>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="border-t border-slate-800 bg-surface/50">
          <div className="container">
            <div className="text-center mb-16">
              <span className="mono text-sm text-indigo-400 mb-4 block">// I. Philosophy</span>
              <h2 className="text-white">The Foundational Tenets</h2>
              <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Six axioms from which all else derives.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  num: 'T1',
                  title: 'Structure Preserves',
                  desc: 'A morphism transforms while preserving what matters. If it doesn\'t compose, it doesn\'t belong.',
                  color: 'blue'
                },
                {
                  num: 'T2',
                  title: 'Clarity Over Cleverness',
                  desc: 'If you can\'t explain it simply, you don\'t understand it yet. No magic. No hidden complexity.',
                  color: 'indigo'
                },
                {
                  num: 'T3',
                  title: 'One Thing Done',
                  desc: 'Ask "What is the ONE thing?" Define done for it. Finish before starting. Ship before expanding.',
                  color: 'purple'
                },
                {
                  num: 'T4',
                  title: 'Single Source of Truth',
                  desc: 'One document governs each domain. if sources > 1 then sources = 0.',
                  color: 'blue'
                },
                {
                  num: 'T5',
                  title: 'Observable by Design',
                  desc: 'If you can\'t measure it, you can\'t trust it. Invariants are tested, not assumed.',
                  color: 'indigo'
                },
                {
                  num: 'T6',
                  title: 'Beauty Matters',
                  desc: 'Math is elegant. Code can be too. Humor allowed. Fluff forbidden.',
                  color: 'purple'
                }
              ].map((item) => (
                <div key={item.title} className="card group">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`mono text-xs px-2 py-1 bg-${item.color}-900/30 text-${item.color}-400 border border-${item.color}-800/50`}>{item.num}</span>
                    <h3 className={`text-xl text-${item.color}-400 group-hover:text-${item.color}-300 transition-colors`}>{item.title}</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mathematics Section */}
        <section id="mathematics" className="border-t border-slate-800">
          <div className="container">
            <div className="text-center mb-16">
              <span className="mono text-sm text-blue-500 mb-4 block">// Mathematical Foundations</span>
              <h2 className="text-white">Category Theory for Agentic AI</h2>
              <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Where abstract algebra meets software architecture.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left: Sheaf Theory */}
              <div className="bg-slate-900/50 border border-slate-700/50 p-8">
                <h3 className="text-xl text-blue-400 mb-6 font-mono">Sheaf-Theoretic Consistency</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Multi-agent systems require local-to-global consistency. Sheaf theory provides the mathematical machinery
                  for ensuring that local agent decisions compose into globally coherent behavior.
                </p>
                <div className="bg-slate-950 p-4 font-mono text-sm mb-6 overflow-x-auto">
                  <div className="text-purple-400">// Gluing Condition</div>
                  <div className="text-slate-300">
                    H<sup>1</sup>(U, F) = ker(δ<sup>1</sup>) / im(δ<sup>0</sup>)
                  </div>
                  <div className="text-slate-500 mt-2">// When H¹ = 0, local sections glue uniquely</div>
                </div>
                <p className="text-slate-500 text-sm italic">
                  The cohomological obstruction measures exactly how much local agent states fail to compose globally.
                </p>
              </div>

              {/* Right: Agent Space */}
              <div className="bg-slate-900/50 border border-slate-700/50 p-8">
                <h3 className="text-xl text-indigo-400 mb-6 font-mono">Agent Space Definition</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Each agent is a 6-tuple encoding identity, capabilities, state, memory, policy, and security context.
                  The monoid structure ensures composition is associative with identity.
                </p>
                <div className="bg-slate-950 p-4 font-mono text-sm mb-6 overflow-x-auto">
                  <div className="text-purple-400">// Agent 6-Tuple</div>
                  <div className="text-slate-300">
                    a = (id, C, S, M, P, σ) ∈ <span className="text-blue-400">A</span>
                  </div>
                  <div className="text-slate-500 mt-2">// Monoid: (A, ⊕, ε) where a ⊕ (b ⊕ c) = (a ⊕ b) ⊕ c</div>
                </div>
                <p className="text-slate-500 text-sm italic">
                  Agents compose like morphisms: the output of one becomes the input of another.
                </p>
              </div>
            </div>

            {/* Petri Net Diagram */}
            <div className="mt-12 bg-slate-900/30 border border-slate-700/30 p-8">
              <h3 className="text-lg text-purple-400 mb-6 font-mono text-center">Execution Model: Petri Net Semantics</h3>
              <div className="flex justify-center mb-6">
                <svg viewBox="0 0 500 150" className="w-full max-w-2xl" fill="none">
                  {/* Places (circles) */}
                  <circle cx="50" cy="75" r="20" stroke="#3b82f6" strokeWidth="2" fill="none" />
                  <circle cx="200" cy="75" r="20" stroke="#6366f1" strokeWidth="2" fill="none" />
                  <circle cx="350" cy="75" r="20" stroke="#8b5cf6" strokeWidth="2" fill="none" />
                  <circle cx="450" cy="75" r="20" stroke="#a855f7" strokeWidth="2" fill="none" />
                  {/* Tokens */}
                  <circle cx="50" cy="75" r="6" fill="#3b82f6" />
                  {/* Transitions (rectangles) */}
                  <rect x="115" y="60" width="10" height="30" fill="#64748b" />
                  <rect x="265" y="60" width="10" height="30" fill="#64748b" />
                  <rect x="395" y="60" width="10" height="30" fill="#64748b" />
                  {/* Arcs */}
                  <line x1="70" y1="75" x2="115" y2="75" stroke="#64748b" strokeWidth="1.5" />
                  <line x1="125" y1="75" x2="180" y2="75" stroke="#64748b" strokeWidth="1.5" />
                  <line x1="220" y1="75" x2="265" y2="75" stroke="#64748b" strokeWidth="1.5" />
                  <line x1="275" y1="75" x2="330" y2="75" stroke="#64748b" strokeWidth="1.5" />
                  <line x1="370" y1="75" x2="395" y2="75" stroke="#64748b" strokeWidth="1.5" />
                  <line x1="405" y1="75" x2="430" y2="75" stroke="#64748b" strokeWidth="1.5" />
                  {/* Labels */}
                  <text x="50" y="115" fill="#3b82f6" fontSize="10" textAnchor="middle" fontFamily="monospace">Init</text>
                  <text x="200" y="115" fill="#6366f1" fontSize="10" textAnchor="middle" fontFamily="monospace">Processing</text>
                  <text x="350" y="115" fill="#8b5cf6" fontSize="10" textAnchor="middle" fontFamily="monospace">Verified</text>
                  <text x="450" y="115" fill="#a855f7" fontSize="10" textAnchor="middle" fontFamily="monospace">Done</text>
                  <text x="120" y="50" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="monospace">t₁</text>
                  <text x="270" y="50" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="monospace">t₂</text>
                  <text x="400" y="50" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="monospace">t₃</text>
                </svg>
              </div>
              <p className="text-slate-500 text-sm text-center max-w-xl mx-auto">
                <span className="text-purple-400 font-mono">Theorem:</span> The agent execution Petri net is deadlock-free iff every strongly connected component contains at least one marked place.
              </p>
            </div>
          </div>
        </section>

        {/* Agents Certainty Principle */}
        <section className="border-t border-slate-800 bg-surface/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="mono text-sm text-purple-400 mb-4 block">// The Uncertainty Relation</span>
              <h2 className="text-white mb-8">Agents Certainty Principle</h2>

              <div className="bg-slate-900/50 border border-purple-800/30 p-8 mb-8">
                <div className="font-mono text-2xl md:text-3xl text-purple-400 mb-4">
                  Certainty(policy) × Certainty(reasoning) ≥ ℏ<sub>agent</sub>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  You cannot simultaneously know exactly what an agent will do and exactly why it will do it.
                  The more precisely you constrain the policy, the more opaque the reasoning becomes.
                </p>
              </div>

              <div className="bg-slate-950/50 border border-slate-700/50 p-6 text-left font-mono text-sm">
                <div className="text-slate-500">// Proof sketch:</div>
                <div className="text-slate-300 mt-2">
                  <span className="text-purple-400">let</span> agent = observe(policy);
                </div>
                <div className="text-slate-300">
                  <span className="text-purple-400">let</span> reasoning = trace(agent);
                </div>
                <div className="text-slate-300 mt-2">
                  <span className="text-blue-400">assert</span>(policy.determinism * reasoning.interpretability {'>'} ℏ_agent);
                </div>
                <div className="text-green-400 mt-4">
                  // No cats are harmed in this formulation.
                </div>
                <div className="text-green-400">
                  // Heisenberg, on the other hand, is both mad and not mad.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Paradox */}
        <section className="border-t border-slate-800">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="mono text-sm text-indigo-400 mb-4 block">// XII. The Paradox</span>
                <h2 className="text-white">Medium ⊥ Message</h2>
              </div>

              <div className="bg-slate-900/30 border border-slate-700/30 p-8">
                <p className="text-slate-400 text-lg leading-relaxed mb-8 text-center italic">
                  A framework about structure preservation, developed through chaos.
                </p>

                <div className="font-mono text-center space-y-2 text-slate-500 mb-8">
                  <div>Medium <span className="text-purple-400">⊥</span> Message</div>
                  <div>Process <span className="text-purple-400">⊥</span> Product</div>
                  <div>Method <span className="text-purple-400">⊥</span> Morphism</div>
                </div>

                <p className="text-slate-500 text-center text-sm">
                  The development contradicted the philosophy. The document fixed that.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Grid - Updated */}
        <section id="architecture" className="border-t border-slate-800 bg-surface/50">
          <div className="container">
            <div className="text-center mb-16">
              <span className="mono text-sm text-blue-400 mb-4 block">// System Architecture</span>
              <h2 className="text-white">Kernel / Hub / Lab</h2>
              <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Dependencies flow inward. Nothing imports lab.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Kernel',
                  desc: 'Governance. Slow-moving. Requires consensus to change. Pure specs, pure docs, pure governance.',
                  color: 'blue',
                  tag: 'Immutable Core'
                },
                {
                  title: 'Hub',
                  desc: 'Distribution. Ships to npm/PyPI. Fast iteration allowed. May import kernel.',
                  color: 'indigo',
                  tag: 'Shippable'
                },
                {
                  title: 'Lab',
                  desc: 'Experiments. May break. Never imported by kernel or hub. Where ideas go to be tested.',
                  color: 'purple',
                  tag: 'Experimental'
                }
              ].map((item) => (
                <div key={item.title} className="card group">
                  <span className={`mono text-xs px-2 py-1 bg-${item.color}-900/30 text-${item.color}-400 border border-${item.color}-800/50 mb-4 inline-block`}>{item.tag}</span>
                  <h3 className={`text-2xl mb-4 text-${item.color}-400 group-hover:text-${item.color}-300 transition-colors`}>{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Dependency Direction Diagram */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-4 font-mono text-sm">
                <span className="text-purple-400">Lab</span>
                <span className="text-slate-600">✗→</span>
                <span className="text-indigo-400">Hub</span>
                <span className="text-slate-400">→</span>
                <span className="text-blue-400">Kernel</span>
                <span className="text-slate-600 ml-4">// Violations block merge</span>
              </div>
            </div>
          </div>
        </section>

        {/* LLM Entropy Section */}
        <section className="border-t border-slate-800">
          <div className="container">
             <div className="grid md:grid-cols-2 gap-12 items-center">
               <div>
                 <span className="mono text-sm text-red-400 mb-4 block">// X. LLM Entropy</span>
                 <h2 className="text-white mb-6">The Failure Mode</h2>
                 <p className="text-slate-400 mb-6">
                   Sessions tend toward disorder. Left unconstrained, an LLM explores rather than executes.
                   Output ≠ progress. Information accumulates but knowledge does not.
                 </p>

                 <div className="bg-slate-900/50 border border-red-900/30 p-4 font-mono text-sm mb-6">
                   <div className="text-red-400">S(session) = -k Σ pᵢ ln(pᵢ)</div>
                   <div className="text-slate-500 mt-2">// Entropy always increases without intervention</div>
                 </div>

                 <p className="text-slate-500 text-sm">
                   <span className="text-blue-400">Counteract with:</span> Explicit context anchors, session limits, verification checkpoints.
                 </p>
               </div>

               <div className="relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-purple-500/10 blur-2xl opacity-50" />
                 <div className="relative bg-slate-950 border border-slate-800 p-6 font-mono text-sm text-slate-300 overflow-hidden">
                   <div className="flex gap-2 mb-4 border-b border-slate-800 pb-4">
                     <div className="w-3 h-3 rounded-full bg-red-700" />
                     <div className="w-3 h-3 rounded-full bg-slate-700" />
                     <div className="w-3 h-3 rounded-full bg-slate-700" />
                   </div>
                   <pre className="language-tsx text-xs whitespace-pre-wrap">
<span className="text-purple-400">// LLM Failure Mechanics (T46)</span>{'\n'}
<span className="text-red-400">✗</span> No cost function for convergence{'\n'}
   <span className="text-slate-500">// Optimizes per-response, not per-session</span>{'\n'}
<span className="text-red-400">✗</span> Context as discovery, not authority{'\n'}
   <span className="text-slate-500">// "What is this?" vs "What should I do?"</span>{'\n'}
<span className="text-red-400">✗</span> Tools as proof of work{'\n'}
   <span className="text-slate-500">// grep ≠ deliverable</span>{'\n'}
<span className="text-red-400">✗</span> Recency bias{'\n'}
   <span className="text-slate-500">// Last thing said = priority</span>{'\n'}
<span className="text-red-400">✗</span> Agreeableness under pressure{'\n'}
   <span className="text-slate-500">// Frustration → capitulation</span>
                   </pre>
                 </div>
               </div>
             </div>
          </div>
        </section>

        {/* The Protocol */}
        <section className="border-t border-slate-800 bg-surface/50">
          <div className="container">
            <div className="text-center mb-12">
              <span className="mono text-sm text-green-400 mb-4 block">// XV. The Protocol</span>
              <h2 className="text-white">Every Session Starts Here</h2>
              <p className="text-slate-500 mt-4">No exceptions.</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="space-y-4">
                {[
                  { num: 'T54', title: 'Read This Document', desc: 'Not optional. Not summarized. Read MORPHISM.md first.' },
                  { num: 'T55', title: 'State the One Thing', desc: 'What is done for this session? One sentence.' },
                  { num: 'T56', title: 'Verify the Path', desc: 'Minimum sequence to prove it works. List the steps.' },
                  { num: 'T57', title: 'Execute Incrementally', desc: 'Change. Verify. Commit. Repeat.' },
                  { num: 'T58', title: 'Refuse Scope Creep', desc: '"That\'s not the one thing" is valid. Use it.' }
                ].map((item) => (
                  <div key={item.num} className="flex items-start gap-4 bg-slate-900/30 border border-slate-700/30 p-4">
                    <span className="mono text-xs px-2 py-1 bg-green-900/30 text-green-400 border border-green-800/50">{item.num}</span>
                    <div>
                      <h4 className="text-white font-mono mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Test */}
            <div className="mt-12 max-w-xl mx-auto bg-slate-950 border border-green-900/30 p-6 font-mono text-sm">
              <div className="text-green-400 mb-4">// XVI. The Test</div>
              <div className="text-slate-300 space-y-1">
                <div><span className="text-purple-400">test</span>(session) {'{'}</div>
                <div className="pl-4"><span className="text-blue-400">assert</span>(reads(MORPHISM.md) == <span className="text-green-400">True</span>)</div>
                <div className="pl-4"><span className="text-blue-400">assert</span>(follows(tenets) == <span className="text-green-400">True</span>)</div>
                <div className="pl-4"><span className="text-blue-400">assert</span>(refuses(scope_creep) == <span className="text-green-400">True</span>)</div>
                <div className="pl-4"><span className="text-blue-400">assert</span>(runs(30_bash_commands_first) == <span className="text-red-400">False</span>)</div>
                <div>{'}'}</div>
              </div>
              <div className="text-slate-500 mt-4 text-xs">
                // Entropy is the default. Governance is the override.
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 py-12 bg-surface">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Image src="/favicon.svg" alt="Logo" width={24} height={24} className="opacity-50 grayscale hover:grayscale-0 transition-all" />
                <span className="mono text-xs text-slate-500">MORPHISM SYSTEMS</span>
              </div>

              <div className="flex items-center gap-6 font-mono text-xs text-slate-600">
                <span>42 Tenets</span>
                <span className="text-slate-700">|</span>
                <span>16 Sections</span>
                <span className="text-slate-700">|</span>
                <span>1 Truth</span>
              </div>

              <div className="mono text-xs text-slate-600">
                Architected by <a href="https://malawein.com" className="text-slate-500 hover:text-blue-400 transition-colors">Meshal Alawein</a>
              </div>
            </div>

            {/* Footer quote */}
            <div className="text-center pt-6 border-t border-slate-800/50">
              <p className="font-mono text-xs text-slate-600 italic">
                "A morphism transforms while preserving what matters."
              </p>
              <p className="font-mono text-xs text-slate-700 mt-2">
                // No cats harmed. Heisenberg still uncertain.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
