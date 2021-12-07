import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/UI/Footer'
import { Modal } from 'reactstrap'
import ModalCustom from '../components/UI/ModalCustom'
const ContactUs = () => {
    const [open , setOpen] = useState(false)
    return (
        <div>
             <Modal className="modal-dialog-centered modal-xl" contentClassName="modal-content-abc" isOpen={open} toggle={() => setOpen(!open)}>
           <ModalCustom />
            </Modal>
            <Header onClick={() => setOpen(!open)}/>
            <section class="sec-bg product-wrapper pt-20 pb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="mb-10">
                                <h1 class="heading-1 font-weight-700">How can we help?</h1>
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
                            <div class="contact-box">
                                <div class="text-center">
                                    <h5>Happy To Help</h5>
                                    <p>8AM to 11PM</p>
                                </div>
                                <form class="checkout-steps-form-content" style="">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="single-form form-default">
                                                <div class="form-input">
                                                    <input type="text" placeholder="Email Address" value="thomas.william@gmail.com" readonly />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="single-form form-default">
                                                <div class="form-input">
                                                    <input type="text" placeholder="First Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="single-form form-default">
                                                <div class="form-input">
                                                    <input type="text" placeholder="Mobile No." />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="single-form form-default">
                                                <div class="form-input">
                                                    <textarea rows="3" placeholder="Your message, queries or feedback"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
                                            <button type="submit" class="btn btn-success">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
                            <div class="contact-box">
                                <div class="text-center">
                                    <h5>Talk To Us</h5>
                                    <p>8AM to 11PM</p>
                                    <p><a href="tel:+917885896574" class="theme-color mt-3"><i class="fa fa-phone" aria-hidden="true"></i> +91 788 5896 574</a> &nbsp;&nbsp;&nbsp; <a href="tel:+917885896574" class="theme-color mt-3"><i class="fa fa-phone" aria-hidden="true"></i> +91 788 5896 574</a></p>
                                    <p><a href="mailto:info@BookYourGift.com" class="theme-color mt-3"><i class="fa fa-envelope" aria-hidden="true"></i> info@BookYourGift.com</a> &nbsp;&nbsp;&nbsp; <a href="mailto:career@BookYourGift.com" class="theme-color mt-3"><i class="fa fa-envelope" aria-hidden="true"></i> career@BookYourGift.com</a></p>
                                    <p><a href="mailto:corporate@BookYourGift.in" class="theme-color mt-3"><i class="fa fa-envelope" aria-hidden="true"></i> corporate@BookYourGift.in</a></p>

                                    <h6 class="mb-2 mt-3">Address:</h6>
                                    <p>No.103/5, Ground Floor</p>
                                    <p>60 feet road</p>
                                    <p>Doddanekundi, Kartik Nagar, Marathahalli</p>
                                    <p>Bangalore - 560037 Opposite to State Bank Of India</p>
                                    <p>Karnataka, India</p>

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

export default ContactUs
