import React, {Component} from 'react';
import MHeader from "../../pubComponents/MHeader/index";
import './style/wishlist.css'
import Imgs from './img/photo.png'

export default class WishList extends Component {
    constructor(){
        super();
        this.props={};
    }
    render() {
        return (
            <div>
                <MHeader title={{title:'愿望单'}}/>
                <div id="headers" className='content'>
                    <img  src={Imgs} alt=""/>
                    <p>你的愿望单中暂无商品</p>
                    <span>点击商品图片上角的☆，即可将商品添加到您的愿望单中，您可在任何设备上查看您的愿望单</span>
                    <button onClick={()=>{
                        this. props.history.push("/shoppingCars")
                    }} className="btn">立即选购</button>
                </div>
            </div>
        )
    }
}
