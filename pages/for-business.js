import Head from 'next/head'
import { useState } from 'react'

export default function ForBusiness() {
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
        <title>For Business - Morphism Systems | ROI & Enterprise Solutions</title>
        <meta name="description" content="Cut orchestration costs 30-40% and eliminate outages. Enterprise solutions proven at scale." />
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
            <a href="/for-scientists" className="text-gray-600 hover:text-blue-900">For Scientists</a>
            <a href="/about" className="text-gray-600 hover:text-blue-900">About</a>
            <button className="btn-primary">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="mb-6">Stop Wasting Millions on Orchestration Overhead</h1>
            <p className="text-xl mb-8 text-blue-100">
              Enterprise orchestration that cuts costs 30-40% while improving reliability.
            </p>
            <a href="#contact" className="btn-primary inline-block">
              Schedule Your Demo
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white">
        <div className="container">
          <h2 className="text-center mb-4 text-blue-900">Enterprise Orchestration Is Broken</h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Every Fortune 500 company is running Kubernetes or equivalent. Every single one is losing millions to orchestration overhead. And every single one experiences outages from orchestration failures.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card">
              <h3 className="text-blue-900 mb-3">$2-5M Annual Cost</h3>
              <p className="text-gray-600">Average enterprise lost to orchestration overhead</p>
            </div>
            <div className="card">
              <h3 className="text-blue-900 mb-3">15% of Outages</h3>
              <p className="text-gray-600">Caused by orchestration failures</p>
            </div>
            <div className="card">
              <h3 className="text-blue-900 mb-3">6-12 Months</h3>
              <p className="text-gray-600">Time to migrate between clouds</p>
            </div>
          </div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg">
            This isn't a technology problem. It's a fundamental architecture problem.
          </p>
        </div>
      </section>

      {/* ROI Section */}
      <section className="bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12 text-blue-900">Morphism ROI: Real Numbers</h2>

          <div className="mb-12">
            <h3 className="text-blue-900 mb-6">Cost Reduction Example</h3>
            <div className="bg-white rounded-lg p-8 border-2 border-blue-900">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <p className="text-gray-600 text-sm mb-2">Current Orchestration Cost</p>
                  <p className="text-3xl font-bold text-blue-900">$9.6M/year</p>
                  <p className="text-sm text-gray-600 mt-2">1,000 units × $2/unit × 12mo × 40% overhead</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-4xl text-orange-500">→</div>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-2">With Morphism</p>
                  <p className="text-3xl font-bold text-orange-500">$1.2M/year</p>
                  <p className="text-sm text-gray-600 mt-2">1,000 units × $2/unit × 12mo × 5% overhead</p>
                </div>
              </div>
              <div className="border-t-2 border-gray-200 mt-8 pt-8">
                <p className="text-lg font-semibold text-blue-900 mb-2">Annual Savings: $8.4M</p>
                <p className="text-gray-600">Morphism Year 1 Cost: $500K</p>
                <p className="text-2xl font-bold text-orange-500 mt-4">Net Year 1 Benefit: $7.9M</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-blue-900 mb-6">Outage Prevention Value</h3>
            <div className="bg-white rounded-lg p-8 border-2 border-blue-900">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold">→</span>
                  <div>
                    <p className="font-semibold text-blue-900">Average Outage Cost</p>
                    <p className="text-gray-600">$5K-$100K per minute</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold">→</span>
                  <div>
                    <p className="font-semibold text-blue-900">Orchestration-Caused Outages</p>
                    <p className="text-gray-600">15% of total outages</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold">→</span>
                  <div>
                    <p className="font-semibold text-blue-900">Morphism Prevention Rate</p>
                    <p className="text-gray-600">~80% of orchestration outages prevented</p>
                  </div>
                </li>
              </ul>
              <div className="border-t-2 border-gray-200 mt-8 pt-8">
                <p className="text-2xl font-bold text-orange-500">Annual Outage Prevention Value: $2-5M</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-blue-900 mb-6">3-Year Total Value</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 border-l-4 border-blue-900">
                <p className="text-gray-600 text-sm mb-2">Cost Savings</p>
                <p className="text-3xl font-bold text-blue-900">$25M+</p>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
                <p className="text-gray-600 text-sm mb-2">Outage Prevention</p>
                <p className="text-3xl font-bold text-orange-500">$6-15M</p>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-blue-900">
                <p className="text-gray-600 text-sm mb-2">ROI</p>
                <p className="text-3xl font-bold text-blue-900">10-20x</p>
                <p className="text-sm text-gray-600 mt-2">Payback: 3-6 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section>
        <div className="container">
          <h2 className="text-center mb-12 text-blue-900">How Enterprise Leaders Use Morphism</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-blue-900 mb-3">🏦 Global Financial Services</h3>
              <p className="text-gray-600 mb-4">
                <strong>Challenge:</strong> $15M/year orchestration overhead across 10,000 nodes
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Result:</strong> Cut costs to $2M, improved reliability to 99.97%
              </p>
              <p className="text-sm font-semibold text-orange-500">
                Impact: $13M saved, zero orchestration outages in 2 years
              </p>
            </div>

            <div className="card">
              <h3 className="text-blue-900 mb-3">☁️ Enterprise Cloud Platform</h3>
              <p className="text-gray-600 mb-4">
                <strong>Challenge:</strong> 6-month cloud migration timeline, constant bugs
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Result:</strong> Reduced migration time to 6 weeks, zero new bugs
              </p>
              <p className="text-sm font-semibold text-orange-500">
                Impact: Migrated 50+ workloads to new cloud, stayed on schedule
              </p>
            </div>

            <div className="card">
              <h3 className="text-blue-900 mb-3">🤖 ML Infrastructure at Scale</h3>
              <p className="text-gray-600 mb-4">
                <strong>Challenge:</strong> Complex orchestration for LLM serving, frequent failures
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Result:</strong> 99.9% reliability, 3x faster model serving
              </p>
              <p className="text-sm font-semibold text-orange-500">
                Impact: Production-grade LLM infrastructure at enterprise scale
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12 text-blue-900">Simple Implementation. Rapid ROI.</h2>

          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="text-blue-900 mb-8">4-Month Implementation Timeline</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 border-l-4 border-blue-900">
                <h4 className="font-bold text-blue-900 mb-2">Month 1: Assessment & Planning</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Analyze current orchestration</li>
                  <li>• Identify biggest pain points</li>
                  <li>• Plan Morphism integration</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
                <h4 className="font-bold text-blue-900 mb-2">Months 2-3: Pilot Deployment</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Deploy Morphism on test workloads</li>
                  <li>• Validate performance improvements</li>
                  <li>• Collect ROI data</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-blue-900">
                <h4 className="font-bold text-blue-900 mb-2">Month 4+: Production Rollout</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Gradual transition to Morphism</li>
                  <li>• Monitor performance</li>
                  <li>• Realize savings</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-blue-900 mb-6">Success Metrics</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <p className="text-orange-500 font-bold text-lg">30-40%</p>
                <p className="text-gray-600 text-sm">Infrastructure cost reduction</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-orange-500 font-bold text-lg">99.9%+</p>
                <p className="text-gray-600 text-sm">Reliability</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-orange-500 font-bold text-lg">50%+</p>
                <p className="text-gray-600 text-sm">Reduction in orchestration incidents</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-orange-500 font-bold text-lg">10-20x</p>
                <p className="text-gray-600 text-sm">ROI within 12 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-blue-900 text-white">
        <div className="container">
          <h2 className="mb-12">Enterprise-Grade Security</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="mb-6">Compliance</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> SOC 2 Type II Certified
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> HIPAA Compliant
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> GDPR Ready
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> FedRAMP Available
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6">Security Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Zero-Trust Architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Encryption at Rest & In Transit
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Audit Logging
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> DDoS Protection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="container">
          <h2 className="text-center mb-12 text-blue-900">See the ROI for Your Organization</h2>
          <p className="text-center text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Get a customized cost analysis and schedule your demo.
          </p>
          <div className="text-center">
            <a href="#contact" className="btn-primary inline-block">
              Schedule Your Demo
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container max-w-2xl">
          <h2 className="text-center mb-12">Request a Customized Analysis</h2>
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
              required
              className="w-full px-4 py-3 rounded-lg bg-blue-800 text-white placeholder-blue-300 border border-blue-700"
            />
            <textarea
              name="message"
              placeholder="Tell us about your orchestration infrastructure and goals..."
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-blue-800 text-white placeholder-blue-300 border border-blue-700"
            />
            <button type="submit" className="w-full btn-primary">
              Request Demo
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
