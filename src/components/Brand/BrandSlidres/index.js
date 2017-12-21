import React,{Component} from 'react';
import boom from '../../../static/img/3.jpg'
import './index.less'
import ReactIScroll from 'react-iscroll'
let iScroll = require('iscroll');
export default class BrandSlidres extends Component{
    render(){
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
                    <div style={{width:'400%'}}>
                        <ul id="brand-slidre">
                            <li>
                                <img style={{height:'200px',width:'300px'}} src={boom} alt=""/>
                            </li>
                            <li>
                                <img style={{height:'200px',width:'300px'}} src={boom} alt=""/>
                            </li>
                            <li>
                                <img style={{height:'200px',width:'300px'}} src={boom} alt=""/>
                            </li>
                            <li>
                                <img style={{height:'200px',width:'300px'}} src={boom} alt=""/>
                            </li>
                        </ul>
                    </div>
                </ReactIScroll>
            </div>
        )
    }
}