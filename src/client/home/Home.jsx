import React from "react";
import './Home.css';
import Hero from "./components/hero/Hero";
import Feature from "./components/feature/Feature";

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <div className="description">
                <h1>Hello</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quae nostrum iure? Praesentium facere nemo beatae eum ex autem mollitia eos quos, reiciendis nulla impedit inventore odit animi sint voluptas!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta natus quam tempore eos, voluptatum error debitis ad voluptas temporibus repellendus sequi sit molestias, porro, quia reprehenderit. Distinctio, ipsa praesentium.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui molestiae vel consequatur eius vitae cum veritatis culpa aperiam incidunt magnam. Voluptas cum voluptate, earum dolorem ipsum eum debitis laudantium unde?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quis possimus temporibus odio alias ea, mollitia perferendis non, eaque veniam corrupti ad dolores, nesciunt illo natus voluptate blanditiis repellat quos!
                </p>
            </div>
            <Feature />
            <div className="feedback"></div>
            <div className="footer"></div>
        </div>
    )
}

export default Home;