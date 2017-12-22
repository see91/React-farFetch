import React, {Component} from 'react';
import MHeader from "../../pubComponents/MHeader/index";
import './index.css'
import boom from '../../static/img/3.jpg'
import {Link} from 'react-router-dom'
import BrandMan from "./BrandMan/index";
import BrandWomen from "./BrandWomen/index";
import BrandChildren from "./BrandChildren/index";
import actions from "../../store/action/brand";
import {connect} from "react-redux"
import SearchBar from "../../pubComponents/SearchBar/index";

 class Brand extends Component {
    constructor(){
        super();
        this.state = {Comp:BrandMan};
    }
    change=(event)=>{
        switch( event.target.innerText){
           case '男士' :
               this.setState({Comp:BrandMan});
               break;
            case '女士':
                this.setState({Comp:BrandWomen});
                break;
            case '儿童':
                this.setState({Comp:BrandChildren});
                break;
            default:
                this.setState({Comp:BrandMan});
       }
    };
    render() {
        let _comp = this.state.Comp;
        console.log(this.props);
        return (
            <div className="brand">
                <MHeader title={{title: '品牌'}}/>
                <div className="search-j">
                    <Link to="/search/item2"><i className="iconfont icon-sousuo"></i></Link>
                    <Link to="/shop"><i className="iconfont icon-gouwu"></i></Link>
                </div>
                <div className="content">
                    <div className="brand">
                        <div className="nav" onClick={this.change}>
                            <span className={"nav-switch "+(this.props.type=="man"?"active":"")}>男士</span>
                            <span className={"nav-switch "+(this.props.type=="woman"?"active":"")}>女士</span>
                            <span className={"nav-switch "+(this.props.type=="children"?"active":"")}>儿童</span>
                        </div>
                        <Link to='/' className="sou-suo">
                            <ul>
                                <li>
                                    <h4>搜索品牌名称A-Z</h4>
                                    <span>Saint Laurent,ValentinoGucci与2000多个设计师...</span>
                                    <i className="iconfont icon-arrow-right"></i>
                                </li>
                            </ul>
                        </Link>
                        {
                            _comp?<_comp/>:null
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    state=>state.brand,
    actions
)(Brand)