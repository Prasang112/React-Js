
import './App.css';
import { Component } from 'react';
import Header from './Header';
import ProductList from './ProductList';

class App extends Component {
  render() {
    return <>
    <Header/>
   <ProductList/>
    </>
  }
}

export default App;
