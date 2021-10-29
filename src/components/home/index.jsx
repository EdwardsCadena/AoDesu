import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Arrow from '../../utils/scrollHorizontal/arrow.tsx';
import Slider from '../../utils/slider/index';
import Recommended from './scrolls/recommended';
import News from './scrolls/news';
import Movies from './scrolls/movies';
import './index.css';
import NewsContent from './news/index.jsx';
import Coming from './scrolls/coming';

export function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);
      
    return (
      <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        <i className="fas fa-angle-left"></i>
      </Arrow>
    );
  }
        
export function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)
        
    return (
      <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()} style={{right: '0'}}>
        <i className="fas fa-angle-right"></i>
      </Arrow>
    );
}

function InfoAlert() {
    return (
      <div>
        <div className="ao-home-alert">
          <i className="fas fa-info"></i> AoDesu se encuentra actualmente en desarrollo, en caso de errores, favor de reportarlos.
        </div>
      </div>
    )
  }


class Home extends Component {
    componentDidMount(){
      document.title = "Ao Desu | Anime Online"
    }

    render() {
        return (
            <div className="content">
                <Slider />
                <div className="content-padd">
                <InfoAlert />
                    <div className="ao-recommended">
                        <div className="ao-titles-home">
                        <h1>¡Recomendados Por Ao!</h1>
                        </div>
                        <Recommended />

                        <div className="ao-titles-home">
                          <Link to="/news" class="read-more">Leer Más <i className="fas fa-arrow-right"></i></Link>
                          <h1><span className="beta-advisory">Beta</span>Ultimas Novedades <i className="fas fa-newspaper"></i></h1> 
                        </div>
                        <NewsContent />

                        <div className="ao-titles-home">
                        <h1>Ultimos Animes</h1>
                        </div>
                        <News />

                        <div className="ao-titles-home">
                        <h1>¡Proximamente!</h1>
                        </div>
                        <Coming />
                        
                        <div className="ao-titles-home">
                        <h1>Peliculas</h1>
                        </div> 
                        <Movies />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
