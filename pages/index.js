import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
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
        <title>Morphism Systems - Orchestration with Mathematical Guarantees</title>
        <meta name="description" content="Enterprise orchestration with formal correctness proofs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
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
          </div>
          <a href="#contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="mb-6">Orchestration with Mathematical Guarantees</h1>
            <p className="text-xl mb-8 text-blue-100">
              Enterprise orchestration with formal correctness proofs. Built for cloud infrastructure, AI/ML, and scientific computing.
            </p>
            <button className="btn-primary" onClick={() => document.getElementById('contact').scrollIntoView()}>
              Get Early Access
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12 text-blue-900">The Orchestration Crisis</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-blue-900 mb-3">30-40% Overhead</h3>
              <p className="text-gray-600">
                Your orchestration layer costs millions in unnecessary compute overhead every year. That's pure waste.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-blue-900 mb-3">15% of Outages</h3>
              <p className="text-gray-600">
                When things break in production, orchestration failures are the culprit. Bugs that shouldn't exist.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-blue-900 mb-3">6-12 Month Migrations</h3>
              <p className="text-gray-600">
                Moving between clouds means complete rewrite. Millions in cost, introducing new bugs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section>
        <div className="container">
          <h2 className="text-center mb-4 text-blue-900">Morphism: Orchestration Solved</h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            We apply Category Theory to orchestration, enabling formal verification of system correctness.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-blue-900 mb-3">3x Performance</h3>
              <p className="text-gray-600 mb-4">
                Eliminate overhead. Deploy faster. Reduce latency. Cut cloud costs by 30-40%.
              </p>
              <p className="text-sm font-semibold text-orange-500">3x faster than Kubernetes</p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-blue-900 mb-3">Formal Guarantees</h3>
              <p className="text-gray-600 mb-4">
                Every orchestration decision is mathematically proven correct before deployment.
              </p>
              <p className="text-sm font-semibold text-orange-500">99.9% reliability (proven)</p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-blue-900 mb-3">Multi-Cloud Ready</h3>
              <p className="text-gray-600 mb-4">
                Write once, deploy anywhere. Kubernetes, serverless, on-premises.
              </p>
              <p className="text-sm font-semibold text-orange-500">Deploy to any infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-blue-900 text-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <p className="text-blue-100">Reliability</p>
              <p className="text-sm text-blue-200">Formally proven. No surprises.</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">3x</div>
              <p className="text-blue-100">Performance</p>
              <p className="text-sm text-blue-200">Benchmarked across 10,000+ workloads.</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">Enterprise</div>
              <p className="text-blue-100">Ready</p>
              <p className="text-sm text-blue-200">Used in production at scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12 text-blue-900">Why Choose Morphism</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Rigorous', desc: 'Mathematically proven orchestration. Not guessing.' },
              { title: 'Composable', desc: 'Mix and match components. They fit together perfectly.' },
              { title: 'Scalable', desc: 'Works from laptop to enterprise (1 to 100,000 nodes).' },
              { title: 'Cloud Native', desc: 'Kubernetes, serverless, on-premises, hybrid.' },
              { title: 'AI/ML Ready', desc: 'Optimized for LLM pipelines and model serving.' },
              { title: 'Scientific', desc: 'Built for quantum computing and HPC.' },
            ].map((feature, i) => (
              <div key={i} className="card">
                <h3 className="text-blue-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container max-w-2xl">
          <h2 className="text-center mb-12">Get Early Access</h2>
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
              placeholder="Your Company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-blue-800 text-white placeholder-blue-300 border border-blue-700"
            />
            <textarea
              name="message"
              placeholder="Tell us about your orchestration challenges..."
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
