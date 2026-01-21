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
        <title>Morphism Systems — Formal Orchestration</title>
        <meta name="description" content="Enterprise orchestration with mathematical guarantees. Category theory applied to infrastructure." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Meshal Alawein" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Morphism Systems — Formal Orchestration" />
        <meta property="og:description" content="Enterprise orchestration with mathematical guarantees. Category theory applied to infrastructure." />
        <meta property="og:url" content="https://morphism.systems" />
        <meta property="og:site_name" content="Morphism Systems" />
        <meta property="og:image" content="https://morphism.systems/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Morphism Systems — Formal Orchestration" />
        <meta name="twitter:description" content="Enterprise orchestration with mathematical guarantees." />
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
                Formal
                <br />
                <span className="text-gradient">Orchestration</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl leading-relaxed">
                Category theory applied to infrastructure.
                <br />
                Mathematical guarantees, not hope.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-8 mb-12 max-w-xl">
                <div>
                  <div className="mono text-3xl md:text-4xl text-purple-400 mb-1">3×</div>
                  <div className="mono text-xs text-slate-500 uppercase tracking-wider">Faster</div>
                </div>
                <div>
                  <div className="mono text-3xl md:text-4xl text-purple-400 mb-1">99.9%</div>
                  <div className="mono text-xs text-slate-500 uppercase tracking-wider">Reliable</div>
                </div>
                <div>
                  <div className="mono text-3xl md:text-4xl text-purple-400 mb-1">∞</div>
                  <div className="mono text-xs text-slate-500 uppercase tracking-wider">Composable</div>
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
                <h2 className="text-white mb-6">Orchestration is Broken</h2>
                <ul className="space-y-4 text-slate-400">
                  <li className="flex gap-3">
                    <span className="text-red-400 mono">×</span>
                    <span>30-40% compute overhead wasted on coordination</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 mono">×</span>
                    <span>15% of outages from orchestration failures</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 mono">×</span>
                    <span>Months of rewrites for cloud migrations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 mono">×</span>
                    <span>No guarantees — just hope and monitoring</span>
                  </li>
                </ul>
              </div>

              {/* Solution */}
              <div>
                <span className="mono text-sm text-purple-400 mb-4 block">// The Solution</span>
                <h2 className="text-white mb-6">Morphism</h2>
                <ul className="space-y-4 text-slate-400">
                  <li className="flex gap-3">
                    <span className="text-purple-400 mono">→</span>
                    <span>Functors preserve structure across systems</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 mono">→</span>
                    <span>Natural transformations ensure correctness</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 mono">→</span>
                    <span>Composition is associative by construction</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 mono">→</span>
                    <span>Proofs, not prayers</span>
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
                  title: 'Define',
                  desc: 'Specify your system as a category. Objects are services, morphisms are data flows.',
                  code: 'Category<Service, Flow>'
                },
                {
                  num: '02',
                  title: 'Compose',
                  desc: 'Build complex systems from simple parts. Composition is guaranteed to preserve properties.',
                  code: 'f ∘ g = h'
                },
                {
                  num: '03',
                  title: 'Deploy',
                  desc: 'Functors map your abstract spec to concrete infrastructure. Same guarantees, any target.',
                  code: 'F: Spec → K8s | λ | VM'
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
                <span className="mono text-sm text-slate-500 mb-4 block">// Example</span>
                <h2 className="text-white mb-6">Simple by Design</h2>
                <p className="text-slate-400 mb-6">
                  Define your orchestration logic in a declarative DSL.
                  The compiler proves correctness before deployment.
                </p>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex gap-3">
                    <span className="text-purple-400">✓</span>
                    Type-safe composition
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400">✓</span>
                    Automatic parallelization
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400">✓</span>
                    Compile-time verification
                  </li>
                </ul>
              </div>

              <div className="code-block">
                <pre className="text-sm text-slate-300">
{`// Define a pipeline
pipeline auth_flow {
  input: Request
  output: Response

  // Composable stages
  validate -> authenticate -> authorize

  // Each morphism is verified
  @ensures(output.authenticated == true)
}

// Deploy anywhere
deploy auth_flow {
  target: kubernetes
  replicas: 3

  // Formal guarantees preserved
  @invariant(latency < 100ms)
}`}
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
                { num: '01', title: 'Cloud Infrastructure', desc: 'Multi-cloud orchestration without lock-in' },
                { num: '02', title: 'AI/ML Pipelines', desc: 'LLM serving, training, and inference' },
                { num: '03', title: 'Scientific Computing', desc: 'HPC workflows and simulations' },
                { num: '04', title: 'Enterprise Systems', desc: 'Mission-critical orchestration' },
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
              Get early access to formal orchestration.
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
                <span className="mono text-xs text-slate-500">MORPHISM SYSTEMS LLC</span>
              </div>

              <div className="flex items-center gap-6">
                <Link href="/docs" className="mono text-xs text-slate-500 hover:text-white">Docs</Link>
                <a href="mailto:contact@morphism.systems" className="mono text-xs text-slate-500 hover:text-white">Contact</a>
              </div>

              <span className="mono text-xs text-slate-600">© 2026</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
