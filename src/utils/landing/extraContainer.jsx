import React from "react";
import { Link } from 'react-router-dom';

function ExtraContainer(props){
    return(
        <div className="container-extraCaps">
            <div className="HelpUs">
                <h3>¡Apoyanos Porfavor!</h3>
                <div className="HelpUsLinks">
                    <a href="https://www.patreon.com/AoDesu" target="_blank" rel="noopener noreferrer" >
                        <i className="fab fa-patreon"></i>
                    </a>
                </div>
            </div>
            <div className="CapsRecommendeds">
                <span className="CapsRecommendedsTitle">Animes Recomendados</span>
                { props.recommended.map(e => 
                    <div className="CapsRecommendedsContainer" key={e.id}>
                        <div className="CapsRecommendedImg">
                            <img src={e['cover-anime']} alt={e.anime} />
                        </div>
                        <div className="CapsRecommendedInfo">
                            <div className="CapsRecommendedTitle">{e.anime}</div>
                            <div className="CapsRecommendedCant">{e.capsCant} Capitulos</div>
                        </div>
                        <div className="CapsRecommendedLang">
                            {e.language}
                        </div>
                    <Link className="CapsRecommendedLink" to={e.url} />
                </div>     
                )}
            </div>
        </div>
    )
}

export default ExtraContainer;