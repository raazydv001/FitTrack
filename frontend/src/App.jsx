import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
