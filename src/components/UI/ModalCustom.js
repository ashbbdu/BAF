import React from 'react'
import { FormGroup , Input , Label , Button } from 'reactstrap'

const ModalCustom = () => {
    return (
        <div class="modal-body p-0">
            <div class="row align-items-center">
                <div class="col-sm-12 col-md-6 col-lg-6 login-left-bg">
                    <div class="footer-logo">
                        <img src="assets/img/footer-logo.png" class="img-fluid" />
                    </div>
                    <img src="assets/img/login-img.png" class="img-fluid" />
                    <div class="app-btn mt-4">
                        <a href="#"><img src="assets/img/applestore.png" class="img-fluid" /></a>
                        <a href="#"><img src="assets/img/googleplay.png" class="img-fluid" /></a>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <form class="login-form">
                        <div class="row">
                            <div class="form-group col-sm-12 col-md-12 col-lg-12 mb-4 text-center">
                                <h3>Log In</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            </div>
                            <div class="form-group col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
                                <div class="social-login">
                                    <a href="#"><img src="assets/img/Google.png" class="img-fluid" /> Login with Google</a>
                                </div>
                                <div class="social-login">
                                    <a href="#"><img src="assets/img/facebook.png" class="img-fluid" /> Login with Facebook</a>
                                </div>
                            </div>
                            <div class="form-group col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
                                <p>or</p>
                            </div>
                            {/* <div class="form-group col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
                                <div class="position-relative">
                                    <input type="tel" id="phone" name="phone" class="form-control" placeholder="Mobile Number" />
                                    <img src="assets/img/mobile-active.png" class="img-fluid input-img" />
                                </div>
                            </div> */}
                            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                            <Label
                                className="me-sm-2"
                                for="exampleEmail"
                            >
                                Email
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="Enter Your Email"
                                type="email"
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                            <Label
                                className="me-sm-2"
                                for="examplePassword"
                            >
                                Password
                            </Label>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="Enter Password"
                                type="password"
                            />
                        </FormGroup>
                            <div class="form-group col-sm-12 col-md-12 col-lg-12 mb-3 mt-3 text-center">
                                <button class="btn login-mbl" data-dismiss="modal" data-toggle="modal" data-target="#otpmoda">Login</button>
                            </div>
                        </div>
                       
                
                    </form>
                </div>
            </div>
        </div>


    )
}

export default ModalCustom
