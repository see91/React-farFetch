import React,{Component} from 'react';
import {connect} from 'react-redux'
import action from '../../../store/action/brand'
import './index.less'
import boom from '../../../static/img/3.jpg'
import BrandSlidres from "../BrandSlidres/index";

class BrandMan extends Component{
    componentDidMount() {
        this.props.reqBrandMan();
    }
    render(){
        let arr = [];
        for (let i in this.props.brand.man.data){
            arr.push(this.props.brand.man.data[i])
        }
        return (
            <div className="brand-nan">
                <BrandSlidres/>
                <div>
                   <h3>人气设计师品牌</h3>
                   <ul>
                       {
                           arr.map((item,index)=>(
                               <li key={index}>
                                   <img src={item.url}/>
                                   <p>{item.title}</p>
                                   <span>选购全部</span>
                               </li>
                           ))
                       }
                   </ul>
               </div>
            </div>
        )
    }
}
export default connect (
    state=>state,
    action
)(BrandMan);
