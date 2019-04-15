import React, { Component } from 'react';
import Mini_post from './Mini_post.js'
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

class Content_Post extends Component {
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
    
   
    xuatMiniPost = () => {
        if(this.state.data != null){
            console.log("Xuat Mini Post : ");
            console.log(this.state.data);
            return this.state.data.map((value,key)=>(<Mini_post key={key} id={key} theloai={value.TheLoai} ma={value.id} tua={value.Tua} mota={value.MoTa} hinhanh={value.HinhAnh}/>))
        }
    }


    render() {
        return (
            <div className="wrapper">
                <div id="adblock">
                    <div className="fl_left"><a href="#"><img src="images/demo/468x60.gif" alt /></a></div>
                    <div className="fl_right"><a href="#"><img src="images/demo/468x60.gif" alt /></a></div>
                    <br className="clear" />
                </div>
                <div id="hpage_cats">  
                {this.xuatMiniPost()}
                <br className="clear" />
                </div>
            </div>

        );
    }
}

export default Content_Post;