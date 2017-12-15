import React, {Component} from 'react';
import MHeader from "../../pubComponents/MHeader/index";

export default class User extends Component {
    render() {
        return (
            <div>
                <MHeader title={{title: '我的账户'}}/>
            </div>
        )
    }
}