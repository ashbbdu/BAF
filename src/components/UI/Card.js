import React from 'react'

const Card = (props) => {
    return (
        <React.Fragment>
            <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="product-style-1 home-page-img mt-30">
                        <div class="product-image">
                            <div class="product-active">
                                <div class="product-item active">
                                    <img src={props.image} />
                                    {/* <img src="assets/img/fathers.png" alt="product" /> */}
                                </div>
                            </div>
                        </div>
                        <div class="product-content text-center">
                            <h4 class="title"><a href="product-details.html">{props.title}</a></h4>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Card
