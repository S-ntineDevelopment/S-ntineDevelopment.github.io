'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  uiShowcaseItems,
  uiStyleCategories,
  type UIStyleId,
  type UIShowcaseItem,
} from '../data/portfolioData';

type SuiteId = Exclude<UIStyleId, 'all'>;

export default function UIShowcase() {
  const [activeSuite, setActiveSuite] = useState<SuiteId | null>('idle');
  const [selectedItem, setSelectedItem] = useState<UIShowcaseItem | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const suiteCategories = useMemo(
    () => uiStyleCategories.filter((c): c is typeof c & { id: SuiteId } => c.id !== 'all'),
    []
  );

  const itemsBySuite = useMemo(() => {
    const grouped: Record<SuiteId, UIShowcaseItem[]> = {
      idle: [],
      squishie: [],
      bleach: [],
      adn: [],
    };
    for (const item of uiShowcaseItems) {
      grouped[item.styleId].push(item);
    }
    return grouped;
  }, []);

  const activeItems = activeSuite ? itemsBySuite[activeSuite] : uiShowcaseItems;
  const activeCategory =
    uiStyleCategories.find((c) => c.id === (activeSuite ?? 'all')) ?? uiStyleCategories[0];

  const selectedIndex = selectedItem
    ? activeItems.findIndex((item) => item.id === selectedItem.id)
    : -1;

  useEffect(() => {
    if (!selectedItem) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedItem(null);
      } else if (event.key === 'ArrowRight' && selectedIndex >= 0) {
        const next = activeItems[(selectedIndex + 1) % activeItems.length];
        if (next) setSelectedItem(next);
      } else if (event.key === 'ArrowLeft' && selectedIndex >= 0) {
        const prev = activeItems[(selectedIndex - 1 + activeItems.length) % activeItems.length];
        if (prev) setSelectedItem(prev);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedItem, selectedIndex, activeItems]);

  const blockContext = (e: React.MouseEvent) => e.preventDefault();

  const handleOpenDeck = (suiteId: SuiteId) => {
    setActiveSuite(suiteId);
    setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 60);
  };

  return (
    <section className="section-block" id="showcase">
      <div className="section-header">
        <span className="section-pill">FINISHED UI SUITES · {uiShowcaseItems.length} SCREENS</span>
        <h2>
          Hover a suite to fan the deck. <em>Click to inspect.</em>
        </h2>
        <p className="section-subtitle">
          Every deck below holds real, finished RoUI &amp; Roblox Studio screens—plus live animated
          GIFs and WebPs—organized by game so you can explore each style cleanly.
        </p>
      </div>

      <div className="curation-notice">
        <span className="notice-tag">CURATED SELECTION</span>
        <p>
          Because modern AI tools can clone flat layouts directly from public portfolio pages, this
          site intentionally showcases only the most relevant finished pieces—not my entire UI
          library. Full private suites and live Studio places are shared directly upon inquiry.
        </p>
      </div>

      {/* Mamba-Inspired Interactive Fan-Out Card Decks */}
      <div className="decks-grid">
        {suiteCategories.map((cat) => {
          const suiteItems = itemsBySuite[cat.id];
          const fanCards = suiteItems.slice(0, 3);
          const isSelected = activeSuite === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              className={`deck-card ${isSelected ? 'deck-active' : ''}`}
              onClick={() => handleOpenDeck(cat.id)}
              onContextMenu={blockContext}
              aria-pressed={isSelected}
            >
              <div className="deck-stage">
                <div className="deck-folder-back" aria-hidden="true" />
                <div className="deck-fan">
                  {fanCards.map((card, i) => (
                    <div className={`fan-slice fan-slice-${i}`} key={card.id}>
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        draggable={false}
                        className="protected-img"
                      />
                      <div className="anti-scrape-shield" aria-hidden="true" />
                    </div>
                  ))}
                </div>
                <div className="deck-folder-front" aria-hidden="true">
                  <span className="folder-tab-pill">{cat.shortLabel}</span>
                  <span className="folder-count">{suiteItems.length} screens</span>
                </div>
              </div>

              <div className="deck-info">
                <div className="deck-info-top">
                  <h3>{cat.label}</h3>
                  <span className="deck-open-hint">
                    {isSelected ? 'Viewing ✓' : 'Open deck →'}
                  </span>
                </div>
                <p>{cat.tagline}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Suite Expanded Gallery */}
      <div className="suite-drawer" ref={gridRef}>
        <div className="suite-drawer-head">
          <div>
            <span className="brief-badge">{activeCategory.shortLabel}</span>
            <h3>
              {activeCategory.label} <span>({activeItems.length} finished screens)</span>
            </h3>
            <p>{activeCategory.bestFor}</p>
          </div>
          <div className="suite-drawer-actions">
            <button
              type="button"
              className={`filter-pill ${activeSuite === null ? 'active' : ''}`}
              onClick={() => setActiveSuite(null)}
            >
              View All ({uiShowcaseItems.length})
            </button>
            {activeItems[0] && (
              <button
                type="button"
                className="btn btn-dark btn-sm"
                onClick={() => setSelectedItem(activeItems[0])}
              >
                Launch Lightbox ↗
              </button>
            )}
          </div>
        </div>

        <div className="showcase-grid">
          {activeItems.map((item) => (
            <article className="showcase-card" key={item.id}>
              <button
                type="button"
                className="showcase-card-btn"
                onClick={() => setSelectedItem(item)}
                onContextMenu={blockContext}
                aria-label={`Inspect ${item.title}`}
              >
                <div className="showcase-media-stage">
                  <div className="showcase-frame-tilt">
                    <img
                      src={item.image}
                      alt={`${item.title} — ${item.project}`}
                      loading="lazy"
                      draggable={false}
                      className="protected-img"
                    />
                    <div className="anti-scrape-shield" aria-hidden="true" />
                  </div>
                  <span className="card-style-tag">{item.styleLabel}</span>
                  <span className="card-inspect-pill">Inspect ↗</span>
                </div>

                <div className="showcase-card-body">
                  <div className="card-meta-row">
                    <span className="card-project">{item.project}</span>
                    <span className="card-type">{item.screenType}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <div className="card-deliverables">
                    {item.deliverables.map((d) => (
                      <span key={d}>{d}</span>
                    ))}
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* 1:1 Protected Lightbox */}
      {selectedItem && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="lightbox-modal"
            onClick={(e) => e.stopPropagation()}
            onContextMenu={blockContext}
          >
            <div className="lightbox-top">
              <div className="lightbox-title-group">
                <span className="lightbox-badge">{selectedItem.styleLabel}</span>
                <strong>{selectedItem.title}</strong>
                <small>
                  {selectedItem.project} · {selectedItem.screenType}
                </small>
              </div>
              <div className="lightbox-controls">
                <button
                  type="button"
                  className="icon-btn"
                  aria-label="Previous screen"
                  onClick={() => {
                    const prev =
                      activeItems[(selectedIndex - 1 + activeItems.length) % activeItems.length];
                    if (prev) setSelectedItem(prev);
                  }}
                >
                  ←
                </button>
                <span className="lightbox-counter">
                  {selectedIndex + 1} / {activeItems.length}
                </span>
                <button
                  type="button"
                  className="icon-btn"
                  aria-label="Next screen"
                  onClick={() => {
                    const next = activeItems[(selectedIndex + 1) % activeItems.length];
                    if (next) setSelectedItem(next);
                  }}
                >
                  →
                </button>
                <button
                  type="button"
                  className="icon-btn close-btn"
                  aria-label="Close inspector"
                  onClick={() => setSelectedItem(null)}
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="lightbox-stage">
              <img
                src={selectedItem.image}
                alt={`${selectedItem.title} — ${selectedItem.project}`}
                draggable={false}
                className="protected-img"
              />
              <div className="anti-scrape-shield" aria-hidden="true" />
            </div>

            <div className="lightbox-footer">
              <p>{selectedItem.summary}</p>
              <div className="lightbox-footer-meta">
                <div className="card-deliverables">
                  {selectedItem.deliverables.map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
                <span className="protection-note">
                  Protected preview · Clean 1:1 Studio proof on inquiry
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
