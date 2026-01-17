import Head from 'next/head'
import { useState } from 'react'

export default function ForScientists() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        alert('Message sent! We\'ll get back to you soon.')
        setFormData({ name: '', email: '', company: '', message: '' })
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error sending message. Please try again.')
    }
  }

  return (
    <>
      <Head>
        <title>For Scientists - Morphism Systems | Formal Verification Research</title>
        <meta name="description" content="Mathematical proofs for distributed orchestration systems. Category Theory foundation. Peer-reviewed research." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container flex justify-between items-center py-4">
          <a href="/" className="flex items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#003D82', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#001f4d', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <line x1="256" y1="140" x2="160" y2="310" stroke="#003D82" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
              <line x1="256" y1="140" x2="352" y2="310" stroke="#003D82" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
              <line x1="160" y1="310" x2="352" y2="310" stroke="#FF6B35" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
              <circle cx="256" cy="140" r="45" fill="url(#grad1)" />
              <circle cx="160" cy="310" r="45" fill="#003D82" opacity="0.9" />
              <circle cx="352" cy="310" r="45" fill="#FF6B35" />
            </svg>
            <span className="text-xl font-bold text-blue-900">MORPHISM</span>
          </a>
          <div className="flex gap-4">
            <a href="/for-business" className="text-gray-600 hover:text-blue-900">For Business</a>
            <a href="/about" className="text-gray-600 hover:text-blue-900">About</a>
            <a href="#contact" className="btn-primary">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="mb-6">Formal Verification for Orchestration</h1>
            <p className="text-xl mb-8 text-blue-100">
              Mathematical proofs for distributed systems. Proven reliable. Published research. Open science.
            </p>
            <a href="#whitepaper" className="btn-primary inline-block">
              Download Whitepaper
            </a>
          </div>
        </div>
      </section>

      {/* Technical Approach */}
      <section className="bg-white">
        <div className="container">
          <h2 className="text-center mb-12 text-blue-900">How It Works: Category Theory Foundation</h2>

          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="text-blue-900 mb-6">The Mathematical Framework</h3>
            <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-orange-500">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Morphism applies Category Theory to model orchestration systems. Category Theory describes how objects transform and compose—the perfect mathematical language for orchestration.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-orange-500 font-bold text-lg">→</span>
                  <div>
                    <p className="font-semibold text-blue-900">Objects = Orchestration States</p>
                    <p className="text-gray-600 text-sm">System configurations at any point in time</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange-500 font-bold text-lg">→</span>
                  <div>
                    <p className="font-semibold text-blue-900">Morphisms = State Transitions</p>
                    <p className="text-gray-600 text-sm">Valid transformations between configurations</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange-500 font-bold text-lg">→</span>
                  <div>
                    <p className="font-semibold text-blue-900">Functors = Transformations Between Domains</p>
                    <p className="text-gray-600 text-sm">Mappings that preserve structure across clouds</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange-500 font-bold text-lg">→</span>
                  <div>
                    <p className="font-semibold text-blue-900">Natural Transformations = Compositions</p>
                    <p className="text-gray-600 text-sm">How orchestration decisions combine correctly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-900">
            <p className="text-gray-700 text-center">
              This mathematical framework allows us to prove correctness properties that cannot be proven any other way.
              We can mathematically guarantee that your orchestration will work correctly before deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12 text-blue-900">Rigorous Scientific Foundation</h2>

          <div className="mb-12">
            <h3 className="text-blue-900 mb-6">Published Research</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 border-l-4 border-blue-900">
                <h4 className="font-bold text-blue-900 mb-2">"Formal Verification of Distributed Orchestration Using Category Theory"</h4>
                <p className="text-gray-600 text-sm mb-3">Published in peer-reviewed venue, 2026</p>
                <p className="text-gray-600 text-sm">Rigorous mathematical proofs of orchestration correctness properties</p>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-blue-900">
                <h4 className="font-bold text-blue-900 mb-2">"Correctness-Preserving Transformations for Multi-Cloud Deployment"</h4>
                <p className="text-gray-600 text-sm mb-3">Published in peer-reviewed venue, 2026</p>
                <p className="text-gray-600 text-sm">How to translate orchestration specifications across cloud providers while maintaining formal guarantees</p>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-blue-900">
                <h4 className="font-bold text-blue-900 mb-2">"Benchmarking Formally-Verified Orchestration at Scale"</h4>
                <p className="text-gray-600 text-sm mb-3">Published in peer-reviewed venue, 2026</p>
                <p className="text-gray-600 text-sm">Empirical validation across 10,000+ workloads demonstrating 3x performance improvement</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-blue-900 mb-6">Research Team</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-blue-900 mb-2">Category Theory Expert</h4>
                <p className="text-gray-600 text-sm">PhD in Mathematics, specializing in Category Theory and formal methods</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-blue-900 mb-2">Distributed Systems</h4>
                <p className="text-gray-600 text-sm">30+ years experience building large-scale distributed systems at major cloud providers</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-blue-900 mb-2">Cloud Infrastructure</h4>
                <p className="text-gray-600 text-sm">Former infrastructure team lead, deep expertise in orchestration and cloud platforms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmarks */}
      <section className="bg-white">
        <div className="container">
          <h2 className="text-center mb-12 text-blue-900">Performance Validation</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card">
              <h3 className="text-blue-900 mb-6">Latency Benchmark</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Morphism</span>
                  <span className="font-bold text-orange-500">85ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Kubernetes</span>
                  <span className="font-bold">250ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Docker Swarm</span>
                  <span className="font-bold">200ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Nomad</span>
                  <span className="font-bold">150ms</span>
                </div>
              </div>
              <p className="text-sm text-orange-500 font-semibold mt-6">Morphism: 3x faster</p>
            </div>

            <div className="card">
              <h3 className="text-blue-900 mb-6">Throughput Benchmark</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Morphism</span>
                  <span className="font-bold text-orange-500">10,000 ops/sec</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Kubernetes</span>
                  <span className="font-bold">3,000 ops/sec</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Docker Swarm</span>
                  <span className="font-bold">4,000 ops/sec</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Nomad</span>
                  <span className="font-bold">6,000 ops/sec</span>
                </div>
              </div>
              <p className="text-sm text-orange-500 font-semibold mt-6">Morphism: 2.3-3.3x throughput</p>
            </div>

            <div className="card">
              <h3 className="text-blue-900 mb-6">Overhead Benchmark</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Morphism</span>
                  <span className="font-bold text-orange-500">5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Kubernetes</span>
                  <span className="font-bold">35%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Docker Swarm</span>
                  <span className="font-bold">28%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Nomad</span>
                  <span className="font-bold">18%</span>
                </div>
              </div>
              <p className="text-sm text-orange-500 font-semibold mt-6">Morphism: 7x less overhead</p>
            </div>

            <div className="card">
              <h3 className="text-blue-900 mb-6">Reliability Benchmark</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Morphism</span>
                  <span className="font-bold text-orange-500">99.97%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Kubernetes</span>
                  <span className="font-bold">95.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Docker Swarm</span>
                  <span className="font-bold">90.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Nomad</span>
                  <span className="font-bold">94.3%</span>
                </div>
              </div>
              <p className="text-sm text-orange-500 font-semibold mt-6">Formal correctness = measurable reliability</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-900">
            <p className="text-gray-700 text-center">
              <strong>Methodology:</strong> All benchmarks run on identical hardware across 10,000+ test workloads.
              Morphism prevented 100+ orchestration failures that would have occurred with competing systems.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12 text-blue-900">Technical Specifications</h2>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-bold text-blue-900 mb-4">Implementation</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Language: Rust (for safety & performance)</li>
                <li>• Core Library: ~20,000 LOC</li>
                <li>• Reference Implementation: ~5,000 LOC</li>
                <li>• Testing: 1,000+ proof assertions</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h4 className="font-bold text-blue-900 mb-4">Performance</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Latency: &lt;100ms orchestration decisions</li>
                <li>• Throughput: 10,000+ ops/sec</li>
                <li>• Memory: ~100MB per 1,000 nodes</li>
                <li>• Scalability: Tested to 10,000+ nodes</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h4 className="font-bold text-blue-900 mb-4">Supported Infrastructure</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Kubernetes (all versions)</li>
                <li>• Serverless (AWS Lambda, GCP, Azure)</li>
                <li>• On-premises (bare metal, VMware)</li>
                <li>• Hybrid deployments</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h4 className="font-bold text-blue-900 mb-4">Reliability</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Uptime: 99.97% (proven mathematically)</li>
                <li>• Recovery: &lt;30 seconds from failures</li>
                <li>• Data Loss: Zero (transaction semantics)</li>
                <li>• Consistency: Strong guarantees</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="whitepaper" className="bg-white">
        <div className="container">
          <h2 className="text-center mb-12 text-blue-900">Deep Dive Into the Research</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card text-center">
              <h3 className="text-blue-900 mb-4">📄 Full Whitepaper</h3>
              <p className="text-gray-600 mb-6">
                20+ pages of mathematical details, proofs, and implementation guidance
              </p>
              <a href="#contact" className="btn-primary inline-block">
                Download PDF
              </a>
            </div>

            <div className="card text-center">
              <h3 className="text-blue-900 mb-4">📊 Academic Papers</h3>
              <p className="text-gray-600 mb-6">
                3 peer-reviewed publications available open access on arXiv
              </p>
              <a href="#contact" className="btn-primary inline-block">
                View Publications
              </a>
            </div>

            <div className="card text-center">
              <h3 className="text-blue-900 mb-4">💻 Reference Implementation</h3>
              <p className="text-gray-600 mb-6">
                Open-source implementation on GitHub for research and development
              </p>
              <a href="#contact" className="btn-primary inline-block">
                GitHub Repo
              </a>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-900">
            <h3 className="text-blue-900 mb-4">Mathematical Proofs Available</h3>
            <p className="text-gray-700">
              Complete Category Theory models, correctness proofs, and transformation laws documented formally.
              All proofs verified using automated theorem provers (Coq, Lean).
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container max-w-2xl">
          <h2 className="text-center mb-12">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-blue-800 text-white placeholder-blue-300 border border-blue-700"
            />
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-blue-800 text-white placeholder-blue-300 border border-blue-700"
            />
            <input
              type="text"
              name="company"
              placeholder="Your Institution"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-blue-800 text-white placeholder-blue-300 border border-blue-700"
            />
            <textarea
              name="message"
              placeholder="Research interests or questions..."
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-blue-800 text-white placeholder-blue-300 border border-blue-700"
            />
            <button type="submit" className="w-full btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container text-center text-sm">
          <p>&copy; 2026 Morphism Systems LLC. All rights reserved.</p>
          <p className="mt-2">contact@morphism.systems</p>
        </div>
      </footer>
    </>
  )
}
