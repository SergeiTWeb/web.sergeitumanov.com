import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BackToTop from './BackToTop';

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let pageTitle = "Home";

    if (path === "/portfolio") pageTitle = "Portfolio";
    else if (path === "/clients") pageTitle = "Clients";
    else if (path === "/contact") pageTitle = "Contact";
    else if (path === "/wordpress-projects") pageTitle = "WordPress Projects";
    else if (path === "/experiments") pageTitle = "React Experiments";
    else if (path === "/") pageTitle = "Home";
    else pageTitle = "404 Not Found";

    document.title = `Sergei Tumanov | ${pageTitle}`;
  }, [location]);

  return (
    <div className="app-layout">
      <header className="header">
        <div className="wrapper">
          <div className="logo-container">
            <h1 className="logo">
              <NavLink to="/">Sergei Tumanov</NavLink>
            </h1>
            <span className="logo-subtitle">Web Developer & Designer</span>
          </div>
          
          <button 
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          
          <nav className={`nav ${menuOpen ? 'active' : ''}`}>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>About</NavLink>
            
            <div className="nav-dropdown">
              <NavLink to="/portfolio" className="dropdown-trigger" onClick={() => setMenuOpen(false)}>
                Portfolio
              </NavLink>
              <div className="dropdown-menu">
                <NavLink to="/wordpress-projects" onClick={() => setMenuOpen(false)}>WordPress</NavLink>
                <NavLink to="/experiments" onClick={() => setMenuOpen(false)}>React</NavLink>
              </div>
            </div>

            <NavLink to="/clients" onClick={() => setMenuOpen(false)}>Clients</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="wrapper">
          <div className="footer-acknowledgment">
            <p>
              I would like to acknowledge the Traditional Custodians of the land on which I live and work. 
              I wish to pay my respect to Elders past, present and emerging.
            </p>
          </div>
          <div className="footer-links">
            <NavLink to="/contact">Contact</NavLink>
            <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Images via Unsplash</a>
          </div>
          <div className="footer-bottom">
            <p className="footer-abn">ABN 61 655 285 919 | Sergei Tumanov</p>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Sergei Tumanov. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}

export default Layout;