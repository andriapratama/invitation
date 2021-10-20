import React from "react";
import './Hero.css';
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Hero = () => {
    let lists = [
        {
            color: "#00ffff"
        },
        {
            color: "#0000ff"
        },
        {
            color: "#000000"
        }
    ]

    const options = {
        items: 1,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
    }

    return (
        <div className="hero">
            <div className="hero-button">
                <i className="fas fa-chevron-left"></i>
                <i className="fas fa-chevron-right"></i>
            </div>
            
            <OwlCarousel
                className="owl-carousel"
                {...options}
            >
                {lists.map((item, index) => {
                    return (
                        <div key={index} style={{backgroundColor: item.color}}>
                            <div className="hero-body"></div>
                        </div>
                    )
                })}
            </OwlCarousel>
            
        </div>
    )
}

export default Hero;