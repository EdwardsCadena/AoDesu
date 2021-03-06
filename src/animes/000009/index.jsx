import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import Animes from '../../animedb/animes.json';
import CapsContent from './caps.json';
import LandingAnime from '../../utils/landing/index';
import CapsList from '../../utils/landing/caps';
const id = 9;
const url = Animes[id].url;
const animeName = Animes[id].name;

const Seasons = () => {
    return (
        <div className="seasons">
            Coming Soon
        </div>
    )
}

class Anime000009 extends Component {
    
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
                        background={"url('" + Animes[id].background + "')"}
                        OriginalName={Animes[id].originalName}
                    />
                    <div className="ao-caps-container">
                        <CapsList 
                            CapsList={CapsContent}
                            identificator={Animes[id].id}
                            name={Animes[id].name}
                            animeId={Animes[id].id}
                            url={url}
                        />
                        <Seasons />
                    </div>
                </div>
            </div>
        )
    }
}

export default Anime000009;