import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/UI/Footer'
import { Modal } from 'reactstrap'
import ModalCustom from '../components/UI/ModalCustom'

const Category = () => {
    const [open , setOpen] = useState(false)
    return (
        <div>
         <Modal className="modal-dialog-centered modal-xl" contentClassName="modal-content-abc" isOpen={open} toggle={() => setOpen(!open)}>
           <ModalCustom />
            </Modal>
            <Header onClick={() => setOpen(!open)}/>
        <section class="clients-logo-section pt-20 pb-20 Flavour-slde">
        <div class="container-fluid">
            <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
                <h5 class="mb-3">Flavours</h5>
                </div>
            </div>
            <div class="flavour-active">
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    pinata
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    Chocolate
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    BLACK FOREST
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    BUTTERSCOTCH
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    VANILLA
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    RED VELVET
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    FRUIT
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    FOUNDANT
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    KIDS
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    kit kat
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    oreo
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    mango
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    pinata
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    Chocolate
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    BLACK FOREST
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    BUTTERSCOTCH
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    VANILLA
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    RED VELVET
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    FRUIT
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    FOUNDANT
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    KIDS
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    kit kat
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    oreo
                    </a>
                </div>
                <div class="flavour-items">
                    <a href="sub-category.html" class="main-btn primary-btn">
                    mango
                    </a>
                </div>
            </div>
        </div>
    </section>
    
   <section class="category-wrapper pt-10">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumbs-style breadcrumbs-style-1 d-md-flex justify-content-between align-items-center">
                            <div class="breadcrumb-left">
                                <p class="text-capitalize">Cakes (17 Results)</p>
                            </div>
                            <div class="breadcrumb-right">
                                <p>Short By</p>
                                <select>
                                <option>Popularity</option>
                                <option>Price - Low To High</option>
                                <option>Price - High To Low</option>
                                <option>Best Seller</option>
                                <option>Premium</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <div class="product-style-7 mt-30 shadow">
                                <div class="product-image">
                                    <div class="product-active">
                                        <div class="product-item active">
                                            <img src="assets/img/30861_amazing-black-forest-cake.jpeg" alt="product" />
                                        </div>
                                        <div class="product-item">
                                            <img src="assets/img/30861_amazing-black-forest-cake.jpeg" alt="product" />
                                        </div>
                                    </div>
                                </div>
                                <div class="product-content">
                                    <h4 class="title"><a href="product-details.html">amazing black forest cake</a></h4>
                                    <p><span class="price"><i class="fa fa-inr" aria-hidden="true"></i> 449</span>
                                    <span class="price-cut"><i class="fa fa-inr" aria-hidden="true"></i> 549</span> 
                                    <span class="price-discount">(18% off)</span></p>
                                    <button class="main-btn primary-btn">Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <div class="product-style-7 mt-30 shadow">
                                <div class="product-image">
                                    <div class="product-active">
                                        <div class="product-item active">
                                            <img src="assets/img/30876_untold-love.jpeg" alt="product" />
                                        </div>
                                        <div class="product-item">
                                            <img src="assets/img/30876_untold-love.jpeg" alt="product" />
                                        </div>
                                    </div>
                                </div>
                                <div class="product-content">
                                    <h4 class="title"><a href="product-details.html">untold love</a></h4>
                                    <p><span class="price"><i class="fa fa-inr" aria-hidden="true"></i> 899</span></p>
                                    <button class="main-btn primary-btn">Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <div class="product-style-7 mt-30 shadow">
                                <div class="product-image">
                                    <div class="product-active">
                                        <div class="product-item active">
                                            <img src="assets/img/35139_fruit-and-nut-cake.jpeg" alt="product" />
                                        </div>
                                        <div class="product-item">
                                            <img src="assets/img/35139_fruit-and-nut-cake.jpeg" alt="product" />
                                        </div>
                                    </div>
                                </div>
                                <div class="product-content">
                                    <h4 class="title"><a href="product-details.html">fruit and nut cake</a></h4>
                                    <p><span class="price"><i class="fa fa-inr" aria-hidden="true"></i> 899</span></p>
                                    <button class="main-btn primary-btn">Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <div class="product-style-7 mt-30 shadow">
                                <div class="product-image">
                                    <div class="product-active">
                                        <div class="product-item active">
                                            <img src="assets/img/38733_yummylicious-chocolate-cake.jpeg" alt="product" />
                                        </div>
                                        <div class="product-item">
                                            <img src="assets/img/38733_yummylicious-chocolate-cake.jpeg" alt="product" />
                                        </div>
                                    </div>
                                </div>
                                <div class="product-content">
                                    <h4 class="title"><a href="product-details.html">yummylicious chocolate cake</a></h4>
                                    <p><span class="price"><i class="fa fa-inr" aria-hidden="true"></i> 599</span>
                                    <span class="price-cut"><i class="fa fa-inr" aria-hidden="true"></i> 799</span> 
                                        <span class="price-discount">(25% off)</span></p>
                                    <button class="main-btn primary-btn">Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <div class="product-style-7 mt-30 shadow">
                                <div class="product-image">
                                    <div class="product-active">
                                        <div class="product-item active">
                                            <img src="assets/img/30861_amazing-black-forest-cake.jpeg" alt="product" />
                                        </div>
                                        <div class="product-item">
                                            <img src="assets/img/30861_amazing-black-forest-cake.jpeg" alt="product" />
                                        </div>
                                    </div>
                                </div>
                                <div class="product-content">
                                    <h4 class="title"><a href="product-details.html">amazing black forest cake</a></h4>
                                    <p><span class="price"><i class="fa fa-inr" aria-hidden="true"></i> 449</span>
                                    <span class="price-cut"><i class="fa fa-inr" aria-hidden="true"></i> 549</span> 
                                        <span class="price-discount">(18% off)</span></p>
                                    <button class="main-btn primary-btn">Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <div class="product-style-7 mt-30 shadow">
                                <div class="product-image">
                                    <div class="product-active">
                                        <div class="product-item active">
                                            <img src="assets/img/30876_untold-love.jpeg" alt="product" />
                                        </div>
                                        <div class="product-item">
                                            <img src="assets/img/30876_untold-love.jpeg" alt="product" />
                                        </div>
                                    </div>
                                </div>
                                <div class="product-content">
                                    <h4 class="title"><a href="product-details.html">untold love</a></h4>
                                    <p><span class="price"><i class="fa fa-inr" aria-hidden="true"></i> 899</span></p>
                                    <button class="main-btn primary-btn">Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <div class="product-style-7 mt-30 shadow">
                                <div class="product-image">
                                    <div class="product-active">
                                        <div class="product-item active">
                                            <img src="assets/img/35139_fruit-and-nut-cake.jpeg" alt="product" />
                                        </div>
                                        <div class="product-item">
                                            <img src="assets/img/35139_fruit-and-nut-cake.jpeg" alt="product" />
                                        </div>
                                    </div>
                                </div>
                                <div class="product-content">
                                    <h4 class="title"><a href="product-details.html">fruit and nut cake</a></h4>
                                    <p><span class="price"><i class="fa fa-inr" aria-hidden="true"></i> 899</span></p>
                                    <button class="main-btn primary-btn">Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <div class="product-style-7 mt-30 shadow">
                                <div class="product-image">
                                    <div class="product-active">
                                        <div class="product-item active">
                                            <img src="assets/img/38733_yummylicious-chocolate-cake.jpeg" alt="product" />
                                        </div>
                                        <div class="product-item">
                                            <img src="assets/img/38733_yummylicious-chocolate-cake.jpeg" alt="product" />
                                        </div>
                                    </div>
                                </div>
                                <div class="product-content">
                                    <h4 class="title"><a href="product-details.html">yummylicious chocolate cake</a></h4>
                                    <p><span class="price"><i class="fa fa-inr" aria-hidden="true"></i> 599</span>
                                    <span class="price-cut"><i class="fa fa-inr" aria-hidden="true"></i> 799</span> 
                                        <span class="price-discount">(25% off)</span></p>
                                    <button class="main-btn primary-btn">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-12">
                        <div class="pagination-wrapper pt-70">
                            <ul class="d-flex justify-content-center">
                                <li>
                                    <a href="#"><i class="fa fa-angle-left"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="active">1</a>
                                </li>
                                <li>
                                    <a href="#">2</a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li>
                                    <a href="#">4</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-angle-right"></i></a>
                                </li>
                            </ul>
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

export default Category
