import React, { Component } from 'react';

import './index.css';

class CookiesHeaderBoolean extends Component {
    constructor(props) {
        super(props);
        
        this.CookiesHeader = this.CookiesHeader.bind(this);
    }

    componentDidMount() {
        this.CookiesHeader();
    }

    CookiesHeader() {
       const headerMenu = document.querySelector('.header-menu');
       
       const btnVisibility = document.querySelector('#BtnVisibilityPC');
       const menuVisibility = document.querySelector('#HeaderMenuPC');
       const containerContent = document.querySelector('#ContainerContent');
       const headerPopUp = document.querySelector('.header-PopUp');
       const FooterCaps = document.querySelector('#FooterCaps');
   
        if(localStorage.menuStyle === "false"){
           headerMenu.classList.add('show');
           btnVisibility.classList.add('show');
           menuVisibility.classList.add('show');
           containerContent.classList.add('show');
           headerPopUp.classList.add('show');
        }else{
           headerMenu.classList.remove('show');  
           btnVisibility.classList.remove('show');
           menuVisibility.classList.remove('show');
           containerContent.classList.remove('show');
           headerPopUp.classList.remove('show');
           FooterCaps.classList.add('show');
        }
    }

    render() {
        return <div onClick={this.CookiesHeader}></div>
    }
}

export default CookiesHeaderBoolean;