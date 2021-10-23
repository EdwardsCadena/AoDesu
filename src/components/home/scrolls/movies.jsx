import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LeftArrow, RightArrow } from '../index';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import AllMovies from '../../../animedb/movies.json';
import LazyLoad from 'react-lazyload';

function Movies() {
    const [selected, setSelected] = React.useState([]);
    const [position, setPosition] = React.useState(0);
 
    const isItemSelected = (id) => !!selected.find((el) => el === id);
      
    const handleClick = (id) => ({ getItemById, scrollToItem }) => {
    const itemSelected = isItemSelected(id)
      
    setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    }
      
    return (
        <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
          >
          { AllMovies.map(e => 
            <div className="ao-cell-containerMovies" 
              key={e.id}
              itemId={e.id}>
                <div className="ao-img-cellMovies" id={e['special-styles']}>
                <div className="lazy-background movies-lazy"></div>
                  <LazyLoad height={200} once={true} offset={100}>
                    <img src={e['cover-anime']} alt={e.name}/>
                  </LazyLoad>
                  <div className="ao-img-detailsMovies">
                    <i className="fas fa-chevron-circle-right"></i>
                  </div>
                  <div className="ao-Verificator">
                    <i className={e.verified}></i>
                  </div>
                </div>
                  <p className="ao-lang-label">{e.language}</p>
                  <Link to={e.url}></Link>
                  <h3 className="ao-title-cellMovie">{e.name}</h3>
                </div>
              ) }

          </ScrollMenu>
    );
  }

  export default Movies;