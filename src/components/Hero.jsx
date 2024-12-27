import React from "react";
import { LinearGradient } from 'react-text-gradients';
import '../hero.css';

const Hero = () => {
    return (
        <>
        <div className="background">
        <div className="absolute flex flex-col h-full w-full">
            <video 
            autoPlay
            muted 
            loop
            className="video">
                <source src='/blackhole.webm' type="video/webm" />
            </video>
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