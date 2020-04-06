import React from 'react';
import './App.css';
import {Navbar , NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';

function App() {
  return (
    <div className="App">
           <Navbar color="primary" dark >
             <div className="container">
               <NavbarBrand href="/">
                 Confusion
               </NavbarBrand>
             </div>

          </Navbar>
          <Menu dishes={DISHES} />
    </div>
  );
}

export default App;
