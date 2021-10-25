import React, { Component } from 'react';
import CapsZone from '../../utils/landing/capsZone';
import Animes from '../../animedb/animes.json';
import Caps from './caps.json';
import Recommendeds from '../../animedb/recommendedsAction.json';
const id = 1;

export class Anime000001Cap1 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 1;
    }
    render(){
        const Number = 0;
        return(
            <CapsZone 
                reproductorName={Animes[id].name}
                videoSrc={Caps[Number]['video-url']}
                animeUrl={Animes[id].url}
                animeName={Animes[id].name}
                capNumber={Caps[Number].cap}
                capName={Caps[Number]['cap-name']}
                recommendedSec={Recommendeds}
                CapsListModal={Caps}
                after={"cap" + (Number + 2)}
                FirstCapBtn="BtnCap1"
            />
        )
    }
}

export class Anime000001Cap2 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 2;
    }
    render(){
        const Number = 1;
        return(
            <CapsZone 
                reproductorName={Animes[id].name}
                videoSrc={Caps[Number]['video-url']}
                animeUrl={Animes[id].url}
                animeName={Animes[id].name}
                capNumber={Caps[Number].cap}
                capName={Caps[Number]['cap-name']}
                recommendedSec={Recommendeds}
                CapsListModal={Caps}
                before={"cap" + Number}
                after={"cap" + (Number + 2)}
            />
        )
    }
}
export class Anime000001Cap3 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 3;
    }
    render(){
        const Number = 2;
        return(
            <CapsZone 
                reproductorName={Animes[id].name}
                videoSrc={Caps[Number]['video-url']}
                animeUrl={Animes[id].url}
                animeName={Animes[id].name}
                capNumber={Caps[Number].cap}
                capName={Caps[Number]['cap-name']}
                recommendedSec={Recommendeds}
                CapsListModal={Caps}
                before={"cap" + Number}
                after={"cap" + (Number + 2)}
            />
        )
    }
}
export class Anime000001Cap4 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 4;
    }
    render(){
        const Number = 3;
        return(
            <CapsZone 
                reproductorName={Animes[id].name}
                videoSrc={Caps[Number]['video-url']}
                animeUrl={Animes[id].url}
                animeName={Animes[id].name}
                capNumber={Caps[Number].cap}
                capName={Caps[Number]['cap-name']}
                recommendedSec={Recommendeds}
                CapsListModal={Caps}
                before={"cap" + Number}
                after={"cap" + (Number + 2)}
            />
        )
    }
}
export class Anime000001Cap5 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 5;
    }
    render(){
        const Number = 4;
        return(
            <CapsZone 
                reproductorName={Animes[id].name}
                videoSrc={Caps[Number]['video-url']}
                animeUrl={Animes[id].url}
                animeName={Animes[id].name}
                capNumber={Caps[Number].cap}
                capName={Caps[Number]['cap-name']}
                recommendedSec={Recommendeds}
                CapsListModal={Caps}
                before={"cap" + Number}
                after={"cap" + (Number + 2)}
            />
        )
    }
}
export class Anime000001Cap6 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 6;
    }
    render(){
        const Number = 5;
        return(
            <CapsZone 
                reproductorName={Animes[id].name}
                videoSrc={Caps[Number]['video-url']}
                animeUrl={Animes[id].url}
                animeName={Animes[id].name}
                capNumber={Caps[Number].cap}
                capName={Caps[Number]['cap-name']}
                recommendedSec={Recommendeds}
                CapsListModal={Caps}
                before={"cap" + Number}
                after={"cap" + (Number + 2)}
            />
        )
    }
}
export class Anime000001Cap7 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 7;
    }
    render(){
        const Number = 6;
        return(
            <CapsZone 
                reproductorName={Animes[id].name}
                videoSrc={Caps[Number]['video-url']}
                animeUrl={Animes[id].url}
                animeName={Animes[id].name}
                capNumber={Caps[Number].cap}
                capName={Caps[Number]['cap-name']}
                recommendedSec={Recommendeds}
                CapsListModal={Caps}
                before={"cap" + Number}
                after={"cap" + (Number + 2)}
            />
        )
    }
}
export class Anime000001Cap8 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 8;
    }
    render(){
        const Number = 7;
        return(
            <CapsZone 
                reproductorName={Animes[id].name}
                videoSrc={Caps[Number]['video-url']}
                animeUrl={Animes[id].url}
                animeName={Animes[id].name}
                capNumber={Caps[Number].cap}
                capName={Caps[Number]['cap-name']}
                recommendedSec={Recommendeds}
                CapsListModal={Caps}
                before={"cap" + Number}
                after={"cap" + (Number + 2)}
            />
        )
    }
}
export class Anime000001Cap9 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 9;
    }
    render(){
        const Number = 8;
        return(
            <CapsZone 
                reproductorName={Animes[id].name}
                videoSrc={Caps[Number]['video-url']}
                animeUrl={Animes[id].url}
                animeName={Animes[id].name}
                capNumber={Caps[Number].cap}
                capName={Caps[Number]['cap-name']}
                recommendedSec={Recommendeds}
                CapsListModal={Caps}
                before={"cap" + Number}
                after={"cap" + (Number + 2)}
            />
        )
    }
}
export class Anime000001Cap10 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 10;
    }
    render(){
        const Number = 9;
        return(
            <CapsZone 
                reproductorName={Animes[id].name}
                videoSrc={Caps[Number]['video-url']}
                animeUrl={Animes[id].url}
                animeName={Animes[id].name}
                capNumber={Caps[Number].cap}
                capName={Caps[Number]['cap-name']}
                recommendedSec={Recommendeds}
                CapsListModal={Caps}
                before={"cap" + Number}
                after={"cap" + (Number + 2)}
            />
        )
    }
}
export class Anime000001Cap11 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 11;
    }
    render(){
        const Number = 10;
        return(
            <CapsZone 
                reproductorName={Animes[id].name}
                videoSrc={Caps[Number]['video-url']}
                animeUrl={Animes[id].url}
                animeName={Animes[id].name}
                capNumber={Caps[Number].cap}
                capName={Caps[Number]['cap-name']}
                recommendedSec={Recommendeds}
                CapsListModal={Caps}
                before={"cap" + Number}
                after={"cap" + (Number + 2)}
            />
        )
    }
}
export class Anime000001Cap12 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 12;
    }
    render(){
        const Number = 11;
        return(
            <CapsZone 
                reproductorName={Animes[id].name}
                videoSrc={Caps[Number]['video-url']}
                animeUrl={Animes[id].url}
                animeName={Animes[id].name}
                capNumber={Caps[Number].cap}
                capName={Caps[Number]['cap-name']}
                recommendedSec={Recommendeds}
                CapsListModal={Caps}
                before={"cap" + Number}
                after={"cap" + (Number + 2)}
                DiscoverBtn="LastCap"
                LastCapBtn="Last"
            />
        )
    }
}