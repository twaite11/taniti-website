import { useState } from 'react';

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper for generating icons
  const Icons = () => ({
    mountain: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>,
    mapPin: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M12 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M15 11a3 3 0 1 0-6 0c0 1.25.96 2.05 1.5 2.5a2 2 0 0 1 3 0c.54-.45 1.5-1.25 1.5-2.5z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>,
    sun: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m4.93 19.07 1.41-1.41"/><path d="m17.66 6.34 1.41-1.41"/></svg>,
    utensils: <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M3 2v7c0 1.1.9 2 2 2h4l-3 9"/><path d="M18 2v7c0 1.1.9 2 2 2h4l-3 9"/><path d="M11 2v17c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2v-3c0-1.1-.9-2-2-2h-1a2 2 0 0 1-2-2v-5a2 2 0 0 1-2-2z"/></svg>,
    hotel: <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M10 20v-6"/><path d="M14 20v-6"/><path d="M14 4v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2"/><path d="M10 20h4"/><path d="M18 10h2v10h-2"/><path d="M4 10h2v10H4"/><path d="M12 10a2 2 0 0 0 2-2V4a2 2 0 0 0-4 0v4a2 2 0 0 0 2 2z"/></svg>,
    bus: <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M19 17h2"/><path d="m22 17-2-11h-5.4"/><path d="M17 17H8"/><path d="M6 17H2"/><path d="M2 17h-.5"/><path d="M10 10h4"/><path d="M6 8h.01"/><path d="M18 8h.01"/><rect x="8" y="6" width="8" height="11" rx="1"/><circle cx="6" cy="17" r="2"/><circle cx="18" cy="17" r="2"/></svg>,
    helpCircle: <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.86 0"/><path d="M12 13v4"/><path d="M12 17v.01"/></svg>,
  });

  const renderPage = () => {
    const icons = Icons();
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} icons={icons} />;
      case 'things-to-do':
        return <ThingsToDoPage icons={icons} />;
      case 'lodging':
        return <LodgingPage icons={icons} />;
      case 'transportation':
        return <TransportationPage />;
      case 'faqs':
        return <FAQsPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} icons={icons} />;
    }
  };

  const NavLink = ({ page, label }) => (
    <button
      onClick={() => {
        setCurrentPage(page);
        setIsMobileMenuOpen(false);
      }}
      className={`nav-link ${currentPage === page ? 'active' : ''}`}
    >
      {label}
    </button>
  );

  return (
    <div className="app-container">
      {/* Header with Navigation */}
      <header className="main-header">
        <div className="header-content">
          <h1 className="logo">Taniti</h1>
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <NavLink page="home" label="Home" />
            <NavLink page="things-to-do" label="Things to Do" />
            <NavLink page="lodging" label="Lodging" />
            <NavLink page="transportation" label="Transportation" />
            <NavLink page="faqs" label="FAQs" />
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <span className="close-icon">×</span>
            ) : (
              <span className="menu-icon">☰</span>
            )}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="mobile-nav open">
            <NavLink page="home" label="Home" />
            <NavLink page="things-to-do" label="Things to Do" />
            <NavLink page="lodging" label="Lodging" />
            <NavLink page="transportation" label="Transportation" />
            <NavLink page="faqs" label="FAQs" />
          </nav>
        )}
      </header>
      
      {/* Page Content */}
      <main className="main-content">
        {renderPage()}
      </main>
      
      {/* Footer */}
      <footer className="main-footer">
        <p>&copy; Tyler Waite. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Home Page Component
function HomePage({ setCurrentPage, icons }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-text">
            <h2 className="hero-title">Discover the Magic of Taniti</h2>
            <p className="hero-subtitle">A small, tropical island with big adventures.</p>
            <button
              onClick={() => setCurrentPage('things-to-do')}
              className="cta-button"
            >
              Find Your Adventure
            </button>
          </div>
        </div>
      </section>

      {/* Featured Attractions Section */}
      <section className="page-section">
        <h2 className="section-title">Experience Taniti</h2>
        <div className="featured-attractions-grid">
          <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Augustine_volcano_Jan_24_2006_-_Cyrus_Read.jpg/1200px-Augustine_volcano_Jan_24_2006_-_Cyrus_Read.jpg" alt="Taniti Volcano" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">
                <span className="icon red-icon">{icons.mountain}</span>
                The Active Volcano
              </h3>
              <p>Hike to the summit or take a helicopter tour for breathtaking views of the island.</p>
            </div>
          </div>
          <div className="card">
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*jSOsZ_5aDLAsd7s0dTVtVA.jpeg" alt="Taniti Rainforest" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">
                <span className="icon green-icon">{icons.mapPin}</span>
                Lush Tropical Rainforests
              </h3>
              <p>Explore the vibrant ecosystem with guided tours or exhilarating zip-lining adventures.</p>
            </div>
          </div>
          <div className="card">
            <img src="https://www.travelandleisure.com/thmb/b5ppUNeiY8BRQ2YCpF8M08FTp4U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-mauritius-TROPVACAY0325-ab8fec1bafa94ef9881250098961ac68.jpg" alt="Taniti Beach" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">
                <span className="icon yellow-icon">{icons.sun}</span>
                Sandy & Rocky Beaches
              </h3>
              <p>Relax on the white sand or explore the rocky coastline for a unique seaside experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="page-section quick-info-section">
        <h2 className="section-title">Taniti at a Glance</h2>
        <div className="quick-info-grid">
          <div className="info-card">
            <span className="info-icon blue-icon">{icons.utensils}</span>
            <h3 className="info-title">Diverse Dining</h3>
            <p>Enjoy local fish and rice, American-style meals, and Pan-Asian cuisine.</p>
          </div>
          <div className="info-card">
            <span className="info-icon blue-icon">{icons.hotel}</span>
            <h3 className="info-title">Varied Lodging</h3>
            <p>From hostels to a four-star resort, find a place that fits your style.</p>
          </div>
          <div className="info-card">
            <span className="info-icon blue-icon">{icons.bus}</span>
            <h3 className="info-title">Easy to Get Around</h3>
            <p>Public buses, taxis, rental cars, and bikes make island travel simple.</p>
          </div>
          <div className="info-card">
            <span className="info-icon blue-icon">{icons.helpCircle}</span>
            <h3 className="info-title">FAQs Available</h3>
            <p>Quickly find answers to your common questions about currency, safety, and more.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Things to Do Page Component
function ThingsToDoPage({ icons }) {
  const [filter, setFilter] = useState('all');
  const activities = [
    { title: "Chartered Fishing Tours", location: "Merriton Landing", image: "https://yachts360.com/wp-content/uploads/2021/04/How-Much-Does-A-Fishing-Boat-Cost.jpg" },
    { title: "Zip-lining", location: "Rainforest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjOlWADNsgrvNecs6ZM5gvuhHiHyXt2vX7sA&s" },
    { title: "Local History Museum", location: "Taniti City", image: "https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2025-04/VC_Computer-History-Museum_SUPPLIED_1280x640.jpg.webp?itok=rgW9sW_V" },
    { title: "Pubs & Microbrewery", location: "Merriton Landing", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/8b/ae/83/47-hills-brewing-company.jpg?w=900&h=500&s=1" },
    { title: "Dancing at a new Dance Club", location: "Merriton Landing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcoQ3TksXMmoGGd-AVZZf41qbqIt4jmzCfw&s" },
    { title: "Hiking the Volcano", location: "Volcano", image: "https://cdn.outsideonline.com/wp-content/uploads/migrated-images_parent/migrated-images_78/hikers-volcano-erupt_h.jpg" },
    { title: "Snorkeling", location: "Beaches", image: "https://oaxacatraveltips.com/wp-content/uploads/2024/08/huatulco-snorkeling.jpg" },
  ];

  const filteredActivities = filter === 'all'
    ? activities
    : activities.filter(activity => activity.location === filter);

  return (
    <section className="page-section">
      <h2 className="section-title">Activities & Entertainment</h2>
      <div className="filter-buttons">
        <button
          onClick={() => setFilter('all')}
          className={`filter-button ${filter === 'all' ? 'active' : ''}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('Taniti City')}
          className={`filter-button ${filter === 'Taniti City' ? 'active' : ''}`}
        >
          Taniti City
        </button>
        <button
          onClick={() => setFilter('Merriton Landing')}
          className={`filter-button ${filter === 'Merriton Landing' ? 'active' : ''}`}
        >
          Merriton Landing
        </button>
        <button
          onClick={() => setFilter('Rainforest')}
          className={`filter-button ${filter === 'Rainforest' ? 'active' : ''}`}
        >
          Rainforest
        </button>
      </div>

      <div className="activities-grid">
        {filteredActivities.map((activity, index) => (
          <div key={index} className="card">
            <img src={activity.image} alt={activity.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{activity.title}</h3>
              <p>Location: {activity.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Lodging Page Component
function LodgingPage({ icons }) {
  return (
    <section className="page-section">
      <h2 className="section-title">Lodging on Taniti</h2>
      <div className="info-box">
        <p>From hostels to resorts, we have a variety of lodging options available. All lodging is strictly regulated and regularly inspected by the Tanitian government for your safety and comfort.</p>
      </div>
      <div className="lodging-grid">
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHgyA5Ia3d8XGWzfwJ40joUxC3Sai9P2Jw6g&s" alt="Four-Star Resort" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Four-Star Grand Resort</h3>
            <p>Luxury accommodations with premium amenities and stunning views.</p>
            <p className="card-type">Type: Resort</p>
          </div>
        </div>
        <div className="card">
          <img src="https://passport-cdn.kiwicollection.com/blog/drive/uploads/2022/11/Andaz-Costa-Rica-Resort-at-Peninsula-Papagayo-693x390.jpg" alt="Family-Owned Hotel" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Family-Owned Hotels</h3>
            <p>Cozy and comfortable stays with a personal touch.</p>
            <p className="card-type">Type: Hotel</p>
          </div>
        </div>
        <div className="card">
          <img src="https://tropicstar.com/wp-content/uploads/2025/02/5-1024x693.jpg" alt="Bed and Breakfast" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Bed and Breakfasts</h3>
            <p>A growing number of unique B&Bs for a home-away-from-home feel.</p>
            <p className="card-type">Type: Bed & Breakfast</p>
          </div>
        </div>
        <div className="card">
          <img src="https://media.vrbo.com/lodging/97000000/96210000/96206100/96206083/b6cfd565.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill" alt="Inexpensive Hostel" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Inexpensive Hostel</h3>
            <p>An affordable option for solo travelers and backpackers.</p>
            <p className="card-type">Type: Hostel</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Transportation Page Component
function TransportationPage() {
  return (
    <section className="page-section">
      <h2 className="section-title">Getting Around Taniti</h2>
      <div className="transportation-grid">
        <div className="transportation-card">
          <h3>Ground Transportation</h3>
          <div>
            <h4>Public & Private Buses</h4>
            <p>Public buses serve Taniti City from 5 a.m. to 11 p.m. daily. Private buses serve the rest of the island.</p>
          </div>
          <div>
            <h4>Taxis & Rental Cars</h4>
            <p>Taxis are available in Taniti City. Rental cars can be found at a local agency near the airport.</p>
          </div>
          <div>
            <h4>Bicycle Rentals</h4>
            <p>Bikes and helmets are available to rent from several vendors. Note: Helmets are required by law.</p>
          </div>
        </div>
        <div className="transportation-card">
          <h3>Getting to the Island</h3>
          <div>
            <h4>By Air</h4>
            <p>Most visitors arrive by air at our small airport, which accommodates small jets and propeller planes.</p>
          </div>
          <div>
            <h4>By Sea</h4>
            <p>A small cruise ship docks in Yellow Leaf Bay for one night per week.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQs Page Component
function FAQsPage() {
  const faqs = [
    {
      q: "What currency is used on Taniti?",
      a: "Taniti uses the U.S. dollar, but many businesses also accept euros and yen. Most businesses accept major credit cards."
    },
    {
      q: "What is the drinking age and alcohol policy?",
      a: "The drinking age is 18. Alcohol is not allowed to be served or sold between midnight and 9:00 a.m."
    },
    {
      q: "Is English spoken on the island?",
      a: "Many younger Tanitians speak fluent English, but very little English is spoken in rural areas, especially by older residents."
    },
    {
      q: "Is Taniti a safe place to visit?",
      a: "Violent crime is very rare. As tourism increases, there have been more reports of petty crimes like pickpocketing. We advise visitors to be aware of their belongings, but overall, it is a very safe destination."
    },
    {
      q: "Are businesses closed on national holidays?",
      a: "Taniti has a large number of national holidays, and many tourist attractions and restaurants will be closed on those days. Please plan accordingly."
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="page-section faqs-container">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="faqs-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item"
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.q}</h3>
              <span>{openIndex === index ? '−' : '+'}</span>
            </div>
            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
