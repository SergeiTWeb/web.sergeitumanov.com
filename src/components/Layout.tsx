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
        <p>&copy; {new Date().getFullYear()} Sergei Tumanov. Built with React & TypeScript.</p>
      </footer>

      <BackToTop />
    </div>
  );
}

export default Layout;