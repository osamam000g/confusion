import React , {Component} from 'react';
import {Navbar , NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetails from './DishDetails';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';

class  Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedDish:null
         };
    }
    onDishSelect = (dishId) => {
        this.setState({selectedDish: dishId});
     }

    render(){
        return (
            <div className="App">
                  <Header />
                  <Menu dishes={DISHES}
                  onClick={(dishId)=>this.onDishSelect(dishId)} />
                 
                      <DishDetails dishDetails={DISHES.filter((dish)=>dish.id === this.state.selectedDish)[0]} />
               
               <Footer />

            </div>
          );
    }
  
}

export default Main;
