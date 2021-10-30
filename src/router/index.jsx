import React from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import AppRoute from './AppRoute';

// Layouts
import GeneralLayout from '../layouts/general/index';
import ReproductorLayout from '../layouts/reproductor/index';

// Components / Views
import Home from '../components/home/index.jsx';
import News from '../components/news';
import Directory from '../components/directory/index.jsx'
import AboutUs from '../components/about-us/index.jsx';
import FAQ from '../components/FAQ';
import Err404 from '../components/404/index';

// Anime Page
import Anime000000 from '../animes/000000/index';
import { Anime000000Cap1, Anime000000Cap2, Anime000000Cap3, Anime000000Cap4, Anime000000Cap5, Anime000000Cap6, Anime000000Cap7, Anime000000Cap8, Anime000000Cap9, Anime000000Cap10, Anime000000Cap11, Anime000000Cap12, Anime000000Cap13, Anime000000Cap14, Anime000000Cap15, Anime000000Cap16, Anime000000Cap17, Anime000000Cap18, Anime000000Cap19, Anime000000Cap20, Anime000000Cap21, Anime000000Cap22, Anime000000Cap23, Anime000000Cap24, Anime000000Cap25, Anime000000Cap26 } from '../animes/000000/caps.jsx';
    //
import Anime000001 from '../animes/000001/index';
import { Anime000001Cap1, Anime000001Cap2, Anime000001Cap3, Anime000001Cap4, Anime000001Cap5, Anime000001Cap6, Anime000001Cap7, Anime000001Cap8, Anime000001Cap9, Anime000001Cap10, Anime000001Cap11, Anime000001Cap12 } from '../animes/000001/caps.jsx'
    //
import Anime000002 from '../animes/000002/index';
import { Anime000002Cap1, Anime000002Cap2, Anime000002Cap3, Anime000002Cap4, Anime000002Cap5, Anime000002Cap6, Anime000002Cap7, Anime000002Cap8, Anime000002Cap9, Anime000002Cap10, Anime000002Cap11, Anime000002Cap12 } from '../animes/000002/caps.jsx'
    //
import Anime000003 from '../animes/000003/index';
import { Anime000003Cap1, Anime000003Cap2, Anime000003Cap3, Anime000003Cap4, Anime000003Cap5, Anime000003Cap6, Anime000003Cap7, Anime000003Cap8, Anime000003Cap9, Anime000003Cap10, Anime000003Cap11, Anime000003Cap12 } from '../animes/000003/caps.jsx'
    //
import Anime000004 from '../animes/000004/index';
import { Anime000004Cap1, Anime000004Cap2, Anime000004Cap3, Anime000004Cap4, Anime000004Cap5, Anime000004Cap6, Anime000004Cap7, Anime000004Cap8, Anime000004Cap9, Anime000004Cap10, Anime000004Cap11, Anime000004Cap12, Anime000004Cap13 } from '../animes/000004/caps.jsx';
    //
import Anime000005 from '../animes/000005/index';
import { Anime000005Cap1, Anime000005Cap2, Anime000005Cap3, Anime000005Cap4, Anime000005Cap5, Anime000005Cap6, Anime000005Cap7, Anime000005Cap8, Anime000005Cap9, Anime000005Cap10, Anime000005Cap11, Anime000005Cap12 } from '../animes/000005/caps.jsx'
    //
import Anime000006 from '../animes/000006/index';
import { Anime000006Cap1, Anime000006Cap2, Anime000006Cap3, Anime000006Cap4, Anime000006Cap5, Anime000006Cap6, Anime000006Cap7, Anime000006Cap8, Anime000006Cap9, Anime000006Cap10, Anime000006Cap11, Anime000006Cap12, Anime000006Cap13 } from '../animes/000006/caps.jsx'
    //
import Anime000007 from '../animes/000007/index';
import { Anime000007Cap1, Anime000007Cap2, Anime000007Cap3, Anime000007Cap4, Anime000007Cap5, Anime000007Cap6, Anime000007Cap7, Anime000007Cap8, Anime000007Cap9, Anime000007Cap10, Anime000007Cap11, Anime000007Cap12, Anime000007Cap13 } from '../animes/000007/caps.jsx'
    //
import Anime000008 from '../animes/000008/index';
import { Anime000008Cap1, Anime000008Cap2, Anime000008Cap3, Anime000008Cap4, Anime000008Cap5, Anime000008Cap6, Anime000008Cap7, Anime000008Cap8, Anime000008Cap9, Anime000008Cap10, Anime000008Cap11, Anime000008Cap12, Anime000008Cap13, Anime000008Cap14, Anime000008Cap15, Anime000008Cap16, Anime000008Cap17, Anime000008Cap18, Anime000008Cap19, Anime000008Cap20, Anime000008Cap21, Anime000008Cap22, Anime000008Cap23, Anime000008Cap24, Anime000008Cap25, Anime000008Cap26 } from '../animes/000008/caps.jsx';
    //
import Anime000009 from '../animes/000009';
    //
import Anime000010 from '../animes/000010';
import { Anime000010Cap1, Anime000010Cap2, Anime000010Cap3, Anime000010Cap4, Anime000010Cap5, Anime000010Cap6, Anime000010Cap7, Anime000010Cap8, Anime000010Cap9, Anime000010Cap10, Anime000010Cap11, Anime000010Cap12, Anime000010Cap13, Anime000010Cap14, } from '../animes/000010/caps.jsx';
const AoDesuApp = () => 
<Router>
    <Switch>
        <AppRoute path="/" exact component={Home} layout={GeneralLayout}></AppRoute>
        <AppRoute path="/news" exact component={News} layout={GeneralLayout}></AppRoute>
        <AppRoute path="/directory" exact component={Directory} layout={GeneralLayout}></AppRoute>
        <AppRoute path="/about-us" exact component={AboutUs} layout={GeneralLayout}></AppRoute>
        <AppRoute path='/FAQ' exact component={FAQ} layout={GeneralLayout}></AppRoute>
        
        <AppRoute path="/kimetsu-no-yaiba" exact component={Anime000000} layout={GeneralLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap1" exact component={Anime000000Cap1} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap2" exact component={Anime000000Cap2} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap3" exact component={Anime000000Cap3} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap4" exact component={Anime000000Cap4} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap5" exact component={Anime000000Cap5} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap6" exact component={Anime000000Cap6} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap7" exact component={Anime000000Cap7} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap8" exact component={Anime000000Cap8} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap9" exact component={Anime000000Cap9} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap10" exact component={Anime000000Cap10} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap11" exact component={Anime000000Cap11} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap12" exact component={Anime000000Cap12} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap13" exact component={Anime000000Cap13} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap14" exact component={Anime000000Cap14} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap15" exact component={Anime000000Cap15} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap16" exact component={Anime000000Cap16} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap17" exact component={Anime000000Cap17} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap18" exact component={Anime000000Cap18} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap19" exact component={Anime000000Cap19} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap20" exact component={Anime000000Cap20} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap21" exact component={Anime000000Cap21} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap22" exact component={Anime000000Cap22} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap23" exact component={Anime000000Cap23} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap24" exact component={Anime000000Cap24} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap25" exact component={Anime000000Cap25} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/kimetsu-no-yaiba/cap26" exact component={Anime000000Cap26} layout={ReproductorLayout}></AppRoute>
        
        <AppRoute path="/ijiranaide-nagatoro-san" exact component={Anime000001} layout={GeneralLayout}></AppRoute>
            <AppRoute path="/ijiranaide-nagatoro-san/cap1" exact component={Anime000001Cap1} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/ijiranaide-nagatoro-san/cap2" exact component={Anime000001Cap2} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/ijiranaide-nagatoro-san/cap3" exact component={Anime000001Cap3} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/ijiranaide-nagatoro-san/cap4" exact component={Anime000001Cap4} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/ijiranaide-nagatoro-san/cap5" exact component={Anime000001Cap5} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/ijiranaide-nagatoro-san/cap6" exact component={Anime000001Cap6} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/ijiranaide-nagatoro-san/cap7" exact component={Anime000001Cap7} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/ijiranaide-nagatoro-san/cap8" exact component={Anime000001Cap8} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/ijiranaide-nagatoro-san/cap9" exact component={Anime000001Cap9} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/ijiranaide-nagatoro-san/cap10" exact component={Anime000001Cap10} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/ijiranaide-nagatoro-san/cap11" exact component={Anime000001Cap11} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/ijiranaide-nagatoro-san/cap12" exact component={Anime000001Cap12} layout={ReproductorLayout}></AppRoute>
        
        <AppRoute path="/keijo" exact component={Anime000002} layout={GeneralLayout}></AppRoute>
            <AppRoute path="/keijo/cap1" exact component={Anime000002Cap1} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/keijo/cap2" exact component={Anime000002Cap2} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/keijo/cap3" exact component={Anime000002Cap3} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/keijo/cap4" exact component={Anime000002Cap4} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/keijo/cap5" exact component={Anime000002Cap5} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/keijo/cap6" exact component={Anime000002Cap6} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/keijo/cap7" exact component={Anime000002Cap7} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/keijo/cap8" exact component={Anime000002Cap8} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/keijo/cap9" exact component={Anime000002Cap9} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/keijo/cap10" exact component={Anime000002Cap10} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/keijo/cap11" exact component={Anime000002Cap11} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/keijo/cap12" exact component={Anime000002Cap12} layout={ReproductorLayout}></AppRoute>    
        

        <AppRoute path="/jibaku-shounen-hanako-kun" exact component={Anime000003} layout={GeneralLayout}></AppRoute>
            <AppRoute path="/jibaku-shounen-hanako-kun/cap1" exact component={Anime000003Cap1} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/jibaku-shounen-hanako-kun/cap2" exact component={Anime000003Cap2} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/jibaku-shounen-hanako-kun/cap3" exact component={Anime000003Cap3} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/jibaku-shounen-hanako-kun/cap4" exact component={Anime000003Cap4} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/jibaku-shounen-hanako-kun/cap5" exact component={Anime000003Cap5} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/jibaku-shounen-hanako-kun/cap6" exact component={Anime000003Cap6} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/jibaku-shounen-hanako-kun/cap7" exact component={Anime000003Cap7} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/jibaku-shounen-hanako-kun/cap8" exact component={Anime000003Cap8} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/jibaku-shounen-hanako-kun/cap9" exact component={Anime000003Cap9} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/jibaku-shounen-hanako-kun/cap10" exact component={Anime000003Cap10} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/jibaku-shounen-hanako-kun/cap11" exact component={Anime000003Cap11} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/jibaku-shounen-hanako-kun/cap12" exact component={Anime000003Cap12} layout={ReproductorLayout}></AppRoute>

        <AppRoute path="/the-idolmasters-cinderella-girls" exact component={Anime000004} layout={GeneralLayout}></AppRoute>
            <AppRoute path="/the-idolmasters-cinderella-girls/cap1" exact component={Anime000004Cap1} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/the-idolmasters-cinderella-girls/cap2" exact component={Anime000004Cap2} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/the-idolmasters-cinderella-girls/cap3" exact component={Anime000004Cap3} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/the-idolmasters-cinderella-girls/cap4" exact component={Anime000004Cap4} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/the-idolmasters-cinderella-girls/cap5" exact component={Anime000004Cap5} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/the-idolmasters-cinderella-girls/cap6" exact component={Anime000004Cap6} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/the-idolmasters-cinderella-girls/cap7" exact component={Anime000004Cap7} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/the-idolmasters-cinderella-girls/cap8" exact component={Anime000004Cap8} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/the-idolmasters-cinderella-girls/cap9" exact component={Anime000004Cap9} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/the-idolmasters-cinderella-girls/cap10" exact component={Anime000004Cap10} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/the-idolmasters-cinderella-girls/cap11" exact component={Anime000004Cap11} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/the-idolmasters-cinderella-girls/cap12" exact component={Anime000004Cap12} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/the-idolmasters-cinderella-girls/cap13" exact component={Anime000004Cap13} layout={ReproductorLayout}></AppRoute>
        
        <AppRoute path="/tonikaku-kawaii" exact component={Anime000005} layout={GeneralLayout}></AppRoute>
            <AppRoute path="/tonikaku-kawaii/cap1" exact component={Anime000005Cap1} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/tonikaku-kawaii/cap2" exact component={Anime000005Cap2} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/tonikaku-kawaii/cap3" exact component={Anime000005Cap3} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/tonikaku-kawaii/cap4" exact component={Anime000005Cap4} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/tonikaku-kawaii/cap5" exact component={Anime000005Cap5} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/tonikaku-kawaii/cap6" exact component={Anime000005Cap6} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/tonikaku-kawaii/cap7" exact component={Anime000005Cap7} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/tonikaku-kawaii/cap8" exact component={Anime000005Cap8} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/tonikaku-kawaii/cap9" exact component={Anime000005Cap9} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/tonikaku-kawaii/cap10" exact component={Anime000005Cap10} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/tonikaku-kawaii/cap11" exact component={Anime000005Cap11} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/tonikaku-kawaii/cap12" exact component={Anime000005Cap12} layout={ReproductorLayout}></AppRoute>
        
        <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai" exact component={Anime000006} layout={GeneralLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai/cap1" exact component={Anime000006Cap1} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai/cap2" exact component={Anime000006Cap2} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai/cap3" exact component={Anime000006Cap3} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai/cap4" exact component={Anime000006Cap4} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai/cap5" exact component={Anime000006Cap5} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai/cap6" exact component={Anime000006Cap6} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai/cap7" exact component={Anime000006Cap7} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai/cap8" exact component={Anime000006Cap8} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai/cap9" exact component={Anime000006Cap9} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai/cap10" exact component={Anime000006Cap10} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai/cap11" exact component={Anime000006Cap11} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai/cap12" exact component={Anime000006Cap12} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai/cap13" exact component={Anime000006Cap13} layout={ReproductorLayout}></AppRoute>

        <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai-2" exact component={Anime000007} layout={GeneralLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai-2/cap1" exact component={Anime000007Cap1} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai-2/cap2" exact component={Anime000007Cap2} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai-2/cap3" exact component={Anime000007Cap3} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai-2/cap4" exact component={Anime000007Cap4} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai-2/cap5" exact component={Anime000007Cap5} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai-2/cap6" exact component={Anime000007Cap6} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai-2/cap7" exact component={Anime000007Cap7} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai-2/cap8" exact component={Anime000007Cap8} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai-2/cap9" exact component={Anime000007Cap9} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai-2/cap10" exact component={Anime000007Cap10} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai-2/cap11" exact component={Anime000007Cap11} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai-2/cap12" exact component={Anime000007Cap12} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai-2/cap13" exact component={Anime000007Cap13} layout={ReproductorLayout}></AppRoute>

        <AppRoute path="/neon-genesis-evangelion" exact component={Anime000008} layout={GeneralLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap1" exact component={Anime000008Cap1} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap2" exact component={Anime000008Cap2} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap3" exact component={Anime000008Cap3} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap4" exact component={Anime000008Cap4} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap5" exact component={Anime000008Cap5} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap6" exact component={Anime000008Cap6} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap7" exact component={Anime000008Cap7} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap8" exact component={Anime000008Cap8} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap9" exact component={Anime000008Cap9} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap10" exact component={Anime000008Cap10} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap11" exact component={Anime000008Cap11} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap12" exact component={Anime000008Cap12} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap13" exact component={Anime000008Cap13} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap14" exact component={Anime000008Cap14} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap15" exact component={Anime000008Cap15} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap16" exact component={Anime000008Cap16} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap17" exact component={Anime000008Cap17} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap18" exact component={Anime000008Cap18} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap19" exact component={Anime000008Cap19} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap20" exact component={Anime000008Cap20} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap21" exact component={Anime000008Cap21} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap22" exact component={Anime000008Cap22} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap23" exact component={Anime000008Cap23} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap24" exact component={Anime000008Cap24} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap25" exact component={Anime000008Cap25} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/neon-genesis-evangelion/cap26" exact component={Anime000008Cap26} layout={ReproductorLayout}></AppRoute>

        <AppRoute path="/lucky-star" exact component={Anime000009} layout={GeneralLayout}></AppRoute>
        
        <AppRoute path="/k-on!" exact component={Anime000010} layout={GeneralLayout}></AppRoute>
            <AppRoute path="/k-on!/cap1" exact component={Anime000010Cap1} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/k-on!/cap2" exact component={Anime000010Cap2} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/k-on!/cap3" exact component={Anime000010Cap3} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/k-on!/cap4" exact component={Anime000010Cap4} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/k-on!/cap5" exact component={Anime000010Cap5} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/k-on!/cap6" exact component={Anime000010Cap6} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/k-on!/cap7" exact component={Anime000010Cap7} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/k-on!/cap8" exact component={Anime000010Cap8} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/k-on!/cap9" exact component={Anime000010Cap9} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/k-on!/cap10" exact component={Anime000010Cap10} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/k-on!/cap11" exact component={Anime000010Cap11} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/k-on!/cap12" exact component={Anime000010Cap12} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/k-on!/cap13" exact component={Anime000010Cap13} layout={ReproductorLayout}></AppRoute>
            <AppRoute path="/k-on!/cap14" exact component={Anime000010Cap14} layout={ReproductorLayout}></AppRoute>
        
        <AppRoute component={Err404} layout={GeneralLayout}></AppRoute>    
    </Switch>
</Router>

export default AoDesuApp;
