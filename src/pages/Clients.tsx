const clients = [
  {
    id: 1,
    logo: "/img/clients/client-nrzk.jpg",
    name: "NRZK Productions",
    industry: "Sound and music production company.",
    services: "Full website development, UI/UX design, and technical support.",
    link: "https://nrzkproduction.com",
    status: "live"
  },
  {
    id: 2,
    logo: "/img/clients/client-get-video.png",
    name: "Get Video",
    industry: "Video production company.",
    services: "Website maintenance and technical support.",
    link: "https://getvideo.com.au",
    status: "live"
  },
  {
    id: 3,
    logo: "/img/clients/client-blood-runs-dry.jpg",
    name: "Blood Runs Dry",
    industry: "Melbourne-based groove metal band.",
    services: "Website development, design, and technical support.",
    link: "https://bloodrunsdry.com",
    status: "live"
  },
  {
    id: 4,
    logo: "/img/clients/client-nctmmrn.jpg",
    name: "NCTMMRN",
    industry: "Independent record label.",
    services: "Website development, design, and technical support.",
    link: "https://nctmmrn.com",
    status: "live"
  },
  {
    id: 5,
    logo: "/img/clients/client-sergei-sound.jpg",
    name: "Sergei Tumanov | Sound Artist",
    industry: "Sound artist personal portfolio.",
    services: "Custom website development and design.",
    link: "https://sergeitumanov.com",
    status: "live"
  },
  {
    id: 6,
    logo: "/img/clients/client-dr-bon-mott.png",
    name: "Dr Bon Mott",
    industry: "Professional artist portfolio.",
    services: "Ongoing website maintenance and technical support.",
    link: "https://www.bonmott.com",
    status: "live"
  },
  {
    id: 7,
    logo: "/img/clients/client-kerry-co.svg",
    name: "Kerry & Co Design",
    industry: "Wallcoverings, textiles, and home accessories retailer.",
    services: "E-commerce functionality implementation, maintenance, and technical support.",
    link: "https://kerrycodesign.com",
  status: "live" // Options: "live", "coming-soon", "archived"
  },

  {
    id: 8,
    logo: "/img/clients/client-wilvarinvocal.png",
    name: "Wilvarin Vocal",
    industry: "Wilvarin Vocal School is a music school that provides vocal training and education.",
    services: "Design, and technical support.",
    link: "https://wilvarinvocal.ru/",
    status: "live"
  },

  {
    id: 9,
    logo: "/img/clients/client-callum-lee-gow.jpg",
    name: "Callum Lee Gow",
    industry: "Media composition and sound design portfolio.",
    services: "Custom development and technical support.",
    link: "https://callumleegow.com",
    status: "live"
  },
  {
    id: 10,
    logo: "/img/clients/client-sergei-photo.jpg",
    name: "Sergei Tumanov | Photographer",
    industry: "Photography portfolio.",
    services: "Custom website development and design.",
    link: "https://photography.sergeitumanov.com",
    status: "live"
  },
  {
    id: 11,
    logo: "/img/clients/client-biol-group.jpg",
    name: "BIOL GROUP",
    industry: "Meat and dairy products supplier.",
    services: "Custom website development.",
    link: "https://biolgroup.com.au",
    status: "live"
  },
  {
    id: 12,
    logo: "/img/clients/client-001mm.png",
    name: "001MM",
    industry: "Professional milling services.",
    services: "Website development, design, and technical support.",
    link: "https://001mm.ru",
    status: "live"
  },
  {
    id: 13,
    logo: "/img/clients/client-tgap.avif",
    name: "The Great Aboriginal People",
    industry: "Independent, Indigenous-led screen enterprise and video production project.",
    services: "Website support & maintenance.",
    link: "#",
    status: "archived"
  },
  {
    id: 14,
    logo: "/img/clients/client-trifo.jpg",
    name: "TRIFO",
    industry: "Clothing retailer.",
    services: "Technical support and SEO optimization.",
    link: "https://trifo-rus.ru",
    status: "archived"
  },
  {
    id: 15,
    logo: "/img/clients/client-fabriki-palto.jpg",
    name: "ФАБРИКИ ПАЛЬТО",
    industry: "Clothing retailer.",
    services: "Website development, maintenance, and technical support.",
    link: "#",
    status: "archived"
  },
  {
    id: 16,
    logo: "/img/clients/client-dinner-for-two.jpg",
    name: "Dinner For Two",
    industry: "Melbourne matchmaking service.",
    services: "Custom website development.",
    link: "#",
    status: "archived"
  },
  {
    id: 17,
    logo: "/img/clients/client-dinner-at-eight.jpg",
    name: "Dinner at Eight",
    industry: "Exclusive dinner club for singles.",
    services: "Custom website development.",
    link: "#",
    status: "archived"
  },
  {
    id: 18,
    logo: "/img/clients/client-dinner-with-oscar.jpg",
    name: "Dinner with Oscar",
    industry: "Same-sex dating service in Australia.",
    services: "Custom website development.",
    link: "#",
    status: "archived"
  },
  {
    id: 19,
    logo: "/img/clients/placeholder.png",
    name: "Коломяги Спорт",
    industry: "Local sport stadium.",
    services: "Website development and design.",
    link: "#",
    status: "archived"
  },
  {
    id: 20,
    logo: "/img/clients/client-nmcs.jpg",
    name: "NMCS",
    industry: "School of chess.",
    services: "Custom website development.",
    link: "#",
    status: "archived"
  },
  {
    id: 21,
    logo: "/img/clients/placeholder.png",
    name: "NCTMMRN Web-store",
    industry: "Music records retailer.",
    services: "E-commerce development, design, and technical support.",
    link: "#",
    status: "archived"
  }
];

function Clients() {
  return (
    <div className="clients-page topGap fade-in">
      <div className="wrapper">
        <h2 className="section-title">Clients & Collaborations</h2>
        <p className="clients-subtitle">A selection of companies, artists, and individuals I've had the pleasure of working with.</p>
        
        <div className="clients-list">
          {clients.map((client) => (
            <div key={client.id} className="client-row">
              <div className="client-logo">
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.style.display = 'none';
                  const fallback = img.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.style.display = 'flex';
                  }
                }} 
              />
                <span className="logo-fallback">{client.name.charAt(0)}</span>
              </div>
              
              <div className="client-details">
                <div className="client-header">
                  <h3>{client.name}</h3>
                </div>
                <p className="client-industry">{client.industry}</p>
                <p className="client-services">
                  <span className="services-label">Services</span> 
                  {client.services}
                </p>
              </div>

              <div className="client-action">
                {client.status === "live" && client.link !== "#" ? (
                  <a href={client.link} target="_blank" rel="noopener noreferrer" className="view-project">
                    View Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                  </a>
                ) : client.status === "coming-soon" ? (
                  <span className="view-project disabled">Coming Soon</span>
                ) : (
                  <span className="view-project archived">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg>
                    Archived
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;