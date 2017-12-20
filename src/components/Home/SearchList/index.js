import React,{Component} from 'react';
import './index.less';
import apple from '../../../static/img/apple.png'
export default class SearchList extends Component{
    render(){
        return (
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div className="apple">
                <img src={apple}/>
              </div>
            </div>
        )
    }
}