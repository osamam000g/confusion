import React , {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetails extends Component {
    constructor(props){
        super(props);
       this.state = {
           i:0
       }
    }
    getThisDetails = (comments)=> {
        return(
        comments.map((comment , index)=>{
            return(
                <CardTitle key={comment.id}> 
                <p> _ author:  {comment.author} </p>
                <p>  date:  {comment.date} </p>
                <p>  Comment:  {comment.comment} </p>
              
                </CardTitle>
            )
        })
        )
    }
    render(){
        if(this.props.dishDetails != null){
            return(
            <div className="">
                <div className="row">

                <div  className="col-12 col-md-5 m-1">
                    <Card key={this.props.dishDetails.id}>
                    <CardImg width="100%" src={this.props.dishDetails.image} alt={this.props.dishDetails.name} />
                    
                        <CardBody>
                        <CardTitle>{this.props.dishDetails.name}</CardTitle>
                        <CardText>{this.props.dishDetails.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div  className="col-12 col-md-5 m-1">
                   
                        {this.getThisDetails(this.props.dishDetails.comments)}
                  
                </div>



                </div>
               </div>
            )
    }else{
        return(
            <div>
               No Dish Selected
            </div>
        )
    }
    }
}
export default DishDetails;