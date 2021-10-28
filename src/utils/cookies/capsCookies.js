import React, { Component } from 'react';

class CapsCookies extends Component {
    constructor(props){
        super(props);

        this.Caps = this.Caps.bind(this);
    }

    componentDidMount(){
        this.Caps();
    }

    Caps(props){     
        const id = props.animeId;
        const caps = props.cap;  

        const identi = document.getElementById("a" + props.id.toString() + props.cap);
        
        if(localStorage.getItem(id.toString() + "Cap" + caps) === 'true'){
            identi.classList.remove('visto');
        }else{
            identi.classList.add('visto');
        }
    }
    render(){
        return <div onClick={this.Caps}></div>
    }
}

export default CapsCookies;