import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const sections = [
  { id: 'overview', title: 'Overview' },
  { id: 'concepts', title: 'Core Concepts' },
  { id: 'quickstart', title: 'Quick Start' },
  { id: 'dsl', title: 'DSL Reference' },
  { id: 'api', title: 'API Reference' },
]

export default function Docs() {
  const [activeSection, setActiveSection] = useState('overview')

  return (
    <>
      <Head>
        <title>Documentation — Morphism Systems</title>
        <meta name="description" content="Complete documentation for Morphism formal orchestration framework." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
              <span className="mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">Navigation</span>
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
                <a href="https://github.com/alawein" target="_blank" rel="noopener" className="block px-3 py-2 mono text-sm text-slate-400 hover:text-white">
                  GitHub ↗
                </a>
                <a href="mailto:contact@morphism.systems" className="block px-3 py-2 mono text-sm text-slate-400 hover:text-white">
                  Support
                </a>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 ml-0 md:ml-64">
            <div className="max-w-4xl mx-auto px-6 py-12">

              {/* Overview */}
              <section id="overview" className="mb-20">
                <span className="mono text-xs text-purple-400 mb-2 block">01</span>
                <h1 className="text-white mb-6">Overview</h1>

                <div className="prose">
                  <p className="text-slate-300 text-lg mb-6">
                    Morphism is a formal orchestration framework that applies category theory to infrastructure management.
                    It provides mathematical guarantees for system correctness, composability, and portability.
                  </p>

                  <div className="card mb-8">
                    <h3 className="text-white mb-4">Key Properties</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="mono text-purple-400 text-sm mb-2">Composability</h4>
                        <p className="text-slate-400 text-sm">
                          Systems compose predictably. If A → B works and B → C works, then A → C works with the same guarantees.
                        </p>
                      </div>
                      <div>
                        <h4 className="mono text-purple-400 text-sm mb-2">Portability</h4>
                        <p className="text-slate-400 text-sm">
                          Functors map specifications to any target infrastructure while preserving all properties.
                        </p>
                      </div>
                      <div>
                        <h4 className="mono text-purple-400 text-sm mb-2">Verification</h4>
                        <p className="text-slate-400 text-sm">
                          Compile-time proofs ensure correctness. No runtime surprises.
                        </p>
                      </div>
                      <div>
                        <h4 className="mono text-purple-400 text-sm mb-2">Performance</h4>
                        <p className="text-slate-400 text-sm">
                          Zero-overhead abstractions. The compiler optimizes away categorical machinery.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-950/30 border border-purple-900/50 p-4 mb-6">
                    <p className="mono text-sm text-purple-300">
                      <span className="text-purple-500">Note:</span> Morphism is currently in private beta.
                      <Link href="/#contact" className="text-purple-400 hover:text-purple-300 ml-1">Join the waitlist</Link> for early access.
                    </p>
                  </div>
                </div>
              </section>

              {/* Core Concepts */}
              <section id="concepts" className="mb-20">
                <span className="mono text-xs text-purple-400 mb-2 block">02</span>
                <h2 className="text-white mb-8">Core Concepts</h2>

                {/* Categories */}
                <div className="mb-12">
                  <h3 className="text-white mb-4 flex items-center gap-3">
                    <span className="mono text-purple-600">2.1</span>
                    Categories
                  </h3>
                  <p className="text-slate-400 mb-6">
                    A category consists of objects and morphisms (arrows) between them. In Morphism:
                  </p>
                  <ul className="space-y-3 text-slate-400 mb-6">
                    <li className="flex gap-3">
                      <span className="text-purple-400 mono">→</span>
                      <span><strong className="text-white">Objects</strong> are system components (services, databases, queues)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-400 mono">→</span>
                      <span><strong className="text-white">Morphisms</strong> are data transformations between components</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-400 mono">→</span>
                      <span><strong className="text-white">Composition</strong> chains morphisms: if f: A → B and g: B → C, then g ∘ f: A → C</span>
                    </li>
                  </ul>

                  <div className="code-block">
                    <pre className="text-sm">
{`// Define a category
category PaymentSystem {
  objects {
    Request    // Incoming payment request
    Validated  // After validation
    Processed  // After processing
    Response   // Final response
  }

  morphisms {
    validate:  Request → Validated
    process:   Validated → Processed
    respond:   Processed → Response
  }

  // Composition is automatic
  // payment_flow = respond ∘ process ∘ validate
}`}
                    </pre>
                  </div>
                </div>

                {/* Functors */}
                <div className="mb-12">
                  <h3 className="text-white mb-4 flex items-center gap-3">
                    <span className="mono text-purple-600">2.2</span>
                    Functors
                  </h3>
                  <p className="text-slate-400 mb-6">
                    Functors map between categories while preserving structure. This is how Morphism
                    achieves portability — your specification maps to any infrastructure.
                  </p>

                  <div className="code-block mb-6">
                    <pre className="text-sm">
{`// A functor from Spec to Kubernetes
functor K8sDeployer: Spec → Kubernetes {
  // Map objects to K8s resources
  map_object(Service s) → Deployment {
    replicas: s.scale
    image: s.artifact
    resources: s.resources
  }

  // Map morphisms to network policies
  map_morphism(Flow f) → NetworkPolicy {
    from: f.source.selector
    to: f.target.selector
    port: f.port
  }

  // Structure preservation is verified at compile time
  @preserves(composition)
  @preserves(identity)
}`}
                    </pre>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {['Kubernetes', 'AWS Lambda', 'Bare Metal'].map((target) => (
                      <div key={target} className="card-minimal text-center">
                        <span className="mono text-sm text-purple-400">{target}</span>
                        <p className="text-xs text-slate-500 mt-1">Same spec, same guarantees</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Natural Transformations */}
                <div className="mb-12">
                  <h3 className="text-white mb-4 flex items-center gap-3">
                    <span className="mono text-purple-600">2.3</span>
                    Natural Transformations
                  </h3>
                  <p className="text-slate-400 mb-6">
                    Natural transformations enable safe migrations between implementations.
                    They ensure that switching from one functor to another preserves correctness.
                  </p>

                  <div className="code-block">
                    <pre className="text-sm">
{`// Migrate from Kubernetes to serverless
transformation migrate: K8sDeployer ⇒ LambdaDeployer {
  // For each object, define the component transformation
  component(Deployment d) → Function {
    handler: d.container.entrypoint
    memory: d.resources.memory
    timeout: d.resources.limits.time
  }

  // Naturality is verified: the diagram commutes
  @naturality_check(auto)
}`}
                    </pre>
                  </div>
                </div>
              </section>

              {/* Quick Start */}
              <section id="quickstart" className="mb-20">
                <span className="mono text-xs text-purple-400 mb-2 block">03</span>
                <h2 className="text-white mb-8">Quick Start</h2>

                <div className="space-y-8">
                  {/* Step 1 */}
                  <div>
                    <h3 className="text-white mb-4 flex items-center gap-3">
                      <span className="badge">1</span>
                      Install the CLI
                    </h3>
                    <div className="code-block">
                      <pre className="text-sm">
{`# Using curl
curl -fsSL https://get.morphism.systems | sh

# Or with npm
npm install -g @morphism/cli

# Verify installation
morphism --version`}
                      </pre>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div>
                    <h3 className="text-white mb-4 flex items-center gap-3">
                      <span className="badge">2</span>
                      Initialize a Project
                    </h3>
                    <div className="code-block">
                      <pre className="text-sm">
{`# Create a new project
morphism init my-system

# Project structure:
# my-system/
# ├── morphism.toml      # Project config
# ├── src/
# │   ├── categories/    # Category definitions
# │   ├── functors/      # Deployment targets
# │   └── pipelines/     # Orchestration logic
# └── tests/             # Property tests`}
                      </pre>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div>
                    <h3 className="text-white mb-4 flex items-center gap-3">
                      <span className="badge">3</span>
                      Define Your System
                    </h3>
                    <div className="code-block">
                      <pre className="text-sm">
{`// src/categories/api.morph

category API {
  objects {
    Request, AuthenticatedRequest, Response
  }

  morphisms {
    authenticate: Request → AuthenticatedRequest
      @ensures(output.user != null)
      @latency(< 50ms)

    handle: AuthenticatedRequest → Response
      @ensures(output.status in [200, 400, 401, 500])
  }
}`}
                      </pre>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div>
                    <h3 className="text-white mb-4 flex items-center gap-3">
                      <span className="badge">4</span>
                      Verify and Deploy
                    </h3>
                    <div className="code-block">
                      <pre className="text-sm">
{`# Check correctness
morphism verify
# ✓ All properties verified
# ✓ Composition laws satisfied
# ✓ Functor preservation checked

# Deploy to Kubernetes
morphism deploy --target kubernetes

# Or to AWS Lambda
morphism deploy --target lambda`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* DSL Reference */}
              <section id="dsl" className="mb-20">
                <span className="mono text-xs text-purple-400 mb-2 block">04</span>
                <h2 className="text-white mb-8">DSL Reference</h2>

                <p className="text-slate-400 mb-8">
                  The Morphism DSL is a statically-typed language for defining categorical structures.
                  All programs are verified at compile time.
                </p>

                <div className="space-y-8">
                  {/* Types */}
                  <div>
                    <h3 className="text-white mb-4">Primitive Types</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-purple-900/50">
                            <th className="text-left py-3 px-4 mono text-purple-400">Type</th>
                            <th className="text-left py-3 px-4 mono text-purple-400">Description</th>
                            <th className="text-left py-3 px-4 mono text-purple-400">Example</th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-400">
                          <tr className="border-b border-slate-800">
                            <td className="py-3 px-4 mono">Int</td>
                            <td className="py-3 px-4">64-bit signed integer</td>
                            <td className="py-3 px-4 mono text-slate-500">42</td>
                          </tr>
                          <tr className="border-b border-slate-800">
                            <td className="py-3 px-4 mono">Float</td>
                            <td className="py-3 px-4">64-bit floating point</td>
                            <td className="py-3 px-4 mono text-slate-500">3.14</td>
                          </tr>
                          <tr className="border-b border-slate-800">
                            <td className="py-3 px-4 mono">String</td>
                            <td className="py-3 px-4">UTF-8 string</td>
                            <td className="py-3 px-4 mono text-slate-500">"hello"</td>
                          </tr>
                          <tr className="border-b border-slate-800">
                            <td className="py-3 px-4 mono">Duration</td>
                            <td className="py-3 px-4">Time duration</td>
                            <td className="py-3 px-4 mono text-slate-500">100ms, 5s, 1h</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 mono">Bytes</td>
                            <td className="py-3 px-4">Byte array</td>
                            <td className="py-3 px-4 mono text-slate-500">64KB, 1MB</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Annotations */}
                  <div>
                    <h3 className="text-white mb-4">Annotations</h3>
                    <div className="code-block">
                      <pre className="text-sm">
{`// Pre/post conditions
@requires(input.valid == true)
@ensures(output.processed == true)

// Performance constraints
@latency(< 100ms)
@throughput(> 1000/s)

// Resource limits
@memory(< 512MB)
@cpu(< 2 cores)

// Verification directives
@verify(exhaustive)
@invariant(state.consistent)

// Deployment hints
@replicas(3)
@affinity(zone: "us-west-2")`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* API Reference */}
              <section id="api" className="mb-20">
                <span className="mono text-xs text-purple-400 mb-2 block">05</span>
                <h2 className="text-white mb-8">API Reference</h2>

                <p className="text-slate-400 mb-8">
                  The Morphism runtime exposes a programmatic API for dynamic orchestration.
                </p>

                <div className="code-block mb-8">
                  <pre className="text-sm">
{`import { Category, Functor, Pipeline } from '@morphism/core';

// Load a category definition
const payments = await Category.load('./payments.morph');

// Create a pipeline
const pipeline = Pipeline.from(payments)
  .compose('validate', 'process', 'respond')
  .withConstraints({
    latency: '< 200ms',
    retries: 3
  });

// Deploy with a functor
const k8s = Functor.kubernetes({
  namespace: 'production',
  replicas: 3
});

await pipeline.deploy(k8s);

// Monitor in real-time
pipeline.metrics.subscribe(console.log);`}
                  </pre>
                </div>

                <div className="bg-purple-950/30 border border-purple-900/50 p-6">
                  <h4 className="text-white mb-3">Full API Documentation</h4>
                  <p className="text-slate-400 text-sm mb-4">
                    Complete API reference with examples, TypeScript definitions, and interactive playground.
                  </p>
                  <span className="mono text-xs text-slate-500">Coming soon with public beta release.</span>
                </div>
              </section>

              {/* Footer */}
              <footer className="border-t border-purple-900/30 pt-8 mt-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <span className="mono text-xs text-slate-500">
                    Last updated: January 2026
                  </span>
                  <div className="flex gap-4">
                    <Link href="/" className="mono text-xs text-slate-500 hover:text-white">Home</Link>
                    <a href="mailto:contact@morphism.systems" className="mono text-xs text-slate-500 hover:text-white">Feedback</a>
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
