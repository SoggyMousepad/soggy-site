import { LinearGradient } from 'react-text-gradients';
import Hero from './components/Hero.jsx';
import FooterComponent from './components/footer/FooterComponent.jsx';
import Navbar from './components/Navbar.jsx';
import './App.css';
import './hero.css';
import './index.css';
import './components/footer/footer.css';
import './components/navbar.css';
import 'remixicon/fonts/remixicon.css';

function App() {
  return (
    <>
      {/* Wrapper div that takes full height */}
      <div className="flex flex-col min-h-screen">
        {/* Main content section that expands */}
        <main className="flex-1">
          <div className="flex flex-col gap-20">
            <Hero />
            <Navbar />

          </div>
        </main>

        {/* Footer that will be pushed to the bottom */}
        <footer className="mt-auto">
          <FooterComponent />
        </footer>
      </div>
      
    </>
  );
}

export default App;
