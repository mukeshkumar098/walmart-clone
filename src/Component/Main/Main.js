import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Main.css'
import { useNavigate } from 'react-router-dom';
import Data from '../Data/Data';
import { FiPlus } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";



function Main() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 9

    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6

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
  const products = [
    {
      id: 1,
      Image: "./images/iphone11.webp",
      price: 29.96,
      discription: "",
      title: '',
      catagory: '',
      rating: '',
      aboutitem: [{
        item: ""
      },
      {
        item: ''

      },
      {
        item: ''

      }
      ],
      details: ''

    },

    {
      id: 2,
      Image: '/images/shirt.webp',
      price: 15.96,
      discription: "",
      title: '',
      catagory: '',
      rating: '',
      aboutitem: [{
        item: ""
      },
      {
        item: ''

      },
      {
        item: ''

      }
      ],
      details: ''



    },
    {
      id: 3,
      Image: "./images/parse.webp",
      price: 26.96,
      discription: "",
      title: '',
      catagory: '',
      rating: '',
      aboutitem: [{
        item: ""
      },
      {
        item: ''

      },
      {
        item: ''

      }
      ],
      details: ''



    },
    {
      id: 4,
      Image: "./images/man.webp",
      price: 65.96,
      discription: "",
      title: '',
      catagory: '',
      rating: '',
      aboutitem: [{
        item: ""
      },
      {
        item: ''

      },
      {
        item: ''

      }
      ],
      details: ''



    },
    {
      id: 5,
      Image: "./images/gajet.webp",
      price: 25.96,
      discription: "",
      title: '',
      catagory: '',
      rating: '',
      aboutitem: [{
        item: ""
      },
      {
        item: ''

      },
      {
        item: ''

      }
      ],
      details: ''



    },
    {
      id: 2,
      Image: "./images/chota baccha.webp",
      price: 40.96,
      discription: "",
      title: '',
      catagory: '',
      rating: '',
      aboutitem: [{
        item: ""
      },
      {
        item: ''

      },
      {
        item: ''

      }
      ],
      details: ''



    },
    {
      id: 6,
      Image: "./images/camra.webp",
      price: 10.96,
      discription: "",
      title: '',
      catagory: '',
      rating: '',
      aboutitem: [{
        item: ""
      },
      {
        item: ''

      },
      {
        item: ''

      }
      ],
      details: ''



    }, {
      id: 7,
      Image: "./images/tabls.webp",
      price: 11.96,
      discription: "",
      title: '',
      catagory: '',
      rating: '',
      aboutitem: [{
        item: ""
      },
      {
        item: ''

      },
      {
        item: ''

      }
      ],
      details: ''



    }
  ]
  const products01 = [
    {
      id: 1,
      Image: '/furniture/photo1.webp',
      price: 29.96,
      discription: "5 Tier Storage Shelf foldable Shelf with...",
      title: '',
      catagory: '',
      rating: '',
      aboutitem: [{
        item: ""
      },
      {
        item: ''

      },
      {
        item: ''

      }
      ],
      details: ''

    },

    {
      id: 2,
      Image: '/furniture/photo2.webp',
      price: 15.96,
      discription: "5 Tier Storage Shelf foldable Shelf with...",
      title: '',
      catagory: '',
      rating: '',
      aboutitem: [{
        item: ""
      },
      {
        item: ''

      },
      {
        item: ''

      }
      ],
      details: ''



    },
    {
      id: 3,
      Image: '/furniture/photo3.webp',
      price: 26.96,
      discription: "5 Tier Storage Shelf foldable Shelf with...",
      title: '',
      catagory: '',
      rating: '',
      aboutitem: [{
        item: ""
      },
      {
        item: ''

      },
      {
        item: ''

      }
      ],
      details: ''



    },
    {
      id: 4,
      Image: '/furniture/photo4.webp',
      price: 65.96,
      discription: "5 Tier Storage Shelf foldable Shelf with...",
      title: '',
      catagory: '',
      rating: '',
      aboutitem: [{
        item: ""
      },
      {
        item: ''

      },
      {
        item: ''

      }
      ],
      details: ''



    },
    {
      id: 5,
      Image: '/furniture/photo5.jpeg',
      price: 25.96,
      discription: "5 Tier Storage Shelf foldable Shelf with...",
      title: '',
      catagory: '',
      rating: '',
      aboutitem: [{
        item: ""
      },
      {
        item: ''

      },
      {
        item: ''

      }
      ],
      details: ''



    },
    {
      id: 6,
      Image: '/furniture/photo6.webp',
      price: 40.96,
      discription: "5 Tier Storage Shelf foldable Shelf with...",
      title: '',
      catagory: '',
      rating: '',
      aboutitem: [{
        item: ""
      },
      {
        item: ''

      },
      {
        item: ''

      }
      ],
      details: ''



    },
    {
      id: 7,
      Image: '/furniture/photo7.webp',
      price: 10.96,
      discription: "5 Tier Storage Shelf foldable Shelf with...",
      title: '',
      catagory: '',
      rating: '',
      aboutitem: [{
        item: ""
      },
      {
        item: ''

      },
      {
        item: ''

      }
      ],
      details: ''



    }, {
      id: 8,
      Image: '/furniture/photo8.webp',
      price: 11.96,
      discription: "5 Tier Storage Shelf foldable Shelf with...",
      title: '',
      catagory: '',
      rating: '',
      aboutitem: [{
        item: ""
      },
      {
        item: ''

      },
      {
        item: ''

      }
      ],
      details: ''



    },
    {
      id: 9,
      Image: '/furniture/photo9.webp',
      price: 11.96,
      discription: "5 Tier Storage Shelf foldable Shelf with...",
      title: '',
      catagory: '',
      rating: '',
      aboutitem: [{
        item: ""
      },
      {
        item: ''

      },
      {
        item: ''

      }
      ],
      details: ''



    },
    {
      id: 10,
      Image: '/images/watch1.webp',
      price: 11.96,
      discription: "5 Tier Storage Shelf foldable Shelf with...",
      title: '',
      catagory: '',
      rating: '',
      aboutitem: [{
        item: ""
      },
      {
        item: ''

      },
      {
        item: ''

      }
      ],
      details: ''



    }
  ]
  const Products011 = Data.product1;
  const navigate = useNavigate();


  return (
    <main className='top-container'>
      <section className='container'>
        <section className='box1'>

          <div className='image1'>
            <a href='#'><img src='/images/bacchi.jpg'></img></a>

            <div className='image-text1'>
              <p>The Top Toy List is here</p>
              <a href=''>shop now</a>
            </div>
          </div>

          <div className='image2'>
            <a href='#'> <img src='/images/badi.jpg'></img></a>
            <div className='image-text2'>
              <p>Only at Walmart—woohoo!</p>
              <a href=''>shop toys</a>
            </div>
          </div>

          <div className='image3'>
            <a href='#'> <img src='/images/daino.jpg'></img></a>
            <div className='image-text3'>
              <p>Big fun for ages 5-7</p>
              <a href=''>shop now</a>

            </div>
          </div>

        </section>
        <section className='box2'>
          <div className='box2-image1'>
            <a href='#'><img src='/images/iphon16.jpg'></img></a>
            <div className='box2-image1-text'>
              <p>save up to $1.100</p>
              <a href='#'>Profoundly powerful</a>
              <button>preorder now</button>
            </div>
          </div>
          <div className='secont-box-mid-box'>
            <div className='box2-image2'>
              <a href='#'><img src='/images/caffy.jpg'></img></a>
              <div className='box2-image2-text1'>
                <a href='#' className='owala'>Owala: Trending with every sip</a>
                <div>
                  <a href=''>shop now</a>
                </div>
              </div>
            </div>
            <div className='box2-image3'>
              <a href='#'><img src='/images/car.jpg'></img></a>
              <div className='box2-image3-text2'>
                <p>Up to 45% off</p>
                <a href=''>shop now</a>
              </div>
            </div>
          </div>
          <div className='box2-image4'>

            <a href='#'><img src='/images/free.webp'></img></a>
            <div className='box2-image4-text'>
              <p>Walmart+ members save big with free delivery from stores</p>
              <div><a href='' className='apply'>term apply.</a></div>
              <a href=''>Join walmart+</a>


            </div>

          </div>
        </section>
        <section className='box3'>
          <div className='box3-image1'>
            <a href='#'><img src='/images/lady.jpg'></img></a>
            <div className='box3-image-text'>
              <p>Ree's fashion refresh</p>
              <a href=''>shop now</a>

            </div>
          </div>
          <div className='box3-image2'>
            <a href='#'> <img src='/images/wow.jpg'></img></a>
            <div className='box3-image2-text'>
              <p>latest luxe Beauty lineup</p>
              <a href=''>shop now</a>
            </div>
          </div>

          <div className='box3-image3'>
            <a href='#'> <img src='/images/boat.jpg'></img></a>
            <div className='box3-image3-text'>
              <p>Just dropped Beats</p>
              <a href=''>shop now</a>
            </div>
          </div>
        </section>
      </section>

      <section>

        <section className='product-container'>

          <div className='product-hadding'>
            <div className='hadding'>
              <h2>Flash Deals </h2>
              <p>Up to 65% off</p>
            </div>
            <div>
              <a href='#'>View all</a>
            </div>
          </div>
          <div className='product'>
            {<Carousel responsive={responsive} >
              {products.map((ele, i) => {
                return (
                  <div class='items' key={i}>
                    <a href=''><img src={ele?.Image} onClick={() => navigate("/product-details", { state: ele })}></img></a>
                    <div className='price'>
                      <h2>${ele?.price}</h2>
                      <span></span>
                      <div className='discription'>
                        <a href='#'>5 Tier Storage Shelf foldable Shelf with...</a>
                      </div>
                      <button onClick={() => navigate("/product-details", { state: ele })}>options</button>
                    </div>
                    <div className='heart'>
                      <CiHeart size={29} onClick={() => navigate("/product-details", { state: ele })} />

                    </div>
                  </div>
                )
              })}
            </Carousel>}

          </div>
        </section>
      </section>
      <hr className='custom-hr' />


      <section className='product-container'>

        <div className='product-hadding'>
          <div className='hadding'>
            <h2>Save on patio & garden</h2>
          </div>
          <div>
            <a href='#'>View all</a>
          </div>
        </div>
        <div className='product'>
          {<Carousel responsive={responsive} >
            {products01.map((ele, i) => {
              return (

                <div class='items' key={i}>
                  <a href=''><img src={ele?.Image}></img></a>
                  <div className='price'>
                    <h2>${ele?.price}</h2>
                    <span></span>
                    <div className='discription'>
                      <a href='#'>{ele?.discription}</a>
                    </div>
                    <button>options</button>
                  </div>
                  <div className='heart'>
                    <CiHeart size={29} onClick={() => navigate("/product-details", { state: ele })} />

                  </div>
                </div>
              )
            })}
          </Carousel>}

        </div>
      </section>
      <hr className='custom-hr' />
      <section className='third-container'>
        <div className='third-container-box1'>
          <div className='third-container-box1-image1'>
            <a href=''><img src='/images/pumbking.jpg'></img></a>
            <div className='third-container-box1-image1-text'>
              <p>Pumpkins to parties</p>
              <h1>Your Halloween HQ</h1>
              <button>Shop all</button>
            </div>

          </div>
        </div>
        <div className='third-container-box2'>
          <div className='box2-image1'>
            <a href='#'> <img src='/images/phul.jpg'></img></a>
            <div className='third-container-box2-image1-text1'>
              <p>To-die-for decor</p>
              <h1>Home is where the haunt is</h1>
              <a href='#'>Shop now</a>
            </div>

          </div>
          <div className='third-container-box2-mid'>
            <div className='box2-mid-image1'>
              <a href='#'> <img src='/images/tophy.jpg'></img></a>
              <div className='box2-mid-image1-text'>
                <p>Be the good candy house</p>

                <a href=''>Shop now</a>
              </div>

            </div>
            <div className='box2-mid-image2'>
              <a href='#'> <img src='/images/plate.jpg'></img></a>
              <div className='box2-mid-image2-text'>
                <p>Throw a monster mash</p>
                <a href=''>Shop now</a>
              </div>

            </div>
          </div>
        </div>

        <div className='third-container-box3'>
          <div className='third-container-box3-image1'>
            <a href='#'> <img src='/images/quien.jpg'></img></a>
            <div className='third-container-box3-image1-text'>
              <p>Cutest costumes on the block</p>

              <a href=''>Shop now</a>
            </div>

          </div>
        </div>
      </section>



      <section className='product-container'>

        <div className='product-hadding'>
          <div className='hadding'>
            <h2>Fear not—there’s more </h2>
            <p></p>
          </div>
          <div>
            <a href='#'>View all</a>
          </div>
        </div>
        <div className='product'>
          {<Carousel responsive={responsive} >
            {Products011.map((ele, i) => {
              return (
                <div class='items' key={i}>
                  <img src={ele?.Image}></img>
                  <div className='prices'>
                    <h2>Now ${ele?.price}</h2>
                    <span></span>
                    <div className='discription'>
                      <a href='#'>5 Tier Storage Shelf foldable Shelf with...</a>
                    </div>
                    <div className='buttons'>
                      <FiPlus size={19} /><button> Add</button>                  </div>
                  </div>
                  <div className='heart'>
                    <CiHeart size={29} onClick={() => navigate("/product-details", { state:ele })} />
                    </div>
                </div>
              )
            })}
          </Carousel>}

        </div>
      </section>
      <hr className='custom-hr' />
    </main>)
}

export default Main