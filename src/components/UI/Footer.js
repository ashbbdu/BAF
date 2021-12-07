import React from 'react'

const Footer = () => {
    return (
        <div>
           <section class="footer-style-3 pt-30 pb-30">
        <div class="container">
            <div class="footer-widget-wrapper pt-20">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="footer-widget">

                            <ul class="footer-link">
                                <li><a href="about-us.html">about us</a></li>
                                <li><a href="faqs.html">FAQ</a></li>
                                <li><a href="contact-us.html">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="footer-widget">
                            <ul class="footer-link">
                                <li><a href="terms-and-conditions.html#refundPolicy">Refund Policy</a></li>
                                <li><a href="terms-and-conditions.html#cancelPolicy">Cancellation Policy</a></li>
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="terms-and-conditions.html">Terms And Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="footer-top">
                            <div class="footer-logo text-center">
                            <a href="index.html">
                                <img src="assets/img/footer-logo.png" alt="" />
                            </a>
                        </div>
                        <h5 class="heading-5 text-white text-center mt-30">Follow Us</h5>
                        <ul class="footer-follow text-center">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div class="footer-copyright text-center">
                <p>©2021 BookYourGift All Rights Reserved
                </p>
        </div>
    </section> 
        </div>
    )
}

export default Footer;