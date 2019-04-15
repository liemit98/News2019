import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.css';
import Home from './MainPage/Home'
import News from './MainPage/News'
import News_detail from './MainPage/News_detail'
import Header from './MainPage/General/Header';
import Footer from './MainPage/General/Footer';
class App extends Component {
  render() {
    return (
      <Router>
      
      <div className="App">
      <Header/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/tin/:loai/:id" component={News_detail}/>
      <Route path="/:id" component={News} />  
      </Switch>
      <Footer/>
      </div>
      
      </Router>
    );
  }
}

export default App;
