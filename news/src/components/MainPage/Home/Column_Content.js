import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const threeItem = () => {
    return fetch('/api/threeItem',{
        method: 'GET',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    })
    .then((response) => {
        return response.json();
    }).catch((err)=> console.log(err));   
}

class Column_Content extends Component {
    constructor(props){
        super(props);

        this.state = {
          data:null
        };
    }
    componentWillMount() {
        if(this.state.data === null){
            threeItem().then((data)=>{
                this.setState({data:data})
            })
        }
    }
    xuatTua = (index) => {
        if(this.state.data !== null){
            return (
                <p><strong><Link to={"/tin/"+this.state.data[index].TheLoai+"/"+this.state.data[index].id}>{this.state.data[index].Tua}</Link></strong><br></br>{this.state.data[index].MoTa}</p>
            )
        }

    }
    xuatAnh = (index) => {
        if(this.state.data !== null){
            return this.state.data[index].HinhAnh
        }
    }
    render() {
        return (
            <div className="column">
                        <ul className="latestnews">
                            <li><img src="images/demo/anhdep6.gif" style={{height: '100px', width: '100px'}}  alt />
                            {this.xuatTua(0)}
                            </li>
                            <li><img src={this.xuatAnh(1)} style={{height: '100px', width:'100px'}} alt />
                            {this.xuatTua(1)}
                            </li>
                            <li className="last"><img src={this.xuatAnh(2)} style={{height: '100px', width:'100px'}} alt />
                            {this.xuatTua(2)}
                            </li>
                        </ul>
                        </div>
        );
    }
}

export default Column_Content;