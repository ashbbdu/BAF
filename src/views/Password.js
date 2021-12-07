import React, { useState } from 'react'
import Header from '../components/Header';
import SideBar from '../components/Sidebar/SideBar';
import Footer from '../components/UI/Footer';
import { Modal } from 'reactstrap'
import ModalCustom from '../components/UI/ModalCustom'
const Password = () => {
    const [open , setOpen] = useState(false)
    return (
        <div>
            <div>
            <Modal className="modal-dialog-centered modal-xl" contentClassName="modal-content-abc" isOpen={open} toggle={() => setOpen(!open)}>
           <ModalCustom />
            </Modal>
            <Header onClick={() => setOpen(!open)}/>
                <section class="customer-wrapper">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 m-0 p-0">
                                <div class="d-flex">
                                    <div className="user-left">
                                        <SideBar />
                                    </div>
                                    <div class="user-right">
                                        <h4 class="mb-3">Password</h4>
                                        <div class="user-info-box">
                                            <div class="row">
                                                <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
                                                    <h5>Set Password</h5>
                                                    <hr />
                                                    <form class="row single-form form-default">
                                                        <div class="col-sm-12 col-md-6 col-lg-6 mb-3 form-input">
                                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
                                                        </div>
                                                        <div class="col-sm-12 col-md-6 col-lg-6 mb-3 form-input">
                                                            <div class="form-group mb-3">
                                                                <input type="email" class="form-control" placeholder="Email Address" value="thomas.william@gmail.com" />
                                                            </div>
                                                            <div class="form-group mb-3">
                                                                <input type="password" class="form-control" placeholder="Password" />
                                                            </div>
                                                            <div class="form-group text-center">
                                                                <button class="main-btn primary-btn">Submit</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
                                                    <h5>Change Password</h5>
                                                    <hr />
                                                    <form class="row single-form form-default">
                                                        <div class="col-sm-12 col-md-6 col-lg-6 mb-3 form-input">
                                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
                                                        </div>
                                                        <div class="col-sm-12 col-md-6 col-lg-6 mb-3 form-input">
                                                            <div class="form-group mb-3">
                                                                <input type="password" class="form-control" placeholder="Current Password" />
                                                            </div>
                                                            <div class="form-group mb-3">
                                                                <input type="password" class="form-control" placeholder="New Password" />
                                                            </div>
                                                            <div class="form-group mb-3">
                                                                <input type="password" class="form-control" placeholder="Confirm New Password" />
                                                            </div>
                                                            <div class="form-group text-center">
                                                                <button class="main-btn primary-btn">Update</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div >
    )
}

export default Password;
