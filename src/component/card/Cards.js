import React from 'react';
import { Todo } from './Todo'
import './Cards.css'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";


const obj = {
    'Jan': '01',
    'Feb': '02',
    'Mar': '03',
    'Apr': '04',
    'May': '05',
    'Jun': '06',
    'Jul': '07',
    'Aug': '08',
    'Sep': '09',
    'Oct': '10',
    'Nov': '11',
    'Dec': '02',
}

export class Cards extends React.Component {


    Eq(month){
        let res = Object.entries(obj).map( ([key, value]) =>{
            if(key === month){
                return value;
            }
        })
        let result;
        res.forEach(element => {
            if(element !== undefined){
                result =  element;
            }
        });
        return result.toString();
    }
    
    render() {
        console.log(this.props.filter)
        const listTodo = this.props.tdList.map((td, id) => {
            if (this.props.filter !== undefined && (this.props.filter.name !== '' ||
                this.props.filter.status !== '' || this.props.filter.dueDate !== null )) {
                let x = this.props.filter.dueDate.toString()
                const newDate = x.split(" ")[3]+"-"+this.Eq(x.split(" ")[1])+"-"+x.split(" ")[2];
                if (td.email.includes(this.props.filter.name) ||
                    td.status.includes(this.props.filter.status) || td.dueDate.split("T")[0] == newDate) {
                    return (<div key={id}>
                        <Card>
                            <CardActionArea>
                                <Todo email={td.email} status={td.status} text={td.text} priority={td.priority} dueDate={td.dueDate} ></Todo>
                            </CardActionArea>
                        </Card>
                        <br></br>
                    </div>);
                }

            } else {
                return (<div key={id}>
                    <Card>
                        <CardActionArea>
                            <Todo email={td.email} status={td.status} text={td.text} priority={td.priority} dueDate={td.dueDate} ></Todo>
                        </CardActionArea>
                    </Card>
                    <br></br>
                </div>);
            }
        });
        return (
            <div>
                {listTodo}
            </div>

        );
    }


}