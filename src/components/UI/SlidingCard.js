import React from 'react'
import Slider from 'react-slick';

const SlidingCard = (props) => {
    const setting = {
        dots: true,
        autoplay: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        arrows: true
    }
    return (
        <React.Fragment >
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="product-style-1 home-page-img mt-30">
                        <div class="product-image">
                            <Slider {...setting}>
                            <div class="product-active">
                                <div class="product-item active">
                                    <img src={props.image1} alt="product" />
                                </div>
                                <div class="product-item">
                                    <img src={props.image2} alt="product" />
                                </div>
                            </div>
                            </Slider>
                        </div>
                        <div class="product-content text-center">
                            <h4 class="title"><a href="product-details.html">{props.title}</a></h4>
                        </div>
                    </div>
                </div> 
        </React.Fragment>
    )
}

export default SlidingCard;
