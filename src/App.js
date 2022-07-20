import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Products from './pages/Products';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Wrapper>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/Products' element={<Products />} />
          <Route path='/Product'element={<Product />} />
          <Route path='/Products/:id' element={<Product />} />
          <Route path='/Checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
background-color: white;

`
export default App

