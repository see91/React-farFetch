import "babel-polyfill";
import React, {Component} from 'react';
import Banner from "../../pubComponents/Banner/index";
import './index.less'
import {connect} from 'react-redux'
import actions from "../../store/action/home";
import HomeHeader from "./HomeHeader";
import SearchBar from "../../pubComponents/SearchBar";
import Warning from "./Warning";
import HomeMain from "./HomeMain";
import Shop from "./Shop";
import SearchList from "./SearchList";

class Home extends Component {

    componentDidMount() {
        this.props.reqSliders();
    }

    render() {
        return (
            <div>
               <HomeHeader/>
                <div className="content1">
                <SearchBar/>
                <Warning/>
                    <div className="home-swipe">
                        <Banner swiper={this.props.swiper}/>
                    </div>
                <HomeMain/>
                  <Shop/>
                  <SearchList/>
                </div>
                </div>
        )
    }
}

export default connect(
    state => state.home,
    actions
)(Home)