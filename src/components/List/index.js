import React,{Component} from 'react';
import {connect} from 'react-redux'
import actions from '../../store/action/list';
import MHeader from '../../pubComponents/MHeader'
import './index.less'
import {Link} from 'react-router-dom'
import ListHeader from './ListHeader'
class List extends Component{
    // constructor(){
    //     super();
    //     this.state={showList:false}
    // }
    componentDidMount() {
        this.props.getDatas()

    }
    // switchShow = () => {
    //     this.setState({showList: !this.state.showList});
    // }
    //
    render(){
        console.log(this.props.getList);
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
                                    <div className="iconfont icon-gray-star"></div>
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