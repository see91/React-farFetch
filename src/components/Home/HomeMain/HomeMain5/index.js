import React,{Component} from 'react';
import NavLink from "react-router-dom/es/NavLink";
import './index.less'
import {connect} from 'react-redux'
import action from '../../../../store/action/home'
class HomeMain5 extends Component{
  componentDidMount() {
    this.props.reqList1();
    this.props.reqList2();
    this.props.reqList3();
  }
    render(){
        return (
            <div>
              <div className="hehe-db"></div>
                <div className="home-main5-db">
                    <div className="nin-db">圣诞巧礼 - #GIVEITLIVEIT</div>
                    <ul>
                      <NavLink exact to="/list">

                      {
                        this.props.home.list1.map((item,index)=>(
                          <li key={index}>
                            <img src={item.url}/>
                            <p>{item.title}</p>
                            <span>￥{item.price}</span>
                          </li>
                        ))
                      }
                      </NavLink>
                    </ul>
                    <div className="hao-db">
                      <NavLink exact to="/list">
                        <button>选购全部</button>
                      </NavLink>
                    </div>
                </div>
            <div className="home-main5-db">
                <div className="nin-db">运动鞋殿堂 - #GIVEITLIVEIT</div>
                <ul>
                  <NavLink exact to="/list">

                  {

                    this.props.home.list2.map((item,index)=>(
                      <li key={index}>
                        <img src={item.url}/>
                        <p>{item.title}</p>
                        <span>￥{item.price}</span>
                      </li>
                    ))
                  }
                  </NavLink>
                </ul>
                <div className="hao-db">
                  <NavLink exact to="/list">
                    <button>选购全部</button>
                  </NavLink>
                </div>
            </div>
              <div className="home-main5-db">
                <div className="nin-db">新季热品</div>
                <ul>
                  <NavLink exact to="/list">

                  {
                    this.props.home.list1.map((item,index)=>(
                      <li key={index}>
                        <img src={item.url}/>
                        <p>{item.title}</p>
                        <span>￥{item.price}</span>
                      </li>
                    ))
                  }
                  </NavLink>
                </ul>
                <div className="hao-db">
                  <NavLink exact to="/list">
                    <button>选购全部</button>
                  </NavLink>
                </div>
              </div>
              <div className="home-main5-db">
                <div className="nin-db">折扣精选</div>
                <ul>
                  <NavLink exact to="/list">

                  {
                    this.props.home.list2.map((item,index)=>(
                      <li key={index}>
                        <img src={item.url}/>
                        <p>{item.title}</p>
                        <span>￥{item.price}</span>
                      </li>
                    ))
                  }
                  </NavLink>
                </ul>
                <div className="hao-db">
                  <NavLink exact to="/list">
                    <button>选购全部</button>
                  </NavLink>
                </div>
              </div>
              <div className="home-main5-db">
                <div className="nin-db">折扣精选</div>
                <ul>
                  <NavLink exact to="/list">

                    {
                      this.props.home.list3.map((item,index)=>(
                        <li key={index}>
                          <img src={item.url}/>
                          <p>{item.title}</p>
                          <span>￥{item.price}</span>
                        </li>
                      ))
                    }
                  </NavLink>
                </ul>
                <div className="hao-db">
                  <NavLink exact to="/list">
                    <button>选购全部</button>
                  </NavLink>
                </div>
              </div>
            </div>
        )
    }
}
export default connect (
  state=>state,
  action
)(HomeMain5)