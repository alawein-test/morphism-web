import Head from 'next/head'
import Link from 'next/link'
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
        <title>Morphism — Structure-Preserving Transformations</title>
        <meta name="description" content="Governance for software development. 42 tenets. 12 sections. One truth." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Meshal Alawein" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Morphism — Structure-Preserving Transformations" />
        <meta property="og:description" content="Governance for software development. 42 tenets. 12 sections. One truth." />
        <meta property="og:url" content="https://morphism.systems" />
        <meta property="og:site_name" content="Morphism" />
        <meta property="og:image" content="https://morphism.systems/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Morphism — Structure-Preserving Transformations" />
        <meta name="twitter:description" content="Governance for software development. 42 tenets. 12 sections. One truth." />
        <meta name="twitter:site" content="@meshal_alawein" />
        <meta name="twitter:image" content="https://morphism.systems/og-image.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-void">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-purple-900/30 bg-void/80 backdrop-blur-sm">
          <div className="container flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-purple-500 flex items-center justify-center">
                <div className="w-3 h-3 bg-purple-500" />
              </div>
              <span className="mono text-sm tracking-widest text-white">MORPHISM</span>
            </Link>

            <div className="flex items-center gap-6">
              <Link href="/docs" className="nav-link hide-mobile">Docs</Link>
              <Link href="#contact" className="btn-primary">
                Get Access
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="min-h-screen flex items-center grid-bg pt-16">
          <div className="container">
            <div className="max-w-4xl">
              {/* Label */}
              <div className="flex items-center gap-3 mb-8">
                <span className="tag">Pre-Release</span>
                <span className="mono text-sm text-slate-500">v0.1.0-alpha</span>
              </div>

              {/* Main headline */}
              <h1 className="text-white mb-6">
                Structure-Preserving
                <br />
                <span className="text-gradient">Transformations</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl leading-relaxed">
                Governance for software development.
                <br />
                42 tenets. 12 sections. One truth.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-8 mb-12 max-w-xl">
                <div>
                  <div className="mono text-3xl md:text-4xl text-purple-400 mb-1">42</div>
                  <div className="mono text-xs text-slate-500 uppercase tracking-wider">Tenets</div>
                </div>
                <div>
                  <div className="mono text-3xl md:text-4xl text-purple-400 mb-1">12</div>
                  <div className="mono text-xs text-slate-500 uppercase tracking-wider">Sections</div>
                </div>
                <div>
                  <div className="mono text-3xl md:text-4xl text-purple-400 mb-1">1</div>
                  <div className="mono text-xs text-slate-500 uppercase tracking-wider">SSOT</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/docs" className="btn-primary">
                  Read the Docs →
                </Link>
                <Link href="#how-it-works" className="btn-secondary">
                  How it Works
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 opacity-20 hide-mobile" aria-hidden="true">
            <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" role="presentation">
              <circle cx="200" cy="200" r="150" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
              <circle cx="200" cy="200" r="100" stroke="#8B5CF6" strokeWidth="1" opacity="0.5" />
              <circle cx="200" cy="200" r="50" stroke="#8B5CF6" strokeWidth="2" />
              <circle cx="200" cy="50" r="8" fill="#8B5CF6" />
              <circle cx="50" cy="200" r="8" fill="#8B5CF6" />
              <circle cx="200" cy="350" r="8" fill="#8B5CF6" />
              <circle cx="350" cy="200" r="8" fill="#8B5CF6" />
              <line x1="200" y1="50" x2="200" y2="350" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
              <line x1="50" y1="200" x2="350" y2="200" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>
        </section>

        {/* Problem/Solution */}
        <section className="border-t border-purple-900/30 bg-surface">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Problem */}
              <div>
                <span className="mono text-sm text-red-400 mb-4 block">// The Problem</span>
                <h2 className="text-white mb-6">LLM Entropy</h2>
                <ul className="space-y-4 text-slate-400">
                  <li className="flex gap-3">
                    <span className="text-red-400 mono">×</span>
                    <span>Sessions tend toward disorder (T37)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 mono">×</span>
                    <span>Context lost between sessions (T16)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 mono">×</span>
                    <span>Activity theater — motion without progress (T41)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 mono">×</span>
                    <span>Multiple sources of truth = zero sources (T4)</span>
                  </li>
                </ul>
              </div>

              {/* Solution */}
              <div>
                <span className="mono text-sm text-purple-400 mb-4 block">// The Solution</span>
                <h2 className="text-white mb-6">The Protocol</h2>
                <ul className="space-y-4 text-slate-400">
                  <li className="flex gap-3">
                    <span className="text-purple-400 mono">→</span>
                    <span>Structure preserves (T1) — transformations that compose</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 mono">→</span>
                    <span>Single source of truth (T4) — one document governs each domain</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 mono">→</span>
                    <span>One thing done (T3) — define done, finish before starting</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 mono">→</span>
                    <span>Governance, not hope</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="border-t border-purple-900/30">
          <div className="container">
            <div className="text-center mb-16">
              <span className="mono text-sm text-slate-500 mb-4 block">// Architecture</span>
              <h2 className="text-white">How it Works</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  num: '01',
                  title: 'Kernel',
                  desc: 'Governance. Slow-moving. Requires consensus to change. Pure specs, pure docs.',
                  code: 'kernel/ → MORPHISM.md'
                },
                {
                  num: '02',
                  title: 'Hub',
                  desc: 'Distribution. Ships to npm/PyPI. Fast iteration allowed. Hub may import kernel.',
                  code: 'hub/ → npm publish'
                },
                {
                  num: '03',
                  title: 'Lab',
                  desc: 'Experiments. May break. Never imported by kernel or hub. Nothing imports lab.',
                  code: 'lab/ → experiments'
                },
              ].map((item) => (
                <div key={item.num} className="card">
                  <span className="mono text-4xl text-purple-800 mb-4 block">{item.num}</span>
                  <h3 className="text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 mb-4">{item.desc}</p>
                  <code className="code-inline">{item.code}</code>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="border-t border-purple-900/30 bg-surface">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="mono text-sm text-slate-500 mb-4 block">// LLM Entropy</span>
                <h2 className="text-white mb-6">The Failure Mode</h2>
                <p className="text-slate-400 mb-6">
                  Sessions tend toward disorder. Left unconstrained, an LLM explores rather than executes.
                  Output ≠ progress. Artifacts without authority are noise.
                </p>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex gap-3">
                    <span className="text-purple-400">✓</span>
                    Explicit context anchors
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400">✓</span>
                    Session limits
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400">✓</span>
                    Verification checkpoints
                  </li>
                </ul>
              </div>

              <div className="code-block">
                <pre className="text-sm text-slate-300">
{`// The Entropy Formula (T37)
S(session) = -k Σ pᵢ ln(pᵢ)

// Information accumulates but
// knowledge does not.

// Signal degrades with sources:
Signal(docs) ∝ 1/n
// where n = number of "sources of truth"

// The Override
if sources_of_truth > 1:
    sources_of_truth = 0

// Solution: One document governs.
// MORPHISM.md is the override.`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="border-t border-purple-900/30">
          <div className="container">
            <div className="text-center mb-16">
              <span className="mono text-sm text-slate-500 mb-4 block">// Applications</span>
              <h2 className="text-white">Built For</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: '01', title: 'LLM Governance', desc: 'Context anchors and session limits' },
                { num: '02', title: 'Monorepo Standards', desc: 'Kernel/Hub/Lab architecture' },
                { num: '03', title: 'Documentation SSOT', desc: 'One document governs each domain' },
                { num: '04', title: 'Team Alignment', desc: 'Shared tenets, shared outcomes' },
              ].map((item) => (
                <div key={item.title} className="card-minimal">
                  <span className="mono text-2xl text-purple-600 mb-4 block">{item.num}</span>
                  <h3 className="text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="border-t border-purple-900/30 bg-purple-950/30">
          <div className="container-narrow text-center">
            <span className="mono text-sm text-purple-400 mb-4 block">// Early Access</span>
            <h2 className="text-white mb-6">Join the Waitlist</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              We're onboarding select teams for our private beta.
              Get early access to governance that works.
            </p>

            {submitted ? (
              <div className="card max-w-md mx-auto">
                <span className="text-purple-400 text-2xl mb-2 block">✓</span>
                <p className="text-white">You're on the list. We'll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <label htmlFor="waitlist-email" className="sr-only">Email address</label>
                <div className="flex gap-3">
                  <input
                    id="waitlist-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="input flex-1"
                    aria-label="Email address for waitlist"
                  />
                  <button type="submit" className="btn-primary whitespace-nowrap">
                    Get Access
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-purple-900/30 py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-purple-800 flex items-center justify-center">
                  <div className="w-2 h-2 bg-purple-800" />
                </div>
                <span className="mono text-xs text-slate-500">MORPHISM</span>
              </div>

              <div className="flex items-center gap-6">
                <Link href="/docs" className="mono text-xs text-slate-500 hover:text-white">Docs</Link>
                <a href="mailto:meshal@berkeley.edu" className="mono text-xs text-slate-500 hover:text-white">Contact</a>
              </div>

              <div className="text-right">
                <span className="mono text-xs text-slate-600 block">Created by Meshal Alawein</span>
                <span className="mono text-xs text-slate-700">Entropy is the default. Governance is the override.</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
