import React from "react";
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css"
import { LazyImageWrapper } from "./style";

const MyImage = ({ image, name, onClick, className, width, height, scrollPosition }) => {
     return (
          <LazyImageWrapper className="lazy-image">
               <LazyLoadImage
                    onClick={onClick}
                    alt={name}
                    src={image}
                    width={width}
                    height={height}
                    delayTime="900"
                    className={className}
                    placeholderSrc={process.env.PUBLIC_URL + '/assets/images/logo/load.gif'}
                    effect="black-and-white"
                    scrollPosition={scrollPosition}
                    threshold={3000}
                    delayMethod="3000"
               />
          </LazyImageWrapper>
     )
}
export default trackWindowScroll(MyImage);