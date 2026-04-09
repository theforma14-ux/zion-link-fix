export default function CollectionView({ title, subtitle, items }) {
  return (
    <div className="stack-lg">
      <section className="section-header standalone-header">
        <div>
          <p className="eyebrow">Curated picks</p>
          <h3>{title}</h3>
        </div>
        <p className="section-note">{subtitle}</p>
      </section>

      <div className="collection-grid">
        {items.map((item) => (
          <article className="collection-card" key={`${item.name}-${item.location}`}>
            <div className="collection-top">
              <div>
                <div className="card-kicker-row">
                  <p className="location-pill">{item.location}</p>
                  {item.badge ? <span className="feature-pill">{item.badge}</span> : null}
                </div>
                <h4>{item.name}</h4>
                {item.bestFor ? <p className="best-for">{item.bestFor}</p> : null}
              </div>
              {item.tier ? <span className="tier-pill">{item.tier}</span> : null}
            </div>

            <p className="collection-note">{item.note}</p>

            {item.quickTags ? (
              <div className="quick-tag-row">
                {item.quickTags.map((tag) => (
                  <span className="quick-tag" key={tag}>{tag}</span>
                ))}
              </div>
            ) : null}

            {(item.hours || item.massTimes || item.routeTip || item.priceNote) ? (
              <div className="info-stack">
                {item.hours ? (
                  <div className="info-line">
                    <span className="mini-label">Hours</span>
                    <p>{item.hours}</p>
                  </div>
                ) : null}
                {item.massTimes ? (
                  <div className="info-line">
                    <span className="mini-label">Mass / prayer times</span>
                    <p>{item.massTimes}</p>
                  </div>
                ) : null}
                {item.priceNote ? (
                  <div className="info-line">
                    <span className="mini-label">Budget note</span>
                    <p>{item.priceNote}</p>
                  </div>
                ) : null}
                {item.routeTip ? (
                  <div className="info-line">
                    <span className="mini-label">Best use</span>
                    <p>{item.routeTip}</p>
                  </div>
                ) : null}
              </div>
            ) : null}

            <div className="link-row">
              <a href={item.link} target="_blank" rel="noreferrer">Official site</a>
              <a href={item.mapLink} target="_blank" rel="noreferrer">Map</a>
              <a href={item.photoSearch} target="_blank" rel="noreferrer">Photos</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
