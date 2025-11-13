import React from 'react'
import Spline from '@splinetool/react-spline'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Top Navigation */}
      <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-2 select-none">
            <span className="text-xl font-medium tracking-tight">FLAMES</span>
            <span className="text-zinc-500 text-sm">Automation</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex items-center h-9 px-4 rounded-md border border-zinc-300 text-sm hover:bg-zinc-50 transition-colors">
              Book a call
            </a>
            <a href="#contact" className="inline-flex items-center h-9 px-4 rounded-md bg-accent text-white text-sm hover:opacity-90 transition-opacity">
              Start a pilot
            </a>
          </div>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <section className="relative h-[70vh] md:h-[80vh] border-b border-zinc-200">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Content overlay */}
        <div className="relative z-10 h-full">
          <div className="mx-auto max-w-6xl px-6 h-full flex flex-col justify-center">
            <div className="max-w-2xl">
              <h1 className="font-heading text-4xl md:text-6xl leading-tight tracking-tight">
                AI Automation with clinical precision.
              </h1>
              <p className="mt-4 text-zinc-600 text-base md:text-lg">
                We design, validate, and deploy reliable automations for finance, ops, and customer platforms. No hype—measurable ROI, enterprise standards, and audit-ready delivery.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a href="#contact" className="inline-flex items-center h-10 px-5 rounded-md bg-accent text-white text-sm md:text-base hover:opacity-90 transition-opacity">
                  Get proposal
                </a>
                <a href="#services" className="inline-flex items-center h-10 px-5 rounded-md border border-zinc-300 text-sm md:text-base hover:bg-zinc-50 transition-colors">
                  Explore services
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-xs text-zinc-500">
                <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent"></span> SOC2-aware process</div>
                <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent"></span> Vendor-neutral stack</div>
                <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent"></span> SLA-backed support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-8 md:py-10">
          <div className="text-xs uppercase tracking-wider text-zinc-500 mb-4">Trusted by teams in</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {['Finance','Healthcare','E‑commerce','Logistics','SaaS','Public'].map((name) => (
              <div key={name} className="h-10 flex items-center justify-center rounded-md border border-zinc-200 text-zinc-700">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="font-heading text-3xl md:text-4xl tracking-tight">What we deliver</h2>
          <p className="mt-3 text-zinc-600 max-w-2xl">Structured automation programs built to your controls and data flows. We prioritize reliability, observability, and maintainability over novelty.</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Process Engineering',
                body: 'Map critical paths, remove variance, and codify SOP → automation with deterministic outcomes.',
              },
              {
                title: 'Agentic Workflows',
                body: 'Task-specific agents with guardrails, retrieval layers, and human-in-the-loop checkpoints.',
              },
              {
                title: 'Systems Integration',
                body: 'Connect CRMs, ERPs, data warehouses, and communication layers with durable eventing.',
              },
              {
                title: 'Quality & Compliance',
                body: 'Versioned prompts, eval suites, lineage, and policy gates for SOC2/GDPR alignment.',
              },
              {
                title: 'Observability',
                body: 'Metricized execution, tracing, and alerting. Clear ownership and on-call readiness.',
              },
              {
                title: 'Change Management',
                body: 'Deploy safely with canaries, rollbacks, and training. Documentation included.',
              },
            ].map((item) => (
              <article key={item.title} className="p-6 rounded-md border border-zinc-200 bg-white">
                <h3 className="font-heading text-xl">{item.title}</h3>
                <p className="mt-2 text-zinc-600 text-sm">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="font-heading text-3xl md:text-4xl tracking-tight">A clear, auditable process</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              { step: '01', title: 'Discovery', text: 'Stakeholder interviews, system inventory, and a quantified automation backlog.' },
              { step: '02', title: 'Pilot', text: 'One scoped workflow with success criteria, guardrails, and baseline metrics.' },
              { step: '03', title: 'Rollout', text: 'Scale to adjacent workflows with observability and change management.' },
              { step: '04', title: 'Operate', text: 'SLA-backed monitoring, updates, and quarterly improvement cycles.' },
            ].map((s) => (
              <div key={s.step} className="rounded-md border border-zinc-200 p-5">
                <div className="text-xs text-zinc-500">{s.step}</div>
                <div className="mt-1 font-heading text-lg">{s.title}</div>
                <p className="mt-2 text-sm text-zinc-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="rounded-md border border-zinc-200 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl tracking-tight">Run a 2‑week, fixed‑fee pilot.</h3>
              <p className="mt-2 text-sm text-zinc-600 max-w-xl">We select a high‑leverage workflow, ship an evaluated solution, and report clear ROI. If it doesn’t work, you don’t pay.</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="mailto:hello@flames.automation" className="inline-flex items-center h-10 px-5 rounded-md bg-accent text-white hover:opacity-90 transition-opacity">
                Request scope
              </a>
              <a href="#" className="inline-flex items-center h-10 px-5 rounded-md border border-zinc-300 hover:bg-zinc-50 transition-colors">
                View methodology
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between text-sm text-zinc-500">
          <span>© {new Date().getFullYear()} Flames Automation</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-800">Privacy</a>
            <a href="#" className="hover:text-zinc-800">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
