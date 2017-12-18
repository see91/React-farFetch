import React,{Component} from 'react';
import './index.less'
export default class Recommend extends Component{
    render(){
        return (
            <div className='recommend'>
              <div className='title'>
                  <h5 className='title-reference'>
                      特为您推荐
                  </h5>
                  <span className='title-all'>
                      选购全部
                   <i className='iconfont icon-arrow-right'></i>
                  </span>
              </div>
                <div className='recommend-list'>

                </div>
            </div>
        )
    }
}