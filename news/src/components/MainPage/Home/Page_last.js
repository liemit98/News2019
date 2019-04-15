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
      <div className="holder"><a href="#"><img src="http://sunplazagrandworld.com/wp-content/themes/vht/img/gallery/pic-2.jpg" style={{height: '250px', width: '300px'}} alt /></a></div>
      <div className="holder"><a href="#"><img src="data:image/png;base64,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" style={{height: '80px', width: '300px'}} alt /></a></div>
    </div>
    <br className="clear" />
  </div>
</div>

        );
    }
}

export default Page_last;