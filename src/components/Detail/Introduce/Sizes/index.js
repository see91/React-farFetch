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
            <p>请参考古着的M码尺寸</p>


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