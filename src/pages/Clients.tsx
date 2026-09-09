const clients = [
  {
    id: 1,
    logo: "/img/client-logo-1.png",
    name: "Tech Startup Inc.",
    description: "Designed and developed a fully responsive landing page using React and Tailwind CSS. Improved load times by 40%.",
    link: "https://example.com",
    year: "2024"
  },
  {
    id: 2,
    logo: "/img/client-logo-2.png",
    name: "Creative Studio",
    description: "Built a custom WordPress theme from scratch. Implemented advanced custom fields (ACF) for easy content management.",
    link: "https://example.com",
    year: "2023"
  },
  {
    id: 3,
    logo: "/img/client-logo-3.png",
    name: "Local Coffee Shop",
    description: "Created a minimalist online menu and reservation system using PHP and MySQL. Integrated with Google Maps API.",
    link: "https://example.com",
    year: "2023"
  }
];

function Clients() {
  return (
    <div className="clients-page fade-in">
      <div className="wrapper">
        <h2 className="section-title">Clients & Collaborations</h2>
        <p className="clients-subtitle">A selection of companies and individuals I've had the pleasure of working with.</p>
        
        <div className="clients-list">
          {clients.map((client) => (
            <div key={client.id} className="client-row">
              <div className="client-logo">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling!.style.display = 'block';
                  }} 
                />
                <span className="logo-fallback">{client.name.charAt(0)}</span>
              </div>
              
              <div className="client-details">
                <div className="client-header">
                  <h3>{client.name}</h3>
                  <span className="client-year">{client.year}</span>
                </div>
                <p>{client.description}</p>
              </div>

              <div className="client-action">
                <a href={client.link} target="_blank" rel="noopener noreferrer" className="view-project">
                  View Project
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;