import React,{Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom'
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
                       <ul className='goods-list'>
                           <li className='goods-list-details'>
                               <span className='list-details-lift'>
                                   <img src="https://cdn-images.farfetch-contents.com/12/54/97/89/12549789_11895734_480.jpg" alt=""/>
                                   <h4 className='details-left-title'>连帽飞行员夹克</h4>
                                   <p className='details-left-title'> ￥6675</p>
                               </span>
                               <span  className='list-details-right'>
                                   <img src="https://cdn-images.farfetch-contents.com/12/54/97/89/12549789_11895734_480.jpg" alt=""/>
                                   <h4 className='details-right-title'>连帽飞行员夹克</h4>
                                   <p className='details-right-price'>￥6675</p>
                               </span>
                           </li>
                           <li className='goods-list-details'>
                               <span className='list-details-lift'>
                                   <img src="https://cdn-images.farfetch-contents.com/12/54/97/89/12549789_11895734_480.jpg" alt=""/>
                                   <h4 className='details-left-title'>连帽飞行员夹克</h4>
                                   <p className='details-left-title'> ￥6675</p>
                               </span>
                               <span  className='list-details-right'>
                                   <img src="https://cdn-images.farfetch-contents.com/12/54/97/89/12549789_11895734_480.jpg" alt=""/>
                                   <h4 className='details-right-title'>连帽飞行员夹克</h4>
                                   <p className='details-right-price'>￥6675</p>
                               </span>
                           </li>
                           <li className='goods-list-details'>
                               <span className='list-details-lift'>
                                   <img src="https://cdn-images.farfetch-contents.com/12/54/97/89/12549789_11895734_480.jpg" alt=""/>
                                   <h4 className='details-left-title'>连帽飞行员夹克</h4>
                                   <p className='details-left-title'> ￥6675</p>
                               </span>
                               <span  className='list-details-right'>
                                   <img src="https://cdn-images.farfetch-contents.com/12/54/97/89/12549789_11895734_480.jpg" alt=""/>
                                   <h4 className='details-right-title'>连帽飞行员夹克</h4>
                                   <p className='details-right-price'>￥6675</p>
                               </span>
                           </li>
                       </ul>
                </div>
            </div>
        )
    }
}