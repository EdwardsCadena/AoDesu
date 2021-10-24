import React from 'react';
import { LoginButton } from './Login';
import ToggleUserVisibility from '../HeaderMovil/index';
export const ProfileDefault = () => {
    const imgRandomUrls = [
        "https://i.ibb.co/HBdVWJG/12.jpg", "https://i.ibb.co/sVQbQZ0/profile-001.jpg", "https://via.placeholder.com/400x400?text=3", "https://via.placeholder.com/400x400?text=4", "https://via.placeholder.com/400x400?text=5", "https://via.placeholder.com/400x400?text=6"
    ];

    function Randomixer(){

        var dataIndex = Math.floor(Math.random() * imgRandomUrls.length);
        var img = '<img src="'
        img += imgRandomUrls[dataIndex]
        img += '/" alt="Profile Default />'
        return img;
    }

    return (
         <div className="profile-container">
             <button onClick={ToggleUserVisibility} className="close-profile-btn">
                <i className="fas fa-arrow-left"></i>
            </button>
             <div className="profile-img" onClick={Randomixer}>
                <img src="https://avatarfiles.alphacoders.com/174/174101.jpg" alt="Profile Img AoDesu" />
            </div>
            <div className="profile-info">
                <p className="beta-advisory">BETA</p>
                <div className="profile-name">
                    <div className="icon">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="txt">
                        Usuario Aleatorio
                    </div>
                </div>
                <div className="profile-email">
                    <div className="icon">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="txt">
                        Sin Correo
                    </div>
                </div>
                <div className="profile-btn">
                    <LoginButton />
                </div>
            </div>
        </div>
    )
}