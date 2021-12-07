import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/UI/Footer'
import { Modal } from 'reactstrap'
import ModalCustom from '../components/UI/ModalCustom'
const Cart = () => {
    const [open , setOpen] = useState(false)
    return (
        <div>
            <Modal className="modal-dialog-centered modal-xl" contentClassName="modal-content-abc" isOpen={open} toggle={() => setOpen(!open)}>
           <ModalCustom />
            </Modal>
            <Header onClick={() => setOpen(!open)}/>
            <section class="checkout-wrapper pt-50">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="checkout-style-1 ">
                    <div class="checkout-table table-responsive">
                    <table class="table">
                        <tbody>
                            <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                            </tr>
                            <tr>
                                <td class="checkout-product">
                                    <div class="product-cart">
                                        <div class="product-thumb">
                                            <img src="assets/img/chocolates-333.png" alt="Product" />
                                        </div>
                                    </div>
                                </td>
                                <td class="checkout-product">
                                    <div class="product-cart">
                                        <div class="product-content media-body">
                                            <h5 class="title">
                                                <a href="product-details.html">chocolates</a>
                                            </h5>
                                        </div>
                                    </div>
                                </td>
                                <td class="checkout-quantity">
                                    <div class="product-quantity d-inline-flex">
                                        <button type="button" id="sub" class="sub"><i class="fa fa-minus"></i></button>
                                        <input type="text" value="1" />
                                        <button type="button" id="add" class="add"><i class="fa fa-plus"></i></button>
                                    </div>
                                </td>
                                <td class="checkout-price">
                                    <p class="price"><i class="fa fa-inr" aria-hidden="true"></i> 299</p>
                                </td>
                                <td>
                                    <a class="delete" href="#"><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td class="checkout-product">
                                    <div class="product-cart">
                                        <div class="product-thumb">
                                            <img src="assets/img/hand-bag-22.png" alt="Product" />
                                        </div>
                                    </div>
                                </td>
                                <td class="checkout-product">
                                    <div class="product-cart">
                                        <div class="product-content media-body">
                                            <h5 class="title">
                                                <a href="product-details.html">hand bag</a>
                                            </h5>
                                        </div>
                                    </div>
                                </td>
                                <td class="checkout-quantity">
                                    <div class="product-quantity d-inline-flex">
                                        <button type="button" id="sub" class="sub"><i class="fa fa-minus"></i></button>
                                        <input type="text" value="1" />
                                        <button type="button" id="add" class="add"><i class="fa fa-plus"></i></button>
                                    </div>
                                </td>
                                <td class="checkout-price">
                                    <p class="price"><i class="fa fa-inr" aria-hidden="true"></i> 599</p>
                                </td>
                                <td>
                                    <a class="delete" href="#"><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td class="checkout-product">
                                    <div class="product-cart">
                                        <div class="product-thumb">
                                            <img src="assets/img/30875_special-feel.jpeg" alt="Product" />
                                        </div>
                                    </div>
                                </td>
                                <td class="checkout-product">
                                    <div class="product-cart">
                                        <div class="product-content media-body">
                                            <h5 class="title">
                                                <a href="product-details.html">special feel</a>
                                            </h5>
                                        </div>
                                    </div>
                                </td>
                                <td class="checkout-quantity">
                                    <div class="product-quantity d-inline-flex">
                                        <button type="button" id="sub" class="sub"><i class="fa fa-minus"></i></button>
                                        <input type="text" value="1" /> 
                                        <button type="button" id="add" class="add"><i class="fa fa-plus"></i></button>
                                    </div>
                                </td>
                                <td class="checkout-price">
                                    <p class="price"><i class="fa fa-inr" aria-hidden="true"></i> 680</p>
                                </td>
                                <td>
                                    <a class="delete" href="#"><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td class="checkout-product">
                                    <div class="product-cart">
                                        <div class="product-thumb">
                                            <img src="assets/img/54271_exotic-red-roses-basket.jpeg" alt="Product" />
                                        </div>
                                    </div>
                                </td>
                                <td class="checkout-product">
                                    <div class="product-cart">
                                        <div class="product-content media-body">
                                            <h5 class="title">
                                                <a href="product-details.html">exotic red roses basket</a>
                                            </h5>
                                        </div>
                                    </div>
                                </td>
                                <td class="checkout-quantity">
                                    <div class="product-quantity d-inline-flex">
                                        <button type="button" id="sub" class="sub"><i class="fa fa-minus"></i></button>
                                        <input type="text" value="1" />
                                        <button type="button" id="add" class="add"><i class="fa fa-plus"></i></button>
                                    </div>
                                </td>
                                <td class="checkout-price">
                                    <p class="price"><i class="fa fa-inr" aria-hidden="true"></i> 685</p>
                                </td>
                                <td>
                                    <a class="delete" href="#"><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div class="checkout-coupon-total checkout-coupon-total-2 d-lg-flex justify-content-between">
                        <div class="checkout-coupon">
                            <div class="Apply-Coupons">
                            <span><img src="assets/img/gift-voucher.png" class="img-fluid" /> Apply Coupons</span>
                                <button class="main-btn primary-btn-1" data-toggle="modal" data-target="#ApplyCoupons">Coupons</button>
                            </div>
                            
                            <span>Apply Coupon to get discount!</span>
                            <form action="#" class="has-validation-callback">
                                <div class="single-form form-default d-flex">
                                    <div class="form-input form">
                                        <input type="text" placeholder="Coupon Code" />
                                    </div>
                                    <button type="submit" class="main-btn primary-btn">Apply</button>
                                </div>
                            </form>
                        </div>
                        <div class="checkout-total">
                            <div class="single-total">
                                <p class="value">Subtotal Price:</p>
                                <p class="price"><i class="fa fa-inr" aria-hidden="true"></i> 2,263.00</p>
                            </div>
                            <div class="single-total">
                                <p class="value">Shipping Cost (+):</p>
                                <p class="price"><i class="fa fa-inr" aria-hidden="true"></i> 10.50</p>
                            </div>
                            <div class="single-total">
                                <p class="value">Discount (-):</p>
                                <p class="price"><i class="fa fa-inr" aria-hidden="true"></i> 10.50</p>
                            </div>
                            <div class="single-total total-payable">
                                <p class="value">Total Payable:</p>
                                <p class="price"><i class="fa fa-inr" aria-hidden="true"></i> 2,274.00</p>
                            </div>
                        </div>
                    </div>
                    <div class="checkout-btn d-sm-flex justify-content-between">
                        <div class="single-btn">
                            <a href="index.html" class="main-btn primary-btn-border">continue shopping</a>
                        </div>
                        <div class="single-btn">
                            <a href="checkout.html" class="main-btn primary-btn">continue to checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
            <Footer />
        </div>
    )
}

export default Cart
