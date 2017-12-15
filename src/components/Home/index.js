import "babel-polyfill";
import React, {Component} from 'react';
import Banner from "../../pubComponents/Banner/index";
import './index.less'
import {connect} from 'react-redux'
import actions from "../../store/action/home";
import HomeHeader from "./HomeHeader";
import SearchBar from "./SearchBar";
import Warning from "./Warning";
import HomeMain from "./HomeMain";

class Home extends Component {

    componentDidMount() {
        this.props.reqSliders();
    }

    render() {
        return (
            <div>
               <HomeHeader/>
                <div className="content">
                <SearchBar/>
                <Warning/>
                    <div className="home-swipe">
                        <Banner swiper={this.props.swiper}/>
                    </div>
                <HomeMain/>
                </div>
                </div>
        )
    }
}

export default connect(
    state => state.home,
    actions
)(Home)