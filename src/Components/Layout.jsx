import React, { useState } from 'react';
import {Outlet, Link} from 'react-router-dom';
import travel from '../Assets/travel-logo.png';
import './Layout.css';
// {/* {name: 'Home', icon: "fa-sharp fa-solid fa-house", cname: "nav-links", url:'/'}, */}
export default function Layout() {
    const menu = [
    {name: 'HOME', icon: "fa-solid fa-solid fa-house", cname: "nav-links", url:'/home'},
    {name: 'ABOUT', icon: "fa-solid fa-address-card", cname: "nav-links", url:'/about'},
      {name: 'PRODUCT', icon: "fa-solid fa-cart-shopping", cname: "nav-links", url:'/product'}, 
      {name: 'REVIEW', icon: "fa-solid fa-star", cname: "nav-links", url:'/review'},
      {name: 'CONTACT', icon: "fa-solid fa-address-card", cname: "nav-links", url:'/contact'},
      {name: 'SIGNUP', icon: "fa-solid fa-user-plus", cname: "nav-links-mobile", url:'/signup'},
      {name: 'SIGNIN', icon: "fa-solid fa-right-to-bracket", cname: "nav-links-mobile", url:'/signin'}];
      const [istate, setIstate] = useState({clicked: false});
      const handleClick = () =>
      {
        setIstate({clicked: !istate.clicked});
      }
    return (
      <>
      <nav className='navbarItems'>
        <h1 className='navbar-logo'>FARHAN FARAN</h1><img src={travel} alt='View here'/>
        <div className='menu-icons' onClick={handleClick}>
          <i className={istate.clicked ? 'fas fa-times' : 'fas fa-bars '}></i>
        </div>
        <ul className={istate.clicked ? 'navbar-menu active' : 'navbar-menu'}>
            {
                menu.map((item, index) =>
                {
                    return (
                        <li key={index} className={item.cname}><Link to={item.url}><i className={item.icon}>&nbsp;&nbsp;{item.name}</i></Link></li>
                    )
                }
            )}
            <button>Sign Up</button>
            <button>Sign IN</button>
        </ul>
      </nav>
      <Outlet>
      </Outlet>
      </>
    )
}
