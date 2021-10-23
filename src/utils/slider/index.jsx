import React from 'react';
import {Slideshow, Slide} from './SlideShow.js';
import { Link } from 'react-router-dom';
import Promo from '../../animedb/slider-data.json';
import './index.css'

const Slider = () => {
	return (
		<main>
			<Slideshow controles={true}>	
                {Promo.map(e=> 
                    <Slide key={e.id}>
                        <div className="img-slider">
                            <img src={e['background-img']} alt={e.name} />
                        </div>
                        <div className="background-image"></div>
                        <div className={"txt-slider " + e.style}>
                            <div className="txt-info">
                                {e.txt}
                            </div>
                            <div className="content-slider">
                                <div className="logo-slider">
                                    <img src={e.logo} alt={e.name} />
                                </div>
                                <div className="btn-slider">
                                    <Link  to={e.url}>{e.btnContent}</Link>
                                </div>   
                            </div>  
                        </div>
                        <Link className="urlBox" to={e.url}></Link>
                    </Slide>
                )}
			</Slideshow>
		</main>
	);
}

export default Slider;