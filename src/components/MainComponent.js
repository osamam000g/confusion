import React , {Component} from 'react';
import {Navbar , NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';

class  Main extends Component {
    constructor(props){
        super(props);
    }
    render(){
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
  
}

export default Main;
