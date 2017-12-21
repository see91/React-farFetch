import React, {Component} from 'react';
import Description from "./Description/index";

import Ingredient from "./Ingredient/index";
import Brand from "./Brand/index";
import Notes from "./Notes/index";
import Sizes from "./Sizes/index";
import './index.less'

export default class Introduce extends Component {
    phoneClick=()=>(
        alert(1)

    )
    render() {
        return (
            <div className='introduce'>
                <Description description={this.props.description}/>
                <Sizes/>
                <Ingredient/>
                <Notes/>
                <Brand/>
                <div className='phone'>以电话形式下单或联系我们</div>
                <div className='email'>
                    <span onClick={this.phoneClick}><i className='iconfont icon-dianhua'></i></span>
                    <span><i className='iconfont icon-youxiang'></i></span>
                </div>
                <div className='phone-bottom'>
                    <span className='phone-bottom-top'></span>
                    <span className='phone-bottom-bottom'></span>
                </div>
            </div>
        )
    }
}