import React from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import AppRoute from './AppRoute';

// Layouts
import GeneralLayout from '../layouts/general/index';

// Components / Views
import Home from '../components/home/index.jsx';
import Err404 from '../components/404/index';

// Anime Page
import Anime000000 from '../animes/000000/index';
    //
import Anime000001 from '../animes/000001/index';
    //
import Anime000002 from '../animes/000002/index';
    //
import Anime000003 from '../animes/000003/index';
    //
import Anime000004 from '../animes/000004/index';
    //
import Anime000005 from '../animes/000005/index';
    //
import Anime000006 from '../animes/000006/index';
    //
import Anime000007 from '../animes/000007/index';
    //
import Anime000008 from '../animes/000008/index';

const AoDesuApp = () => 
<Router>
    <Switch>
        <AppRoute path="/" exact component={Home} layout={GeneralLayout}></AppRoute>
        
        <AppRoute path="/kimetsu-no-yaiba" exact component={Anime000000} layout={GeneralLayout}></AppRoute>
        <AppRoute path="/ijiranaide-nagatoro-san" exact component={Anime000001} layout={GeneralLayout}></AppRoute>
        <AppRoute path="/keijo" exact component={Anime000002} layout={GeneralLayout}></AppRoute>
        <AppRoute path="/jibaku-shounen-hanako-kun" exact component={Anime000003} layout={GeneralLayout}></AppRoute>
        <AppRoute path="/the-idolmasters-cinderella-girls" exact component={Anime000004} layout={GeneralLayout}></AppRoute>
        <AppRoute path="/tonikaku-kawaii" exact component={Anime000005} layout={GeneralLayout}></AppRoute>
        <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai" exact component={Anime000006} layout={GeneralLayout}></AppRoute>
        <AppRoute path="/bokutachi-wa-benkyou-ga-dekinai-2" exact component={Anime000007} layout={GeneralLayout}></AppRoute>
        <AppRoute path="/neon-genesis-evangelion" exact component={Anime000008} layout={GeneralLayout}></AppRoute>

        <AppRoute component={Err404} layout={GeneralLayout}></AppRoute>    
    </Switch>
</Router>

export default AoDesuApp;
