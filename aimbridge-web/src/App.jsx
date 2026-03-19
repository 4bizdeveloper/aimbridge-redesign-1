import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <Helmet>
          <title>Aimbridge Education | Premier Educational Consultancy</title>
          <meta name="description" content="Leading education consultancy for international students." />
        </Helmet>
        
        <Navbar />
        <main>
          <Hero />
          {/* Add more sections here */}
          <section id="about" className="h-96 bg-accent flex items-center justify-center text-3xl">About Section</section>
          <section id="programs" className="h-96 flex items-center justify-center text-3xl">Programs Section</section>
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;