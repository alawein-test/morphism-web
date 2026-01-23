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
        <title>Morphism Systems — Adaptive Interface Architectures</title>
        <meta name="description" content="High-fidelity platform exploring polymorphic UI patterns and generative component structures." />
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
                <span className="font-mono text-xs tracking-wider uppercase px-3 py-1 bg-blue-900/30 text-blue-400 border border-blue-800/50">Systemic Beta</span>
                <span className="mono text-sm text-slate-500">v0.1.0</span>
              </div>

              {/* Main headline */}
              <h1 className="text-white mb-6 leading-tight">
                Adaptive
                <br />
                <span className="text-gradient">Interface Architectures</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl leading-relaxed">
                Polymorphic UI patterns backed by rigorous state logic.
                <br />
                Engineered for precision, scalability, and fluidity.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-8 mb-12 max-w-xl">
                <div>
                  <div className="mono text-3xl md:text-4xl text-blue-500 mb-1">High</div>
                  <div className="mono text-xs text-slate-500 uppercase tracking-wider">Fidelity</div>
                </div>
                <div>
                  <div className="mono text-3xl md:text-4xl text-indigo-500 mb-1">100%</div>
                  <div className="mono text-xs text-slate-500 uppercase tracking-wider">Type-Safe</div>
                </div>
                <div>
                  <div className="mono text-3xl md:text-4xl text-purple-500 mb-1">Atomic</div>
                  <div className="mono text-xs text-slate-500 uppercase tracking-wider">Design</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/docs" className="btn-primary">
                  Explore Components →
                </Link>
                <Link href="#architecture" className="btn-secondary">
                  System Architecture
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative Geometric Overlay */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10 pointer-events-none hide-mobile">
             <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
               <rect x="50" y="50" width="300" height="300" stroke="#3b82f6" strokeWidth="1" />
               <rect x="100" y="100" width="200" height="200" stroke="#6366f1" strokeWidth="1" transform="rotate(45 200 200)" />
               <circle cx="200" cy="200" r="50" stroke="#8b5cf6" strokeWidth="2" />
               <line x1="0" y1="200" x2="400" y2="200" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="5 5" />
               <line x1="200" y1="0" x2="200" y2="400" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="5 5" />
             </svg>
          </div>
        </section>

        {/* Architecture Grid */}
        <section id="architecture" className="border-t border-slate-800 bg-surface/50">
          <div className="container">
            <div className="text-center mb-16">
              <span className="mono text-sm text-indigo-400 mb-4 block">// Core Principles</span>
              <h2 className="text-white">System Dynamics</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Atomic',
                  desc: 'Components are broken down to their irreducible functional units.',
                  color: 'blue'
                },
                {
                  title: 'Polymorphic',
                  desc: 'Interfaces adapt fluidly to data shape and user context.',
                  color: 'indigo'
                },
                {
                  title: 'Generative',
                  desc: 'Layouts compute their own optimal structure based on constraints.',
                  color: 'purple'
                }
              ].map((item) => (
                <div key={item.title} className="card group">
                  <h3 className={`text-2xl mb-4 text-${item.color}-400 group-hover:text-${item.color}-300 transition-colors`}>{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code/Tech Section */}
        <section className="border-t border-slate-800">
          <div className="container">
             <div className="grid md:grid-cols-2 gap-12 items-center">
               <div>
                 <span className="mono text-sm text-blue-500 mb-4 block">// The Stack</span>
                 <h2 className="text-white mb-6">Engineered for Scale</h2>
                 <p className="text-slate-400 mb-8">
                   Morphism is built on a Next.js foundation, leveraging React Server Components for optimal performance and Typescript for strict architectural enforcement.
                 </p>
                 
                 <div className="grid grid-cols-2 gap-4">
                   {['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                     <div key={tech} className="flex items-center gap-2 text-slate-300 font-mono text-sm">
                       <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                       {tech}
                     </div>
                   ))}
                 </div>
               </div>

               <div className="relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl opacity-50" />
                 <div className="relative bg-slate-950 border border-slate-800 p-6 font-mono text-sm text-slate-300 overflow-hidden">
                   <div className="flex gap-2 mb-4 border-b border-slate-800 pb-4">
                     <div className="w-3 h-3 rounded-full bg-slate-700" />
                     <div className="w-3 h-3 rounded-full bg-slate-700" />
                     <div className="w-3 h-3 rounded-full bg-slate-700" />
                   </div>
                   <pre className="language-tsx">
                     <span className="text-purple-400">interface</span> <span className="text-yellow-200">SystemProps</span> {'{'}
{`  mode: 'static' | 'fluid';
  density: number;
  theme: ThemeToken;
}`}
{'}'}
<br />
<span className="text-blue-400">export const</span> <span className="text-yellow-200">MorphismGrid</span> = ({'{'} mode {'}'}) ={'>'} {'{'}
{`  return (
    <Grid layout={mode}>
      <nodes.map(n => <Node key={n.id} />)
    </Grid>
  );
}`}
{'}'}
                   </pre>
                 </div>
               </div>
             </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 py-12 bg-surface">
          <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Image src="/favicon.svg" alt="Logo" width={24} height={24} className="opacity-50 grayscale hover:grayscale-0 transition-all" />
              <span className="mono text-xs text-slate-500">MORPHISM SYSTEMS</span>
            </div>
            
            <div className="mono text-xs text-slate-600">
              Architected by <a href="https://meshal.ai" className="text-slate-500 hover:text-blue-400 transition-colors">Meshal.ai</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
