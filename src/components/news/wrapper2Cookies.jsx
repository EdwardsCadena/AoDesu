import React, { Component } from 'react';

class WrapperCookies extends Component {
    constructor(props){
        super(props);

        this.Wrapper = this.Wrapper.bind(this);
    }

    componentDidMount(){
        this.Wrapper();
    }

    Wrapper(){
        const wrapper = document.querySelector('.wrapperTwo');

        if(localStorage.wrapper2 === 'hide'){
            wrapper.classList.add('hide');
        }else{
            wrapper.classList.remove('hide');
        }
    }

    render(){
        return <div onClick={this.Wrapper}></div>
    }
}

export default WrapperCookies;