import React from 'react';
import img1 from './ff.jpg';
import './Tugas.css';
import Text from './Text';
import Text2 from './Text2';

export default function Tugas() {
    return (
       <div className="cum">
            <div className="aku">
                <img src={img1} alt="..."></img>
                <div className="lol">
                    <Text />
                    <Text2 />
                </div>
            </div>
       </div>
    )
}