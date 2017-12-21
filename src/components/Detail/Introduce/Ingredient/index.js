import React,{Component} from 'react';
import './index.less'
import {TransitionGroup, CSSTransition} from 'react-transition-group';
export default class Ingredient extends Component{
    constructor(){
        super();
        this.state={show:false}
    }

    handleClick=()=>{
        this.setState({show:!this.state.show})
    }
    getMenuList=()=>(
        <CSSTransition  classNames="fade" timeout={500}>
            <div className='fabric'>
                <h5>面料 <span>涤纶 100%</span></h5>
                <h5>里料 <span>涤纶 100%</span></h5>
                <h5>洗涤说明 <span>干洗</span></h5>
            </div>
        </CSSTransition>

    )
    render(){
        return (
           <div className='ingredients'>
               <div className='ingredient' onClick={this.handleClick}>
                   <span>成分与护理</span>
                   <div className='icon' >
                       {this.state.show?
                           <i className='iconfont icon-iconjian'></i>:<i className='iconfont icon-news-more'></i>}
                   </div>
               </div>
               <TransitionGroup className='fabrics'>
                   {
                       this.state.show && this.getMenuList()
                   }
               </TransitionGroup>
           </div>
        )
    }
}