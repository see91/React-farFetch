import React, {Component} from 'react';
import HomeMain2 from "./HomeMain2";
import HomeMain3 from "./HomeMain3";
import HomeMain4 from "./HomeMain4";
import HomeMain5 from "./HomeMain5";
import Choose from "../../../pubComponents/Choose";

export default class HomeMain extends Component {
    render() {
        return (
            <div>
            <Choose/>
            <HomeMain2/>
            <HomeMain3/>
                <HomeMain4/>
                <HomeMain5/>
            </div>
        )
    }
}
