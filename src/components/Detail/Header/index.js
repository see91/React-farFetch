import React,{Component} from 'react';
import './index.css'
import {Link} from 'react-router-dom'
export default class Header extends Component{
    returnClick=()=>{

    }
    render(){
        return (
            <div className='header'>
             <div className='return'><i className='iconfont icon-fanhui' onClick={()=>history.go(-1)}></i></div>
                <Link to={{pathname:'/search/item2'}}>
             <div className='search'><i className='iconfont icon-sousuo'></i></div>
                </Link>
                <Link to={{pathname:'/shop'}}>
                    <div className='car'>
                        <i className='iconfont icon-gouwu' ></i>
                    </div>
                </Link>
            </div>
        )
    }
}