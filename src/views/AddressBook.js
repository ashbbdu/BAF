import React, { useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/Sidebar/SideBar'
import Footer from '../components/UI/Footer'
import { Modal } from 'reactstrap'
import ModalCustom from '../components/UI/ModalCustom'
const AddressBook = () => {
    const [open , setOpen] = useState(false)
    return (
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
                <div class="row mt-5">
                    <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <div class="bg-white shadow p-2">
                        <h6 class="text-capitalize">name: thomas</h6>
                        <p>Address:</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa, Delhi, - 110019, Delhi</p>
                        <p>Email : BookYourGift@gmail.com</p>
                        <p>Mobile : 8989895656</p>
                        <p>Place : Home</p>
                        <p class="btn-remove-edit">
                           <a href="#"><i class="fa fa-trash" aria-hidden="true"></i> Remove</a>
                                <a href="#" data-toggle="modal" data-target="#editUserAddress"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Address</a>
                            </p>
                         </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <div class="bg-white shadow p-2">
                        <h6 class="text-capitalize">name: thomas</h6>
                        <p>Address:</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa, Delhi, - 110019, Delhi</p>
                        <p>Email : BookYourGift@gmail.com</p>
                        <p>Mobile : 8989895656</p>
                        <p>Place : Home</p>
                        <p class="btn-remove-edit">
                           <a href="#"><i class="fa fa-trash" aria-hidden="true"></i> Remove</a>
                                <a href="#" data-toggle="modal" data-target="#editUserAddress"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Address</a>
                            </p>
                         </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <div class="bg-white shadow p-2">
                        <h6 class="text-capitalize">name: thomas</h6>
                        <p>Address:</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa, Delhi, - 110019, Delhi</p>
                        <p>Email : BookYourGift@gmail.com</p>
                        <p>Mobile : 8989895656</p>
                        <p>Place : Home</p>
                        <p class="btn-remove-edit">
                           <a href="#"><i class="fa fa-trash" aria-hidden="true"></i> Remove</a>
                                <a href="#" data-toggle="modal" data-target="#editUserAddress"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Address</a>
                            </p>
                         </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <div class="bg-white shadow p-2">
                        <h6 class="text-capitalize">name: thomas</h6>
                        <p>Address:</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa, Delhi, - 110019, Delhi</p>
                        <p>Email : BookYourGift@gmail.com</p>
                        <p>Mobile : 8989895656</p>
                        <p>Place : Home</p>
                        <p class="btn-remove-edit">
                           <a href="#"><i class="fa fa-trash" aria-hidden="true"></i> Remove</a>
                                <a href="#" data-toggle="modal" data-target="#editUserAddress"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Address</a>
                            </p>
                         </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <div class="bg-white shadow p-2">
                        <h6 class="text-capitalize">name: thomas</h6>
                        <p>Address:</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa, Delhi, - 110019, Delhi</p>
                        <p>Email : BookYourGift@gmail.com</p>
                        <p>Mobile : 8989895656</p>
                        <p>Place : Home</p>
                        <p class="btn-remove-edit">
                           <a href="#"><i class="fa fa-trash" aria-hidden="true"></i> Remove</a>
                                <a href="#" data-toggle="modal" data-target="#editUserAddress"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Address</a>
                            </p>
                         </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <div class="bg-white shadow p-2">
                        <h6 class="text-capitalize">name: thomas</h6>
                        <p>Address:</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa, Delhi, - 110019, Delhi</p>
                        <p>Email : BookYourGift@gmail.com</p>
                        <p>Mobile : 8989895656</p>
                        <p>Place : Home</p>
                        <p class="btn-remove-edit">
                           <a href="#"><i class="fa fa-trash" aria-hidden="true"></i> Remove</a>
                                <a href="#" data-toggle="modal" data-target="#editUserAddress"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Address</a>
                            </p>
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
    )
}

export default AddressBook
