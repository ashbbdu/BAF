import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/UI/Footer'
import { Modal } from 'reactstrap'
import ModalCustom from '../components/UI/ModalCustom'
const Personalize = () => {
    const [open , setOpen] = useState(false)
    return (
        <div>
         <Modal className="modal-dialog-centered modal-xl" contentClassName="modal-content-abc" isOpen={open} toggle={() => setOpen(!open)}>
           <ModalCustom />
            </Modal>
            <Header onClick={() => setOpen(!open)}/>
         <section class="checkout-wrapper pt-50">
    <div class="container">
        <form class="checkout-steps-form-content">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="checkout-steps-form-style-1 mt-20 mb-20">
                    <ul id="checkout-steps">
                        <li class="vjopt_activeli p-3">
                            <div class="row">
                                <div class="col-sm-12 col-md-12 col-lg-12">
                                    <h3>Personalize Your Gift</h3>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="single-form form-default">
                                            <label>Delivery Date and Time</label>
                                            <div class="row">
                                                <div class="col-md-6 form-input">
                                                    <input type="datetime-local" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-12">
                                        <div class="single-form form-default">
                                        <label>Occasion</label>
                                        </div>
                                        <div class="home-office-other mt-0">
                                        <div>
                                          <input type="radio" id="Occasion1" name="Occasion" value="1" checked />
                                          <label for="Occasion1">
                                            <p>Birthday</p>
                                          </label>
                                        </div>
                                        <div>
                                          <input type="radio" id="Occasion2" name="Occasion" value="2" />
                                          <label for="Occasion2">
                                            <p>Anniversary</p>
                                          </label>
                                        </div>
                                        <div>
                                          <input type="radio" id="Occasion3" name="Occasion" value="3" />
                                          <label for="Occasion3">
                                            <p>Other</p>
                                          </label>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="single-form form-default">
                                            <label>Personal Message</label>
                                            <div class="form-input">
                                                <textarea rows="5"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="single-form form-default">
                                            <label>Sender Information(Name & Number)</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="single-form form-default">
                                            <label>Name</label>
                                            <div class="form-input">
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="single-form form-default">
                                            <label>Mobile Nomber</label>
                                            <div class="form-input">
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="single-form form-default">
                                    <input type="checkbox" id="Keep_Surprise" /> <label for="Keep_Surprise">Keep Surprise (Hide Sender Information from Recipient)</label>
                                    </div>
                                    </div>
                                </div>
                            
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="checkout-sidebar pt-20 mb-20">
                     <div class="address-box1">
                        <label class="address-b">
                            <p> <span>thomas william</span>
                            <span>Home</span></p>
                        </label>
                                        
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa, Delhi, - 110019, Delhi</p>
                        <p>Mobile : 8989895656</p>
                                <p class="btn-remove-edit">
                                              <a href="address.html" class="btn btn-cancel" >Change Address</a>
                                              </p>
                                        </div>
                    <div class="checkout-sidebar-price-table mt-30">
                        <h5 class="title">Price Details (4 items)</h5>
                        <div class="sub-total-price">
                            <div class="total-price">
                                <p class="value">Subtotal Price:</p>
                                <p class="price"><i class="fa fa-inr" aria-hidden="true"></i> 2,263.00</p>
                            </div>
                            <div class="total-price shipping">
                                <p class="value">Shipping Cost (+):</p>
                                <p class="price"><i class="fa fa-inr" aria-hidden="true"></i> 10.50</p>
                            </div>
                            <div class="total-price discount">
                                <p class="value">Discount (-):</p>
                                <p class="price"><i class="fa fa-inr" aria-hidden="true"></i> 10.50</p>
                            </div>
                        </div>
                        <div class="total-payable">
                            <div class="payable-price">
                                <p class="value">Total Payable:</p>
                                <p class="price"><i class="fa fa-inr" aria-hidden="true"></i> 2,274.00</p>
                            </div>
                        </div>
                        <div class="text-center">
                                        <div class="single-form form-default">
                                    <input type="checkbox" id="iagree" /> <label for="iagree">I agree with the <a href="terms-and-conditions.html" class="theme-color"><b>Terms and Conditions</b></a></label>
                                    </div>
                                    </div>
                        <div class="single-btn text-center">
                            <a href="payment.html" class="main-btn primary-btn">continue to payment</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </form>
    </div>
</section>
         <Footer />   
        </div>
    )
}

export default Personalize
