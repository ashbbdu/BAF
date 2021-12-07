import React, { useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/Sidebar/SideBar'
import { Modal } from 'reactstrap'
import ModalCustom from '../components/UI/ModalCustom'
const Coupons = () => {
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
                <div class="row mt-5">
                    <div class="col-sm-12 col-md-12 col-lg-12 mb-4">
                    <h6 class="mb-3">How do you apply Coupon</h6>
                        <div class="usr-apply-Coupon bg-white shadow p-3">
                        <ol>
                            <li>Ensure that you have items in your shopping bag
                            <ul>
                                <li>Copy your coupon code available at the site or from other sources<br />
                                    <img src="assets/img/coupon-img-1.png" class="img-fluid" /></li>
                                <li>Browse/search for items you want to purchase on BookYourGift<br />
                                    <img src="assets/img/coupon-img-2.png" class="img-fluid" /></li>
                                <li>Add your chosen items to your shopping Cart.<br />
                                    <img src="assets/img/coupon-img-3.png" class="img-fluid" /></li>
                                </ul>
                            </li>
                            <li>Click the 'Add Coupon' link in your Order summary
                            <ul>
                                <li>Paste Your coupon code and click on Apply<br /><img src="assets/img/coupon-img-4.png" class="img-fluid" /></li>
                                </ul>
                            </li>
                            <li>Voila! You are done!
                            <ul>
                                <li>Your final Cart will reflect the discount earned by applying your chosen coupon.<br /><img src="assets/img/coupon-img-6.png" class="img-fluid" /></li>
                                </ul>
                            </li>
                            </ol>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</section>

        </div>
        </div>
    )
}

export default Coupons
