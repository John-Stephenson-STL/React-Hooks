import React, { Component } from 'react';
import {
   Route,
   NavLink,
   HashRouter
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Docs from './components/Docs';
import Document from './components/Document';

function App() {
  return (
    <HashRouter>
       <div className="App">
         <header className="App-header">
            <div>
               <h1>JCompMan-STL SPA</h1>
               <ul className="header">
                  <li><NavLink exact to="/">Home</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li><NavLink to="/docs">Documents</NavLink></li>
                  <li><NavLink to="/document">Documentation</NavLink></li>
               </ul>
               <div className="content">
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/docs" component={Docs} />
                  <Route path="/document" component={Document} />
               </div>
            </div>
         </header>
       </div>
    </HashRouter>
  );
}

export default App;