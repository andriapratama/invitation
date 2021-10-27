import React from "react";
import './DetailEvent.css';
import Crown from '../../../img/ukiran_2.svg';

const DetailEvent = () => {
    return (
        <div className="detail-event">
            <img src={Crown} alt="Mahkota title detail" />
            <h1 className="title">Waktu dan Tempat</h1>
            <div className="detail-body">
                <div className="detail-time">
                    <div className="detail-group">
                        <h1>2</h1>
                        <p>Hari</p>
                    </div>
                    <div className="detail-group">
                        <h1>24</h1>
                        <p>Jam</p>
                    </div>
                    <div className="detail-group">
                        <h1>30</h1>
                        <p>Menit</p>
                    </div>
                    <div className="detail-group">
                        <h1>40</h1>
                        <p>Detik</p>
                    </div>
                </div>
                <p>11 November 2021</p>
                <p>Jumat, 09.00-18.00</p>
                <p>Jalan Desa Blahbatuh, Gianyar</p>
                <button>Buka Map</button>
            </div>
        </div>
    )
}

export default DetailEvent;