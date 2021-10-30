import React, { Component } from 'react';

class SettingsCookies extends Component {
    constructor(props){
        super(props);

        this.Settings = this.Settings.bind(this);
    }

    componentDidMount(){
        this.Settings();
    }

    Settings(){
        const body = document.querySelector('#Body');
        const wrapper = document.querySelector('.wrapper');

        if(localStorage.performance === 'low'){
            body.classList.add('lowPerformance');
        }else{
            body.classList.remove('lowPerformance');
        }

        if(localStorage.theme === 'light'){
            body.classList.add('light');
        }else{
            body.classList.remove('light');
        }

        if(localStorage.wrapper1 === 'hide'){
            wrapper.classList.add('hide');
        }else{
            wrapper.classList.remove('hide');
        }
    }

    render(){
        return <div onClick={this.Settings}></div>
    }
}

export default SettingsCookies;