import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/UI/Footer'
import { Modal } from 'reactstrap'
import ModalCustom from '../components/UI/ModalCustom'
const DeliveryCities = () => {
    const [open , setOpen] = useState(false)
    return (
        <div>
           <Modal className="modal-dialog-centered modal-xl" contentClassName="modal-content-abc" isOpen={open} toggle={() => setOpen(!open)}>
           <ModalCustom />
            </Modal>
            <Header onClick={() => setOpen(!open)}/>
          <section class="checkout-wrapper pt-50">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h5>Search for city or pincode where you want delivery</h5>
                <p>BookYourGift is delivering in 600+ cities of India</p>
                <form class="my-5">
                <input type="search" class="form-control search-city" placeholder="Search by city or pincode " />
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 text-center">
                <h5 class="text-capitalize">popular cities</h5>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center">
                <div class="popular-cities">
                <a href="#"><img src="assets/img/bengaluru.png" class="img-fluid" />
                <p class="text-capitalize">bengaluru</p></a>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center">
                <div class="popular-cities">
                <a href="#"><img src="assets/img/hyderabad.png" class="img-fluid" />
                <p class="text-capitalize">hyderabad</p></a>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center">
                <div class="popular-cities">
               <a href="#"> <img src="assets/img/pune.png" class="img-fluid" />
                <p class="text-capitalize">pune</p></a>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center">
                <div class="popular-cities">
                <a href="#"><img src="assets/img/delhi.png" class="img-fluid" />
                <p class="text-capitalize">delhi</p></a>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center">
                <div class="popular-cities">
                <a href="#"><img src="assets/img/chennai.png" class="img-fluid" />
                <p class="text-capitalize">chennai</p></a>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center">
                <div class="popular-cities">
                <a href="#">
                    <img src="assets/img/mumbai.png" class="img-fluid" />
                <p class="text-capitalize">mumbai</p>
                    </a>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center">
                <div class="popular-cities">
                <a href="#"><img src="assets/img/kolkata.png" class="img-fluid" />
                <p class="text-capitalize">kolkata</p></a>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center">
                <div class="popular-cities">
                <a href="#"><img src="assets/img/lucknow.png" class="img-fluid" />
                <p class="text-capitalize">lucknow</p></a>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center">
                <div class="popular-cities"> /
                <a href="#"><img src="assets/img/gurgaon.png" class="img-fluid" />
                <p class="text-capitalize">gurgaon</p></a>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center">
                <div class="popular-cities">
                <a href="#"><img src="assets/img/ahmedabad.png" class="img-fluid" />
                    <p class="text-capitalize">ahmedabad</p></a>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center">
                <div class="popular-cities">
                <a href="#"><img src="assets/img/patna.png" class="img-fluid" />
                    <p class="text-capitalize">patna</p></a>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center">
                <div class="popular-cities">
                <a href="#"><img src="assets/img/jaipur.png" class="img-fluid" />
                    <p class="text-capitalize">jaipur</p></a>
                </div>
            </div>
        </div>
    </div>
</section>
          <Footer />  
        </div>
    )
}

export default DeliveryCities
