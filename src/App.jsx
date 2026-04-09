import { useMemo, useState } from 'react'
import TripPlanView from './components/TripPlanView'
import CollectionView from './components/CollectionView'
import MapView from './components/MapView'
import {
  attractions,
  hotels,
  nationalParks,
  stateParks,
  catholicSites,
  restaurants,
} from './data/tripData'

const tabs = [
  'Trip Plan',
  'Attractions',
  'Hotels & Resorts',
  'National Parks',
  'State Parks',
  'Catholic Churches',
  'Restaurants',
  'Map',
]

const stopOptions = ['All stops', 'Denver', 'Moab', 'Torrey', 'Bryce', 'Zion', 'Las Vegas']

const tabConfig = {
  Attractions: {
    items: attractions,
    subtitle: 'Easy, high-reward experiences that feel worth the stop without feeling like work.',
  },
  'Hotels & Resorts': {
    items: hotels,
    subtitle: 'Comfort-first lodging with richer compare tags, calmer luxury picks, and clearer “best for parents” guidance, especially in Las Vegas.',
  },
  'National Parks': {
    items: nationalParks,
    subtitle: 'Focused on scenic access, overlooks, and lower-effort experiences.',
  },
  'State Parks': {
    items: stateParks,
    subtitle: 'Less crowded scenic additions that can enrich the route without cluttering it.',
  },
  'Catholic Churches': {
    items: catholicSites,
    subtitle: 'Churches, monasteries, shrines, and convent-linked stops with Mass times, visiting hours, and easier practical planning.',
  },
  Restaurants: {
    items: restaurants,
    subtitle: 'Food-forward picks with clearer “best use” notes so dinner choices feel easier in the moment.',
  },
}

export default function App() {
  const [activeTab, setActiveTab] = useState('Trip Plan')
  const [selectedLocation, setSelectedLocation] = useState('All stops')
  const [mapCategory, setMapCategory] = useState('Hotels & Resorts')

  const filteredTabItems = useMemo(() => {
    const current = tabConfig[activeTab]
    if (!current) return []
    if (selectedLocation === 'All stops') return current.items

    return current.items.filter((item) => {
      if (selectedLocation === 'Zion') return item.location === 'Zion' || item.location === 'Near Zion'
      if (selectedLocation === 'Torrey') return item.location === 'Torrey' || item.location === 'Near Torrey'
      if (selectedLocation === 'Bryce') return item.location === 'Bryce' || item.location === 'Near Bryce'
      return item.location === selectedLocation
    })
  }, [activeTab, selectedLocation])

  return (
    <div className="app-shell">
      <header className="app-header premium-header">
        <div>
          <div className="title-row">
            <p className="eyebrow">mimi-and-doc-sw2026</p>
            <span className="version-pill">STATE PARKS + ZION LINK FIX • APR 2026</span>
          </div>
          <h1>Mimi &amp; Doc Southwest Road Trip Planner</h1>
          <p className="header-copy">
            Senior-friendly planning for Denver, Moab, Torrey, Bryce, Zion, and Las Vegas — now with cleaner Vegas arrivals, a fixed Cliffrose link, and a stronger Utah state park bench for extra scenic choices.
          </p>
          <div className="launch-banner">
            <strong>New in this build:</strong> Vegas sign removed from Attractions, Cliffrose Springdale link corrected, and more Utah state park options added across the route.
          </div>
        </div>

        <div className="header-controls">
          <div className="control-card">
            <label htmlFor="location-filter">Filter by stop</label>
            <select id="location-filter" value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
              {stopOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <p className="control-help">Tip: start on Trip Plan, then use Hotels or Restaurants for a deeper look at one stop.</p>
          </div>
        </div>
      </header>

      <nav className="tab-bar" aria-label="Trip sections">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={tab === activeTab ? 'tab active' : 'tab'}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <main className="main-content">
        {activeTab === 'Trip Plan' ? <TripPlanView /> : null}

        {activeTab !== 'Trip Plan' && activeTab !== 'Map' ? (
          <CollectionView
            title={activeTab}
            subtitle={tabConfig[activeTab].subtitle}
            items={filteredTabItems}
          />
        ) : null}

        {activeTab === 'Map' ? (
          <MapView selectedCategory={mapCategory} selectedLocation={selectedLocation} onCategoryChange={setMapCategory} />
        ) : null}
      </main>
    </div>
  )
}
