import React, {Component} from 'react';
import HomeMain2 from "./HomeMain2";
import HomeMain3 from "./HomeMain3";
import HomeMain4 from "./HomeMain4";
import HomeMain5 from "./HomeMain5";
import Choose from "../../../pubComponents/Choose";
import HomeMain6 from "../HomeMain6";

export default class HomeMain extends Component {
    render() {
        return (
            <div>
            <Choose choose={this.props.choose}/>
            <HomeMain2/>
            <HomeMain3/>
                <HomeMain4/>
                <HomeMain6/>
                <HomeMain5/>
            </div>
        )
    }
}
