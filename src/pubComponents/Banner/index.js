import React from 'react';
import BannerAnim, {Element} from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import './index.css';

const BgElement = Element.BgElement;
export default class Banner extends React.Component {
    render() {
        return (
            <BannerAnim prefixCls="banner-user" autoPlay>
                {this.props.swiper.map((item, index) => (
                    <Element
                        prefixCls="banner-user-elem"
                        key={index}
                    >
                        <BgElement
                            key="bg"
                            className="bg"
                        />
                        <TweenOne className="banner-user-title" animation={{y: 30, opacity: 0, type: 'from'}}>
                            <span>{item.title}</span>
                        </TweenOne>
                        <TweenOne className="banner-user-text"
                                  animation={{y: 30, opacity: 0, type: 'from', delay: 100}}
                        >
                            <img src={item.url}/>
                        </TweenOne>
                    </Element>
                ))}
            </BannerAnim>
        );
    }
}
