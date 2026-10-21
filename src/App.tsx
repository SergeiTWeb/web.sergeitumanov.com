import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import WordPressProjects from './pages/WordPressProjects';
import Experiments from './pages/Experiments'; // <-- ADD THIS IMPORT
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="clients" element={<Clients />} />
          <Route path="contact" element={<Contact />} />
          <Route path="wordpress-projects" element={<WordPressProjects />} />
          <Route path="experiments" element={<Experiments />} /> {/* <-- ADD THIS ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;