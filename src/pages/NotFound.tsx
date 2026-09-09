import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-page fade-in">
      <div className="wrapper">
        <div className="not-found-content">
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Page not found</h2>
          <p className="error-text">
            Oops! It seems the link leads nowhere.<br />
            The page you are looking for has been moved or does not exist.
          </p>
          <div className="error-actions">
            <Link to="/" className="btn-primary">Back to Home</Link>
            <button onClick={() => window.history.back()} className="btn-secondary">Go Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;