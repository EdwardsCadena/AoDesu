import React from 'react';
import { Link } from 'react-router-dom';
import AnimeCaps from './capsModal';
import Reproductor from '../reproductor';
import ExtraContainer from './extraContainer';
const AoDownloader = "https://www.gooogle.com";

function CapsListComponent(){
    const AoAnimePopUp = document.querySelector('.ao-anime-popUp');
    const Body = document.querySelector('#Body');
    
    Body.classList.add('NoScroll');
    AoAnimePopUp.classList.toggle('Show');
    
    //console.log('FuncionaCaps')
}

function ChangeReproductor(){
    const CReproductorBtn = document.querySelector('#c-reproductor-btn');
    const OptionsContainer = document.querySelector('#options-container');
    CReproductorBtn.classList.toggle('Active');
    OptionsContainer.classList.toggle('Active');
}

function CapsZone(props){
    return(
        <div>
            <AnimeCaps
                CapsListModal={props.CapsListModal}
                url={props.animeUrl}
            />
            <div className="content">
                <div className="content-padd CapsContainer">
                    <div className="flex-container-reproductor-movil">
                        <div className="reproductor-container">
                            <Reproductor 
                                name={props.reproductorName}
                                src={props.videoSrc}
                            />
                            <div className="reproductorCapInfo">
                                <h1>
                                    <div className="AnimeTitle"><Link to={props.animeUrl}>{props.animeName}</Link></div>
                                    <div className="AnimeCap">Cap. {props.capNumber}</div>
                                </h1>
                                <h2>{props.capName}</h2>
                                <button className="CapsList OptionsBtn CapsBtns" >
                                    <i className="fas fa-ellipsis-v"></i>
                                    <div className="hoverBtnOps">Opciones</div>
                                    
                                </button>  
                                <div className="options-container" id="options-container">
                                    <div className="reproductor-options-container">
                                        <button className="options-reproductorBtn" id="c-reproductor-btn" onClick={ChangeReproductor}>
                                            Cambiar Reproductor
                                            <i className="fas fa-chevron-right"></i>
                                        </button>
                                        <div className="change-reproductor-container">
                                            <button className="options-reproductorBtn">YourUpload</button>
                                            <button className="options-reproductorBtn">Fembed</button>
                                        </div>
                                        <button className="options-reproductorBtn">
                                            Reportar Capitulo
                                            <i className="fas fa-chevron-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="caps-selector">
                                <Link to={props.before} className={"CapsSelect CapsBtns  mg-l-50 " + props.FirstCapBtn + " " + props.DiscoverBtn}>
                                    <i className="fas fa-angle-double-left"></i>
                                    <div className="hoverBtnOps">Anterior</div>
                                </Link>
                                <button className="CapsList CapsBtns" onClick={CapsListComponent}>
                                    <i className="fas fa-list"></i>
                                    <div className="hoverBtnOps">Episodios</div>
                                </button>
                                <Link to={props.after} className={"CapsSelect CapsBtns " + props.LastCapBtn}>
                                    <i className="fas fa-angle-double-right"></i>
                                    <div className="hoverBtnOps">Siguiente</div>
                                </Link>
                                <Link to="/directory" className="CapsSelect CapsBtns Discover" style={{display: 'none'}}>
                                    <i className="fas fa-splotch"></i>
                                    <div className="hoverBtnOps">Descubrir</div>
                                </Link>
                                <a href="/" className="CapsBtns DownloadCapBtn">
                                    <i className="fas fa-download"></i>
                                    <div className="hoverBtnOps">Descargar</div>
                                </a>
                            </div>
                        </div>
                    </div>
                <ExtraContainer
                    recommended={props.recommendedSec}
                />
                </div>
            </div>
        </div>
    )
}

export default CapsZone;