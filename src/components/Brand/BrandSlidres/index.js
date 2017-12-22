import React,{Component} from 'react';
import boom from '../../../static/img/3.jpg'
import {connect} from 'react-redux'
import action from '../../../store/action/brand'
import './index.less'
import ReactIScroll from 'react-iscroll'
let iScroll = require('iscroll');
class BrandSlidres extends Component{
    componentDidMount() {
        this.props.reqBrandSwiper();
    }
    render(){
        let style = {
            height:'200px',width:'300px'
        }
        let arr = [];
        for (let i in this.props.brand.swiper){
            arr.push(this.props.brand.swiper[i])
        }
        return (
            <div className="brand-sldres">
                <h3>最近浏览的设计师品牌</h3>
                <ReactIScroll iScroll={iScroll}
                              options={{mouseWheel:false,
                                  scrollX:true,
                                  momentum:true,
                                  freeScroll:true,
                                  disablePointer:true,
                                  disableTouch:false,
                                  disableMouse:false}}>
                    <div style={{width:'550%'}}>
                        <ul id="brand-slidre">
                            {
                                arr.map((item,index)=>(
                                    <li key={index}>
                                        <img style={style} src={item.url}/>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </ReactIScroll>
            </div>
        )
    }
}
export default connect (
    state=>state,
    action
)(BrandSlidres);