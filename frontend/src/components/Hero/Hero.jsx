import React, { useState, useEffect, useRef } from "react";
import lady from "../../assets/Hero/lady_pic.jpg";
import gunshot from "../../assets/Hero/gunshot.jpg";
import joint_rolling from "../../assets/Hero/rolling_joints.png";
import heroin from "../../assets/Hero/heroin.png";
import street_crime from "../../assets/Hero/street_crime.jpg";
import cybercrime from "../../assets/Hero/cyber_crime.jpg";
import hero_style from "./Hero.module.css";

import Rape_Message from "../Hero_messages/MRape/Rape_Message";
import Murder_Message from "../Hero_messages/MMurder/Murder_Message";
import Heroin_Message from "../Hero_messages/MHeroin/Heroin_Message";
import Drugs_Message from "../Hero_messages/MDrugs/Drugs_Message";
import Disruption_Message from "../Hero_messages/MDisruption/Distruption_Message";
import Cyber_Message from "../Hero_messages/MCyber/Cybercrime_Message";

function Hero({ className, children }) {
    const heroImages = [lady, gunshot, heroin, joint_rolling, street_crime, cybercrime];
    const heroMessages = [Rape_Message, Murder_Message, Heroin_Message, Drugs_Message, Disruption_Message, Cyber_Message];

    const [hero, setHero] = useState(0);
    const [message, setMessage] = useState(0);

    let interval = useRef(null);

    const startInterval = () => {
        interval.current = setInterval(() => {
            setHero((prevState) => (prevState + 1) % heroImages.length);
            setMessage((prevState) => (prevState + 1) % heroMessages.length);
        }, 10000);
    };

    const resetInterval = () => {
        if (interval.current) {
            clearInterval(interval.current);
            interval.current = null;
        }
    };

    useEffect(() => {
        startInterval();
        return () => resetInterval();
    }, [heroImages.length, heroMessages.length]); // Dependencies for when the image or message arrays change

    const next_hero = () => {
        resetInterval();
        setHero((prevState) => (prevState + 1) % heroImages.length);
        setMessage((prevState) => (prevState + 1) % heroMessages.length);
        startInterval();
    };

    const prev_hero = () => {
        resetInterval();
        setHero((prevState) => (prevState === 0 ? heroImages.length - 1 : prevState - 1));
        setMessage((prevState) => (prevState === 0 ? heroMessages.length - 1 : prevState - 1));
        startInterval();
    };

    return (
        <div className={`${hero_style.hero} ${className}`}>
            <button className={hero_style.prev_btn} onClick={prev_hero}>&#60;</button>
            <div>{React.createElement(heroMessages[message])}</div> {/*syntax for creating react elemnt in the dom*/}
            <img src={heroImages[hero]} alt="Hero" />
            <button className={hero_style.next_btn} onClick={next_hero}>&#62;</button>
        </div>
    );
}

export default Hero;
