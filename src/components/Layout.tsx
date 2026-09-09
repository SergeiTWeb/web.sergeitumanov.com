import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="app-layout">
      <header className="app-header">
        <h1>My Portfolio</h1>
        <nav>
          {/* IMPORTANT: We use 'Link' instead of 'a' tags! 
              'Link' prevents the page from fully reloading. */}
          <Link to="/">Home</Link>
          <Link to="/react">React/TS</Link>
          <Link to="/php">PHP</Link>
          <Link to="/vanilla">HTML/CSS/JS</Link>
        </nav>
      </header>

      <main className="app-main">
        {/* Outlet is where the routed pages will be injected */}
        <Outlet />
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 My Portfolio. Built with React.</p>
      </footer>
    </div>
  );
}

export default Layout;