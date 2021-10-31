import React from 'react';
import { Link } from 'react-router-dom';

function CapsListComponent(){
    const AoAnimePopUp = document.querySelector('.ao-anime-popUp');
    const Body = document.querySelector('#Body');
    
    Body.classList.remove('NoScroll');
    AoAnimePopUp.classList.toggle('Show');
    //console.log('FuncionaCaps')
}

function AnimeCaps(props){
    return (
        <div className="ao-anime-popUp">
            <div className="Clickable" onClick={CapsListComponent}></div>
            <div className="ao-caps-container reproductorZone">
                <div className="caps">
                    <h3>Listado de Capitulos</h3>
                    <i className="fas fa-times CerrarCapsListBtn" onClick={CapsListComponent}></i>
                    { props.CapsListModal.map(e => 
                        <div className="ao-cell-caps-container" key={e['cap']}>
                        <div className="ao-img-cell-caps">
                            <img src={e['cap-cover']} alt={e.AnimeName + " Cap" + e.cap} />
                        </div>
                        <div className="caps-info">
                            <h3 className="ao-title-cell title-caps">{e['cap-name']}</h3>
                            <p className="capsDate">{e.date}</p>
                        </div>
                        <p className="nCaps">
                            <i className="far fa-play-circle"></i>
                            <span>Cap </span> 
                            {e.cap}
                        </p>
                        
                        <Link to={props.url + e['cap-url']}></Link>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AnimeCaps;