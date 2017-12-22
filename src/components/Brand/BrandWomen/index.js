import React,{Component} from 'react';
import boom from '../../../static/img/3.jpg'
import {connect} from 'react-redux'
import action from '../../../store/action/brand'
import {Link} from 'react-router-dom'
import './index.less'
import BrandSlidres from "../BrandSlidres/index";
class BrandWomen extends Component{
    componentDidMount() {
        this.props.reqBrandWomen();
    }
    render(){
        let arr = [];
        for (let i in this.props.brand.woman.data){
            arr.push(this.props.brand.woman.data[i])
        }
        return (
            <div className="brand-nv">
                <BrandSlidres/>
                <h3>人气设计师品牌</h3>
                <ul>
                    {
                        arr.map((item,index)=>(
                            <Link to='/list' key={index}>
                                <li>
                                    <img src={item.url}/>
                                    <p>{item.title}</p>
                                    <span>选购全部</span>
                                </li>
                            </Link>
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
)(BrandWomen);