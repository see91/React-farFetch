import React,{Component} from 'react';
import './index.less'
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export default class Sizes extends Component{
    constructor(){
        super();
        this.state={show:false}
    }
    handleClick=()=>{
        this.setState({show:!this.state.show})
    }
    getMenuList=()=>(
        <CSSTransition classNames="fade" timeout={500}>
            <div className='chest'>
                <h5>尺码</h5>
                <p>项目符合真实的项目</p>
                <h5>尺寸信息</h5>
                <div className='chest-size'> <span className='chest-size-left'><a href="">模特尺寸</a></span> <span className='chest-size-right'>厘米</span></div>
                <ul className='size-cm'>
                    <li> Bust<span>95厘米</span>  </li>
                    <li> Height<span>186厘米</span> </li>
                    <li> Hips<span>95厘米</span> </li>
                    <li> Waist<span>76厘米</span> </li>
                    <li> 模特所传穿的尺码<span>M</span></li>
                </ul>
                <h5 className='chest-build'>所有商品尺寸都是由Farfetch亲手打造的</h5>
                <div className='chest-btn'>显示尺寸对照表 <i className='iconfont icon-arrow-right'></i></div>
            </div>
        </CSSTransition>

    )
    render(){
        return (
          <div className='sizes'>
              <div className='size' onClick={this.handleClick}>
                  <span>尺码</span>
                  <div className='icon' >
                      {this.state.show?<i className='iconfont icon-iconjian'></i>:<i className='iconfont icon-news-more'></i>
                      }
                  </div>
              </div>
              <TransitionGroup >
                  {
                      this.state.show && this.getMenuList()
                  }
              </TransitionGroup>
          </div>
        )
    }
}