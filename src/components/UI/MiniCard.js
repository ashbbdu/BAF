import React from 'react'

const MiniCard = (props) => {
    return (
        <div class="col-lg-6">
            <div class="product-style-7 mt-30">
                <div class="product-image">
                    <div class="product-active">
                        <div class="product-item active">
                            <img src={props.image} alt="product" />
                        </div>
                        {/* <div class="product-item">
                            <img src={props.image} alt="product" />
                        </div> */}
                    </div>
                </div>
                <div class="product-content">
                    <h4 class="title"><a href="product-details.html">{props.title}</a></h4>
                    <span class="price"><i class="fa fa-inr" aria-hidden="true"></i>{props.amount}</span>
                </div>
            </div>

        </div>
    )
}

export default MiniCard;
