import React, { Component } from 'react';

class AboutUs extends Component {
    componentDidMount(){
        document.title = "Sobre Nosotros";
    }

    render() {
        return (
            <div className="content">
                <div className="content-padd FAQ-content-container">
                    <div className="AboutUsContainer">
                        <div className="AboutUsTxt">
                            <h1>Quienes Somos</h1>
                            <p>Somos un grupo de aficionados al anime en busca de ofrecer un servicio gratuito Mejor a lo normal. Nuestra meta es brindar contenido a todo fanatico del Anime, sin importar en que situación se encuentren, ya sea para olvidar todos sus problemas viendo el Opening o simplemente viviendo otra vida, con diferentes emociones y sensaciones en cada capitulo.</p>
                        </div>
                        <div className="AboutUs">
                            <div className="teamCard">
                                <div className="cardImg">
                                    <img src="https://i.pinimg.com/originals/36/d3/6f/36d36f6273a45217235265e5281acd05.jpg" alt="Cheryt" />
                                </div>
                                <div className="cardName">
                                    <span className="name">Cheryt</span>
                                    <span className="ocupation">CEO / Owner</span>
                                </div>
                                <div className="cardLinks">
                                    <a href="https://github.com/CherytUwU" target="_blank" rel="noopener noreferrer"className="GithubHover"><i className="fab fa-github"></i></a>
                                    <a href="https://twitter.com/CherytUwU" target="_blank" rel="noopener noreferrer"className="TwitterHover"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/Cheryt-110029623883252" target="_blank" rel="noopener noreferrer"className="FacebookHover"><i className="fab fa-facebook"></i></a>
                                    <a href="https://www.youtube.com/c/cheryt" target="_blank" rel="noopener noreferrer"className="YoutubeHover"><i className="fab fa-youtube"></i></a>
                                    <a href="https://www.instagram.com/cheryt.art/" target="_blank" rel="noopener noreferrer"className="InstagramHover"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>

                            <div className="teamCard">
                                <div className="cardImg">
                                    <img src="https://i.ibb.co/N9YSpkW/715156.png" alt="Json" />
                                </div>
                                <div className="cardName">
                                    <span className="name">Json</span>
                                    <span className="ocupation">Colaborador</span>
                                </div>
                                <div className="cardLinks">
                                    <a href="https://github.com/mononeitTY" target="_blank" rel="noopener noreferrer"className="GithubHover"><i className="fab fa-github"></i></a>
                                    <a href="https://twitter.com/mononeit1" target="_blank" rel="noopener noreferrer"className="TwitterHover"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.youtube.com/channel/UCrL6v58h-3-iavQ7LJN46kA" target="_blank" rel="noopener noreferrer" className="YoutubeHover"><i className="fab fa-youtube"></i></a>
                                    <a href="https://www.instagram.com/mononeitor300" target="_blank" rel="noopener noreferrer"className="InstagramHover"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>

                            <div className="teamCard">
                                <div className="cardImg">
                                    <img src="https://i.ibb.co/jTZds1X/juan.jpg" alt="Juan" />
                                </div>
                                <div className="cardName">
                                    <span className="name">Juan</span>
                                    <span className="ocupation">Colaborador</span>
                                </div>
                                <div className="cardLinks">
                                    <a href="https://twitter.com/JuansitoOuo" target="_blank" rel="noopener noreferrer" className="TwitterHover"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.youtube.com/channel/UCrsgSlg1RgI0vv72dX3X92g" target="_blank" rel="noopener noreferrer" className="YoutubeHover"><i className="fab fa-youtube"></i></a> 
                                </div>
                            </div>

                            <div className="teamCard">
                                <div className="cardImg">
                                    <img src="https://i.ibb.co/NmZMc1P/cris.png" alt="Cheryt" />
                                </div>
                                <div className="cardName">
                                    <span className="name">Cris</span>
                                    <span className="ocupation">Colaborador</span>
                                </div>
                                <div className="cardLinks">
                                    <a href="https://github.com/CherytUwU" target="_blank" rel="noopener noreferrer"className="GithubHover"><i className="fab fa-github"></i></a>
                                    <a href="https://twitter.com/CherytUwU" target="_blank" rel="noopener noreferrer"className="TwitterHover"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/Cheryt-110029623883252" target="_blank" rel="noopener noreferrer"className="FacebookHover"><i className="fab fa-facebook"></i></a>
                                    <a href="https://www.youtube.com/c/cheryt" target="_blank" rel="noopener noreferrer"className="YoutubeHover"><i className="fab fa-youtube"></i></a>
                                    <a href="https://www.instagram.com/cheryt.art/" target="_blank" rel="noopener noreferrer"className="InstagramHover"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>

                            <div className="teamCard" style={{border: "1px solid #00FFFF20"}}>
                                <div className="cardImg">
                                    <img src="https://yt3.ggpht.com/a/AATXAJwUWW28lV9-w6sZY2mrdO-2wlJl0FuAdZlmV7qpTg=s900-c-k-c0xffffffff-no-rj-mo" alt="Sofi" />
                                </div>
                                <div className="cardName">
                                    <span className="name">Sofi</span>
                                    <span className="ocupation">Apoyo</span>
                                </div>
                                <div className="cardLinks" style={{display: 'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
                                    <p>Te Extrañare</p><i className="fas fa-heart"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;