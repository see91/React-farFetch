import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './index.less'

export default class Submit extends Component {
    render() {
        return (
            <div className='submit'>
                <Link to={{pathname: `/shoppingcars/${this.props.prdList.id}`}}>
                    加入购物袋
                </Link>
            </div>
        )
    }
}