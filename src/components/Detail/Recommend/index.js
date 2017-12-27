import React, {Component} from 'react';
import './index.less'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import action from '../../../store/action/detail'

class Recommend extends Component {

    componentDidMount() {
        this.props.reqGood()

    }

    render() {
        console.log(this.props.goodList);
        let arr = [];
        for (let i in this.props.goodList) {
            arr.push(this.props.goodList[i])
        }
        return (

            <div className='recommend'>
                <Link to={{pathname: '/list'}}>
                    <div className='title'>
                        <h5 className='title-reference'>
                            特为您推荐
                        </h5>
                        <span className='title-all'>
                      选购全部
                   <i className='iconfont icon-arrow-right'></i>
                  </span>
                    </div>
                </Link>
                <div className='goods-list'>
                    {
                        arr.map((item, index) => (
                            <div className='goods-top' key={index}>
                                <div className='goods-top-left'>
                                    <div className='goods-left-img'>
                                        <img src={item.url}/>
                                    </div>
                                    <h4 className='goods-left-title'>
                                        {item.title}
                                    </h4>
                                    <h5 className='goods-left-price'>
                                        {item.classification}
                                    </h5>
                                </div>

                            </div>
                        ))

                    }
                </div>
            </div>
        )
    }
}

export default connect(
    state => state.detail,
    action
)(Recommend)