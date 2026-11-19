'use client';

import { useState } from 'react';
import { showcaseVideos } from '../data/portfolioData';

type DemoFilter = 'ALL' | 'ANIMATED UI' | 'GAMEPLAY SYSTEM';

export default function DemosSection() {
  const [filter, setFilter] = useState<DemoFilter>('ALL');

  const visibleVideos =
    filter === 'ALL'
      ? showcaseVideos
      : showcaseVideos.filter((v) => v.category === filter);

  return (
    <section className="section-block" id="demos">
      <div className="section-header">
        <span className="section-pill">LIVE MOTION &amp; STUDIO RECORDINGS</span>
        <h2>
          See the work <em>in motion.</em>
        </h2>
        <p className="section-subtitle">
          60fps animated UI sequences, zero-tween spritesheet buttons, and live Roblox Studio
          gameplay system tests.
        </p>
      </div>

      <div className="filter-bar centered" role="tablist" aria-label="Filter video demos">
        {(['ALL', 'ANIMATED UI', 'GAMEPLAY SYSTEM'] as DemoFilter[]).map((tab) => {
          const count =
            tab === 'ALL'
              ? showcaseVideos.length
              : showcaseVideos.filter((v) => v.category === tab).length;
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={filter === tab}
              className={`filter-pill ${filter === tab ? 'active' : ''}`}
              onClick={() => setFilter(tab)}
            >
              <span>
                {tab === 'ALL'
                  ? 'All Demos'
                  : tab === 'ANIMATED UI'
                  ? 'Animated UI'
                  : 'Gameplay Systems'}
              </span>
              <small>{count}</small>
            </button>
          );
        })}
      </div>

      <div className="demos-grid">
        {visibleVideos.map((video) => (
          <article className="demo-card" key={video.id}>
            <div className="demo-video-wrap">
              <video
                controls
                playsInline
                preload="metadata"
                poster={video.poster}
                src={video.src}
                controlsList="nodownload"
              />
              <span
                className={`demo-badge ${
                  video.category === 'ANIMATED UI' ? 'badge-ui' : 'badge-sys'
                }`}
              >
                {video.category}
              </span>
            </div>
            <div className="demo-body">
              <div className="demo-meta">
                <span>{video.number} / DEMO</span>
                <small>{video.specs}</small>
              </div>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
