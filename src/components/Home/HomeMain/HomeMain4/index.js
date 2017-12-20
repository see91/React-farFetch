import React,{Component} from 'react';
import './index.less';
import {connect} from 'react-redux'
import action from '../../../../store/action/home'
class HomeMain4 extends Component{
  componentDidMount() {
    this.props.reqGroom();
  }
    render(){
        return (
            <div className="home-main4">
                <div>特 别 为 您 推 荐<h6>选购全部<a> ></a></h6></div>
                <ul>
                  {
                      this.props.home.groom.map((item,index)=>(
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
)(HomeMain4)