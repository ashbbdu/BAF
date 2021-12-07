import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/UI/Footer'
import { Modal } from 'reactstrap'
import ModalCustom from '../components/UI/ModalCustom'
const FAQ = () => {
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
                        <h1 class="heading-1 font-weight-700">Frequently Asked Questions (FAQs)</h1>
                    </div>
                </div>
                
                <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
                   <div class="accordion faqs" id="accordionExample">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                        <a href="#" class="w-100" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Will you deliver fresh cakes?
                        </a>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div class="card-body">
                        A person can enjoy the actual taste of cake only when it's fresh, this is why all the cakes we deliver are prepared only some time before it reaches to the recipient. To achieve the same, we offer customers to choose delivery time as well, so that we know when we need to prepare a cake and get it delivered. We ensure that customer always enjoys the freshest possible cake. We do not believe in delivering stale cakes.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                        <a href="#" class="w-100 collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          How can I trust the quality of cake delivered by BookYourGift?
                        </a>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div class="card-body">
                        We procure cakes from top and renowned bakeries in town. This help us to ensure that customer always get quality cakes and consistent taste. We promise to deliver quality products when ordering from BookYourGift.in
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                        <a href="#" class="w-100 collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Does BookYourGift provides midnight delivery as well? Is there any extra charge for it?
                        </a>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                      <div class="card-body">
                        Yes, we do provide midnight delivery. The midnight delivery time is from 11:00 PM to 11:59 PM. Although we try our best to deliver order as close to 23:59 as possible, it is always suggested to have midnight orders placed well on time. We charge Rs. 250 extra for midnight delivery.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingfour">
                        <a href="#" class="w-100 collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                          What if recipient is not available when delivery person reaches there? Will you re-attempt delivery?
                        </a>
                    </div>
                    <div id="collapsefour" class="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
                      <div class="card-body">
                        We do not attempt to deliver again, but we would call recipient and sender to know if we can deliver their order to any neighbour or near by place. Unable to do so will lead to cancellation of order and no refund will be made in case of perishable products like cakes, chocolates and flowers.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingfive">
                        <a href="#" class="w-100 collapsed" type="button" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                          While placing order, why do I see delivery time disabled?
                        </a>
                    </div>
                    <div id="collapsefive" class="collapse" aria-labelledby="headingfive" data-parent="#accordionExample">
                      <div class="card-body">
                        Sometimes we get large number of orders for delivery at a particular time slot. In this case, that particular time slot is disabled to prevent taking any more orders. If you are need help in finding time slot for that day, please contact our customer support
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingsix">
                        <a href="#" class="w-100 collapsed" type="button" data-toggle="collapse" data-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                          Are there any delivery charges?
                        </a>
                    </div>
                    <div id="collapsesix" class="collapse" aria-labelledby="headingsix" data-parent="#accordionExample">
                      <div class="card-body">
                        Delivery charges varies from location to location. When you provide pin code of the delivery address, our website will show you the delivery charges for that particular location. Delivery charges ranges between Rs. 0 – 300 rupees.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingseven">
                        <a href="#" class="w-100 collapsed" type="button" data-toggle="collapse" data-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                          Are there any hidden charges (Sales Tax) when I make a purchase on BookYourGift?
                        </a>
                    </div>
                    <div id="collapseseven" class="collapse" aria-labelledby="headingseven" data-parent="#accordionExample">
                      <div class="card-body">
                        There are NO hidden charges when you make a purchase on BookYourGift. The prices listed for all the items are final and all-inclusive. The price you see is exactly what you need to pay. Delivery charges may be extra depending on the location and other parameters.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingeight">
                        <a href="#" class="w-100 collapsed" type="button" data-toggle="collapse" data-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                          How do I know whether my gifts can be delivered at address of my choice?
                        </a>
                    </div>
                    <div id="collapseeight" class="collapse" aria-labelledby="headingeight" data-parent="#accordionExample">
                      <div class="card-body">
                        We cover urban areas of around 500 cities of India. These cities include 1st Tier, 2nd Tier and 3rd Tier cities. Our team make sure that we only commit to those services that we can offer like delivery time slots, expected time, delivery charges and more. You can check our delivery cities page to find out whether your city of choice is covered by us or not.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingnine">
                        <a href="#" class="w-100 collapsed" type="button" data-toggle="collapse" data-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
                          Do you take same day orders as well?
                        </a>
                    </div>
                    <div id="collapsenine" class="collapse" aria-labelledby="headingnine" data-parent="#accordionExample">
                      <div class="card-body">
                        Yes, we do take same day orders till a fixed time on that particular day. It is always advisable to place same day order well on time to avoid any delivery problem. The later you place order, less chances will be there to find an available time for delivery.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingten">
                        <a href="#" class="w-100 collapsed" type="button" data-toggle="collapse" data-target="#collapseten" aria-expanded="false" aria-controls="collapseten">
                          When and how can I cancel my order?
                        </a>
                    </div>
                    <div id="collapseten" class="collapse" aria-labelledby="headingten" data-parent="#accordionExample">
                      <div class="card-body">
                        You can cancel your order 24 hours before delivery time. After that, order cancellation requests will not be entertained. If you placed an order whose delivery time is within 24 hours of order placing time then order can't be cancelled and no refund will be processed for the same. For cancelling your order, you need to send us an email on info@BookYourGift.in with the order id from the same email address which you have placed that order.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingeleven">
                        <a href="#" class="w-100 collapsed" type="button" data-toggle="collapse" data-target="#collapseeleven" aria-expanded="false" aria-controls="collapseeleven">
                          How long will it take to process my cancellation request?
                        </a>
                    </div>
                    <div id="collapseeleven" class="collapse" aria-labelledby="headingeleven" data-parent="#accordionExample">
                      <div class="card-body">
                        Once you request the cancellation of item(s) in your order, it will take us a maximum of 1-2 business days to cancel the order and initiate a refund. You will be notified of the same by email. If you have paid online for your order, it may take 7-14 business days for the respective banks to process the refund. Please get in touch with the banks directly in case of any delays post confirmation of cancellation/refund by BookYourGift. order.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingtwelve">
                        <a href="#" class="w-100 collapsed" type="button" data-toggle="collapse" data-target="#collapsetwelve" aria-expanded="false" aria-controls="collapsetwelve">
                          Can I order a product that is 'Out of Stock'?
                        </a>
                    </div>
                    <div id="collapsetwelve" class="collapse" aria-labelledby="headingtwelve" data-parent="#accordionExample">
                      <div class="card-body">
                        Unfortunately, products listed as 'Out of Stock' are not available for sale.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingthirteen">
                        <a href="#" class="w-100 collapsed" type="button" data-toggle="collapse" data-target="#collapsethirteen" aria-expanded="false" aria-controls="collapsethirteen">
                          Is it necessary to have an account to shop on BookYourGift?
                        </a>
                    </div>
                    <div id="collapsethirteen" class="collapse" aria-labelledby="headingthirteen" data-parent="#accordionExample">
                      <div class="card-body">
                        You can shop on BookYourGift by providing just your email address. While it is not necessary to have an account to shop for and purchase items, it is recommended that you create one. By creating your own BookYourGift account, you can enjoy a personalized shopping experience, including recommendations, saved address and a quicker checkout.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingforteen">
                        <a href="#" class="w-100 collapsed" type="button" data-toggle="collapse" data-target="#collapseforteen" aria-expanded="false" aria-controls="collapseforteen">
                          How do I pay for products on BookYourGift?
                        </a>
                    </div>
                    <div id="collapseforteen" class="collapse" aria-labelledby="headingforteen" data-parent="#accordionExample">
                      <div class="card-body">
                        BookYourGift offers you multiple payment options ranging from Credit Card, Debit Card, Net Banking from all major banks. Whatever be your online mode of payment, you can rest assured that BookYourGift's trusted payment gateway partners use secure encryption technology to keep your transaction details confidential at all times. BookYourGift accepts payments made using Visa, MasterCard, Maestro and American Express. (Cards issued by only Indian banks are supported at present). For non-indian customer we provide PayPal option as well.
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

export default FAQ
