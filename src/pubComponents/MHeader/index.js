import React, {Component} from 'react';
import '../style/mheader.css'

export default class MHeader extends Component {
    render() {
        return (
            <div className="header">
                <div className="back">
                    <i className={this.props.back ? 'iconfont icon-fanhui' : ''}></i>
                </div>
                <div className="title">
                    {this.props.title.title}
                </div>
            </div>
        )
    }
}
