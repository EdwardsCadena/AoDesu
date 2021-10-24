import React from 'react';
import { Link } from 'react-router-dom';
import ShareModal from '../../utils/modals/share';

// See More
function SeeMore() {
    const seeMoreBtn =  document.querySelector('.seeMore');
    const sinopsis = document.querySelector('.ao-info-anime-txt');

    seeMoreBtn.classList.toggle('More');
    sinopsis.classList.toggle('More');
}

function ShowShareModal(){
    const content = document.querySelector('.content');

    content.classList.toggle('modalShare');
}

function LandingAnime(props){
    return(
        <div className="ao-anime-info">
            <ShareModal
                url={props.url}
            />
            <div className={"ao-anime-banner " + props.class}>
                <div className="ao-banner-gradient"></div>
            </div>
            <div className="ao-anime-info-banner">
                <div className="ao-info-anime">
                    <div className="ao-info-img">
                        <img className="tall-img" src={props.tallCover} alt={props.altTall} />
                        <img className="wide-img" src={props.wideCover} alt={props.altWide} />
                    </div>
                    <div className="ao-info-details" id={props.status}>
                        <h4>{props.status}</h4>
                    </div>
                    <div className="info-anime-stars">
                        <div>                                    
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        {props.stars}
                    </div>
                </div>
                <div className="ao-info-flex">
                    <div className="ao-info-anime-txt">
                        <div className="ao-info-txt-name">
                            <h1>{props.name}</h1>
                        </div>
                        <span className="sinopsis-title">Sinopsis</span>
                        <p className="ao-info-txt-sinopsis">
                            {props.sinopsis}
                        </p>
                        <span className="seeMore" onClick={SeeMore}>
                        <span className="seeMoreTxt">Ver Más</span>
                        <span className="seeLessTxt">Ver Menos</span></span>
                    </div>

                    <div className="ao-info-container-extra">
                        <div className="ao-info-anime-container">
                            <div className="ao-info-txt-on">
                                <span className="plataforma-upload">{props.platform}</span>
                                <span className="info-temporada-upload" id={props.season}>
                                    <i className={props.seasonIcon} aria-hidden="true"></i> 
                                    {props.season} {props.year}
                                </span>
                            </div>
                            <div className="manga-container">
                                <a href={props.linkManga}>Leer Manga</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="options-landing">
                    <button className="shareButton" onClick={ShowShareModal}>
                        <i className="fas fa-share"></i>
                        <div className="hover-container">Compartir</div>
                    </button>
                </div>
            </div>
            <div className="info-anime-genres">
                { props.genres.map(e => 
                    <div style={{position: 'relative'}}>
                        {e.genre}
                        <Link to={e.url}
                            style={{position: 'absolute', top: '0', left: '0', right: '0', bottom: '0'}}
                        ></Link>
                    </div>    
                ) }
            </div>
        </div>
    )
}

export default LandingAnime;