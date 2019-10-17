import React from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";


export class Todo extends React.Component {


    render() {
        return (  
            <CardContent>
                <Typography gutterBottom variant="h5" component="h1">
                        {this.props.text}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="h2">
                        {" Date " + this.props.dueDate.split("T")[0]}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="h2">
                        {" Status " + this.props.status}
                </Typography>
            
                <Typography variant="body2" color="textSecondary" component="h2">
                        {" Email resposible " + this.props.email}
                </Typography>
            </CardContent>
        );
    }

}