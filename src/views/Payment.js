import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/UI/Footer'
import { Modal } from 'reactstrap'
import ModalCustom from '../components/UI/ModalCustom'
const Payment = () => {
    const [open , setOpen] = useState(false)
    return (
        <div>
            <Modal className="modal-dialog-centered modal-xl" contentClassName="modal-content-abc" isOpen={open} toggle={() => setOpen(!open)}>
           <ModalCustom />
            </Modal>
            <Header onClick={() => setOpen(!open)}/>
              <section class="checkout-wrapper pt-50">
    <div class="container">
        <div class="row justify-content-center flip-cols">
            <div class="col-lg-8">
                <div class="checkout-steps-form-style-1 mt-20 mb-20">
                    <ul id="checkout-steps">
                        <li class="vjopt_activeli p-3">
                            <div class="row">
                                <div class="col-sm-12 col-md-12 col-lg-12">
                                    <h3>Choose Payment Method</h3>
                               <section class="tabs-payment">
                                  <div class="container vertical-tabs">
                                    <div class="row">
                                      <div class="col-sm-12 col-md-3 col-lg-3">
                                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                          <a class="nav-link active" id="v-pills-one-tab" data-toggle="pill" href="#v-pills-one" role="tab" aria-controls="v-pills-one" aria-selected="true">credit/debit card</a>
                                          <a class="nav-link" id="v-pills-two-tab" data-toggle="pill" href="#v-pills-two" role="tab" aria-controls="v-pills-two" aria-selected="false">netbanking</a>
                                          <a class="nav-link" id="v-pills-three-tab" data-toggle="pill" href="#v-pills-three" role="tab" aria-controls="v-pills-three" aria-selected="false">paytm</a>
                                          <a class="nav-link" id="v-pills-four-tab" data-toggle="pill" href="#v-pills-four" role="tab" aria-controls="v-pills-four" aria-selected="false">google pay</a>
                                          <a class="nav-link" id="v-pills-five-tab" data-toggle="pill" href="#v-pills-five" role="tab" aria-controls="v-pills-five" aria-selected="false">UPI</a>
                                          <a class="nav-link" id="v-pills-six-tab" data-toggle="pill" href="#v-pills-six" role="tab" aria-controls="v-pills-six" aria-selected="false">phonePe</a>
                                          <a class="nav-link" id="v-pills-seven-tab" data-toggle="pill" href="#v-pills-seven" role="tab" aria-controls="v-pills-seven" aria-selected="false">payPal</a>
                                          <a class="nav-link" id="v-pills-eight-tab" data-toggle="pill" href="#v-pills-eight" role="tab" aria-controls="v-pills-eight" aria-selected="false">wallets</a>
                                          <a class="nav-link" id="v-pills-nine-tab" data-toggle="pill" href="#v-pills-nine" role="tab" aria-controls="v-pills-nine" aria-selected="false">pay later</a>
                                          <a class="nav-link" id="v-pills-ten-tab" data-toggle="pill" href="#v-pills-ten" role="tab" aria-controls="v-pills-ten" aria-selected="false">cash on delivery</a>
                                        </div>
                                </div>
                                      <div class="col-sm-12 col-md-9 col-lg-9">
                                        <div class="tab-content" id="v-pills-tabContent">
                                          <div class="tab-pane fade show active" id="v-pills-one" role="tabpanel" aria-labelledby="v-pills-one-tab">
                                              <form class="">
                                              
                                              <div class="row checkout-payment-form">
                                                <div class="col-sm-12 col-md-12 col-lg-12 single-form form-default mt-0">
                                                    <label>Cardholder Name</label>
                                                    <div class="form-input">
                                                        <input type="text" placeholder="Cardholder Name" />
                                                    </div>
                                                </div>
                                                <div class="col-sm-12 col-md-12 col-lg-12 single-form form-default">
                                                    <label>Card Number</label>
                                                    <div class="form-input">
                                                        <input id="credit-input" type="text" placeholder="0000 0000 0000 0000" />
                                                        <img src="assets/img/card.png" alt="card" />
                                                    </div>
                                                </div>
                                                    <div class="col-sm-12 col-md-6 col-lg-6 single-form form-default">
                                                        <label>Expiration</label>
                                                        <div class="expiration d-flex">
                                                            <div class="form-input">
                                                                <input type="text" placeholder="MM/YY" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-6 col-lg-6 single-form form-default">
                                                        <label>CVC/CVV <span><i class="mdi mdi-alert-circle"></i></span></label>
                                                        <div class="form-input">
                                                            <input type="text" placeholder="***" />
                                                        </div>
                                                    </div>
                                                <div class="single-form form-default">
                                                    <button class="btn btn-success w-100">Pay <i class="fa fa-inr" aria-hidden="true"></i> 2,274 Now</button>
                                                </div>
                                                  
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-4 text-center">
                                                    <small>Making Payment on BookYourGift is 100% safe. Your transaction is processed through a secure https internet connection based on secure socket layer technology.</small>
                                                </div>
                                            </div>
                                              </form>
                                          </div>
                                          <div class="tab-pane fade" id="v-pills-two" role="tabpanel" aria-labelledby="v-pills-two-tab">
                                              <form>
                                            <div class="row">
                                              <div class="col-sm-6 col-md-4 col-lg-4">
                                                <a href="#" class="bank-logo"><img src="assets/img/HDFC-Bank-logo.png" class="img-fluid" /></a>
                                                </div>
                                              <div class="col-sm-6 col-md-4 col-lg-4">
                                                <a href="#" class="bank-logo"><img src="assets/img/sbi.png" class="img-fluid" /></a>
                                                </div>
                                              <div class="col-sm-6 col-md-4 col-lg-4">
                                                <a href="#" class="bank-logo"><img src="assets/img/icici_bank_logo_symbol.png" class="img-fluid" /></a>
                                                </div>
                                              <div class="col-sm-6 col-md-4 col-lg-4">
                                                <a href="#" class="bank-logo"><img src="assets/img/Axis_Bank_logo_logotype.png" class="img-fluid" /></a>
                                                </div>
                                              <div class="col-sm-6 col-md-4 col-lg-4">
                                                <a href="#" class="bank-logo"><img src="assets/img/Yes_Bank_logo.png" class="img-fluid" /></a>
                                                </div>
                                              <div class="col-sm-6 col-md-4 col-lg-4">
                                                <a href="#" class="bank-logo"><img src="assets/img/Kotak_Mahindra_Bank_logo.png" class="img-fluid" /></a>
                                                </div>
                                                
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-4 text-center">
                                                <p>Other Option:</p>
                                                </div>
                                                
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-2">
                                                    <div class="select-elements select-style-2">
                                            <div class="select-items select">
                                                <select name="bankname">
                                                  <option selected="selected" value="0">--Select --</option>
                                                  <option value="1">ALLAHABAD BANK </option>
                                                  <option value="2">ANDHRA BANK</option>
                                                  <option value="3">AXIS BANK</option>
                                                  <option value="29">STATE BANK OF INDIA</option>
                                                  <option value="4">BANK OF BARODA</option>
                                                  <option value="29">UCO BANK</option>
                                                  <option value="29">UNION BANK OF INDIA</option>
                                                  <option value="5">BANK OF INDIA</option>
                                                  <option value="20">BANDHAN BANK LIMITED</option>
                                                  <option value="7">CANARA BANK</option>
                                                  <option value="32">GRAMIN VIKASH BANK</option>
                                                  <option value="8">CORPORATION BANK</option>
                                                  <option value="9">INDIAN BANK</option>
                                                  <option value="10">INDIAN OVERSEAS BANK</option>
                                                  <option value="11">ORIENTAL BANK OF COMMERCE</option>
                                                  <option value="12">PUNJAB AND SIND BANK</option>
                                                  <option value="13">PUNJAB NATIONAL BANK</option>
                                                  <option value="14">RESERVE BANK OF INDIA</option>
                                                  <option value="15">SOUTH INDIAN BANK</option>
                                                  <option value="16">UNITED BANK OF INDIA</option>
                                                  <option value="17">CENTRAL BANK OF INDIA</option>
                                                  <option value="18">VIJAYA BANK</option>
                                                  <option value="19">DENA BANK</option>
                                                  <option value="21">BHARATIYA MAHILA BANK LIMITED</option>
                                                  <option value="22">FEDERAL BANK LTD </option>
                                                  <option value="23">HDFC BANK LTD</option>
                                                  <option value="24">ICICI BANK LTD</option>
                                                  <option value="25">IDBI BANK LTD</option>
                                                  <option value="66">PAYTM BANK</option>
                                                  <option value="29">FINO PAYMENT BANK</option>
                                                  <option value="26">INDUSIND BANK LTD</option>
                                                  <option value="27">KARNATAKA BANK LTD</option>
                                                  <option value="28">KOTAK MAHINDRA BANK</option>
                                                  <option value="30">YES BANK LTD</option>
                                                  <option value="31">SYNDICATE BANK</option>
                                                  <option value="5">BANK OF INDIA</option>
                                                  <option value="6">BANK OF MAHARASHTRA</option>
                                                </select>
                                                </div>
                                              </div>
                                                </div>
                                                
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-4">
                                                    <button class="btn btn-success w-100">Pay <i class="fa fa-inr" aria-hidden="true"></i> 2,274 Now</button>
                                                </div>
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-4 text-center">
                                                    <small>Making Payment on BookYourGift is 100% safe. Your transaction is processed through a secure https internet connection based on secure socket layer technology.</small>
                                                </div>
                                              </div>
                                              </form>
                                          </div>
                                            
                                          <div class="tab-pane fade" id="v-pills-three" role="tabpanel" aria-labelledby="v-pills-three-tab">
                                            <form>
                                            <div class="row">
                                              <div class="col-sm-12 col-md-12 col-lg-12">
                                                  <div class="pay-logo text-center">
                                                <img src="assets/img/paytm.png" class="img-fluid" />
                                                  </div>
                                                </div>
                                                
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-4">
                                                    <button class="btn btn-success w-100">Pay <i class="fa fa-inr" aria-hidden="true"></i> 2,274 Now</button>
                                                </div>
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-4 text-center">
                                                    <small>Making Payment on BookYourGift is 100% safe. Your transaction is processed through a secure https internet connection based on secure socket layer technology.</small>
                                                </div>
                                              </div>
                                              </form>
                                          </div>
                                          <div class="tab-pane fade" id="v-pills-four" role="tabpanel" aria-labelledby="v-pills-four-tab">
                                            <form>
                                            <div class="row">
                                              <div class="col-sm-12 col-md-12 col-lg-12">
                                                  <div class="pay-logo text-center">
                                                <img src="assets/img/google-pay-logo.png" class="img-fluid" />
                                                  </div>
                                                </div>
                                                <div class="col-sm-12 col-md-12 col-lg-12">
                                                <div class="googlepayinput select-elements select-style-2">
                                                    <input type="text" class="form-control upi-id" placeholder="Google Pay UPI ID" />
                                                    <input type="text" value="@" readonly class="form-control ulio" />
                                                    <div class="select-items select">
                                                    <select>
                                                        <option>Bank Name</option>
                                                        <option value="okhdfcbank">okhdfcbank</option>
                                                        <option value="oksbi">oksbi</option>
                                                        <option value="okaxis">okaxis</option>
                                                        <option value="okicici">okicici</option>
                                                        </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-2">
                                                <p>You will recieve a collect request from BookYourGift in your GooglePay app</p>
                                                </div>
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-4">
                                                    <button class="btn btn-success w-100">Pay <i class="fa fa-inr" aria-hidden="true"></i> 2,274 Now</button>
                                                </div>
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-4 text-center">
                                                    <small>Making Payment on BookYourGift is 100% safe. Your transaction is processed through a secure https internet connection based on secure socket layer technology.</small>
                                                </div>
                                              </div>
                                              </form>
                                          </div>
                                          <div class="tab-pane fade" id="v-pills-five" role="tabpanel" aria-labelledby="v-pills-five-tab">
                                            <form>
                                            <div class="row">
                                              <div class="col-sm-12 col-md-12 col-lg-12">
                                                  <div class="pay-logo text-center">
                                                <img src="assets/img/upi.png" class="img-fluid" />
                                                  </div>
                                                </div>
                                                <div class="col-sm-12 col-md-12 col-lg-12">
                                                <div class="googlepayinput select-elements select-style-2">
                                                    <input type="text" class="form-control" placeholder="yourupi@bank" />
                                                    </div>
                                                </div>
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-2">
                                                <p>You will recieve a collect request from BookYourGift in the UPI/PSP app you used to create your VPA</p>
                                                </div>
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-4">
                                                    <button class="btn btn-success w-100">Pay <i class="fa fa-inr" aria-hidden="true"></i> 2,274 Now</button>
                                                </div>
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-4 text-center">
                                                    <small>Making Payment on BookYourGift is 100% safe. Your transaction is processed through a secure https internet connection based on secure socket layer technology.</small>
                                                </div>
                                              </div>
                                              </form>
                                          </div>
                                          <div class="tab-pane fade" id="v-pills-six" role="tabpanel" aria-labelledby="v-pills-six-tab">
                                            <form>
                                            <div class="row">
                                              <div class="col-sm-12 col-md-12 col-lg-12">
                                                  <div class="pay-logo text-center">
                                                <img src="assets/img/PhonePe-Logo.wine.png" class="img-fluid" />
                                                  </div>
                                                </div>
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-4">
                                                    <button class="btn btn-success w-100">Pay <i class="fa fa-inr" aria-hidden="true"></i> 2,274 Now</button>
                                                </div>
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-4 text-center">
                                                    <small>Making Payment on BookYourGift is 100% safe. Your transaction is processed through a secure https internet connection based on secure socket layer technology.</small>
                                                </div>
                                              </div>
                                              </form>
                                          </div>
                                          <div class="tab-pane fade" id="v-pills-seven" role="tabpanel" aria-labelledby="v-pills-seven-tab">
                                            <form>
                                            <div class="row">
                                              <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
                                                  <div class="text-center">
                                                <h4>Pay with PayPal</h4>
                                                      <p>You don't need to have PayPal account for this</p>
                                                  </div>
                                                </div>
                                              <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
                                                  <div class="">
                                                <h6>CHOOSE YOUR CURRENCY</h6>
                                                  </div>
                                                </div>
                                              <div class="col-sm-12 col-md-12 col-lg-12">
                                                  <div class="row single-radio CURRENCY">
                                                  <div class="col-sm-12 col-md-12 col-lg-12">
                                                      <input type="radio" id="USD" checked class="radio-input" name="CURRENCY" />
                                                    <label for="USD" class="radio-label active"> <span class="radio-border"></span> <span class="">USD (United State Dollar)</span> 
                                                      <p>USD 30.71 </p>
                                                      </label>
                                                      </div>

                                                    <div class="col-sm-12 col-md-6 col-lg-6">
                                                        <input type="radio" id="CAD" class="radio-input" name="CURRENCY" />
                                                        <label for="CAD" class="radio-label"><span class="radio-border"></span> <span class="">CAD (Canadian Dollar)</span>
                                                        <p>CAD 38.25</p>
                                                        </label>
                                                      </div>

                                                    <div class="col-sm-12 col-md-6 col-lg-6">
                                                        <input type="radio" id="AUD" class="radio-input" name="CURRENCY" />
                                                        <label for="AUD" class="radio-label"><span class="radio-border"></span> <span class="">AUD (Australian Dollar)</span>
                                                        <p>AUD 41.50</p>
                                                        </label>
                                                      </div>

                                                    <div class="col-sm-12 col-md-6 col-lg-6">
                                                        <input type="radio" id="GBP" class="radio-input" name="CURRENCY" />
                                                        <label for="GBP" class="radio-label"><span class="radio-border"></span> <span class="">GBP (British Pound)</span>
                                                        <p>GBP 22.77</p>
                                                        </label>
                                                      </div>

                                                    <div class="col-sm-12 col-md-6 col-lg-6">
                                                        <input type="radio" id="SGD" class="radio-input" name="CURRENCY" />
                                                        <label for="SGD" class="radio-label"><span class="radio-border"></span> <span class="">SGD (Singapore Dollar)</span>
                                                        <p>SGD 41.43</p>
                                                        </label>
                                                      </div>

                                                    <div class="col-sm-12 col-md-6 col-lg-6">
                                                        <input type="radio" id="THB" class="radio-input" name="CURRENCY" />
                                                        <label for="THB" class="radio-label"><span class="radio-border"></span> <span class="">THB (Thailand Baht)</span>
                                                        <p>THB 1014.46</p>
                                                        </label>
                                                      </div>

                                                    <div class="col-sm-12 col-md-6 col-lg-6">
                                                        <input type="radio" id="EUR" class="radio-input" name="CURRENCY" />
                                                        <label for="EUR" class="radio-label"><span class="radio-border"></span> <span class="">EUR (Euro)</span>
                                                        <p>EUR 26.56</p>
                                                        </label>
                                                      </div>

                                                    </div>
                                                </div>
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-4">
                                                    <button class="btn btn-success w-100">Pay <i class="fa fa-inr" aria-hidden="true"></i> 2,274 Now</button>
                                                </div>
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-4 text-center">
                                                    <small>Making Payment on BookYourGift is 100% safe. Your transaction is processed through a secure https internet connection based on secure socket layer technology.</small>
                                                </div>
                                              </div>
                                              </form>
                                          </div>
                                            
                                            
                                          <div class="tab-pane fade" id="v-pills-eight" role="tabpanel" aria-labelledby="v-pills-eight-tab">
                                              <form>
                                            <div class="row">
                                              <div class="col-sm-6 col-md-4 col-lg-4">
                                                <a href="#" class="bank-logo"><img src="assets/img/MobiKwik-Logo.wine.png" class="img-fluid" /></a>
                                                </div>
                                              <div class="col-sm-6 col-md-4 col-lg-4">
                                                <a href="#" class="bank-logo"><img src="assets/img/Amazon_Pay-Logo.wine.png" class="img-fluid"/></a>
                                                </div>
                                              <div class="col-sm-6 col-md-4 col-lg-4">
                                                <a href="#" class="bank-logo"><img src="assets/img/ola-money.png" class="img-fluid" /></a>
                                                </div>
                                                
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-4 text-center">
                                                <p>More Wallet options:</p>
                                                </div>
                                                
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-2">
                                                    <div class="select-elements select-style-2">
                                            <div class="select-items select">
                                                <select name="bankname">
                                                   <option noselect="" value="">Choose a Wallet</option>
                                                    <option value="mobikwik">Mobikwik</option>
                                                    <option value="amazonpay">Amazon Pay</option>
                                                    <option value="freecharge">FreeCharge</option>
                                                    <option value="olamoney">Ola Money</option>
                                                    <option value="jiomoney">JioMoney</option>
                                                    <option value="oxigen">Oxigen</option>
                                                    <option value="payzapp">HDFC Bank - PayZapp</option>
                                                    <option value="airtelmoney">Airtel Money</option>
                                                </select>
                                                </div>
                                              </div>
                                                </div>
                                                
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-4">
                                                    <button class="btn btn-success w-100">Pay <i class="fa fa-inr" aria-hidden="true"></i> 2,274 Now</button>
                                                </div>
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-4 text-center">
                                                    <small>Making Payment on BookYourGift is 100% safe. Your transaction is processed through a secure https internet connection based on secure socket layer technology.</small>
                                                </div>
                                              </div>
                                              </form>
                                          </div>
                                            
                                          <div class="tab-pane fade" id="v-pills-nine" role="tabpanel" aria-labelledby="v-pills-nine-tab">
                                              <form>
                                            <div class="row">
                                              <div class="col-sm-6 col-md-4 col-lg-4">
                                                <a href="#" class="bank-logo"><img src="assets/img/sezzle-logo-and-tagline.png" class="img-fluid" /></a>
                                                </div>
                                                
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-2">
                                                    <div class="select-elements select-style-2">
                                            <div class="select-items select">
                                                <select name="bankname">
                                                   <option noselect="" value="">Choose a Pay Later Account</option>
                                                    <option value="Sezzle Pay Later">Sezzle Pay Later</option>
                                                </select>
                                                </div>
                                              </div>
                                                </div>
                                                
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-4">
                                                    <button class="btn btn-success w-100">Pay <i class="fa fa-inr" aria-hidden="true"></i> 2,274 Now</button>
                                                </div>
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-4 text-center">
                                                    <small>Making Payment on BookYourGift is 100% safe. Your transaction is processed through a secure https internet connection based on secure socket layer technology.</small>
                                                </div>
                                              </div>
                                              </form>
                                          </div>
                                            
                                          <div class="tab-pane fade" id="v-pills-ten" role="tabpanel" aria-labelledby="v-pills-ten-tab">
                                              <form>
                                            <div class="row">
                                              <div class="col-sm-12 col-md-12 col-lg-12">
                                                <div class="text-center">Pay by Cash, when you receive your order.</div>
                                                </div>
                                                
                                                <div class="col-sm-12 col-md-12 col-lg-12 mt-4">
                                                    <a href="completed-order.html" class="btn btn-success w-100">Place Order</a>
                                                </div>
                                              </div>
                                              </form>
                                          </div>
                                        </div> 
                                      </div>
                                    </div>
                                  </div>
                                </section>
                            
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
                        <div class="total-payable">
                                <p><b>SENDER DETAIL</b> <a href="personalize.html">(Change)</a></p>
                                <p>Lorem ipsum</p>
                                <p>96969696</p>
                        </div>
                        <div class="total-payable">
                                <p><b>DELIVERY TIME</b> <a href="personalize.html">(Change)</a></p>
                                <p>2021-11-21 (10AM - 2 PM)</p>
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

export default Payment
