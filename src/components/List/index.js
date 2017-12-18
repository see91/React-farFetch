import React,{Component} from 'react';
import {connect} from 'react-redux'
import actions from '../../store/action/list';
import MHeader from '../../pubComponents/MHeader'
import './index.less'
import {Link} from 'react-router-dom'
class List extends Component{
    constructor(){
        super();
        this.state={showList:false}
    }
    componentDidMount() {
        this.props.getDatas()
    }
    switchShow = () => {
        this.setState({showList: !this.state.showList});
    }
    // changeType=(event)=>{
    //     let event=event.target.dataset.value;
    //     this.props.changeType(type)
    // }
    render(){
        console.log(this.props.getList);
        return (
            <div>
                <MHeader title={{title: '列表页'}}/>
                <div className="content">
                    <div className="btn">
                        <p>商品列表</p>
                        <button>筛选</button>
                    </div>
                    <div className="container">

                        <h3>SALE|近4000件商品现有4折优惠</h3>
                        <div className="list-group">
                        {

                            this.props.getList.map((item,index)=>(
                                <Link  key={item.id} to={{pathname: `/detail/${item.id}`, state: {item}}}>
                                    <div onClick={this.showList} className="iconfont icon-gray-star">
                                        {/*{*/}
                                        {/*this.state.showList?<div className="iconfont icon-gray-star"></div>:<div className="iconfont icon-gray-star"></div>*/}
                                        {/*}*/}
                                    </div>
                                   <div onClick={this.switchShow}>

                                   </div>
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