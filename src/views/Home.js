import React, { useState } from 'react'
import Slider from 'react-slick'
import Header from '../components/Header'
import Card from '../components/UI/Card'
import Footer from '../components/UI/Footer'
import MiniCard from '../components/UI/MiniCard'
import SimpleSlider from '../components/UI/SimpleSlider'
import SlidingCard from '../components/UI/SlidingCard'
import ModalCustom from '../components/UI/ModalCustom'
import { Modal } from 'reactstrap'

const Home = () => {
   const [open , setOpen] = useState(false)
    return (
        <React.Fragment>
            <Modal dialogClassName="modal-dialog-centered modal-xl" contentClassName="modal-content-abc" isOpen={open} toggle={() => setOpen(!open)}>
           <ModalCustom />
            </Modal>
            <Header onClick={() => setOpen(!open)}/>
            <div className="header-style-1">
                <div className="header-big">
                    {/* <div className="header-items-active"> */}
                    <SimpleSlider />
                </div>
            </div>
            {/* </div> */}
            {/* Shop by */}
            <section class="sec-bg product-wrapper pt-20 pb-70">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="mb-10 text-center">
                                <h1 class="heading-1 font-weight-700">Shop By Relation</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <Card title="Father" image="%PUBLIC_URL%/../assets/img/fathers.png" />
                        <Card title="Mother" image="%PUBLIC_URL%/../assets/img/mothers.png" />
                        <Card title="Teacher" image="%PUBLIC_URL%/../assets/img/teacher.png" />
                        <Card title="Brother" image="%PUBLIC_URL%/../assets/img/brother.png" />
                    </div>
                </div>
                <section class="sec-bg product-wrapper pt-20 pb-70">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="mb-10 text-center">
                                    <h1 class="heading-1 font-weight-700">Shop By Occasion</h1>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <Card title="Birthday" image="%PUBLIC_URL%/../assets/img/birthday.png" />
                            <Card title="Aniversary" image="%PUBLIC_URL%/../assets/img/anniversary-1602685764740.png" />
                            <Card title="New Year" image="%PUBLIC_URL%/../assets/img/new-year-card.png" />
                            <Card title="Diwali" image="%PUBLIC_URL%/../assets/img/diwali-card.png" />
                        </div>
                    </div>
                </section>
            </section>
            {/* Gift wrapped with love */}
            <section class="sec-bg product-wrapper pt-20 pb-70">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                            <div class="mb-10">
                                <h1 class="heading-1 font-weight-700">Gift Wrapped With Love</h1>
                            </div>
                        </div>
                        <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                            <div class="view-ntb mb-10">
                                <a href="category.html" class="view-all">View All</a>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <Card title="Birthday" image="%PUBLIC_URL%/../assets/img/diwali-gifts-222.png" />
                        <Card title="Aniversary" image="%PUBLIC_URL%/../assets/img/pinata-cakes-222.png" />
                        <Card title="New Year" image="%PUBLIC_URL%/../assets/img/premium-flowers-222.png" />
                        <Card title="Diwali" image="%PUBLIC_URL%/../assets/img/express-del-222.png" />
                    </div>
                </div>
            </section>
            {/* You may also like */}
            <section class="sec-bg product-wrapper pt-20 pb-70">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                            <div class="mb-10">
                                <h1 class="heading-1 font-weight-700">You May Also Like</h1>
                            </div>
                        </div>
                        <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                            <div class="view-ntb mb-10">
                                <a href="category.html" class="view-all">View All</a>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <Card title="Father" image="%PUBLIC_URL%/../assets/img/chocolates-333.png" />
                        <Card title="Mother" image="%PUBLIC_URL%/../assets/img/hand-picked-roses-222.png" />
                        <Card title="Teacher" image="%PUBLIC_URL%/../assets/img/designer-cakes-222.png" />
                        <Card title="Brother" image="%PUBLIC_URL%/../assets/img/hamper-222.png" />
                    </div>
                </div>
            </section>
            {/* Best Seller */}
            <section class="sec-bg product-wrapper pt-20 pb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                            <div class="mb-10">
                                <h1 class="heading-1 font-weight-700">Bestseller Combos</h1>
                            </div>
                        </div>

                        <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                            <div class="view-ntb mb-10">
                                <a href="category.html" class="view-all">View All</a>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <MiniCard title="Magical Ganesha Lamp" amount="$1,799" image="%PUBLIC_URL%/../assets/img/magical-ganesha-lamp.jpeg" />
                        <MiniCard title="Vivid Lamp" amount="$849" image="%PUBLIC_URL%/../assets/img/vivid-lamp.jpeg" />
                        <MiniCard title="Be Mine Hearts Mug$249" amount="$249" image="%PUBLIC_URL%/../assets/img/be-mine-hearts-mug.jpeg" />
                        <MiniCard title="Sacred Buddha Figure" amount="$599" image="%PUBLIC_URL%/../assets/img/sacred-buddha-figure.jpeg" />
                    </div>
                </div>
            </section>
            {/* Explore more with us */}

            <section class="sec-bg product-wrapper pt-20 pb-70">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <div class="mb-10 text-center">
                                <h3 class="heading-1 font-weight-700">Explore More With Us</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <SlidingCard image1="%PUBLIC_URL%/../assets/img/jewellery-22.png" image2="%PUBLIC_URL%/../assets/img/jewellery-22.png" title="Jewellery" />
                        <SlidingCard image1="%PUBLIC_URL%/../assets/img/personalised-mug-22.png" image2="%PUBLIC_URL%/../assets/img/personalised-mug-22.png" title="Personalised Mug" />
                        <SlidingCard image1="%PUBLIC_URL%/../assets/img/accessories-22.png" image2="%PUBLIC_URL%/../assets/img/accessories-22.png" title="Accessories" />
                        <SlidingCard image1="%PUBLIC_URL%/../assets/img/home-decor-22.png" image2="%PUBLIC_URL%/../assets/img/home-decor-22.png" title="Home Decor" />
                    </div>
                    <div className="row justify-content-center">
                        <SlidingCard image1="%PUBLIC_URL%/../assets/img/hand-bag-22.png" image2="%PUBLIC_URL%/../assets/img/hand-bag-22.png" title="Handbag" />
                        <SlidingCard image1="%PUBLIC_URL%/../assets/img/candales-22.png" image2="%PUBLIC_URL%/../assets/img/candales-22.png" title="Candles" />
                        <SlidingCard image1="%PUBLIC_URL%/../assets/img/handmad-22.png" image2="%PUBLIC_URL%/../assets/img/handmad-22.png" title="Handmade" />
                        <SlidingCard image1="%PUBLIC_URL%/../assets/img/mettalic-utensils-22.png" image2="%PUBLIC_URL%/../assets/img/mettalic-utensils-22.png" title="Utensils" />
                    </div>
                </div>
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default Home;
