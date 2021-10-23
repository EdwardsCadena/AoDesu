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


const AoDesuApp = () => 
<Router>
    <Switch>
        <AppRoute path="/" exact component={Home} layout={GeneralLayout}></AppRoute>
        
        <AppRoute component={Err404} layout={GeneralLayout}></AppRoute>    
    </Switch>
</Router>

export default AoDesuApp;
