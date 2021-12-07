import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/UI/Footer'
import { Modal } from 'reactstrap'
import ModalCustom from '../components/UI/ModalCustom'

const AboutUs = () => {
    const [open , setOpen] = useState(false)
    return (
        <div>
             <Modal className="modal-dialog-centered modal-xl" contentClassName="modal-content-abc" isOpen={open} toggle={() => setOpen(!open)}>
           <ModalCustom />
            </Modal>
            <Header onClick={() => setOpen(!open)}/>
            <section class="sec-bg product-wrapper pt-20 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="mb-10">
                        <h1 class="heading-1 font-weight-700">BookYourGift Celebrate Relations !!!</h1>
                    </div>
                </div>
                
                <div class="col-lg-12">
                <h3 class="mt-4">We want to set a benchmark in online gifting</h3>
                    <p>Taking birth from the idea to bridge the gap which is developing among an individual relations due to new life style, work pressure and busy schedules. We provide an option for "How to Celebrate a Relation". With BookYourGift, we endeavor to create an online gifting portal addressing the above need with passion of excelling in the field.</p>
                    <p>In today's world everyone is so busy that going out to buy a gift is a pain. But you cannot miss to gift because a gift is a perfect way to tell someone how much you love them, care for them, want to make them happy, want them to have all that they want, and so many countless feelings that A GIFT can convey. Then what to do?</p>
                    <p>Solution is to buy gifts online. By that you need not to be present in the city where you want gifts to be delivered and you can place order sitting anywhere, be it a bus, car, home, office, party or a beach. All you need to have is an internet connection.</p>
                    
                    <h3 class="mt-4">What we do?</h3>
                    <p>We provide you a trustworthy and convenient platform to choose best gift for your family, friends etc. for every occasion like birthdays, anniversaries, marriage, love, farewell and many more. We offer wide range of products in various categories like cakes, egg-less cakes, drawing cakes, 3D cakes, photo cakes, collectibles, chocolates, bouquet, flowers bunch, soft toys, greeting cards, candles, photo frames, handicrafts etc. We also customize gifts according to customer wish.</p>
                    <p>We are all about how you celebrate your relation in the best possible manner which fulfill you with joy happiness and satisfaction.</p>
                    
                    <h2 class="mt-4">How we can help?</h2>
                    <div class="pl-3">
                    <h3 class="mt-4">Delivery date and time</h3>
                    <p>You can choose date and time of the delivery of your gifts. We do offer same day delivery but its alway better to place your order atleast 2 days in advance. That way we could serve you better and you have more options to customize your order as per your needs. Many times due to large number of orders you might see few time slots disabled. To avoid such scenarios it's advised to place order 2-3 days in advance.</p>
                        
                    <h3 class="mt-4">Talk to us</h3>
                    <p>You can find the perfect gift yourself or talk to our gift connoisseurs who can help you. Gift Connoisseurs is our team who has very good taste in gifting. They can help you find the perfect gift for every person and every occasion.</p>
                        
                    <h3 class="mt-4">What makes us special</h3>
                    <p>Our specialization resides in cakes and flowers delivery across India. Be it Bangalore, Hyderabad, Pune, Delhi or any other city of India, we make sure that we got it covered for you. As cakes and flowers are synonym for any kind of celebration, our team put special efforts to make sure the timely, fresh and safe delivery of these products in entire Bangalore and Hyderabad. On top of that, we made it sure that customer always gets great quality cakes and flowers at a reasonable prices. Besides that, services like midnight delivery, liberty to choose delivery date and time, and highly supportive customer support staff makes us stand apart.</p>
                    </div>
                    <p class="mt-4">So many relations, so many reasons to love and celebrate.</p>
                    <p>Surprise them, gift them and celebrate the uniqueness of very relation with BookYourGift. So, go ahead and order cake online.</p>
                </div>
            </div>
        </div>
    </section>
            <Footer />
        </div>
    )
}

export default AboutUs
