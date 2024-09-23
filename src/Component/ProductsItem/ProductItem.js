import React from 'react'
import "./ProductsItem.css"
import { useLocation } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CiStar } from "react-icons/ci";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

import InnerImageZoom from 'react-inner-image-zoom';

function ProductItem() {
    const { state } = useLocation()
    console.log("state", state);
    const responsive11 = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const product102 = [{
        id: 1,
        Image: './Socks/socks01.jpeg'
    },
    {
        id: 2,
        Image: './Socks/socks02.jpeg'
    },
    {
        id: 3,
        Image: './Socks/socks03.jpeg'
    },
    {
        id: 4,
        Image: './Socks/socks04.jpeg'
    },
    {
        id: 5,
        Image: './Socks/socks01.jpeg'
    },
    ]


    return (
        <main className='product-container'>
            <section className='item-container'>
                <div className='item-box01'>
                    <Carousel responsive={responsive11} >
                        {product102.map((ele, i) => {
                            return (
                                <div className='item-image01'>

                                    <InnerImageZoom zoomType='hover' zoomScale={1.2} src={ele?.Image} />
                                </div>
                            )
                        })}
                    </Carousel>


                    <div className='items01' >
                    {product102.map((ele,i)=>{
    return( <div key={i} className='items-images'>
                            <img src={ele?.Image} />
                        </div>)
})}
                       
                    </div>
                </div>


                <div className='item-box02'>
                <div className='product-details-box'>
                    <div className='product-details'>
                        <div className='info'>
                            <div className='button01'>
                                <button className='button1'>
                                    Best seller
                                </button>
                                <button className='button2'>
                                    Clearance
                                </button>
                            </div>
                            <div className='description'>
                                <a href='#'>AMITOFO</a>
                                <h2>AMITOFO 4 Pairs Non Slip Grip Socks - Ideal for Yoga, Pilates, Hospital Use - Men & Women's Crew Sticky Gripper Socks (Size 7-10)</h2>
                            </div>
                            <div className='rating'>
                                <span><CiStar /></span>
                                <span><CiStar /></span>
                                <span><CiStar /></span>
                                <span><CiStar /></span>
                                <span><CiStar /></span>
                            </div>
                        </div>
                    </div>
                    <hr className='customhr'></hr>

                    <div className='color'>
                        <p>color:<a href='#'></a></p>
                        <div className='color-image'>
                            <div className='image1'>

                            </div>
                            <div className='image2'>
                            </div>
                            <div className='image3'>
                            </div>
                            <div className='image4'>
                            </div>
                        </div>
                        <div className='price'>
                            <span>$15.66</span> <span>$15.66</span>
                        </div>
                    </div>
                    <div className='product-size'>
                        <div className='size'>
                            <span>Clothing Size:</span>
                            <span>7-10</span>
                            <span><a href=''>size guide</a></span>
                            <div className='sizes'>
                                <div className='size1'>
                                    <p>7-10</p>
                                </div>
                                <div className='size2'>
                                    <p>10-13</p>
                                </div>
                            </div>

                            <div className='pack'>
                                <span>Count Per Pack:</span>
                                <span>4</span>
                            </div>

                            <div className='sizes'>

                                <div className='size1'>
                                    <p>7-10</p>
                                </div>
                                <div className='size2'>
                                    <p>10-13</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='customhr'></hr>
                    <div className='glance'>
                    <h3>At a glance</h3>
                      <div className='glance-boxes'>
                      <div className='glance-box1'> <h3>Features</h3>
                      <p>Breathable, Moisture</p>
                      </div>
                      <div className='glance-box1'><h3>Country of Origin - Textiles</h3><p>Imported</p></div>
                      <div className='glance-box1'><h3>Brand</h3> <p>AMITOFO</p></div>
                      
                      </div>
                      <div className='glance-boxes'>
                      <div className='glance-box1'> <h3>Fabric Content</h3>
                      <p>85% cotton</p>
                      </div>
                      <div className='glance-box1'><h3>Gender</h3><p>Female</p></div>
                      <div className='glance-box1'><h3>Sock Size</h3> <p>7-10</p></div>
                      
                      </div>
                    </div>
                    <div className='product-about'>
                        <div className='about'>
                             <h1>About this item</h1>
                             <ul>
                                <li>Premium Fabric Blend: 85% Cotton, 12% Spandex, 3% Elastane provides optimal comfort, moisture-wicking, breathability, and durability for all-season wear, ensuring your feet stay cozy in any activity.</li>
                                <li>Enhanced Grip & Stability: Unique anti-slip pattern with dotted glue on the sock bottoms for improved balance, preventing falls and slips on various surfaces.</li>
                                <li>Comfortable Fit: High-elasticity rubber band sock openings</li>
                             </ul>
                        </div>
                    </div>
                    </div>
               
                <div className='item-box03'>
                    <div className='cart-section'>
                        <div className='cart-section'>
                            <h1>Now $13.99</h1>
                            <span className=' save'>You save </span><span className='save2'> $15.00</span>

                            <p className='para'>Price when purchased online</p>
                            <p className='para2'>Free 90-day returns</p>
                            <button>Add to cart</button>
                        </div>
                        <hr className='customhrs'></hr>
                    </div>
                </div>
                </div>
            </section>
        </main>
    )
}

export default ProductItem