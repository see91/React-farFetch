import React,{Component} from 'react';
import './index.less'
export default class Brand extends Component{
    constructor(){
        super();
        this.state={show:false}
    }
    handleClick=()=>{
        this.setState({show:!this.state.show})
    }
    getMenuList=()=>(
        <div className='introduce'>
           <p className='introduce-text'>用简约的设计达到想要的效果 -- 有着尖锐眼光的Neil Barrett对时尚如此诠释。擅于运用利落的线条融合传统裁缝工艺, 同时对于面料及传统意大利手工艺的专精与热情来自于过去与Miuccia Prada共事的期间, 造就Neil Barrett带有融合现代与运动元素的时装风格。</p>
            <div className='introduce-more'>来自该品牌的商品 <i className='iconfont icon-arrow-right'></i></div>
        </div>
    )


    render(){
        return (
            <div className='brands'>
                <div className='brand' onClick={this.handleClick}>
                    <span>品牌-Valentino</span>
                    <div className='icon' >
                        {this.state.show?<i className='iconfont icon-jianhao'></i>:<i className='iconfont icon-news-more'></i>
                        }
                    </div>
                </div>
                <div>
                    {
                        this.state.show && this.getMenuList()
                    }
                </div>
            </div>
        )
    }
}