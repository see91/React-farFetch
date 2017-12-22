import React,{Component} from 'react';
import NavLink from "react-router-dom/es/NavLink";
import './index.less';
import {connect} from 'react-redux'
import action from '../../../../store/action/home'
class HomeMain4 extends Component{
    componentDidMount() {
        this.props.reqGroom();
    }
    render(){
        return (
            <div className="home-main4-db">
                <div>特 别 为 您 推 荐
                    <NavLink exact to='/list'>
                        <h6>
                            选购全部
                            <span> ></span>
                        </h6>
                    </NavLink>
                </div>
                <ul>
                    <NavLink exact to="/list">
                       {
                            this.props.home.groom.map((item,index)=>(
                                <li key={index}>
                                    <img src={item.url}/>
                                    <p>{item.title}</p>
                                    <span>￥{item.price}</span>
                                </li>
                            ))

                        }
                    </NavLink>
                </ul>
            </div>
        )
    }
}
export default connect (
    state=>state,
    action
)(HomeMain4)