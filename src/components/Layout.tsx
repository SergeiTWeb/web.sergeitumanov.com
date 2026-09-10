import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import BackToTop from './BackToTop';

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            ☰
          </button>
          
          <nav className={`nav ${menuOpen ? 'active' : ''}`}>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</NavLink>
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
          {/* Acknowledgment of Country */}
          <div className="footer-acknowledgment">
            <p>
              I would like to acknowledge the Traditional Custodians of the land on which I live and work. 
              I wish to pay my respect to Elders past, present and emerging.
            </p>
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            <NavLink to="/contact">Contact</NavLink>
            <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Images via Unsplash</a>
          </div>

          {/* Business Info & Copyright */}
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