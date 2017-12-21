
import React, {Component} from 'react';
import './index.less';
import {connect} from 'react-redux'
import actions from '../../../store/action/list';
 class ListHeader extends Component {
    constructor() {
        super();
        this.state = {showList: false};
    }

    switchShow = () => {
        this.setState({showList: !this.state.showList});
    }

     changeType = (event)=>{
        // let type = event.target.dataset.type;
        // this.props.getCurrentLists({classification:type});
      /*  setTimeout(()=>{
            let arr=[];let tr=[];
            for(let i in this.props.getList){
                arr.push(this.props.getList[i])
            }

            for(let i in this.props.currentList.prd){
               tr.push(this.props.currentList.prd[i])
            }
           arr=tr;
        },500)*/
      this.props.chooseList(event.target.dataset.type)
         this.switchShow();
    }
    getMenuList = () => (
            <ul className="menu-list" onClick={this.changeType}>
                <li className={this.props.type == ""?'active':''} data-type="">商品分类</li>
                <li className={this.props.type == "skirt"?'active':''} data-type="skirt">裙子</li>
                <li className={this.props.type == "coat"?'active':''} data-type="coat">上衣</li>
                <li className={this.props.type == "pants"?'active':''} data-type="pants">裤子</li>
                <li className={this.props.type == "shoes"?'active':''} data-type="shoes">鞋子</li>
            </ul>
    )

    render() {
        return (

                <div className="btn">
                        <p>商品列表</p>
                        <button onClick={this.switchShow}>筛选</button>
                        {
                            this.state.showList && this.getMenuList()
                        }

                </div>


        )
    }
}
export default connect(
    state=>state.list,
    actions
)(ListHeader)