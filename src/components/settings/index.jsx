import React, { Component } from 'react';

function themeConfig(){
    const body = document.querySelector('#Body');
    body.classList.toggle('light');
    if(body.classList.contains('light')){
        localStorage.setItem('theme', 'light');
    }else{
        localStorage.setItem('theme', 'default');
    }
}

function performanceConfig(){
    const body = document.querySelector('#Body');
    body.classList.toggle('lowPerformance');
    if(body.classList.contains('lowPerformance')){
        localStorage.setItem('performance', 'low');
    }else{
        localStorage.setItem('performance', 'hight');
    }   
}

function blockedConfingOne(){
    const nothing = document.querySelector('#sanctuary-config');
    nothing.classList.toggle('activated');
}
function blockedConfingTwo(){
    const nothing = document.querySelector('#notify-confing');
    nothing.classList.toggle('activated');
}

function closeSettings(){
    const Settings = document.querySelector('.settings-modal');
    const Content = document.querySelector('.content');

    Content.classList.remove('showSettings');
    Settings.classList.remove('show');
}

class Settings extends Component {
    render(){
        return(
                <div className="settings-modal">
                    <button className="closeSettingsBtn" onClick={closeSettings}><i className="fas fa-times"></i></button>
                    <div className="settings-container">
                        <div className="settings-title"> 
                            <h2>Ajustes de Preferencias</h2>
                        </div>
                        <div className="settings-content">
                            <ul>
                                <li className="settings-list" id="theme-config">
                                    <h3>Tema Claro</h3>
                                    <p>Activa esta opción para poner la pagina en el tema claro (Si es que quieres quemar tus retinas).</p>
                                    <span className="button-container">
                                        <span></span>
                                    </span>
                                    <button onClick={themeConfig}></button>
                                </li>
                                <li className="settings-list" id="performance-config">
                                    <h3>Bajo Rendimiento</h3>
                                    <p>Activa esta opción para eliminar todas las animaciones, no afectara tu experiencia, ademas de mejorar el rendimiento claro esta.</p>
                                    <span className="button-container">
                                        <span></span>
                                    </span>
                                    <button onClick={performanceConfig}></button>
                                </li>
                                <li className="settings-list" id="sanctuary-config">
                                    <h3>Sanctuary</h3>
                                    <p>Al activar esta opción, estas configurando la web, para que al abrir un manga se abra desde la misma pagina (AoDesu) en lugar de abrir en una nueva pestaña la web de mangas (Sanctuary).</p>
                                    <span className="button-container">
                                        <span></span>
                                    </span>
                                    <button onClick={blockedConfingOne}></button>
                                </li>
                                <li className="settings-list" id="notify-confing">
                                    <h3>Notificaciones</h3>
                                    <p>Activala para recibir un anuncio cada que abras la web y estar informado acerca de todos los cambios.</p>
                                    <span className="button-container">
                                        <span></span>
                                    </span>
                                    <button onClick={blockedConfingTwo}></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Settings;