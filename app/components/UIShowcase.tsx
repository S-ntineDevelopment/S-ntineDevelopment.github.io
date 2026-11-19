'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  uiShowcaseItems,
  uiStyleCategories,
  type UIShowcaseItem,
  type UIStyleId,
} from '../data/portfolioData';

export default function UIShowcase() {
  const [activeStyle, setActiveStyle] = useState<UIStyleId>('all');
  const [showAll, setShowAll] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activeCategory = useMemo(
    () => uiStyleCategories.find((cat) => cat.id === activeStyle) ?? uiStyleCategories[0],
    [activeStyle]
  );

  const filteredItems = useMemo(() => {
    if (activeStyle === 'all') {
      return uiShowcaseItems;
    }
    return uiShowcaseItems.filter((item) => item.styleId === activeStyle);
  }, [activeStyle]);

  const visibleItems = useMemo(() => {
    if (activeStyle !== 'all' || showAll) {
      return filteredItems;
    }
    // Curated cross-style spread: 2 flagship screens from each of the 6 styles = 12 screens
    const perStyle = new Map<string, number>();
    const spread: UIShowcaseItem[] = [];
    for (const item of filteredItems) {
      const count = perStyle.get(item.styleId) ?? 0;
      if (count < 2) {
        spread.push(item);
        perStyle.set(item.styleId, count + 1);
      }
    }
    return spread;
  }, [activeStyle, filteredItems, showAll]);

  const selectedIndex = useMemo(
    () => (selectedId ? filteredItems.findIndex((item) => item.id === selectedId) : -1),
    [filteredItems, selectedId]
  );

  const selectedItem = selectedIndex >= 0 ? filteredItems[selectedIndex] : null;

  useEffect(() => {
    if (!selectedItem) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedId(null);
      } else if (event.key === 'ArrowRight') {
        const next = filteredItems[(selectedIndex + 1) % filteredItems.length];
        if (next) setSelectedId(next.id);
      } else if (event.key === 'ArrowLeft') {
        const prev = filteredItems[(selectedIndex - 1 + filteredItems.length) % filteredItems.length];
        if (prev) setSelectedId(prev.id);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [filteredItems, selectedIndex, selectedItem]);

  const countForStyle = (styleId: UIStyleId) =>
    styleId === 'all'
      ? uiShowcaseItems.length
      : uiShowcaseItems.filter((item) => item.styleId === styleId).length;

  return (
    <section className="studio-panel ui-showcase-panel" id="ui-showcase">
      <div className="panel-heading">
        <span>
          <i className="panel-icon ui-icon" /> UI DESIGN SHOWCASE
        </span>
        <small>{uiShowcaseItems.length} SCREENS · 6 STYLES</small>
      </div>

      <div className="section-intro-row">
        <div>
          <p className="eyebrow">Commission-ready UI styles</p>
          <h2>
            Interfaces built to <em>sell &amp; ship.</em>
          </h2>
        </div>
        <p>
          Full-game UI suites authored across 6 distinct Roblox genres—built for crisp readability,
          responsive scaling, and whole-state spritesheet animation.
        </p>
      </div>

      <div className="style-filter-bar" role="tablist" aria-label="Filter UI showcase by style">
        {uiStyleCategories.map((cat) => {
          const isActive = cat.id === activeStyle;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`style-tab ${isActive ? 'active' : ''}`}
              onClick={() => {
                setActiveStyle(cat.id);
                setSelectedId(null);
              }}
            >
              <span>{cat.label}</span>
              <small>{String(countForStyle(cat.id)).padStart(2, '0')}</small>
            </button>
          );
        })}
      </div>

      <div className="style-brief">
        <div>
          <span className="style-brief-tag">{activeCategory.shortLabel}</span>
          <p>{activeCategory.tagline}</p>
        </div>
        <div className="style-brief-meta">
          <span>BEST FOR</span>
          <strong>{activeCategory.bestFor}</strong>
        </div>
      </div>

      <div className="ui-grid">
        {visibleItems.map((item) => (
          <article className="ui-card" key={item.id}>
            <button
              type="button"
              className="ui-card-trigger"
              onClick={() => setSelectedId(item.id)}
              aria-label={`Inspect ${item.title} (${item.styleLabel})`}
            >
              <div className="ui-thumb-wrap">
                <img src={item.image} alt={`${item.title} — ${item.project}`} loading="lazy" />
                <span className="ui-style-pill">{item.styleLabel}</span>
                <span className="ui-inspect-hint">INSPECT ↗</span>
              </div>
              <div className="ui-card-body">
                <div className="ui-card-kicker">
                  <span>{item.project}</span>
                  <small>{item.screenType}</small>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
            </button>
          </article>
        ))}
      </div>

      {activeStyle === 'all' && !showAll && filteredItems.length > visibleItems.length && (
        <div className="ui-expand-row">
          <button
            type="button"
            className="button button-secondary"
            onClick={() => setShowAll(true)}
          >
            Load all {filteredItems.length} UI screens (+{filteredItems.length - visibleItems.length} more)
          </button>
          <span>Or select any style tab above to inspect a full genre suite.</span>
        </div>
      )}

      {activeStyle === 'all' && showAll && (
        <div className="ui-expand-row">
          <button
            type="button"
            className="button button-secondary"
            onClick={() => setShowAll(false)}
          >
            Show compact 12-screen overview
          </button>
          <span>Showing all {filteredItems.length} verified UI screens.</span>
        </div>
      )}

      {selectedItem && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          onClick={() => setSelectedId(null)}
        >
          <div className="lightbox-window" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-bar">
              <span>
                <i className="panel-icon ui-icon" /> UI INSPECTOR · {selectedItem.project.toUpperCase()}
              </span>
              <div className="lightbox-controls">
                <small>
                  {String(selectedIndex + 1).padStart(2, '0')} /{' '}
                  {String(filteredItems.length).padStart(2, '0')}
                </small>
                <button
                  type="button"
                  onClick={() => {
                    const prev =
                      filteredItems[(selectedIndex - 1 + filteredItems.length) % filteredItems.length];
                    if (prev) setSelectedId(prev.id);
                  }}
                  aria-label="Previous screen"
                >
                  ← Prev
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const next = filteredItems[(selectedIndex + 1) % filteredItems.length];
                    if (next) setSelectedId(next.id);
                  }}
                  aria-label="Next screen"
                >
                  Next →
                </button>
                <button
                  type="button"
                  className="lightbox-close"
                  onClick={() => setSelectedId(null)}
                  aria-label="Close inspector"
                >
                  × Close
                </button>
              </div>
            </div>

            <div className="lightbox-content">
              <div className="lightbox-stage">
                <img src={selectedItem.image} alt={`${selectedItem.title} full preview`} />
              </div>
              <div className="lightbox-meta">
                <p className="eyebrow">
                  {selectedItem.styleLabel} · {selectedItem.screenType}
                </p>
                <h3>{selectedItem.title}</h3>
                <p className="lightbox-summary">{selectedItem.summary}</p>
                <div className="lightbox-deliverables">
                  <span>DELIVERABLES</span>
                  <div className="tags">
                    {selectedItem.deliverables.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
