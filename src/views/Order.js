import React, { useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/Sidebar/SideBar'
import Footer from '../components/UI/Footer'
import { Modal } from 'reactstrap'
import ModalCustom from '../components/UI/ModalCustom'
const Order = () => {
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
                                    <h4 class="mb-3">My Orders</h4>
                                    <div class="table-responsive">
                                        <table class="table order-table">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>image</th>
                                                    <th>product name</th>
                                                    <th>payment type</th>
                                                    <th>quantity</th>
                                                    <th>price</th>
                                                    <th>status</th>
                                                    <th>action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>#123456</td>
                                                    <td>
                                                        <div class="product-thumb">
                                                            <img src="assets/img/earrings.jpg" alt="Product" />
                                                        </div>
                                                    </td>
                                                    <td>earrings</td>
                                                    <td>COD</td>
                                                    <td>1</td>
                                                    <td><i class="fa fa-inr" aria-hidden="true"></i> 1,400</td>
                                                    <td>pending</td>
                                                    <td>
                                                        <div class="d-flex justify-content-center action">
                                                            <button class="btn" title="view Order"><a href="order-detail.html"><img src="assets/img/view-pro.png" /></a></button>
                                                            <button class="btn" title="Cancel Order"><a href="#"><img src="assets/img/reject.png" /></a></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#123456</td>
                                                    <td>
                                                        <div class="product-thumb">
                                                            <img src="assets/img/coffee-mugs.png" alt="Product" />
                                                        </div>
                                                    </td>
                                                    <td>coffee mugs</td>
                                                    <td>paytm</td>
                                                    <td>2</td>
                                                    <td><i class="fa fa-inr" aria-hidden="true"></i> 2,400</td>
                                                    <td>complete</td>
                                                    <td>
                                                        <div class="d-flex justify-content-center action">
                                                            <button class="btn" title="view Order"><a href="order-detail.html"><img src="assets/img/view-pro.png" /></a></button>
                                                            <button class="btn" title="Cancel Order"><a href="#"><img src="assets/img/reject.png" /></a></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#123456</td>
                                                    <td>
                                                        <div class="product-thumb">
                                                            <img src="assets/img/couple-pillow-covers.png" alt="Product" />
                                                        </div>
                                                    </td>
                                                    <td>couple pillow covers</td>
                                                    <td>net banking</td>
                                                    <td>1</td>
                                                    <td><i class="fa fa-inr" aria-hidden="true"></i> 1,500</td>
                                                    <td>cancel</td>
                                                    <td>
                                                        <div class="d-flex justify-content-center action">
                                                            <button class="btn" title="view Order"><a href="order-detail.html"><img src="assets/img/view-pro.png" /></a></button>
                                                            <button class="btn" title="Cancel Order"><a href="#"><img src="assets/img/reject.png" /></a></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#123456</td>
                                                    <td>
                                                        <div class="product-thumb">
                                                            <img src="assets/img/earrings.jpg" alt="Product" />
                                                        </div>
                                                    </td>
                                                    <td>earrings</td>
                                                    <td>COD</td>
                                                    <td>1</td>
                                                    <td><i class="fa fa-inr" aria-hidden="true"></i> 1,400</td>
                                                    <td>pending</td>
                                                    <td>
                                                        <div class="d-flex justify-content-center action">
                                                            <button class="btn" title="view Order"><a href="order-detail.html"><img src="assets/img/view-pro.png" /></a></button>
                                                            <button class="btn" title="Cancel Order"><a href="#"><img src="assets/img/reject.png" /></a></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#123456</td>
                                                    <td>
                                                        <div class="product-thumb">
                                                            <img src="assets/img/coffee-mugs.png" alt="Product" />
                                                        </div>
                                                    </td>
                                                    <td>coffee mugs</td>
                                                    <td>paytm</td>
                                                    <td>2</td>
                                                    <td><i class="fa fa-inr" aria-hidden="true"></i> 2,400</td>
                                                    <td>complete</td>
                                                    <td>
                                                        <div class="d-flex justify-content-center action">
                                                            <button class="btn" title="view Order"><a href="order-detail.html"><img src="assets/img/view-pro.png" /></a></button>
                                                            <button class="btn" title="Cancel Order"><a href="#"><img src="assets/img/reject.png" /></a></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#123456</td>
                                                    <td>
                                                        <div class="product-thumb">
                                                            <img src="assets/img/couple-pillow-covers.png" alt="Product" />
                                                        </div>
                                                    </td>
                                                    <td>couple pillow covers</td>
                                                    <td>net banking</td>
                                                    <td>1</td>
                                                    <td><i class="fa fa-inr" aria-hidden="true"></i> 1,500</td>
                                                    <td>cancel</td>
                                                    <td>
                                                        <div class="d-flex justify-content-center action">
                                                            <button class="btn" title="view Order"><a href="order-detail.html"><img src="assets/img/view-pro.png" /></a></button>
                                                            <button class="btn" title="Cancel Order"><a href="#"><img src="assets/img/reject.png" /></a></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#123456</td>
                                                    <td>
                                                        <div class="product-thumb">
                                                            <img src="assets/img/earrings.jpg" alt="Product" />
                                                        </div>
                                                    </td>
                                                    <td>earrings</td>
                                                    <td>COD</td>
                                                    <td>1</td>
                                                    <td><i class="fa fa-inr" aria-hidden="true"></i> 1,400</td>
                                                    <td>pending</td>
                                                    <td>
                                                        <div class="d-flex justify-content-center action">
                                                            <button class="btn" title="view Order"><a href="order-detail.html"><img src="assets/img/view-pro.png" /></a></button>
                                                            <button class="btn" title="Cancel Order"><a href="#"><img src="assets/img/reject.png" /></a></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#123456</td>
                                                    <td>
                                                        <div class="product-thumb">
                                                            <img src="assets/img/coffee-mugs.png" alt="Product" />
                                                        </div>
                                                    </td>
                                                    <td>coffee mugs</td>
                                                    <td>paytm</td>
                                                    <td>2</td>
                                                    <td><i class="fa fa-inr" aria-hidden="true"></i> 2,400</td>
                                                    <td>complete</td>
                                                    <td>
                                                        <div class="d-flex justify-content-center action">
                                                            <button class="btn" title="view Order"><a href="order-detail.html"><img src="assets/img/view-pro.png" /></a></button>
                                                            <button class="btn" title="Cancel Order"><a href="#"><img src="assets/img/reject.png" /></a></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#123456</td>
                                                    <td>
                                                        <div class="product-thumb">
                                                            <img src="assets/img/couple-pillow-covers.png" alt="Product" />
                                                        </div>
                                                    </td>
                                                    <td>couple pillow covers</td>
                                                    <td>net banking</td>
                                                    <td>1</td>
                                                    <td><i class="fa fa-inr" aria-hidden="true"></i> 1,500</td>
                                                    <td>cancel</td>
                                                    <td>
                                                        <div class="d-flex justify-content-center action">
                                                            <button class="btn" title="view Order"><a href="order-detail.html"><img src="assets/img/view-pro.png" /></a></button>
                                                            <button class="btn" title="Cancel Order"><a href="#"><img src="assets/img/reject.png" /></a></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#123456</td>
                                                    <td>
                                                        <div class="product-thumb">
                                                            <img src="assets/img/earrings.jpg" alt="Product" />
                                                        </div>
                                                    </td>
                                                    <td>earrings</td>
                                                    <td>COD</td>
                                                    <td>1</td>
                                                    <td><i class="fa fa-inr" aria-hidden="true"></i> 1,400</td>
                                                    <td>pending</td>
                                                    <td>
                                                        <div class="d-flex justify-content-center action">
                                                            <button class="btn" title="view Order"><a href="order-detail.html"><img src="assets/img/view-pro.png" /></a></button>
                                                            <button class="btn" title="Cancel Order"><a href="#"><img src="assets/img/reject.png" /></a></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#123456</td>
                                                    <td>
                                                        <div class="product-thumb">
                                                            <img src="assets/img/coffee-mugs.png" alt="Product" />
                                                        </div>
                                                    </td>
                                                    <td>coffee mugs</td>
                                                    <td>paytm</td>
                                                    <td>2</td>
                                                    <td><i class="fa fa-inr" aria-hidden="true"></i> 2,400</td>
                                                    <td>complete</td>
                                                    <td>
                                                        <div class="d-flex justify-content-center action">
                                                            <button class="btn" title="view Order"><a href="order-detail.html"><img src="assets/img/view-pro.png" /></a></button>
                                                            <button class="btn" title="Cancel Order"><a href="#"><img src="assets/img/reject.png" /></a></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#123456</td>
                                                    <td>
                                                        <div class="product-thumb">
                                                            <img src="assets/img/couple-pillow-covers.png" alt="Product" />
                                                        </div>
                                                    </td>
                                                    <td>couple pillow covers</td>
                                                    <td>net banking</td>
                                                    <td>1</td>
                                                    <td><i class="fa fa-inr" aria-hidden="true"></i> 1,500</td>
                                                    <td>cancel</td>
                                                    <td>
                                                        <div class="d-flex justify-content-center action">
                                                            <button class="btn" title="view Order"><a href="order-detail.html"><img src="assets/img/view-pro.png" /></a></button>
                                                            <button class="btn" title="Cancel Order"><a href="#"><img src="assets/img/reject.png" /></a></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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

export default Order
