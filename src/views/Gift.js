import React, { useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/Sidebar/SideBar'
import Footer from '../components/UI/Footer'
import { Modal } from 'reactstrap'
import ModalCustom from '../components/UI/ModalCustom'
const Gift = () => {
    const [open , setOpen] = useState(false)
    return (
        <div>
            <Modal className="modal-dialog-centered modal-xl" contentClassName="modal-content-abc" isOpen={open} toggle={() => setOpen(!open)}>
           <ModalCustom />
            </Modal>
            <Header onClick={() => setOpen(!open)}/>
            <section class="customer-wrapper">
            <div class ="container-fluid">
            <div class ="row">
            <div class ="col-lg-12 m-0 p-0">
            <div class ="d-flex">
            <div className="user-left">
            <SideBar />
            </div>
            <div class ="user-right">
            <div class ="user-info-box">
            <div class ="row">
            <div class ="col-sm-12 col-md-12 col-lg-12 mb-3">
            <div class ="edit-info-btn">
            <button class ="btn btn-info" data-toggle="modal" data-target="#editUserInfo">Edit Info</button>
            </div>
            </div>
            <div class ="col-sm-12 col-md-4 col-lg-3 mb-3">
            <div class ="user-img">
            <img src="assets/img/employe.png" class ="img-fluid" />
            </div>
            </div>
            <div class ="col-sm-12 col-md-8 col-lg-9 mb-3">
            <div class ="row">
            <div class ="col-sm-12 col-md-12 col-lg-6 mb-3">
            <p class ="text-capitalize">First Name</p>
            <h5 class ="text-capitalize">thomas</h5>
            </div>
            <div class ="col-sm-12 col-md-12 col-lg-6 mb-3">
            <p class ="text-capitalize">Last Name</p>
            <h5 class ="text-capitalize">william</h5>
            </div>
            <div class ="col-sm-12 col-md-12 col-lg-6 mb-3">
            <p class ="text-capitalize">Email Id</p>
            <h5 class ="text-capitalize">thomas.william @gmail.com</h5>
            </div>
            <div class ="col-sm-12 col-md-12 col-lg-6 mb-3">
            <p class ="text-capitalize">Mobile No.</p>
            <h5 class ="text-capitalize">+91 9898 6969 66</h5>
            </div>
            <div class ="col-sm-12 col-md-12 col-lg-6 mb-3">
            <p class ="text-capitalize">Alternate Mobile No.</p>
            <h5 class ="text-capitalize">+91 9898 6969 66</h5>
            </div>
            <div class ="col-sm-12 col-md-12 col-lg-6 mb-3">
            <p class ="text-capitalize">Address</p>
            <h5 class ="text-capitalize">Lorem ipsum dolor sit amet,</h5>
            </div>
            <div class ="col-sm-12 col-md-12 col-lg-6 mb-3">
            <p class ="text-capitalize">City</p>
            <h5 class ="text-capitalize">delhi</h5>
            </div>
            <div class ="col-sm-12 col-md-12 col-lg-6 mb-3">
            <p class ="text-capitalize">Zip Code</p>
            <h5>110019</h5>
            </div>
            <div class ="col-sm-12 col-md-12 col-lg-6 mb-3">
            <p class ="text-capitalize">Region/State</p>
            <h5 class ="text-capitalize">delhi</h5>
            </div>
            <div class ="col-sm-12 col-md-12 col-lg-6 mb-3">
            <p class ="text-capitalize">Country</p>
            <h5 class ="text-capitalize">india</h5>
            </div>
            <div class ="col-sm-12 col-md-12 col-lg-6 mb-3">
            <p class ="text-capitalize">Wallet Amount</p>
            <h5 class ="text-capitalize">Rs.800</h5>
            </div>
            <div class ="col-sm-12 col-md-12 col-lg-6 mb-3">
            <p class ="text-capitalize">Total Orders</p>
            <h5 class ="text-capitalize">8</h5>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
                
            </section >
    <Footer />
        </div >
    )
}

export default Gift
