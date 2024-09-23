import React from 'react'
import './Item.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HoverVideoPlayer from 'react-hover-video-player';
import { CiHeart } from "react-icons/ci";

function Item() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 9

        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3

        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };
    const responsives = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6

        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4

        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const beyond=[{
        id:1,
        Image:'./Home-image/glas.webp',
        price:28.99,
        description:'5 Tier Storage Shelf foldable Shelf with...'

    },
    {
        id:2,
        Image:'./Home-image/indor.webp',
        price:28.99,
        description:'5 Tier Storage Shelf foldable Shelf with...'

    },
    {
        id:3,
        Image:'./Home-image/katori.webp',
        price:28.99,
        description:'5 Tier Storage Shelf foldable Shelf with...'

    },
    {
        id:4,
        Image:'./Home-image/table.webp',
        price:28.99,
        description:'5 Tier Storage Shelf foldable Shelf with...'

    },
    {
        id:5,
        Image:'./Home-image/pilo.jpeg',
        price:28.99,
        description:'5 Tier Storage Shelf foldable Shelf with...'
    },
    {
        id:6,
        Image:'./Home-image/table-top.webp',
        price:28.99,
        description:'5 Tier Storage Shelf foldable Shelf with...'

    },
    {
        id:7,
        Image:'./Home-image/glas.webp',
        price:28.99,
        description:'5 Tier Storage Shelf foldable Shelf with...'

    }]
    return (
        <section className='items-container'>
            <div className='items-container2'>
                <div className='items-product'>
                    <div className='items-hadding'>
                        <div className='haddings'>
                            <h2>Buttery velvets & beyond </h2>
                        </div>
                        <div>
                            <a href='#'>View all</a>
                        </div>
                    </div>

                    <div className='products'>
                        {<Carousel responsive={responsive} >
                        {beyond.map((ele,i)=>{
                            return( <div class='items'>
                                <img src={ele?.Image}></img>
                                <div className='price'>
                                    <h2>Now ${ele?.price}</h2>
                                    <span></span>
                                    <div className='discription'>
                                        <a href='#'>5 Tier Storage Shelf foldable Shelf with...</a>
                                    </div>
                                    <button>options</button>
                                </div>
                                <div className='heart'>
                    <CiHeart size={29}  />

                    </div>
                            </div>)
                        })}
                        </Carousel>}

                    </div>
                </div>

                <div className='picture-container'>
                    <div className='picture'>

                        <img src='/images/home.jpg'></img>

                        <div className='picture-text'>
                            <p>Fall vibes</p>
                            <div><h1>Feels like home</h1></div>
                            <button>Shop now</button>

                        </div>
                    </div>
                </div>
            </div>




            <section className='video-container'>
                <div className='videos-haddings'>
                    <h1>Featured in videos</h1>
                    <p>See what creators are sharing</p>
                </div>
                <div className='main-video-container'>
                    {<Carousel responsive={responsives} >
                        <div class='videos'>


                            <HoverVideoPlayer
                                videoSrc="/Video/video1.mp4"
                                // pausedOverlay={
                                //     <img
                                       
                                //         style={{
                                //             // Make the image expand to cover the video's dimensions
                                //             width: '100%',
                                //             height: '100%',
                                //             objectFit: 'cover',
                                //         }}
                                //     />
                                // }
                                loadingOverlay={
                                    <div className="loading-overlay">
                                        <div className="loading-spinner" />
                                    </div>
                                }
                            />





                            <div className='prices'>
                                <h2>Now $13.98</h2>
                                <span></span>
                                <div className='discription'>
                                    <a href='#'>5 Tier Storage Shelf foldable Shelf with...</a>
                                </div>

                            </div>
                        </div>

                        <div class='videos'>
                           
                        <HoverVideoPlayer
                                videoSrc="/Video/video7.mp4"
                                // pausedOverlay={
                                //     <img
                                       
                                //         style={{
                                //             // Make the image expand to cover the video's dimensions
                                //             width: '100%',
                                //             height: '100%',
                                //             objectFit: 'cover',
                                //         }}
                                //     />
                                // }
                                loadingOverlay={
                                    <div className="loading-overlay">
                                        <div className="loading-spinner" />
                                    </div>
                                }
                            />
                            <div className='prices'>
                                <h2>Now $13.98</h2>
                                <span></span>
                                <div className='discription'>
                                    <a href='#'>5 Tier Storage Shelf foldable Shelf with...</a>
                                </div>

                            </div>
                        </div>

                        <div class='videos'>
                           
                        <HoverVideoPlayer
                                videoSrc="/Video/video3.mp4"
                                // pausedOverlay={
                                //     <img
                                       
                                //         style={{
                                //             // Make the image expand to cover the video's dimensions
                                //             width: '100%',
                                //             height: '100%',
                                //             objectFit: 'cover',
                                //         }}
                                //     />
                                // }
                                loadingOverlay={
                                    <div className="loading-overlay">
                                        <div className="loading-spinner" />
                                    </div>
                                }
                            />
                            <div className='prices'>
                                <h2>Now $13.98</h2>
                                <span></span>
                                <div className='discription'>
                                    <a href='#'>5 Tier Storage Shelf foldable Shelf with...</a>
                                </div>

                            </div>
                        </div>

                        <div class='videos'>
                           
                        <HoverVideoPlayer
                                videoSrc="/Video/video4.mp4"
                                // pausedOverlay={
                                //     <img
                                       
                                //         style={{
                                //             // Make the image expand to cover the video's dimensions
                                //             width: '100%',
                                //             height: '100%',
                                //             objectFit: 'cover',
                                //         }}
                                //     />
                                // }
                                loadingOverlay={
                                    <div className="loading-overlay">
                                        <div className="loading-spinner" />
                                    </div>
                                }
                            />
                            <div className='prices'>
                                <h2>Now $13.98</h2>
                                <span></span>
                                <div className='discription'>
                                    <a href='#'>5 Tier Storage Shelf foldable Shelf with...</a>
                                </div>

                            </div>
                        </div>

                        <div class='videos'>
                           
                        <HoverVideoPlayer
                                videoSrc="/Video/video5.mp4"
                                // pausedOverlay={
                                //     <img
                                       
                                //         style={{
                                //             // Make the image expand to cover the video's dimensions
                                //             width: '100%',
                                //             height: '100%',
                                //             objectFit: 'cover',
                                //         }}
                                //     />
                                // }
                                loadingOverlay={
                                    <div className="loading-overlay">
                                        <div className="loading-spinner" />
                                    </div>
                                }
                            />
                            <div className='prices'>
                                <h2>Now $13.98</h2>
                                <span></span>
                                <div className='discription'>
                                    <a href='#'>5 Tier Storage Shelf foldable Shelf with...</a>
                                </div>

                            </div>
                        </div>

                        <div class='videos'>
                          
                        <HoverVideoPlayer
                                videoSrc="/Video/video6.mp4"
                                // pausedOverlay={
                                //     <img
                                       
                                //         style={{
                                //             // Make the image expand to cover the video's dimensions
                                //             width: '100%',
                                //             height: '100%',
                                //             objectFit: 'cover',
                                //         }}
                                //     />
                                // }
                                loadingOverlay={
                                    <div className="loading-overlay">
                                        <div className="loading-spinner" />
                                    </div>
                                }
                            />
                            <div className='prices'>
                                <h2>Now $13.98</h2>
                                <span></span>
                                <div className='discription'>
                                    <a href='#'>5 Tier Storage Shelf foldable Shelf with...</a>
                                </div>

                            </div>
                        </div>
                    </Carousel>}
                </div>
            </section>
            <hr className='custom-hr'/>
        </section>





    )
}

export default Item