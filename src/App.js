import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import dv from '../src/Assets/dogview.jpeg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Product from './Components/Product';
import Review from './Components/Review';
import Contact from './Components/Contact';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Nopage from './Components/Nopage';
import Layout from './Components/Layout';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
// import "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
// import "https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
// <script>var Alert = ReactBootstrap.Alert;</script>

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
    <React.Fragment>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="review" element={<Review/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="signin" element={<Signin/>}/>
        <Route path = "*" element = {<Nopage/>}/>
        </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
