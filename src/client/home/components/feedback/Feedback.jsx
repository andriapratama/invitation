import React from "react";
import './Feedback.css';
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Feedback = () => {
    let datas = [
        {
            nama: "Ayu",
            alamat: "Denpasaa",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste adipisci veniam dolores vitae a facere iusto at asperiores possimus fuga voluptatibus, saepe ut ratione itaque fugiat assumenda mollitia molestias veritatis."
        },
        {
            nama: "Linda",
            alamat: "Klungkung",
            text: "Keren desainnya",
        },
        {
            nama: "Dode",
            alamat: "Bangli",
            text: "Harga terjangkau",
        },
        {
            nama: "Linda",
            alamat: "Klungkung",
            text: "Keren desainnya",
        },
        {
            nama: "Linda",
            alamat: "Klungkung",
            text: "Keren desainnya",
        }
    ]

    const options = {
        items: 4,
        margin: 10,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
    }
    return (
        <div className="feedback">
            <h1>Feedback Customer</h1>
            <OwlCarousel
                className="owl-carousel"
                {...options}
            >
                {datas.map((data, index) => {
                    return (
                        <div className="feedback-box" key={index}>
                            <p><strong>{data.nama}</strong> dari {data.alamat}</p>
                            <p>{data.text}</p>
                        </div>
                    )
                })}
            </OwlCarousel>
        </div>
    )
}

export default Feedback;