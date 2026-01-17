import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About Morphism Systems | Team & Mission</title>
        <meta name="description" content="Morphism Systems is solving enterprise orchestration with formal correctness proofs using Category Theory." />
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
            <a href="/for-scientists" className="text-gray-600 hover:text-blue-900">For Scientists</a>
            <a href="/" className="btn-primary">Home</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="mb-6">Building the Future of Orchestration</h1>
            <p className="text-xl text-blue-100">
              We apply mathematical rigor to solve enterprise orchestration problems that affect millions of companies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To bring mathematical rigor to enterprise orchestration. We believe orchestration systems deserve formal correctness guarantees, not approximations. Our mission is to make that the industry standard.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Vision</h2>
              <div className="space-y-4 text-gray-700">
                <p>A world where every orchestration system is formally verified.</p>
                <p>Where outages from orchestration failures are impossible.</p>
                <p>Where clouds can be swapped without rewrites.</p>
                <p>Where infrastructure is predictable and provable.</p>
                <p className="font-semibold text-blue-900 mt-6">That's the future we're building.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-900">
            <h3 className="text-blue-900 mb-4">Why This Matters</h3>
            <p className="text-gray-700">
              Enterprise orchestration systems are critical infrastructure that affect millions of users, billions of dollars in compute, and critical applications. These systems deserve to be mathematically proven correct, not estimated to probably work. We're making that possible.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12 text-blue-900">Leadership Team</h2>

          <div className="grid md:grid-cols-1 gap-12 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex gap-6">
                <div className="w-32 h-32 bg-blue-900 rounded-lg flex-shrink-0 flex items-center justify-center text-white text-4xl font-bold">
                  MA
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Meshal Alawein</h3>
                  <p className="text-orange-500 font-semibold mb-4">Co-founder & CEO</p>
                  <p className="text-gray-700 mb-4">
                    Background in distributed systems and cloud infrastructure. Spent 8+ years building orchestration systems at major cloud providers. Frustrated with approximations in orchestration, realized mathematical approach could solve fundamental problems.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Education: BS Computer Science. Specialist in formal methods and Category Theory applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-900">
            <h3 className="text-blue-900 mb-4">Open Founder Positions</h3>
            <p className="text-gray-700 mb-4">
              We're actively recruiting co-founders for key technical roles:
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• VP Engineering (distributed systems expertise)</li>
              <li>• Head of Research (formal methods/category theory)</li>
              <li>• VP Sales (enterprise SaaS experience)</li>
            </ul>
            <p className="text-gray-600 text-sm mt-6">
              Interested? <a href="/" className="text-orange-500 font-semibold hover:underline">Get in touch</a>
            </p>
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="bg-white">
        <div className="container">
          <h2 className="text-center mb-12 text-blue-900">Trusted by Experts</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                A1
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Category Theory Expert</h3>
              <p className="text-gray-600 text-sm mb-4">
                PhD Mathematician. 20+ years formal methods research. Verified our Category Theory model.
              </p>
              <p className="text-orange-500 text-sm font-semibold">Advisor - Research Direction</p>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                A2
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Distributed Systems Leader</h3>
              <p className="text-gray-600 text-sm mb-4">
                Former Principal Engineer at cloud provider. Built orchestration at massive scale. Early believer in our approach.
              </p>
              <p className="text-orange-500 text-sm font-semibold">Advisor - Enterprise Strategy</p>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                A3
              </div>
              <h3 className="font-bold text-blue-900 mb-2">ML Infrastructure Pioneer</h3>
              <p className="text-gray-600 text-sm mb-4">
                Leading ML infrastructure team at major tech company. Sees massive opportunity in our solution for LLM serving.
              </p>
              <p className="text-orange-500 text-sm font-semibold">Advisor - ML/AI Market</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-900">
            <h3 className="text-blue-900 mb-4">Seeking Additional Advisors</h3>
            <p className="text-gray-700 mb-4">
              We're building a world-class advisory board. We're looking for:
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Cloud infrastructure leaders (AWS, GCP, Azure experience)</li>
              <li>• Enterprise software sales leaders</li>
              <li>• Academic researchers in formal verification</li>
              <li>• Kubernetes/orchestration ecosystem leaders</li>
            </ul>
            <p className="text-gray-600 text-sm mt-6">
              Interested in advising? <a href="/" className="text-orange-500 font-semibold hover:underline">We'd love to chat</a>
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12 text-blue-900">Company Details</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-blue-900 mb-4">Founding</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• <strong>Founded:</strong> 2025</li>
                <li>• <strong>Incorporated:</strong> Morphism Systems LLC, USA</li>
                <li>• <strong>Stage:</strong> Pre-seed / Seed</li>
                <li>• <strong>Team Size:</strong> 1-3 (founder + advisors)</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-blue-900 mb-4">Funding & Milestones</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• <strong>Current Focus:</strong> NSF SBIR Phase I ($150K)</li>
                <li>• <strong>Timeline:</strong> Submit March 2026</li>
                <li>• <strong>Next:</strong> Series A after Phase II</li>
                <li>• <strong>Goal:</strong> $1B+ valuation</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-blue-900 mb-4">Technology</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• <strong>Core:</strong> Category Theory formal verification</li>
                <li>• <strong>Language:</strong> Rust (safety + performance)</li>
                <li>• <strong>Line of Code:</strong> ~20K core, ~5K reference impl</li>
                <li>• <strong>Research:</strong> 3 peer-reviewed papers published</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-blue-900 mb-4">Market Focus</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• <strong>TAM:</strong> $8-12B globally</li>
                <li>• <strong>Initial:</strong> Enterprise (Fortune 500)</li>
                <li>• <strong>Secondary:</strong> SaaS / SMB</li>
                <li>• <strong>Growth:</strong> 25-35% CAGR</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="bg-white">
        <div className="container">
          <h2 className="text-center mb-12 text-blue-900">Values</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-bold text-blue-900 mb-2">Rigor</h3>
              <p className="text-gray-600 text-sm">Mathematical proof over approximation. Science over hope.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="font-bold text-blue-900 mb-2">Composition</h3>
              <p className="text-gray-600 text-sm">Components that fit together perfectly. Beautiful abstractions.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="font-bold text-blue-900 mb-2">Scale</h3>
              <p className="text-gray-600 text-sm">From single machines to global systems. Same guarantees everywhere.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-bold text-blue-900 mb-2">Openness</h3>
              <p className="text-gray-600 text-sm">Open research. Published papers. Transparent science.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container">
          <h2 className="text-center mb-12">Join Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-blue-800 text-white border-0">
              <h3 className="mb-4">Advise</h3>
              <p className="mb-6 text-blue-100">
                Help guide our strategy as we build the future of orchestration.
              </p>
              <a href="/" className="text-orange-500 font-semibold hover:underline">
                Become an Advisor →
              </a>
            </div>

            <div className="card bg-blue-800 text-white border-0">
              <h3 className="mb-4">Work With Us</h3>
              <p className="mb-6 text-blue-100">
                We're hiring co-founders and early team members.
              </p>
              <a href="/" className="text-orange-500 font-semibold hover:underline">
                View Open Roles →
              </a>
            </div>

            <div className="card bg-blue-800 text-white border-0">
              <h3 className="mb-4">Research</h3>
              <p className="mb-6 text-blue-100">
                Collaborate on formal verification research and Category Theory applications.
              </p>
              <a href="/" className="text-orange-500 font-semibold hover:underline">
                Research Opportunities →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container text-center text-sm">
          <p>&copy; 2026 Morphism Systems LLC. All rights reserved.</p>
          <p className="mt-2">contact@morphism.systems | morphism.systems</p>
        </div>
      </footer>
    </>
  )
}
