import React, {Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from "./components/Home/index";
import User from "./components/User/index";
import Brand from "./components/Brand/index";
import WishList from "./components/WishList/index";
import './pubComponents/style/tab.css'
import Tab from "./pubComponents/Tab/index";

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Tab/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/brand" exact component={Brand}/>
                        <Route path="/wishList" exact component={WishList}/>
                        <Route path="/user" component={User}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
