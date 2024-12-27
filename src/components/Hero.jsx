import React from "react";
import { LinearGradient } from 'react-text-gradients';
import '../hero.css';

const Hero = () => {
    return (
        <>
        <div className="background">
        <div className="flex flex-col h-full w-full">
            <video 
            autoPlay
            muted 
            loop
            className="video">
                <source src='public/blackhole.webm' type="video/webm" />
            </video>
        </div>
        <div className="header__title">
              <h1>
                <LinearGradient gradient={['to bottom right', '#17acff, #ff68f0']}>
                  Hey there! 👋 I'm SoggyMousepad 
                </LinearGradient>
              </h1>
              <br />
              <h3>Web Developer & Community Manager</h3>
            </div>
        <div className="cta-button">
            <button> 
            <LinearGradient gradient={['to bottom right', '#17acff, #ff68f0']}>
                <i class="ri-sparkling-2-fill"></i> 
            </LinearGradient>
                Find out more</button>
            </div>
        </div>
        </>
    )
}

export default Hero;