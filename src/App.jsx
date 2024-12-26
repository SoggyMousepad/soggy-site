import { useState } from 'react'
import { LinearGradient } from 'react-text-gradients';
import Hero from './components/Hero.jsx';
import FooterComponent from './components/footer/FooterComponent.jsx';
import './App.css';
import './hero.css';
import './index.css';
import 'remixicon/fonts/remixicon.css';


function App() {

  return (
    <>
    <main>
      <div className="flex flex-col h-[850px] gap-20">
      <Hero/>
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
    <FooterComponent/>
    </>
  )
}

export default App
