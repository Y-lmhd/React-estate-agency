import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Property from './pages/Property';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>    
        <Navbar />
        <main>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="property" element={<Property />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
        </main>
        <Footer />
    </>
 
  );
}

export default App;
