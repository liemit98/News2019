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

class Page_last extends Component {
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
            <li><img src={this.state.data[index].HinhAnh} style={{height: '130px', width: '190px'}} alt />
            <p><strong>{this.state.data[index].Tua}</strong></p>
            <p>{this.state.data[index+1].MoTa}</p>
            <p className="readmore"><Link to={"/tin/"+this.state.data[index].TheLoai+"/"+this.state.data[index+1]._id}>Continue Reading »</Link></p>
          </li>
          </div>
        )
    }
}

xuatTuaCuoi = (index) => {
    if(this.state.data !== null){
        return (
          <div>
            <li className="last"><img src={this.state.data[index].HinhAnh} style={{height: '130px', width: '190px'}} alt />
            <p><strong>{this.state.data[index].Tua}</strong></p>
            <p>{this.state.data[index+1].MoTa}</p>
            <p className="readmore"><Link to={"/tin/"+this.state.data[index].TheLoai+"/"+this.state.data[index].id}>Continue Reading »</Link></p>
          </li>
          </div>
        )
    }
}
    render() {
        return (
            <div className="wrapper">
  <div className="container">
    <div className="content">
      <div id="hpage_latest">
        <h2>Tin thể thao</h2>
        <ul>
          {this.xuatTua(0)}
          {this.xuatTua(1)}
          {this.xuatTuaCuoi(2)}
        </ul>
        <br className="clear" />
      </div>
    </div>
    <div className="column">
      <div className="holder"><a href="#"><img src="images/demo/300x250.gif" alt /></a></div>
      <div className="holder"><a href="#"><img src="images/demo/300x80.gif" alt /></a></div>
    </div>
    <br className="clear" />
  </div>
</div>

        );
    }
}

export default Page_last;