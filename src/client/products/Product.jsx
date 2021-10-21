import React, { useState } from "react";
import './Product.css';
import Invitation1 from '../invitation_1/Invitation1';

const Product = () => {
    const [isShowInvitation, setIsShowInvitation] = useState(false)
    const [widthPhone, setWidthPhone] = useState("");

    console.log(widthPhone);

    let datas = [
        {
            id: 1,
            color: "#00ffff"
        },
        {
            id: 2,
            color: "#0000ff"
        },
        {
            id: 3,
            color: "#000000"
        }
    ]

    const getDataId = (id) => {
        if (id === 1) {
            setIsShowInvitation(true);
            
        } else {
            setIsShowInvitation(false);
        }
    }

    const phones = [
        {
            id: 1,
            nama: "iPhone X, iPhone 11 Pro, iPhone 13 Mini, iPhone SE",
            width: 375
        },
        {
            id: 2,
            nama: "iPhone 11, iPhone 11 Pro Max",
            width: 414
        },
        {
            id: 3,
            nama: "iPhone 13 Pro Max",
            width: 428
        },
        {
            id: 4,
            nama: "iPhone 13 Pro",
            width: 390
        }
    ]

    const handleSelect = (e) => {
        const id = e.target.value;
        console.log(id)
    }

    return (
        <div className={isShowInvitation ? 'product active' : 'product'}>
            <div className={isShowInvitation ? 'product-list active' : 'product-list'}>
                {datas.map((data, index) => {
                    return (
                        <div 
                            className="product-group" 
                            key={index} 
                            style={{backgroundColor: data.color}}
                            onClick={() => {
                                getDataId(data.id)
                            }}>
                            
                        </div>
                    )
                })}
            </div>
            <div className="product-preview">
                <div className={isShowInvitation ? 'invitation active' : 'invitation'}>
                    
                    <select className="phone" onChange={(e) => handleSelect(e)}>
                        {phones.map((phone, index) => {
                            return (
                                <option 
                                    key={index} 
                                    value={phone.id}
                                >
                                    {phone.nama}        
                                </option>
                            )
                        })}
                    </select>
                    <i className="fas fa-times" onClick={() => setIsShowInvitation(!isShowInvitation)}></i>
                    <div className="width-phone" style={{width: widthPhone, backgroundColor: "grey"}}>
                        <Invitation1 />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;