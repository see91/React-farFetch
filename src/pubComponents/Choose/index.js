import React,{Component} from 'react';
import './index.less';
import {connect} from 'react-redux'
import action from '../../store/action/home'

 class Choose extends Component{
   componentDidMount() {
this.props.reqChoose()
   }
    render(){
      return (
            <div className="home-main">
                <div>特别为您推荐的卫衣及针织衫<h6>选购全部<a> ></a></h6></div>
              <ul>
                {
                  this.props.home.choose.map((item,index)=>(
                    <li key={index}>
                      <img src={item.url}/>
                      <p>{item.title}</p>
                      <span>{item.price}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
        )
    }
}


export default connect (
  state=>state,
  action
)(Choose)