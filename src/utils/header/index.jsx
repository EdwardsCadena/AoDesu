import * as React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll';
import CookiesHeaderBoolean from './CookiesHeader';
import ModalAdds from '../modals/NoAdds';

import { useAuth0 } from '@auth0/auth0-react';

import { Profile } from '../profile/Profile';
import { ProfileDefault } from '../profile/ProfileDefault';
import Button from '@mui/material/Button';
import './index.css';
import SearchBar from '../../utils/search/searchBar';
import Data from '../../animedb/data.json';
import Settings from '../../components/settings/index.jsx'

 // Desplamiento hasta el borde superior de la página
 function onClickUp(){
    scroll.scrollToTop();
 }

 function ToggleMenuStyle() {
    const headerMenu = document.querySelector('.header-menu');

     if(headerMenu.classList.contains('show')){
        localStorage.menuStyle = 'false';
     }else{
        localStorage.menuStyle = 'true';
     }
 }

function btnVisibilityToggle() {
  const btnVisibility = document.querySelector('.btn-visibility');
  const menuVisibility = document.querySelector('.header-menu');
  const headerPopUp = document.querySelector('.header-PopUp');
  const containerContent = document.querySelector('#ContainerContent');
  const FooterCaps = document.querySelector('#FooterCaps');

  //console.log('Funciona');
  btnVisibility.classList.toggle('show');
  menuVisibility.classList.toggle('show');
  headerPopUp.classList.toggle('show');
  containerContent.classList.toggle('show');
  FooterCaps.classList.toggle('show');
}

function btnVisibilityRemove() {
  const btnVisibility = document.querySelector('.btn-visibility');
  const menuVisibility = document.querySelector('.header-menu');
  const headerPopUp = document.querySelector('.header-PopUp');
  const containerContent = document.querySelector('#ContainerContent');

  //console.log('Funciona');
  btnVisibility.classList.remove('show');
  menuVisibility.classList.remove('show');
  headerPopUp.classList.remove('show');
  containerContent.classList.remove('show');
}

function ToggleUserVisibility() {
    const ProfileHeader = document.querySelector('.profile-header');

    ProfileHeader.classList.toggle('Show');
}

function ProfileData(){
    const {isAuthenticated} = useAuth0();
        return (
        <div className="profile-header" onClick={ToggleUserVisibility}>
            <div className="App-header">
                {isAuthenticated ? <>
                        <Profile />
                        </>
                        : 
                        <>
                        <ProfileDefault />
                        </>
                    }
            </div>
        </div>
    );
}

function showSettings(){
    const Settings = document.querySelector('.settings-modal');
    const Content = document.querySelector('.content');

    Content.classList.add('showSettings');

    Settings.classList.add('show');
}

const Header = () => {
    return(
    <>
    <Settings />
    <div className="HeaderPC">
        <CookiesHeaderBoolean id="HeaderStyles" />
        <div className="header-PopUp" onClick={btnVisibilityRemove}></div>
        <div className="header">
            <div style={HeaderAoDesu} className="header-top">
                <div className="btnHeaderToggleStyles" onClick={ToggleMenuStyle}>
                <Button variant="contained" className="btn-visibility" id="BtnVisibilityPC" onClick={btnVisibilityToggle}>
                    <i className="fas fa-bars hide"></i>
                    <i className="fas fa-times show"></i>
                </Button>
                </div>
                <Link to="/" className="logoHeader AoDesuLogo">
                    <span className="AoTxtH">Ao <span className="DesuTxtH">Desu</span></span>
                </Link>
            </div>
            <SearchBar placeholder="¿Qué vas a ver?..." data={Data} />
            <div className="header-menu" id="HeaderMenuPC">
                <nav>
                    <ul>
                        <li className="up" onClick={onClickUp()}><Link to='/'><i className="fas fa-home"></i><span>Principal</span></Link></li>
                        <li><Link to='/emision'><i className="fas fa-clock"></i><span>En Emisión</span></Link></li>
                        <li><Link to='/directory'><i className="fas fa-stream"></i><span>Directorio</span></Link></li>
                        <li><Link to='/about-us'><i className="fas fa-address-card"></i><span>Nosotros</span></Link></li>
                        <li><button onClick={showSettings}><i className="fas fa-cog"></i><span>Ajustes</span></button></li>
                    </ul>
                </nav>
            </div>
            <ProfileData />
        </div>
        <ModalAdds />
    </div>
    </>
    )
}

const HeaderAoDesu = {
    width: '100%',
    height: '60px',
    background: '#141d26fa',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'sticky',
    top: '0',
    boxShadow: '0 -7px 20px rgba(0,0,0,.7',
    zIndex: '1'
}

export default Header;
