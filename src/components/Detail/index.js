import React, {Component} from 'react';
import MHeader from "../../pubComponents/MHeader/index";

export default class Detail extends Component {
    constructor() {
        super();
        this.state = {id: null}
    }

    componentDidMount() {
        this.setState({id: parseInt(this.props.match.params.id)})
    }

    render() {
        return (
            <div>
                <MHeader title={{title: '商品详情'}}/>
                <div className="content">

                </div>
            </div>
        )
    }
}
