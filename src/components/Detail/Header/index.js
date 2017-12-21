import React,{Component} from 'react';
import './index.css'
export default class Header extends Component{
    returnClick=()=>{

    }
    render(){
        return (
            <div className='header'>
             <div className='return'><i className='iconfont icon-fanhui' onClick={()=>history.go(-1)}></i></div>
             <div className='search'><i className='iconfont icon-sousuo'></i></div>
             <div className='car'><i className='iconfont icon-gouwu'></i></div>
            </div>
        )
    }
}