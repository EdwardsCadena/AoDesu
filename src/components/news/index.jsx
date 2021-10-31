import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Slider from './slider.jsx';

class News extends Component{
    componentDidMount(){
        document.title = "Noticias | Ao Desu"
      }
    render(){
        return(
            <div className="content">
                <Slider />
            </div>
        )
    }
}

export default News;