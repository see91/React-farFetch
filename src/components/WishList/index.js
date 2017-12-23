import React, {Component} from 'react';
import MHeader from "../../pubComponents/MHeader/index";
import './style/wishlist.css'
import Imgs from './img/photo.png'
import {Link} from 'react-router-dom'
import actions from '../../store/action/wishlist'
import {connect} from 'react-redux'

class WishList extends Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props);
        let arr = [];
        for (let i in this.props.list.currentList.data) {
            arr.push(this.props.list.currentList.data[i])
        }

        return (
            <div>
                <div className='wishlist-header'>
                    <div className='wishlist-return'>愿望单 <span>{arr.length}</span></div>
                    <Link to={{pathname: '/search/item2'}}>
                        <div className='wishlist-search'><i className='iconfont icon-sousuo'></i></div>
                    </Link>
                    <Link to={{pathname: '/shop'}}>
                        <div className='wishlist-car'>
                            <i className='iconfont icon-gouwu'></i>
                        </div>
                    </Link>
                </div>
                {
                    arr == '' ? <div id="headers" className='content'>
                        <img src={Imgs} alt=""/>
                        <p>你的愿望单中暂无商品</p>
                        <span>点击商品图片上角的☆，即可将商品添加到您的愿望单中，您可在任何设备上查看您的愿望单</span>
                        <button onClick={() => {
                            this.props.history.push("/home")
                        }} className="btn">立即选购
                        </button>
                    </div> : <div className='collect-middle'>
                        {arr.map((item, index) => (
                            <div className='collect-middle-img' key={index}>
                                <img src={item.url}/>
                                <h5 className='collect-middle-title'>{item.title}</h5>
                            </div>
                        ))}
                    </div>
                }
            </div>
        )
    }
}

export default connect(
    state => state,
    actions
)(WishList)