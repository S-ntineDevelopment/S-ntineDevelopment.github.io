'use client';

import { useState } from 'react';
import { faqItems, pricingTiers } from '../data/portfolioData';

export default function PricingAndFaq() {
  const [activeTierId, setActiveTierId] = useState<string>('full-suite');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activeTier =
    pricingTiers.find((t) => t.id === activeTierId) ?? pricingTiers[2];

  return (
    <>
      <section className="section-block" id="pricing">
        <div className="section-header">
          <span className="section-pill">TRANSPARENT PRICING &amp; SCOPE</span>
          <h2>
            Tailored plans. <em>Studio import included.</em>
          </h2>
          <p className="section-subtitle">
            Unlike Figma-only designers who charge extra just to get your UI into Roblox Studio,
            every tier includes native ScreenGui delivery verified across PC, Mobile, and Console.
          </p>
        </div>

        <div className="devex-banner">
          <span className="devex-dot" />
          <p>
            <strong>USD Preferred · Robux Accepted at DevEx ($0.0038/R$):</strong> ~263 R$ per $1
            USD. Client covers Roblox&apos;s 30% marketplace tax if not paying via Group Funds.
          </p>
        </div>

        <div className="pricing-tabs" role="tablist" aria-label="Select pricing tier">
          {pricingTiers.map((tier) => {
            const isActive = tier.id === activeTierId;
            return (
              <button
                key={tier.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`pricing-tab ${isActive ? 'active' : ''} tab-${tier.theme}`}
                onClick={() => setActiveTierId(tier.id)}
              >
                <span className="pricing-tab-name">{tier.name}</span>
                <small>{tier.usd}</small>
              </button>
            );
          })}
        </div>

        <div className={`pricing-card theme-${activeTier.theme}`}>
          <div className="pricing-card-left">
            <span className="pricing-tier-badge">{activeTier.badge}</span>
            <h3>{activeTier.name}</h3>
            <p className="pricing-tagline">{activeTier.tagline}</p>

            <div className="pricing-numbers">
              <div className="price-usd">{activeTier.usd}</div>
              <div className="price-robux">{activeTier.robux}</div>
            </div>

            <div className="pricing-meta-pills">
              <span>Turnaround: {activeTier.turnaround}</span>
              <span>{activeTier.revisions}</span>
            </div>

            <div className="pricing-actions">
              <a className="btn btn-cta" href="#contact">
                Request Scope &amp; Quote ↗
              </a>
              <span className="pricing-note">50% upfront on full suites · Fixed scope</span>
            </div>
          </div>

          <div className="pricing-card-right">
            <span className="included-label">WHAT&apos;S INCLUDED</span>
            <ul className="pricing-features">
              {activeTier.features.map((feat) => (
                <li key={feat}>
                  <span className="check-icon">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <div className="studio-advantage-box">
              <strong>Studio Retainers &amp; Scripting-Only:</strong> Available at{' '}
              <code>$45 – $75 / hr</code> for gameplay systems, vehicles, combat, and legacy
              codebase rewrites.
            </div>
          </div>
        </div>
      </section>

      <section className="section-block" id="faq">
        <div className="section-header">
          <span className="section-pill">TERMS &amp; FAQ</span>
          <h2>
            Clear terms. <em>Zero surprises.</em>
          </h2>
        </div>

        <div className="faq-list">
          {faqItems.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={item.q}>
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <span>{item.q}</span>
                  <span className="faq-plus">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p className="faq-answer">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
