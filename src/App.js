// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

