import "babel-polyfill";
import React, {Component} from 'react';
import MHeader from "../../pubComponents/MHeader/index";
import Banner from "../../pubComponents/Banner/index";
import {connect} from 'react-redux'
import actions from "../../store/action/home";
import Recommend from "../../pubComponents/Recommend/index";

class Home extends Component {

    componentDidMount() {
        this.props.reqSliders();
    }

    render() {
        return (
            <div>
                <MHeader title={{title: '首页'}}/>
                <div className="content">
                    <Banner swiper={this.props.swiper}/>
                    <Recommend/>
                </div>
            </div>
        )
    }
}

export default connect(
    state => state.home,
    actions
)(Home)