import React from "react";
import './Home.css';
import Hero from "./components/hero/Hero";

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <div className="description"></div>
            <div className="feature"></div>
            <div className="feedback"></div>
            <div className="footer"></div>
        </div>
    )
}

export default Home;