import * as React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll';
import ModalAdds from '../modals/NoAdds';

import { useAuth0 } from '@auth0/auth0-react';

import { Profile } from '../profile/Profile';
import { ProfileDefault } from '../profile/ProfileDefault';
import Button from '@mui/material/Button';
import './index.css';
import SearchBar from '../../utils/search/searchBar';
import Data from '../../animedb/data.json';

 // Desplamiento hasta el borde superior de la página
 function onClickUp(){
    scroll.scrollToTop();
 }

function btnVisibilityToggle() {
  const btnVisibility = document.querySelector('.btn-visibility');
  const menuVisibility = document.querySelector('#HeaderMovil');
  const headerPopUp = document.querySelector('#HeaderPopUp');
  const containerContent = document.querySelector('#ContainerContent');

  //console.log('Funciona');
  btnVisibility.classList.toggle('showMovil');
  menuVisibility.classList.toggle('showMovil');
  headerPopUp.classList.toggle('showMovil');
  containerContent.classList.toggle('showMovil');
}

function btnVisibilityRemove() {
  const btnVisibility = document.querySelector('.btn-visibility');
  const menuVisibility = document.querySelector('#HeaderMovil');
  const headerPopUp = document.querySelector('#HeaderPopUp');
  const containerContent = document.querySelector('#ContainerContent');

  //console.log('Funciona');
  btnVisibility.classList.remove('showMovil');
  menuVisibility.classList.remove('showMovil');
  headerPopUp.classList.remove('showMovil');
  containerContent.classList.remove('showMovil');
}

function ToggleUserVisibility() {
    const ProfileHeader = document.querySelector('.profile-header-cellphone');

    ProfileHeader.classList.toggle('Show');
}

function ProfileData(){
    const {isAuthenticated} = useAuth0();
        return (
        <div>
            <div className="profile-header-cellphone" onClick={ToggleUserVisibility}>
                <div className="App-header-cellphone">
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
            <div className="ao-popUp-profile" onClick={ToggleUserVisibility}></div>
        </div>
    );
}

function ShowbtnSearch(){
    const SearchContainer = document.querySelector('.search-container');
    SearchContainer.classList.toggle('Show');
}
function RemoveBtnSearch(){
    const SearchContainer = document.querySelector('.search-container');
    SearchContainer.classList.remove('Show');
}

const HeaderMovil = () => {
    return(
    <div className="HeaderMovil">
        <div className="header-PopUp" id="HeaderPopUp" onClick={btnVisibilityRemove}></div>
        <div className="header">
            <div className="header-top">
                <div className="btnHeaderToggleStyles">
                <Button variant="contained" className="btn-visibility" onClick={btnVisibilityToggle}>
                    <i className="fas fa-bars hide"></i>
                    <i className="fas fa-times show"></i>
                </Button>
                </div>
                <Link to="/" className="logoHeader AoDesuLogo">
                    <span className="AoTxtH">Ao <span className="DesuTxtH">Desu</span></span>
                </Link>
                <div className="settings-button-mv">
                    <Link to="/settings">
                        <i className="fas fa-cog"></i>
                    </Link>
                </div>
                <ProfileData />
            </div>
            <div className="search-container">
                <button onClick={ShowbtnSearch}><i className="fas fa-search"></i></button>
                <SearchBar placeholder="¿Qué vas a ver?..." data={Data} />
                <button onClick={RemoveBtnSearch} className="closeSearch"><i className="fas fa-times"></i></button>
            </div>
            <div className="closeSearchClicker" onClick={RemoveBtnSearch}></div>
            <div className="header-menu" id="HeaderMovil">
                <nav>
                    <ul>
                        <li className="up" onClick={onClickUp()}><Link to='/' onClick={btnVisibilityRemove}><i className="fas fa-home"></i><span>Principal</span></Link></li>
                        <li><Link to='/emision' onClick={btnVisibilityRemove}><i className="fas fa-clock"></i><span>En Emisión</span></Link></li>
                        <li><button className="btnSearchMovil" onClick={ShowbtnSearch}><i className="fas fa-search"></i></button></li>
                        <li><Link to='/directory' onClick={btnVisibilityRemove}><i className="fas fa-stream"></i><span>Directorio</span></Link></li>
                        <li><Link to='/AboutUs' onClick={btnVisibilityRemove}><i className="fas fa-address-card"></i><span>Nosotros</span></Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        <ModalAdds />
    </div>
    )
}

export default HeaderMovil;
