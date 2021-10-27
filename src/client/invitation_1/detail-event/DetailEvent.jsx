import React from "react";
import './DetailEvent.css';
import Crown from '../../../img/ukiran_2.svg';

const DetailEvent = () => {
    return (
        <div className="detail-event">
            <img src={Crown} alt="Mahkota title detail" />
            <h1 className="title">Waktu dan Tempat</h1>
            <div className="detail-body">
                <h3>11 November 2021</h3>
                <p>Jumat, 09.00-18.00</p>
                <p>Jalan Desa Blahbatuh, Gianyar</p>
                <button>Buka Map</button>
            </div>
        </div>
    )
}

export default DetailEvent;