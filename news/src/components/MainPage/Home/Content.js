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
    else if(loai == "DuLich"){
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
class Content extends Component {
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
                <h2>{this.state.data[index].Tua}</h2>
            )
        }
    }
    
    xuatMoTa = (index) => {
        if(this.state.data !== null){
            console.log("Content");
            console.log(this.props.match);
            
            
            return (
                <p>{this.state.data[index].MoTa}<br /><Link to={"/tin/"+this.state.data[index].TheLoai+"/"+this.state.data[index].id}>Xem them</Link></p>
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
            <div className="content">
                        <div id="featured_slide">
                            <ul id="featurednews">
                            <li><img src={this.xuatAnh(0)} style={{height: '100px', width: '100px'}} alt />
                                <div className="panel-overlay">
                                {this.xuatTua(0)}
                                {this.xuatMoTa(0)}
                                </div>
                            </li>
                            <li><img src={this.xuatAnh(1)} style={{height: '100px', width: '100px'}} alt />
                                <div className="panel-overlay">
                                {this.xuatTua(1)}
                                {this.xuatMoTa(1)}
                                </div>
                            </li>
                            <li><img src={this.xuatAnh(2)} style={{height: '100px', width: '100px'}} alt />
                                <div className="panel-overlay">
                                {this.xuatTua(2)}
                                {this.xuatMoTa(2)}
                                </div>
                            </li>
                            <li><img src={this.xuatAnh(3)} style={{height: '100px', width: '100px'}} alt />
                                <div className="panel-overlay">
                                {this.xuatTua(3)}
                                {this.xuatMoTa(3)}
                                </div>
                            </li>
                            <li><img src={this.xuatAnh(4)} style={{height: '100px', width: '100px'}} alt />
                                <div className="panel-overlay">
                                {this.xuatTua(4)}
                                {this.xuatMoTa(4)}
                                </div>
                            </li>
                            </ul>
                        </div>

                        </div>
        );
    }
}

export default Content;