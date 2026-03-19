import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Process from './components/Process';
import MBBSDetails from './pages/MBBSDetails';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';


function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <Process />
     
      <Footer />
      <FloatingActions />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mbbs-details" element={<MBBSDetails />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}