import React,{Component} from 'react';
import './index.less'
export default class Sizes extends Component{
    constructor(){
        super();
        this.state={show:false}
    }
    handleClick=()=>{
        this.setState({show:!this.state.show})
    }
    getMenuList=()=>(
        <div className='chest'>
            <h5>尺码</h5>
            <p>项目符合真实的项目</p>
            <h5>尺寸信息</h5>
            <div className='chest-size'> <span className='chest-size-left'>厘米</span> <span className='chest-size-right'>英寸</span></div>
            <ul className='size-cm'>
                <li> Bust<span>95厘米</span> <span>37.4"</span> </li>
                <li> Height<span>186厘米</span> <span>73.2"</span> </li>
                <li> Hips<span>95厘米</span> <span>37.4"</span> </li>
                <li> Waist<span>76厘米</span> <span>37.4"</span></li>
                <li> 模特所传穿的尺码<span>M</span></li>
            </ul>
            <h5 className='chest-build'>所有商品尺寸都是由Farfetch亲手打造的</h5>
            <div className='chest-btn'>显示尺寸对照表 <i className='iconfont icon-arrow-right'></i></div>
        </div>
    )
    render(){
        return (
          <div className='sizes'>
              <div className='size' onClick={this.handleClick}>
                  <span>尺码</span>
                  <div className='icon' >
                      {this.state.show?<i className='iconfont icon-jianhao'></i>:<i className='iconfont icon-news-more'></i>
                      }
                  </div>
              </div>
              <div >
                  {
                      this.state.show && this.getMenuList()
                  }
              </div>
          </div>
        )
    }
}