import React from "react";
import Slider from "react-slick";
// Import slick carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const CustomReactSlick = (props) => {
    const {
        children,
        show = 1,
        showScroll = 1,
        md = 4,
        sm = 2,
        xs = 1,
        dots = false,
        infinite = false,
        isUnslick = true,
        initialSlide = 0,
        autoplaySpeed = 3000,
        pauseOnHover=true,
        ...rest
    } = props
    var settings = {
        ...rest,
        infinite: infinite,
        speed: 500,
        slidesToShow: show,
        slidesToScroll: showScroll,
        dots: dots,
        initialSlide: initialSlide,
        autoplaySpeed: autoplaySpeed,
        pauseOnHover:pauseOnHover,
        responsive: isUnslick ? [
            {
                breakpoint: 2024,
                settings: "unslick"
            }
        ] : [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: md,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: sm,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: xs,
                    slidesToScroll: 1
                }
            }]
    };
    return (
        <div className="custom-react-slick">
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}

export default CustomReactSlick;