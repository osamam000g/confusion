import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const GetComments = ({comments})=> {
    return(
    comments.map((comment , index)=>{
        return(
            <CardTitle key={comment.id}> 
            <p> _ author:  {comment.author} </p>
            <p>  date:  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
            <p>  Comment:  {comment.comment} </p>
          
            </CardTitle>
        )
    })
    )
}

const DishDetails = (props) => {   
        if(props.dishDetails != null){
            return(
            <div className="container">
                <div className="row">

                <div  className="col-12 col-md-5 m-1">
                    <Card key={props.dishDetails.id}>
                    <CardImg width="100%" src={props.dishDetails.image} alt={props.dishDetails.name} />
                    
                        <CardBody>
                        <CardTitle>{props.dishDetails.name}</CardTitle>
                        <CardText>{props.dishDetails.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div  className="col-12 col-md-5 m-1">
                   <GetComments comments= {props.dishDetails.comments}/>                  
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
export default DishDetails;