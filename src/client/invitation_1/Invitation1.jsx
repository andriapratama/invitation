import React, { useState } from "react";
import './Invitation1.css';
import Protokol from "./protokol/Protokol";
import DetailEvent from "./detail-event/DetailEvent";
import Flower from "../../img/ukiran_1.svg";
import Crown from "../../img/ukiran_2.svg";

const Invitation1 = () => {
    const [isShowCover, setIsShowCover] = useState(false);


    return (
        <div className="invitation1">
            <div className={isShowCover ? 'cover active' : 'cover'}>
                <p>we invite you to our ceremony</p>
                <p className="upacara">Upacara Manusa Yadnya</p>
                <h1>Mepandes</h1>
                <h2>Keluarga Besar Putu Gede Wayan</h2>
                <p className="dates">11 November 2021</p>
                <p>Mengundang Bapak/Ibu/Saudara/i</p>
                <h3>Yuda</h3>
            </div>
            <div className="pembukaan">
                <div className="pembukaan-image">
                    <img src={Flower} alt="ukiran bunga" />
                </div>
                <h1 className="title">Om Swastiyastu</h1>
                <p>Atas Asung Kerta Waru Nugraha Ida Sang Hyang Widhi Wasa, kami bermaksud untuk mengundang bapak/ibu/saudara/i ke acara manusa yadnya Mepandes (potong gigi) putra-putri kami :</p>
            </div>
            <div className="nama">
                <img src={Crown} alt="Mahkota title" />
                <h1 className="title">Sane Mepandes</h1>
                <h2>Ajeng Pradnyaswari Suryawirawan</h2>
                <h2>I Putu Aditya Widharma Satya</h2>
                <h2>Putu Etha Naraswari Wira </h2>
                <h2>Dharma Pradnyananda Suryawirawan</h2>
                <h2>Ni Made Arindra Widyaswari</h2>
                <h2>Putu Satya Keshawa</h2>
                <h2>Made Endhita Candraswari</h2>
                <h2>Made Sadwika Mahindra Dinata</h2>
            </div>

            <DetailEvent />
            <Protokol />
            
            <div className="footer"></div>
        </div>
    )
}

export default Invitation1;