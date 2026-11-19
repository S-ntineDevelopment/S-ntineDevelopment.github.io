'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  uiShowcaseItems,
  uiStyleCategories,
  type UIStyleId,
  type UIShowcaseItem,
} from '../data/portfolioData';

const INITIAL_ALL_LIMIT = 12;

export default function UIShowcase() {
  const [activeStyle, setActiveStyle] = useState<UIStyleId>('all');
  const [showAll, setShowAll] = useState(false);
  const [selectedItem, setSelectedItem] = useState<UIShowcaseItem | null>(null);

  const counts = useMemo(() => {
    const map: Record<UIStyleId, number> = {
      all: uiShowcaseItems.length,
      idle: 0,
      squishie: 0,
      bleach: 0,
      adn: 0,
      tooling: 0,
    };
    for (const item of uiShowcaseItems) {
      map[item.styleId] += 1;
    }
    return map;
  }, []);

  const filteredItems = useMemo(() => {
    if (activeStyle === 'all') {
      const featured = uiShowcaseItems.filter((item) => item.featured);
      const rest = uiShowcaseItems.filter((item) => !item.featured);
      return [...featured, ...rest];
    }
    return uiShowcaseItems.filter((item) => item.styleId === activeStyle);
  }, [activeStyle]);

  const visibleItems =
    activeStyle === 'all' && !showAll
      ? filteredItems.slice(0, INITIAL_ALL_LIMIT)
      : filteredItems;

  const activeCategory =
    uiStyleCategories.find((c) => c.id === activeStyle) ?? uiStyleCategories[0];

  const selectedIndex = selectedItem
    ? filteredItems.findIndex((item) => item.id === selectedItem.id)
    : -1;

  useEffect(() => {
    if (!selectedItem) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedItem(null);
      } else if (event.key === 'ArrowRight' && selectedIndex >= 0) {
        const next = filteredItems[(selectedIndex + 1) % filteredItems.length];
        if (next) setSelectedItem(next);
      } else if (event.key === 'ArrowLeft' && selectedIndex >= 0) {
        const prev =
          filteredItems[(selectedIndex - 1 + filteredItems.length) % filteredItems.length];
        if (prev) setSelectedItem(prev);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedItem, selectedIndex, filteredItems]);

  const blockContext = (e: React.MouseEvent) => e.preventDefault();

  return (
    <section className="section-block" id="showcase">
      <div className="section-header">
        <span className="section-pill">CURATED VAULT · {uiShowcaseItems.length} SCREENS</span>
        <h2>
          Built across <em>8+ commercial styles.</em>
        </h2>
        <p className="section-subtitle">
          Every screen below is built for real Roblox production—clean hierarchy, crisp typography,
          and responsive across PC, Mobile, and Console. Public previews carry subtle watermarks;
          unwatermarked 1:1 Studio builds are shared directly with clients.
        </p>
      </div>

      <div className="filter-bar" role="tablist" aria-label="Filter showcase by genre">
        {uiStyleCategories.map((cat) => {
          const isActive = activeStyle === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`filter-pill ${isActive ? 'active' : ''}`}
              onClick={() => {
                setActiveStyle(cat.id);
                setShowAll(false);
              }}
            >
              <span>{cat.label}</span>
              <small>{counts[cat.id]}</small>
            </button>
          );
        })}
      </div>

      <div className="category-brief">
        <div>
          <span className="brief-badge">{activeCategory.shortLabel}</span>
          <p>{activeCategory.tagline}</p>
        </div>
        <div className="brief-meta">
          <span>BEST FOR</span>
          <strong>{activeCategory.bestFor}</strong>
        </div>
      </div>

      <div className="showcase-grid">
        {visibleItems.map((item) => (
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

      {activeStyle === 'all' && !showAll && filteredItems.length > INITIAL_ALL_LIMIT && (
        <div className="expand-bar">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => setShowAll(true)}
          >
            Show all {filteredItems.length} curated screens (+
            {filteredItems.length - INITIAL_ALL_LIMIT} more)
          </button>
          <span className="expand-hint">Or pick any genre filter above to inspect a full suite.</span>
        </div>
      )}

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
                      filteredItems[
                        (selectedIndex - 1 + filteredItems.length) % filteredItems.length
                      ];
                    if (prev) setSelectedItem(prev);
                  }}
                >
                  ←
                </button>
                <span className="lightbox-counter">
                  {selectedIndex + 1} / {filteredItems.length}
                </span>
                <button
                  type="button"
                  className="icon-btn"
                  aria-label="Next screen"
                  onClick={() => {
                    const next = filteredItems[(selectedIndex + 1) % filteredItems.length];
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
