import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './pages/home/HeroSection';
import ProductGrid from './pages/home/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;
