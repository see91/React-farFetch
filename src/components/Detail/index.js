import React, {Component} from 'react';
import './index.less'
import 'bootstrap/dist/css/bootstrap.css'
import Banner from './Banner'
import Introduce from './Introduce'
import Header from "./Header/index";
import Size from "./Size/index";
import Submit from "./Submit/index";
import Recommend from "./Recommend/index";
import actions from "../../store/action/detail";
import {connect} from 'react-redux'

class Detail extends Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.reqDetail({id: id})
    }

    render() {
        return (
            <div className='detail'>
                <Header/>
                <div className='main-content'>
                    <Banner imgs={this.props.prdList.urlList}/>
                    <Size prdList={this.props.prdList}/>
                    <Introduce description={this.props.prdList.description}/>
                    <Recommend/>
                </div>
                <Submit prdList={this.props.prdList}/>
            </div>
        )
    }
}


export default connect(
    state => state.detail,
    actions
)(Detail)