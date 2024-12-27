import { useState } from 'react'
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
import './Tailwindcss.css';


function App() {

  return (
    <>
    <main>
      <div className="flex flex-col min-h-screen">
      <Hero/>
      <Navbar/>
      <div className="header__title">
                  <h1>
                    <LinearGradient gradient={['to bottom right', '#17acff, #ff68f0']}>
                    SoggyMousepad
                      </LinearGradient>
                      </h1>
                  <br />
                  <h3>Coming soon...</h3>
              </div>
      </div>
    </main>
    <footer>
      <FooterComponent/>
    </footer>
    </>
  )
}

export default App
