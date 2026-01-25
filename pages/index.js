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
        <title>Morphism Systems — AI-Native Development Orchestration</title>
        <meta name="description" content="Prevent architecture drift and technical debt with battle-tested governance frameworks and intelligent scaffolding. Built from managing 2,300+ concurrent workflows." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Meshal Alawein" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Morphism Systems — AI-Native Development Orchestration" />
        <meta property="og:description" content="Prevent architecture drift and technical debt with battle-tested governance frameworks. Institutional knowledge as infrastructure." />
        <meta property="og:image" content="/logo-brand.svg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Morphism Systems — AI-Native Development Orchestration" />
        <meta name="twitter:description" content="Battle-tested governance frameworks for AI-native development. Built from 2,300+ workflows." />
        
        <link rel="icon" href="/favicon.svg" />
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
                <span className="tag">AI-Native Development</span>
                <span className="mono text-sm text-slate-500">Framework Available</span>
              </div>

              {/* Main headline */}
              <h1 className="text-white mb-6">
                Development
                <br />
                <span className="text-gradient">Orchestration</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
                Prevent architecture drift and technical debt with battle-tested governance frameworks and intelligent scaffolding.
              </p>

              {/* Social proof */}
              <p className="mono text-sm text-purple-400 mb-12">
                Built from managing 2,300+ concurrent workflows across 10+ production platforms.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-6 mb-12 max-w-2xl">
                <div>
                  <div className="mono text-2xl md:text-3xl text-purple-400 mb-1">42</div>
                  <div className="mono text-xs text-slate-500 uppercase tracking-wider">Tenets</div>
                </div>
                <div>
                  <div className="mono text-2xl md:text-3xl text-purple-400 mb-1">2.3K+</div>
                  <div className="mono text-xs text-slate-500 uppercase tracking-wider">Workflows</div>
                </div>
                <div>
                  <div className="mono text-2xl md:text-3xl text-purple-400 mb-1">40+</div>
                  <div className="mono text-xs text-slate-500 uppercase tracking-wider">Packages</div>
                </div>
                <div>
                  <div className="mono text-2xl md:text-3xl text-purple-400 mb-1">1</div>
                  <div className="mono text-xs text-slate-500 uppercase tracking-wider">SSOT</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/docs" className="btn-primary">
                  Get the Framework →
                </Link>
                <Link href="#contact" className="btn-secondary">
                  Join Platform Waitlist
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
                <h2 className="text-white mb-6">Development Chaos</h2>
                <ul className="space-y-4 text-slate-400">
                  <li className="flex gap-3">
                    <span className="text-red-400 mono">×</span>
                    <span>Architecture drift — standards erode silently</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 mono">×</span>
                    <span>LLM entropy — sessions without convergence (T37)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 mono">×</span>
                    <span>Teams reinventing folder structures and CI/CD</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 mono">×</span>
                    <span>Institutional knowledge lost in Slack threads</span>
                  </li>
                </ul>
              </div>

              {/* Solution */}
              <div>
                <span className="mono text-sm text-purple-400 mb-4 block">// The Solution</span>
                <h2 className="text-white mb-6">Orchestration</h2>
                <ul className="space-y-4 text-slate-400">
                  <li className="flex gap-3">
                    <span className="text-purple-400 mono">→</span>
                    <span>Governance kernel — canonical templates and patterns</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 mono">→</span>
                    <span>Intelligent scaffolding — production-ready, not boilerplate</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 mono">→</span>
                    <span>Self-healing workflows — drift detection, auto-correction</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 mono">→</span>
                    <span>Institutional knowledge as infrastructure</span>
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

        {/* What's Available */}
        <section className="border-t border-purple-900/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Available Now */}
              <div>
                <span className="mono text-sm text-green-400 mb-4 block">// Available Now</span>
                <h2 className="text-white mb-6">The Framework</h2>
                <ul className="space-y-4 text-slate-400">
                  <li className="flex gap-3">
                    <span className="text-green-400 mono">✓</span>
                    <span>Governance framework — 42 tenets, 12 sections</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-400 mono">✓</span>
                    <span>Production templates — monorepo, packages, docs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-400 mono">✓</span>
                    <span>Architectural patterns — Kernel/Hub/Lab</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-400 mono">✓</span>
                    <span>LLM collaboration standards — The Protocol</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/docs" className="btn-primary">
                    Get the Framework →
                  </Link>
                </div>
              </div>

              {/* Coming Soon */}
              <div>
                <span className="mono text-sm text-purple-400 mb-4 block">// Coming Soon</span>
                <h2 className="text-white mb-6">The Platform</h2>
                <ul className="space-y-4 text-slate-400">
                  <li className="flex gap-3">
                    <span className="text-purple-400 mono">○</span>
                    <span>morphism-cli — one-command repo generation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 mono">○</span>
                    <span>Drift detection — continuous architecture monitoring</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 mono">○</span>
                    <span>Auto-correction — self-healing workflows</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 mono">○</span>
                    <span>Multi-agent orchestration — specialized agents</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="#contact" className="btn-secondary">
                    Join Waitlist
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="border-t border-purple-900/30 bg-purple-950/30">
          <div className="container-narrow text-center">
            <span className="mono text-sm text-purple-400 mb-4 block">// Early Access</span>
            <h2 className="text-white mb-6">Join the Waitlist</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              Be first to access the orchestration platform when it launches.
              Framework available now — platform coming Q2 2026.
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
                <a href="https://github.com/alawein/morphism" className="mono text-xs text-slate-500 hover:text-white">GitHub</a>
                <a href="mailto:contact@morphism.systems" className="mono text-xs text-slate-500 hover:text-white">Contact</a>
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
