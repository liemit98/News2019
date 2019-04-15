import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const list = () => {
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

class Adblock extends Component {

  constructor(props){
    super(props);

    this.state = {
      data:null
    };
}
componentWillMount() {
    if(this.state.data === null){
        list().then((data)=>{
            console.log(data)
            this.setState({data:data})
        })
    }
}


xuatTua = (index) => {
    if(this.state.data !== null){
        return (
          <div>
          <div className="fl_left">
          <h2><Link to={"/"+this.state.data[index].TheLoai}>{this.state.data[index].TheLoai}</Link></h2>
          <img src={this.state.data[index].HinhAnh} style={{height: '100px', width: '100px'}} alt />
          <p><strong><Link to={"/tin/"+this.state.data[index].TheLoai+"/"+this.state.data[index].id}>{this.state.data[index].Tua}</Link></strong></p>
          <p>{this.state.data[index].MoTa}</p>
        </div>
        <div className="fl_right">
          <h2><Link to={this.state.data[index+1].TheLoai}>{this.state.data[index+1].TheLoai}</Link></h2>
          <img src={this.state.data[index+1].HinhAnh} style={{height: '100px', width: '100px'}} alt />
          <p><strong><Link to={"/tin/"+this.state.data[index+1].TheLoai+"/"+this.state.data[index+1].id}>{this.state.data[index+1].Tua}</Link></strong></p>
          <p>{this.state.data[index+1].MoTa}</p>
        </div>
        <br className="clear" />
        </div>
        )
    }
}

xuatMoTa = (index) => {
    if(this.state.data !== null){
        return (
            <p>{this.state.data[index].MoTa}<br /><a href="#">Xem thêm»</a></p>
        )
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
    {this.xuatTua(0)}
    {this.xuatTua(2)}
  </div>
</div>

        );
    }
}

export default Adblock;