import React, { useEffect, useState } from "react";
import './Invitation1.css';
import Protokol from "./protokol/Protokol";
import DetailEvent from "./detail-event/DetailEvent";
import Flower from "../../img/ukiran_1.svg";
import Crown from "../../img/ukiran_2.svg";
import Frame from "../../img/ukiran_3.svg";
import musicSource from '../../music/Bali_World_Music_Gus_Teja_Morning_Happiness.mp3';
import { useLocation } from "react-router";

const Invitation1 = () => {
    const location = useLocation();
    const [names, setNames] = useState([]);
    const [isShowCover, setIsShowCover] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [music, setMusic] = useState(null);

    const scrollTop = () =>
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    
    function loadMusic() {
        const _audio = new Audio(musicSource);
        _audio.load();
        _audio.addEventListener("canplaythrough", () => {
            console.log("Audio loaded")
            setMusic(_audio);
        });
    }
    
    async function playMusic() {
        await new Promise((r) => setTimeout(r, 100));
        music && music.play().catch(e => {
            console.log(e);
        });
        setIsPlaying(true);
    }

    function pauseMusic() {
        music && music.pause();
        setIsPlaying(false);
    }

    useEffect(() => {
        loadMusic();
    }, []);
    
    useEffect(() => {
        const query = location.search.replace('?', '');
        const queries = query.split('&');

        for (let i = 0; i < queries.length; i++) {
            if (queries[i].match(/name/)) {
                const name = queries[i].replace(/name=/, '')
                const names = name.split('-');
                setNames(names);
            }
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="invitation1">
            <div className={isShowCover ? 'cover active' : 'cover'}>
                <div className="cover-body">
                    <p>we invite you to our ceremony</p>
                    <p className="upacara">Upacara Manusa Yadnya</p>
                    <h1>Mepandes</h1>
                    <p className="dates">11 November 2021</p>
                    <p>Mengundang Bapak/Ibu/Saudara/i</p>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        {names.map((name, index) => <h3 key={index} style={{padding: "0 5px" }}>{name}</h3>)}
                    </div>
                </div>

                <div className="cover-frame">
                    <img className="left-top" src={Frame} alt="Frame 1" />
                    <img className="left-bottom" src={Frame} alt="Frame 2" />
                    <img className="right-top" src={Frame} alt="Frame 3" />
                    <img className="right-bottom" src={Frame} alt="Frame 4" />
                    <div
                        className="button" 
                        onClick={async () => {
                            setIsShowCover(!isShowCover);
                            await playMusic();
                            scrollTop();
                        }}>
                        <i className="fas fa-caret-up"></i>
                        <p>Open</p>
                    </div>
                </div>
            </div>

            <div className="btn-extend">
                <div className="btn-group" onClick={() => {
                    if (isPlaying) {
                        pauseMusic();
                    } else {
                        playMusic();
                    }
                }}>
                    <i className={ isPlaying ? 'fas fa-pause' : 'fas fa-play' }></i>
                </div>
            </div>

            <div className="pembukaan">
                <div className="pembukaan-image">
                    <img src={Flower} alt="ukiran bunga" />
                </div>
                <h1 className="title">Om Swastiyastu</h1>
                <p>Atas Asung Kerta Wara Nugraha Ida Sang Hyang Widhi Wasa, kami bermaksud untuk mengundang bapak/ibu/saudara/i ke acara manusa yadnya Mepandes (potong gigi) putra-putri kami :</p>
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

            <div className="penutup">
                <p>Merupakan kehormatan bagi kami apabila bapak/ibu/saudara/i dapat berkenan hadir ke acara Mepandes putra-putri kami.</p>
                <p>Atas perhatiannya kami ucapkan terima kasih.</p>

                <h1 className="title">Om Shanti Shanti Shanti Om</h1>
            </div>
            <div className="footer"></div>
        </div>
    )
}

export default Invitation1;