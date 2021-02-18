import React,{Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Movie from './component/Movie';
import Home from './routes/home';
import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About';
import Nav from './component/Nav';
import Detail from './routes/Detail';




function App(){
  return (
    <HashRouter>
      <Nav />
      <Route path='/home'>
        <h1>home</h1>
      </Route>
      <Route path='/' component={Home} exact={true}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/Detail' component={Detail}></Route>
    </HashRouter>
  );
}



export default App;
