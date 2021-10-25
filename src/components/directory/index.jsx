import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';


import Animes from '../../animedb/animes.json'; 
import Movies from '../../animedb/movies.json';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ span: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  export default function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
    return (
        <div className="content">
        <Box>
            <AppBar position="static">
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
            >
                <Tab label="Animes" {...a11yProps(0)} />
                <Tab label="Peliculas" {...a11yProps(1)} />
                <Tab label="OVAs" {...a11yProps(2)} />
            </Tabs>
            </AppBar>
            <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
            >
            <TabPanel value={value} index={0} dir={theme.direction}>
                <div className="directoryElementsContainer">
                    <AllAnimes />
                    <NoMoreYet />
                </div>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <div className="directoryElementsContainer">
                    <AllMovies />
                    <NoMoreYet />
                </div>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                <NoMoreYet />
            </TabPanel>
            </SwipeableViews>
        </Box>
    </div>
    );
  }

class NoMoreYet extends Component {
  render() {
    return (
      <div className="NoMoreYet">
        <CircularProgress />
        <i className="far fa-tired"></i>
        <p>Por ahora no hay mas contenido.</p>
      </div>
    )
  }
}

class AllAnimes extends Component{
  componentDidMount(){
    document.title = "Tu Directorio Anime";
  }
    state = {
        AllAnimes: Animes
    }
    render() {
        return this.state.AllAnimes.map(e => 
            <div className="AnimeContainer" key={e.id}>
                <div className="AAnimesImg">
                    <div className="CapsCounter"><i className="far fa-play-circle"></i> {e.CapsN} Caps</div>
                    <img src={e['wide-cover-anime']} alt={e.name} />
                </div>
                <div className="AAnimesData">
                    <h2 className="AAnimesTitle">{e.name}</h2>
                </div>
                <Link to={e.url}></Link>
            </div>
        )
    }
}

class AllMovies extends Component {
    state = {
        AllMovies: Movies
    }
    render() {
        return this.state.AllMovies.map(e => 
            <div className="AMovieContainer" key={e.id}>
                <div className="AMoviesImg">
                    <img src={e['cover-anime']} alt={e.name}/>
                </div>
                <div className="AMoviesData">
                    <h2 className="AMoviesTitle">{e.name}</h2>
                </div>
                <Link to={e.url}></Link>
            </div>    
        )
    }
}
