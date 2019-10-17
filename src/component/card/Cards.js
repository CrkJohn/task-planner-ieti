import React from 'react';
import { Todo } from './Todo'
import './Cards.css'

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import uuid from "uuid";


export class Cards extends React.Component {
  


    render() {
        console.log("request "  + this.props.tdList)
        const listTodo = this.props.tdList.map((td,id) =>{
               
        if(this.props.filter!==undefined  && (this.props.filter.name !== '' || 
            this.props.filter.status !== '')){
                console.log(td.email.includes(this.props.filter.email) +" " + this.props.filter.email + "  " + td.email );
                if (td.email.includes(this.props.filter.name) || 
                    td.status.includes( this.props.filter.status)) {

                    return (<div key={id}>
                        <Card>
                            <CardActionArea>
                                <Todo email={td.email} status = {td.status} text = {td.text} priority = {td.priority} dueDate = {td.dueDate} ></Todo>  
                            </CardActionArea>
                        </Card>
                        <br></br>
                    </div>);
                }

            }else{
                return(<div key={id}>
                    <Card>
                        <CardActionArea>
                            <Todo email={td.email} status = {td.status} text = {td.text} priority = {td.priority} dueDate = {td.dueDate} ></Todo>  
                        </CardActionArea>
                    </Card>
                    <br></br>
                </div>);
            }
        });
        
        return (
            <ul>{listTodo}</ul>

        );
    }


}