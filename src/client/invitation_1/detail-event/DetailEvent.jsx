import React, { useEffect, useRef, useState } from "react";
import './DetailEvent.css';
import Crown from '../../../img/ukiran_2.svg';

const DetailEvent = () => {
    const [days, setDays] = useState("00");
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");
    
    let interval = useRef();

    const startTimer = () => {
        const date = new Date('Nov 11, 2021 09:00:00').getTime();


        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = date - now;

            const day = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hour = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const second = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setDays(day);
                setHours(hour);
                setMinutes(minute);
                setSeconds(second);
            }

        }, 1000);
    }

    useEffect(() => {
        startTimer();
        return () => {
            // eslint-disable-next-line
            clearInterval(interval.current); 
        };
    }, []);

    return (
        <div className="detail-event">
            <img src={Crown} alt="Mahkota title detail" />
            <h1 className="title">Waktu dan Tempat</h1>
            <div className="detail-body">
                <div className="detail-time">
                    <div className="detail-group">
                        <h1>{days}</h1>
                        <p>Hari</p>
                    </div>
                    <div className="detail-group">
                        <h1>{hours}</h1>
                        <p>Jam</p>
                    </div>
                    <div className="detail-group">
                        <h1>{minutes}</h1>
                        <p>Menit</p>
                    </div>
                    <div className="detail-group">
                        <h1>{seconds}</h1>
                        <p>Detik</p>
                    </div>
                </div>
                <p>11 November 2021</p>
                <p>Jumat, 09.00-21.00</p>
                <p style={{padding: "0 10px"}}>Gg. IV No. 12, Blahbatuh, Kec. Blahbatuh, Kab. Gianyar</p>
                <a href="https://www.google.com/maps/place/8%C2%B034'07.7%22S+115%C2%B017'54.8%22E/@-8.568813,115.2963593,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-8.568813!4d115.298548?hl=en-GB">
                    <button>Buka Map</button>
                </a>
            </div>
        </div>
    )
}

export default DetailEvent;