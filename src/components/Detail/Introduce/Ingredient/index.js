import React,{Component} from 'react';
import './index.less'
export default class Ingredient extends Component{
    constructor(){
        super();
        this.state={show:false}
    }

    handleClick=()=>{
        this.setState({show:!this.state.show})
    }
    getMenuList=()=>(
        <div className='fabric'>
            <h5>面料 <span>涤纶 100%</span></h5>
            <h5>里料 <span>涤纶 100%</span></h5>
            <h5>洗涤说明 <span>干洗</span></h5>
        </div>
    )
    render(){
        return (
           <div className='ingredients'>
               <div className='ingredient' onClick={this.handleClick}>
                   <span>成分与护理</span>
                   <div className='icon' >
                       {this.state.show?
                           <i className='iconfont icon-jianhao'></i>:<i className='iconfont icon-news-more'></i>}
                   </div>
               </div>
               <div className='fabrics'>
                   {
                       this.state.show && this.getMenuList()
                   }
               </div>
           </div>
        )
    }
}