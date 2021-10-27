import React from "react";
import './Protokol.css';
import Crown from '../../../img/ukiran_2.svg';
import Icon1 from '../../../icons/avoid-crowds.png';
import Icon2 from '../../../icons/handshake.png';
import Icon3 from '../../../icons/mask.png';
import Icon4 from '../../../icons/thermometer.png';
import Icon5 from '../../../icons/washing-hands.png';

const Protokol = () => {
    return (
        <div className="protokol">
            <img src={Crown} alt="mahkota title" />
            <h1 className="title">Protokol Kesehatan</h1>
            <p>Acara diselenggarakan dengan protokol kesehatan yang harus dipatuhi demi mencegah penyebaran virus Covid-19. Tanpa mengurangi rasa hormat, tamu undangan diharapkan untuk mengikuti protokol kesehatan.</p>
            <div className="protokol-body">
                <div className="protokol-group">
                    <img src={Icon1} alt="Jaga jarak" />
                    <p>Jaga jarak & hindari kerumunan</p>
                </div>
                <div className="protokol-group">
                    <img src={Icon3} alt="Memakai masker" />
                    <p>Wajib masker</p>
                </div>
                <div className="protokol-group">
                    <img src={Icon4} alt="Cek suhu tubuh" />
                    <p>Cek suhu tubuh</p>
                </div>
                <div className="protokol-group">
                    <img src={Icon5} alt="Mencuci tangan" />
                    <p>Mencuci tangan</p>
                </div>
                <div className="protokol-group">
                    <img src={Icon2} alt="Tidak berjabat tangan" />
                    <p>Tidak berjabat tangan</p>
                </div>
            </div>
        </div>
    )
}

export default Protokol;