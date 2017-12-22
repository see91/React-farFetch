import React, {Component} from 'react';
import './index.less'
import BannerAnim, {Element} from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';

const BgElement = Element.BgElement;
export default class Banner extends Component {
    render() {
        let arr = [];
        for (let key in this.props.imgs) {
            arr[key] = this.props.imgs[key]
        }
        return (
            <div className='banner'>
                <BannerAnim prefixCls="banner-user">
                    {arr.map((item, index) => (
                        <Element
                            prefixCls="banner-user-elem"
                            key={index}
                        >
                            <BgElement
                                key="bg"
                                className="bg"
                            />
                            <TweenOne className="banner-user-title" animation={{y: 30, opacity: 0, type: 'from'}}>

                            </TweenOne>
                            <TweenOne className="banner-user-text"
                                      animation={{y: 30, opacity: 0, type: 'from', delay: 100}}
                            >
                                <img src={item}/>
                            </TweenOne>
                        </Element>
                    ))}
                </BannerAnim>
            </div>
        )
    }
}
