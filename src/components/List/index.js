import React,{Component} from 'react';
import {connect} from 'react-redux'
import actions from '../../store/action/list';
import MHeader from '../../pubComponents/MHeader'
import './index.less'
import {Link} from 'react-router-dom'
import ListHeader from './ListHeader'
class List extends Component{
    constructor(){
        super();
        this.state={star:true}
    }

    componentDidMount() {
        this.props.getDatas()

    }
    collection=(event)=>{
        event.target.star=!event.target.star;
        event.target.className=event.target.star?'iconfont icon-gray-star active':'iconfont icon-gray-star';
        event.preventDefault();
    }
    render(){
        return (
            <div>
                <MHeader title={{title: '列表页'}}/>

                <div className="content">
                    <ListHeader
                        type={this.props.type}
                        changeType={this.props.changeType}
                    />
                    <div className="container">
                        <h3>SALE|近4000件商品现有4折优惠</h3>
                        <div className="list-group">
                            {
                                this.props.getList.map((item,index)=>(
                                    <Link  key={item.id} to={{pathname: `/detail/${item.id}`, state: {item}}}>
                                        <div className='iconfont icon-gray-star ' onClick={this.collection}></div>
                                        <img src={item.url}/>
                                        <p>{item.title}</p>
                                        <b>￥{item.price}</b>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
export default connect(
    state=>state.list,
    actions
)(List)