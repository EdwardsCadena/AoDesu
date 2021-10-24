import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import Animes from '../../animedb/animes.json';
import CapsContent from './caps.json';
import LandingAnime from '../../utils/landing/index';
import CapsList from '../../utils/landing/caps';
const id = 7;
const url = Animes[id].url;
const animeName = Animes[id].name;

const Seasons = () => {
    return (
        <div className="seasons cronology">
            <div className="title-cronology">
                <h4><i className="fas fa-angle-double-left"></i> Anterior Temporada </h4>
            </div>
            <div className="cronology-container nextSeason">
                <div className="content-container">
                    <div className="cronology-img">
                        <img src={Animes[id - 1]['wide-cover-anime']} alt="" />
                    </div>
                    <div className="cronology-txt">
                        <p>{Animes[id - 1].name}</p>
                    </div>
                    <div className={"result-type " + Animes[id - 1].type}>
                          {Animes[id - 1].type}
                      </div>
                    <Link to={Animes[id - 1].url}></Link>
                </div>
            </div>
        </div>
    )
}

class Anime000007 extends Component {
    
    componentDidMount(){
        document.title = "Ver " + Animes[id].name
    }

    state = {
        Caps: CapsList
    }

    render() {
        return (
            <div className="content">
                <div className="ao-anime">
                    <LandingAnime
                        class={Animes[id].class}
                        tallCover={Animes[id]['tall-cover-anime']}
                        wideCover={Animes[id]['wide-cover-anime']}
                        status={Animes[id].status}
                        stars={Animes[id].stars}
                        name={Animes[id].name}
                        sinopsis={Animes[id].sinopsis}
                        platform={Animes[id].platform}
                        season={Animes[id].season}
                        seasonIcon={Animes[id].seasonIcon}
                        year={Animes[id].year}
                        linkManga={Animes[id].mangaUrl}
                        genres={Animes[id].genres}
                        genreSearch={Animes[id].genres.url}
                        url={Animes[id].url}
                    />
                    <div className="ao-caps-container">
                        <CapsList 
                            CapsList={CapsContent}
                            identificator={Animes[id].id}
                            name={Animes[id].name}
                            url={url}
                        />
                        <Seasons />
                    </div>
                </div>
            </div>
        )
    }
}

export default Anime000007;