import {
  planningNotes,
  tripDays,
  tripOverview,
  vegasGuides,
  vegasPairs,
  roadTripPromises,
  dailyRhythms,
  parentComfortNotes,
  finaleChecklist,
} from '../data/tripData'

const toneClassMap = {
  teal: 'tone-teal',
  sand: 'tone-sand',
  sage: 'tone-sage',
  gold: 'tone-gold',
  rose: 'tone-rose',
  canyon: 'tone-canyon',
  mint: 'tone-mint',
  plum: 'tone-plum',
  navy: 'tone-navy',
}

export default function TripPlanView() {
  return (
    <div className="stack-lg">
      <section className="hero-panel premium-hero premium-hero-v2">
        <div>
          <p className="eyebrow">Southwest 2026</p>
          <h2>Your calm, premium Southwest road trip plan</h2>
          <p className="hero-copy">
            Designed to feel easy, special, and reassuring — with comfortable driving days,
            intentional food stops, meaningful holy sites, serene hotel choices, and fewer decisions in the moment.
          </p>

          <div className="promise-row">
            {roadTripPromises.map((item) => (
              <div className="promise-pill" key={item.title}>
                <span aria-hidden="true">{item.icon}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-side-stack">
          <div className="hero-stats hero-stats-grid">
            {Object.entries(tripOverview).map(([label, value]) => (
              <div className="stat-card" key={label}>
                <span className="stat-label">{label.replace(/([A-Z])/g, ' $1')}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <div className="signature-card">
            <p className="mini-label">Trip mood</p>
            <h4>Comfort-first, food-forward, and beautifully paced</h4>
            <p>
              This version is built to feel like a guided itinerary instead of a checklist — calm mornings,
              one clear highlight, and a softer luxury finish in Las Vegas.
            </p>
          </div>
        </div>
      </section>

      <section className="overview-strip">
        {planningNotes.map((note) => (
          <article className="overview-card" key={note.title}>
            <div className="overview-icon" aria-hidden="true">{note.icon}</div>
            <div>
              <h4>{note.title}</h4>
              <p>{note.body}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="rhythm-shell">
        <div className="section-header">
          <div>
            <p className="eyebrow">How this trip should feel</p>
            <h3>Daily rhythm</h3>
          </div>
          <p className="section-note">These cues keep the trip from feeling rushed, even when there is a lot to see.</p>
        </div>

        <div className="rhythm-grid">
          {dailyRhythms.map((item) => (
            <article className="rhythm-card" key={item.title}>
              <div className="rhythm-topline">
                <span className="rhythm-icon" aria-hidden="true">{item.icon}</span>
                <span className="rhythm-badge">{item.badge}</span>
              </div>
              <h4>{item.title}</h4>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="section-header">
          <div>
            <p className="eyebrow">Day-by-day</p>
            <h3>Premium Trip Plan</h3>
          </div>
          <p className="section-note">Each day now includes pace guidance, emotional framing, and an easier “what matters most” read.</p>
        </div>

        <div className="day-grid">
          {tripDays.map((day) => (
            <article key={day.day} className={`day-card day-card-v2 ${toneClassMap[day.tone]}`}>
              <div className="day-topline">
                <div className="day-badge">Day {day.day}</div>
                <div className="day-status-row">
                  <span className={`pace-pill pace-${day.paceTag.toLowerCase().replace(/\s+/g, '-')}`}>{day.paceTag}</span>
                  <div className="day-icon" aria-hidden="true">{day.icon}</div>
                </div>
              </div>

              <div className="day-title-block">
                <h4>{day.title}</h4>
                <p className="day-theme">{day.theme}</p>
                {day.arrivalBadge ? <p className="arrival-badge">📍 {day.arrivalBadge}</p> : null}
                <p className="day-emotional-note">{day.emotionalNote}</p>
              </div>

              <div className="meta-grid meta-grid-four">
                <div className="meta-item">
                  <span>Drive</span>
                  <strong>{day.driveTime}</strong>
                </div>
                <div className="meta-item">
                  <span>Best time</span>
                  <strong>{day.bestTime}</strong>
                </div>
                <div className="meta-item">
                  <span>Comfort level</span>
                  <strong>{day.comfortLevel}</strong>
                </div>
                <div className="meta-item">
                  <span>Energy</span>
                  <strong>{day.energyMeter}</strong>
                </div>
                <div className="meta-item meta-item-wide">
                  <span>Stay</span>
                  <strong>{day.stay}</strong>
                </div>
              </div>

              <div className="experience-ribbon">
                <div>
                  <span className="mini-label">Anchor moment</span>
                  <p>{day.anchorMoment}</p>
                </div>
                <div>
                  <span className="mini-label">Low-effort luxury</span>
                  <p>{day.lowEffortLuxury}</p>
                </div>
              </div>

              <div className="day-sections day-sections-three">
                <div className="mini-panel">
                  <p className="mini-label">Senior-friendly note</p>
                  <p>{day.seniorNote}</p>
                </div>
                <div className="mini-panel">
                  <p className="mini-label">Food moment</p>
                  <p>{day.foodMoment}</p>
                </div>
                <div className="mini-panel">
                  <p className="mini-label">Easy win</p>
                  <p>{day.easyWin}</p>
                </div>
              </div>

              <div className="timeline-row timeline-row-premium">
                <div>
                  <span className="timeline-label">Morning</span>
                  <p>{day.morning}</p>
                </div>
                <div>
                  <span className="timeline-label">Afternoon</span>
                  <p>{day.afternoon}</p>
                </div>
                <div>
                  <span className="timeline-label">Evening</span>
                  <p>{day.evening}</p>
                </div>
              </div>


              <div className="day-reference-card">
                <div>
                  <p className="mini-label">Recommended hotel for this day</p>
                  <p className="day-reference-name">{day.recommendedHotel}</p>
                </div>
                <div className="day-reference-links">
                  <a href={day.hotelLink} target="_blank" rel="noreferrer">Hotel link</a>
                  <a href={day.hotelMapLink} target="_blank" rel="noreferrer">Map</a>
                </div>
              </div>

              <div className="day-footer-grid">
                <div className="highlights-block">
                  <p className="mini-label">Best moments</p>
                  <ul>
                    {day.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="packing-note-card">
                  <p className="mini-label">One thing to remember</p>
                  <p>{day.rememberThis}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="comfort-shell">
        <div className="section-header">
          <div>
            <p className="eyebrow">Parent-first notes</p>
            <h3>What keeps this easy</h3>
          </div>
          <p className="section-note">These reminders make the trip feel more peaceful without removing the fun.</p>
        </div>

        <div className="comfort-grid">
          {parentComfortNotes.map((item) => (
            <article className="comfort-card" key={item.title}>
              <div className="comfort-icon" aria-hidden="true">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="vegas-panel vegas-panel-v2">
        <div className="section-header">
          <div>
            <p className="eyebrow">Vegas ending</p>
            <h3>Choose the kind of finale you want</h3>
          </div>
          <p className="section-note">These pairings are built to feel premium, calm, and parent-friendly instead of overwhelming.</p>
        </div>

        <div className="guide-grid">
          {vegasGuides.map((guide) => (
            <article className="guide-card" key={guide.title}>
              <p className="mini-label">{guide.title}</p>
              <h4>{guide.pick}</h4>
              <p>{guide.detail}</p>
            </article>
          ))}
        </div>

        <div className="pair-grid">
          {vegasPairs.map((pair) => (
            <article className="pair-card pair-card-v2" key={pair.id}>
              <div className="pair-topline">
                <span className="pair-tag">{pair.tag}</span>
                <span className="pair-pace">{pair.pace}</span>
              </div>
              <h4>{pair.vibe}</h4>
              <div className="pair-stack">
                <p><strong>Hotel:</strong> {pair.hotel}</p>
                <p><strong>Dinner:</strong> {pair.dinner}</p>
                <p><strong>Evening:</strong> {pair.show}</p>
              </div>
              <p className="pair-audience">{pair.audience}</p>
              <p className="pair-note">{pair.note}</p>
              <div className="reservation-note">
                <p><strong>Best use:</strong> {pair.bestUse}</p>
                <p><strong>Reservation tip:</strong> {pair.reservationTip}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="finale-checklist-card">
          <div>
            <p className="eyebrow">Best final-night checklist</p>
            <h4>Keep the ending elegant, not exhausting</h4>
          </div>
          <div className="finale-checklist-grid">
            {finaleChecklist.map((item) => (
              <div className="check-item" key={item.title}>
                <span aria-hidden="true">{item.icon}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
