import React, { Component } from 'react';
import Header from './General/Header';
import Links from './General/Links';
import Content_News from './News/Content_News';
import Column_News from './News/Column_News';
import Footer from './General/Footer';

const list = (id) => {
        return fetch('/api/tin/'+id,{
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

class News_detail extends Component {
    constructor(props){
        super(props);

        this.state = {
          data:null
        };
    }
    componentWillMount() {
            list(this.props.match.params.id).then((data)=>{
                
                this.setState({data:data})
            })
    }
    xuatContent_news = () => {
        if(this.state.data != null){
            return this.state.data.map((value,key)=>(<Content_News key={key} id={key} theloai={value.TheLoai} ma={value._id} tua={value.Tua} mota={value.MoTa} hinhanh={value.HinhAnh} noidung={value.NoiDung}/>))
        }
    }
    render() {
        
        console.log(this.props.match.params.loai);
        console.log(this.state.data);
        
        
        return (
            <div>       
                <div className="wrapper">
                    <div className="container">
                        {this.xuatContent_news()}
                        <Column_News loai={this.props.match.params.loai}/>
                        <br className="clear" />
                    </div>
                </div>
                <div className="wrapper">
                    <div id="adblock">
                        <br className="clear" />
                    </div>
                </div>
            </div>
        );
    }
}

export default News_detail;