import React, { Component } from 'react'
import{Switch,Route, Router}from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Default from './components/Default';
import Cart from './components/Cart';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Modal from'./components/Modal';

 class App extends Component {
  render() {
    return (
      <React.Fragment>
     <Navbar/>
     <Switch>
      <Route exact path="/" component={ProductList}/>
     
      <Route path="/details" component={Details}/>
      <Route path="/cart" component={Cart}/>
     
      <Route component={Default}/>
      </Switch>
      <Modal/>
     
      </React.Fragment>
    );
  }
}
export default App;
