import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import News from '../../../animedb/newsContent.json';
import './index.css';

function NewsContent(){
    return(
        <div className="news-container">
            {News.map(e => 
                <div className={"news-content " + e.class} key={e.id}>
                    <div className="img-news">
                        <img src={e.img} alt={e.title} title={e.title} />
                        <p className="news-date"><i className="far fa-clock"></i> {e.date}</p>
                        <Link to={e.url} className={"type-p " + e.type}>{e.type}</Link>
                    </div>
                    <div className="txt-news">
                        <h2>{e.title}</h2>
                    </div>
                    <Link className="news-link" to={e.url} title={e.title}></Link>
                </div>    
            )}
        </div>
    )
}

export default NewsContent;