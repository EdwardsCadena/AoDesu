import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Footer = () => {
    return(
        <div id="FooterCaps">
            <div className="FooterCaps">
                <img src="https://i.ibb.co/r05cjMj/AoBanner.png" className="FooterBackground" alt="Background Ao Desu" />
                <div className="FooterContainer">
                    <div className="sec aboutUs">
                        <h2>Sobre Nosotros</h2>
                        <p>
                            Solo somos un par de personas dispuestas a ofrecer un Servicio Gratuito de calidad Premium a todo aquel al que le interese. 
                        </p>
                        <ul className="sci">
                            <li>
                                <a href="https://www.facebook.com/AoDesu-Anime-Online-Desu-105044395100028/?hc_ref=ARQJ9No8lljcEshkoCwSOZ0k2FiQ8zIAVyfuCBrXrVfuN3SuJjk4JnvK7bnwNos8jT4&amp;fref=nf&amp;__xts__[0]=68.ARCtwAmkTp_CSW-HjfFMYz0iWFLqsH52MV5NYPM0Xdlj1ESvLIIU906HLPtOImKWiHpJ-V6VsKWZqF59YSjd50dJ6sdRFCnGDp6xeF_v9GDnPnSCHJsvqVET1nkEGGGsdklVKquYyXqXQmiaQ-zibY47O88MhDjkGewIxlGjbRorz-xPeVHRHOA3u8n09Er2GDerV4qGZCmATnAN4Dij-Cw1OB_Een6jeUhy0xmK3Sb9FtcswEbZMJ3HO0AXT7EXXafB2pzUOOSAFei2blWvdpYZR8yHogg0Zi6Bg1y8wXiIHeQ&amp;__tn__=kC-R" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook" title="Facebook Page" aria-hidden="true"></i>
                                    <span className="InvisibleTxt">Facebook Page</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCBdiFpAYx6mI_hJw8oLFNcQ" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-youtube" data-title="Youtube" title="Youtube Channel" aria-hidden="true"></i>
                                    <span className="InvisibleTxt">Youtube Channel</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/DesuAo" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter" title="Twitter Official" aria-hidden="true"></i>
                                    <span className="InvisibleTxt">Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.patreon.com/AoDesu" target="_blank" rel="noopener noreferrer" >
                                    <i className="fab fa-patreon" title="Patreon" aria-hidden="true"></i>
                                    <span className="InvisibleTxt">Patreon</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="sec quickLinks">
                        <h2>Enlaces rápidos</h2>
                        <ul>
                            <li><Link to="/aboutus">Quienes Somos</Link></li>
                            <li><Link to="/FAQ">FAQ</Link></li>
                            <li><Link to="/policies-and-privacy">Politicas de Privacidad</Link></li>
                            <li><Link to="/help">Ayuda</Link></li>
                            <li><Link to="/our-terms">Terminos y Condiciones</Link></li>
                            <li><Link to="/DevNotes">Notas de la versión</Link></li>
                        </ul>
                    </div>
                    <div className="sec contact">
                        <h2>Contactanos</h2>
                        <ul className="info">
                            <li>
                                <span><i className="fas fa-envelope"></i></span>
                                <p><a href="mailto:AnimeOnlineDesu@gmail.com">AnimeOnlineDesu@gmail.com</a></p>
                            </li>
                            <li>
                                <span><i className="fas fa-phone-alt"></i></span>
                                <p><a href="tel:+573213009207">+57 321 3009207</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="copyRightTxt">
                Copyright &copy; 2021 Ao Desu. Todos los derechos reservados.
            </div>
        </div>
    )
}

export default Footer;