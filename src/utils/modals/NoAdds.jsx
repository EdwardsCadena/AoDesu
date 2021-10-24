import React from 'react';
import './index.css';
import ModalCookies from './CookiesModals';

function CloseAddInfoModal() {
    const body = document.getElementById('Body');

    body.classList.add('AddsModalNoVisible');

    localStorage.setItem('ModalAddsInfo', 'true');

    console.log('FuncionaBtnModal');
}

const ModalAdds = () => {
    return(
        <div className="ModalContainer">
            <ModalCookies />
            <div className="ModalClickable" onClick={CloseAddInfoModal}></div>
            <div className="modalAdds">
                <div className="modalTxt">
                    <div className="modal-title">Aviso</div>
                    En AoDesu procuramos mantener una experiencia sin anuncios molestos, pero no podemos evitar que los reproductores de video agreguen sus propios anuncios. <br/><br/>
                    Te Recomendamos instalar AdBlock en tu navegador para mejorar tu experiencia. <br/><br/>
                    <a href="https://adblockplus.org/es/" target="_blank" rel="noopener noreferrer">AdBlockPlus</a>
                    Lamentamos las molestias temporales.
                    <button className="CloseBtn" onClick={CloseAddInfoModal}>
                        <i className="fa fa-times"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalAdds;