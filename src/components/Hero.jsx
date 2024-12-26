import React from "react";
import { LinearGradient } from 'react-text-gradients';
import '../hero.css';

const Hero = () => {
    return (
        <>
        <div className="background">
        <div className="relative flex flex-col h-full w-full">
            <video 
            autoPlay
            muted 
            loop
            className="video">
                <source src='public\blackhole.webm' type="video/webm" />
            </video>
        </div>
        </div>
        </>
    )
}

export default Hero;