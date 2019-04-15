import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const list = (loai) => {
    if(loai == "ThoiSu"){
        console.log(loai+"có loại rồi!!!!");
        return fetch('/api/thoisu',{
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
    else if(loai == "PhapLuat"){
        console.log(loai+ "có loại này luôn!!!!");
        return fetch('/api/phapluat',{
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
    else if(loai == "TheThao"){
        return fetch('/api/dulich',{
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
    else{
        return fetch('/api/list',{
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
}
class Column_News extends Component {

    constructor(props){
        super(props);

        this.state = {
          data:null
        };
    }
    componentWillMount() {
            list(this.props.loai).then((data)=>{
                
                this.setState({data:data})
            })
    }
    
    xuatTua = (index) => {
        if(this.state.data !== null){
            return (
                <div id="featured">
                <ul>
                <li>
                    <h2>{this.state.data[index].Tua}</h2>
                    <p className="imgholder"><img src={this.state.data[index].HinhAnh} style={{height: '100px', width: '250px'}} alt /></p>
                    <p>{this.state.data[index].MoTa}</p>
                    <p className="readmore"><Link to={"/tin/"+this.state.data[index].TheLoai+"/"+this.state.data[index].id}>Xem them</Link></p>
                </li>
                </ul>
            </div>
            )
        }
    }

    render() {
        return (
            <div className="column">
            {this.xuatTua(2)}
            {this.xuatTua(3)}
            {this.xuatTua(4)}
            </div>

        );
    }
}

export default Column_News;