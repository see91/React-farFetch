import React,{Component} from 'react';
import './index.less'
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export default class Notes extends Component{
    constructor(){
        super();
        this.state={show:false}
    }
    handleClick=()=>{
        this.setState({show:!this.state.show})
    }
    getKnowMore=()=>(
        <CSSTransition  classNames="fade" timeout={500}>
            <div className='instructions'>
                <div className='freight'>
                    <h4 className='freight-come'> 商品来自 <span className='country'>美国</span></h4>       <p className='freight-text'>无论您订单的商品数量，或选购自世界各地，只需支付一笔运费即可足不出户，乐享全球时尚精品</p>
                    <div className='freight-more'> 了解详情</div>
                    <div className='returns'>
                        <h5 className='returns-title'>免费取货服务</h5>
                        <p className='returns-text'>自您签收订单之日起，您将会有14天时间退回商品。我们建议您在接收商品的7天内预订取货服务以确保按时退回</p>
                        <div className='returns-more'>退款政策</div>
                    </div>
                    <div className='tariffs'>
                        <h5 className='tariffs-title'>进口关税</h5>
                        <p className='tariffs-text'>所有寄往欧盟、美国、加拿大、中国、澳大利亚、波多黎各、瑞士、新加坡、韩国、科威特、墨西哥、卡塔尔、印度、挪威、沙特阿拉伯、台湾、泰国、阿拉伯联合酋长国和日本的订单均已包含了进口税。因此，在您收到商品时，不会有额外税费需要支付。您所看到的订单总价即为您所需支付的所有费用。</p>
                    </div>
                </div>
            </div>
        </CSSTransition>

    )
    render(){
        return (
            <div className='notes'>
                <div className='note' onClick={this.handleClick}>
                    <span>购物须知以及无理由免费退货</span>
                    <div className='icon' >
                        {this.state.show?<i className='iconfont icon-iconjian'></i>:<i className='iconfont icon-news-more'></i>
                        }
                    </div>
                </div>
                <TransitionGroup>
                    {
                        this.state.show &&this.getKnowMore()
                    }
                </TransitionGroup>

            </div>
        )
    }
}