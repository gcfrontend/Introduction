import React, { Component } from 'react';
import Header from './header';
import Main from './main';
import Nav from "./nav";
import Footer from './footer';

export default class Wrap extends Component {
  render() {
    return (
     <div>
        <Header/>
        <Main/>
        <Nav/>
        <Footer/>
     </div>
    );
  }
}



// //file A

// var a = 5;
// // export default var b = 7;

// export var d = 8;
// export var e = 10;

// //file B

// import {d} from '.\A'; 