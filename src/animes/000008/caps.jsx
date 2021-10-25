import React, { Component } from 'react';
import CapsZone from '../../utils/landing/capsZone';
import Animes from '../../animedb/animes.json';
import Caps from './caps.json';
import Recommendeds from '../../animedb/recommendedsAction.json';
const id = 8;

export class Anime000008Cap1 extends Component {
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

export class Anime000008Cap2 extends Component {
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
export class Anime000008Cap3 extends Component {
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
export class Anime000008Cap4 extends Component {
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
export class Anime000008Cap5 extends Component {
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
export class Anime000008Cap6 extends Component {
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
export class Anime000008Cap7 extends Component {
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
export class Anime000008Cap8 extends Component {
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
export class Anime000008Cap9 extends Component {
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
export class Anime000008Cap10 extends Component {
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
export class Anime000008Cap11 extends Component {
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
export class Anime000008Cap12 extends Component {
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
            />
        )
    }
}
export class Anime000008Cap13 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 13;
    }
    render(){
        const Number = 12;
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
export class Anime000008Cap14 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 14;
    }
    render(){
        const Number = 13;
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
export class Anime000008Cap15 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 15;
    }
    render(){
        const Number = 14;
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
export class Anime000008Cap16 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 16;
    }
    render(){
        const Number = 15;
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
export class Anime000008Cap17 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 17;
    }
    render(){
        const Number = 16;
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
export class Anime000008Cap18 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 18;
    }
    render(){
        const Number = 17;
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
export class Anime000008Cap19 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 19;
    }
    render(){
        const Number = 18;
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
export class Anime000008Cap20 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 20;
    }
    render(){
        const Number = 19;
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
export class Anime000008Cap21 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 21;
    }
    render(){
        const Number = 20;
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
export class Anime000008Cap22 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 22;
    }
    render(){
        const Number = 21;
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
export class Anime000008Cap23 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 23;
    }
    render(){
        const Number = 22;
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
export class Anime000008Cap24 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 24;
    }
    render(){
        const Number = 23;
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
export class Anime000008Cap25 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 25;
    }
    render(){
        const Number = 24;
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
export class Anime000008Cap26 extends Component {
    componentDidMount(){
        document.title = Animes[id].name + " Cap " + 26;
    }
    render(){
        const Number = 25;
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