import React, { Component } from 'react';

class ModalCookies extends Component {
    constructor(props) {
        super(props);

        this.CookiesModals = this.CookiesModals.bind(this);
    }

    componentDidMount() {
        this.CookiesModals();
    }

    CookiesModals() {
        const body = document.getElementById('Body');
        
        if(localStorage.getItem('ModalAddsInfo') === 'true'){
            body.classList.add('AddsModalNoVisible');
        } else  {
            body.classList.remove('AddsModalNoVisible');
        }

    }

    render() {
        return <div onClick={this.CookiesModals}></div>
    }
}

export default ModalCookies;