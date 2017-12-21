import React, {Component} from 'react';
import MHeader from "../../pubComponents/MHeader/index";
import './index.css'
import boom from '../../static/img/3.jpg'

import BrandMan from "./BrandMan/index";
import BrandWomen from "./BrandWomen/index";
import BrandChildren from "./BrandChildren/index";


export default class Brand extends Component {
    constructor(){
        super();
        this.state = {Comp:BrandMan};
    }
    change=(event)=>{
        event.preventDefault();
        switch( event.target.innerText){
           case '男士' :
               event.target.className="nav-switch active"
               this.setState({Comp:BrandMan});
               break;
            case '女士':
                event.target.className="nav-switch active"
                this.setState({Comp:BrandWomen});
                break;
            case '儿童':
                event.target.className="nav-switch active"
                this.setState({Comp:BrandChildren});
                break;
            default:
                this.setState({Comp:BrandMan});
       }
    };
    render() {
        let _comp = this.state.Comp;
        return (
            <div className="brand">
                <MHeader title={{title: '品牌'}}/>
                <div className="content">
                    <div className="brand">
                        <div className="nav" onClick={this.change}>
                            <span>男士</span>
                            <span>女士</span>
                            <span>儿童</span>
                        </div>
                        <div className="sou-suo">
                            <ul>
                                <li>
                                    <h4>搜索品牌名称A-Z</h4>
                                    <span>Saint Laurent,Valentino,Gucci与2000多个设计师...</span>
                                    <a> > </a>
                                </li>
                            </ul>
                        </div>

                        {
                            _comp?<_comp/>:null
                        }
                    </div>
                </div>
            </div>
        )
    }
}
