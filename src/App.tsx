import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ReactShowcase from './pages/ReactShowcase';
import PhpShowcase from './pages/PhpShowcase';
import VanillaShowcase from './pages/VanillaShowcase';
import './App.css'; // We will style this in the next step

function App() {
  return (
    // BrowserRouter listens to URL changes
    <BrowserRouter>
      <Routes>
        {/* The Layout wraps all our pages */}
        <Route path="/" element={<Layout />}>
          
          {/* These are the child routes that go inside the <Outlet /> */}
          <Route index element={<Home />} />
          <Route path="react" element={<ReactShowcase />} />
          <Route path="php" element={<PhpShowcase />} />
          <Route path="vanilla" element={<VanillaShowcase />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;