import React from 'react'
import './Product.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FiPlus } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";




function Product() {
    const responsiveness = {
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
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 15

        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 9

        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 6
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
            items: 2
        }
    };
    const responsive01 = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

 
const  AllProduct=[{
    id:1,
    Image: './bar-image/cup.webp',
    price: 11.96,
    discription: "Thyme & Table Stainless Steel Gold Cocktail Stirrer Spoo",
    title: '',
    catagory: '',
    rating: '',

},
{
  id:2,
  Image: './bar-image/glas.webp',
  price: 11.96,
  discription: "5 Tier Storage Shelf foldable Shelf with...",
  title: '',
  catagory: '',
  rating: '',

},
{
  id:3,
  Image: './bar-image/themy.webp',
  price: 11.96,
  discription: "5 Tier Storage Shelf foldable Shelf with...",
  title: '',
  catagory: '',
  rating: '',

},
{
  id:4,
  Image: './bar-image/botal.webp',
  price: 11.96,
  discription: "5 Tier Storage Shelf foldable Shelf with...",
  title: '',
  catagory: '',
  rating: '',

},
{
  id:5,
  Image: './bar-image/singleglass.webp',
  price: 11.96,
  discription: "5 Tier Storage Shelf foldable Shelf with...",
  title: '',
  catagory: '',
  rating: '',

},
{
  id:6,
  Image: './bar-image/tool.webp',
  price: 11.96,
  discription: "5 Tier Storage Shelf foldable Shelf with...",
  title: '',
  catagory: '',
  rating: '',

},
{
  id:7,
  Image: './bar-image/cup.webp',
  price: 11.96,
  discription: "5 Tier Storage Shelf foldable Shelf with...",
  title: '',
  catagory: '',
  rating: '',

},
{
  id:8,
  Image: './bar-image/botal.webp',
  price: 11.96,
  discription: "5 Tier Storage Shelf foldable Shelf with...",
  title: '',
  catagory: '',
  rating: '',

}]

const  CookwareProduct=[{
    id:1,
    Image: './Bar-image/photo01.webp',
    price: 11.96,
    discription: "Thyme & Table Stainless Steel Gold Cocktail Stirrer Spoo",
    title: '',
    catagory: '',
    rating: '',

},
{
  id:2,
  Image: './Bar-image/photo02.webp',
  price: 11.96,
  discription: "5 Tier Storage Shelf foldable Shelf with...",
  title: '',
  catagory: '',
  rating: '',

},
{
  id:3,
  Image: './Bar-image/photo03.webp',
  price: 11.96,
  discription: "5 Tier Storage Shelf foldable Shelf with...",
  title: '',
  catagory: '',
  rating: '',

},
{
  id:4,
  Image: './Bar-image/photo04.webp',
  price: 11.96,
  discription: "5 Tier Storage Shelf foldable Shelf with...",
  title: '',
  catagory: '',
  rating: '',

},
{
  id:5,
  Image: './Bar-image/photo05.webp',
  price: 11.96,
  discription: "5 Tier Storage Shelf foldable Shelf with...",
  title: '',
  catagory: '',
  rating: '',

},
{
  id:6,
  Image: './Bar-image/photo06.png',
  price: 11.96,
  discription: "5 Tier Storage Shelf foldable Shelf with...",
  title: '',
  catagory: '',
  rating: '',

},
{
  id:7,
  Image: './Bar-image/photo05.webp',
  price: 11.96,
  discription: "5 Tier Storage Shelf foldable Shelf with...",
  title: '',
  catagory: '',
  rating: '',

},
{
  id:8,
  Image: './Bar-image/photo01.webp',
  price: 11.96,
  discription: "5 Tier Storage Shelf foldable Shelf with...",
  title: '',
  catagory: '',
  rating: '',

}]

const  EntertainmentProduct=[{
    id:1,
    Image: './entertainment-image/image1.webp',
    price: 11.96,
    discription: "Thyme & Table Stainless Steel Gold Cocktail Stirrer Spoo",
    title: '',
    catagory: '',
    rating: '',

},
{
  id:2,
  Image: './entertainment-image/image2.webp',
  price: 11.96,
  discription: "5 Tier Storage Shelf foldable Shelf with...",
  title: '',
  catagory: '',
  rating: '',

},
{
  id:3,
  Image: './entertainment-image/image3.webp',
  price: 11.96,
  discription: "5 Tier Storage Shelf foldable Shelf with...",
  title: '',
  catagory: '',
  rating: '',

},
{
  id:4,
  Image: './entertainment-image/image4.webp',
  price: 11.96,
  discription: "5 Tier Storage Shelf foldable Shelf with...",
  title: '',
  catagory: '',
  rating: '',

},
{
  id:5,
  Image: './entertainment-image/image5.webp',
  price: 11.96,
  discription: "5 Tier Storage Shelf foldable Shelf with...",
  title: '',
  catagory: '',
  rating: '',

},
{
  id:6,
  Image: './entertainment-image/image6.webp',
  price: 11.96,
  discription: "5 Tier Storage Shelf foldable Shelf with...",
  title: '',
  catagory: '',
  rating: '',

},
{
  id:7,
  Image: './entertainment-image/image7.webp',
  price: 11.96,
  discription: "5 Tier Storage Shelf foldable Shelf with...",
  title: '',
  catagory: '',
  rating: '',

},
{
  id:8,
  Image: './entertainment-image/image8.webp',
  price: 11.96,
  discription: "5 Tier Storage Shelf foldable Shelf with...",
  title: '',
  catagory: '',
  rating: '',

},{
    id:9,
    Image: './entertainment-image/image9.webp',
    price: 11.96,
    discription: "5 Tier Storage Shelf foldable Shelf with...",
    title: '',
    catagory: '',
    rating: '',
  
  }]



    return (


        <section className='main-products-container1'>
            <section className='all-iteme-container'>
                <div className='product-hadding'>
                    <div className='hadding'>
                        <h2>Get it all right her </h2>
                    </div>
                    <div>
                        <a href='#'>View all</a>
                    </div>
                </div>

                <div className=' all-product'>
                    {<Carousel responsive={responsive} >
                        <div className='items'>
                            <div className='image'>
                                <a href='#'>
                                    <img src='/All-products-image/grocery.webp'></img></a>
                            </div>
                            <div className='product-name'>
                                <a href='#'>Grocery</a>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='image'>
                                <a href='#'>
                                    <img src='/All-products-image/sofa.webp'></img></a>
                            </div>
                            <div className='product-name'>
                                <a href='#'>Home</a>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='image'>
                                <a href='#'>
                                    <img src='/All-products-image/garden.webp'></img></a>
                            </div>
                            <div className='product-name'>
                                <a href='#'>Patio & Garden</a>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='image'>
                                <a href='#'>
                                    <img src='/All-products-image/denim.webp'></img></a>
                            </div>
                            <div className='product-name'>
                                <a href='#'>Fashion</a>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='image'>
                                <a href='#'>
                                    <img src='/All-products-image/laptop.webp'></img></a>
                            </div>
                            <div className='product-name'>
                                <a href='#'>Electronics</a>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='image'>
                                <a href='#'>
                                    <img src='/All-products-image/toy.webp'></img></a>
                            </div>
                            <div className='product-name'>
                                <a href='#'>Toys</a>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='image'>
                                <a href='#'>
                                    <img src='/All-products-image/beauty.webp'></img></a>
                            </div>
                            <div className='product-name'>
                                <a href='#'>Beauty</a>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='image'>
                                <a href='#'>
                                    <img src='/All-products-image/tire.webp'></img></a>
                            </div>
                            <div className='product-name'>
                                <a href='#'> Auto & Tires</a>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='image'>
                                <a href='#'>
                                    <img src='/All-products-image/grocery.webp'></img></a>
                            </div>
                            <div className='product-name'>
                                <a href='#'>Grocery</a>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='image'>
                                <a href='#'>
                                    <img src='/All-products-image/grocery.webp'></img></a>
                            </div>
                            <div className='product-name'>
                                <a href='#'>Grocery</a>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='image'>
                                <a href='#'>
                                    <img src='/All-products-image/grocery.webp'></img></a>
                            </div>
                            <div className='product-name'>
                                <a href='#'>Grocery</a>
                            </div>
                        </div>
                    </Carousel>}

                </div>

            </section>

            <section className='products-container1'>
                <div className='products-container-box1'>
                    <div className='products-container-box1-image1'>
                        <a href='#'> <img src='/images/bar1.jpg'></img></a>
                        <div className='products-box1-text'>
                            <p>Feast your eyes</p>
                            <h1>Master the art of the tablescape</h1>
                            <button>Shop all</button>
                        </div>

                    </div>
                </div>
                <div className='products-container-box2'>
                    <div className='products-box2-image1'>
                        <a href='#'> <img src='/images/bar2.jpg'></img></a>
                        <div className='products-box2-text1'>
                            <p>TV stands</p>
                            <h1>Anchor your space</h1>
                            <a href='#'>Shop now</a>
                        </div>

                    </div>
                    <div className='products-container-box2-mid'>
                        <div className=' products-box2-mid-image1'>
                            <a href='#'> <img src='/images/bar3.jpg'></img></a>
                            <div className='box2-mid--text'>
                                <p>Opt for the big screen</p>

                                <a href=''>Shop TVs</a>
                            </div>

                        </div>
                        <div className='products-box2-mid-image2'>
                            <a href='#'> <img src='/images/bar4.jpg'></img></a>
                            <div className='products-box2-mid-text'>
                                <p>Crunch-time appliances</p>

                                <a href=''>Shop now</a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='products-container-box3'>
                    <div className='products-container-box3-image'>
                        <a href='#'> <img src='/images/bar5.jpg'></img></a>
                        <div className='products-box3--text'>
                            <p>Host happy hour</p>
                            <h1>Mix, mingle & pour</h1>
                            <a href=''>Shop barware</a>
                        </div>

                    </div>
                </div>
            </section>


            <section className='featur'>

            </section>

          


            <section className='bar-producs-container'>
                <div className='bar-hadding'>
                    <div>
                        <h1>Let’s raise the bar</h1>
                        <p>
                            Top-shelf shakers & more.
                        </p>
                    </div>
                    <a href=''>View all</a>
                </div>
                <div className='bar-items'>

                    {<Carousel responsive={responsives} >
                    {AllProduct.map((ele,i)=>{
                        return(
                            <div class='items' key={i}>
                            <a href='#'><img src={ele?.Image}></img></a>
                            <div className='bar-price'>
                                <h2>${ele?.price}</h2>
                                <span></span>
                                <div className='discription'>
                                    <a href='#'>{ele?.discription}</a>
                                </div>
                                <div className='buttons'>
                                    <FiPlus size={19} /><button>
                                        Add</button>
                                </div>
                                <div className='heart'>
                    <CiHeart size={29}  />

                    </div>
                            </div>
                        </div>
                        )
                    })}
                    </Carousel>}
                </div>
            </section>
            <hr className='custom-hr'/>
            <section className='feature'>
                <div className='social'>
                    <h1>Trending on social</h1>
                    <p>Shop creator faves</p>
                </div>
                <Carousel className='feature01' responsive={responsive01}>
                    <div className='item'>
                    <img src='/images/trainding1.jpg'/>
                    </div>
                    <div className='item'>
                        <img src='/images/trainding2.jpg'/>
                    </div>
                    <div className='item'>
                        <img src='/images/trainding3.jpg'/>
                    </div>
                    <div className='item'>
                        <img src='/images/trainding4.jpg'/>
                    </div>
                    <div className='item'>
                        <img src='/images/trainding6.jpg'/>
                    </div>
                    <div className='item'>
                        <img src='/images/tranding6.jpg'/>
                    </div>
                </Carousel>
            </section>
            {/* next slider container items , photo and slider */}

         
            <section className='next-slider-conatainer'>
                <div className='items-container2'>
                    <div className='items-product'>
                        <div className='items-hadding'>
                            <div className='haddings'>
                                <h2>Sliving your best life</h2>
                                <p>Cookware, mini fridges & more.</p>
                            </div>
                            <div>
                                <a href='#'>View all</a>
                            </div>
                        </div>

                        <div className='products'>
                            {<Carousel responsive={responsiveness} >
                            {CookwareProduct.map((ele,i)=>{
                                return (
                                    <div class='items' key={i}>
                                    <img src={ele?.Image}></img>
                                    <div className='price'>
                                        <h2>Now ${ele?.price
                                        }</h2>
                                        <span></span>
                                        <div className='discription'>
                                            <a href='#'>{ele?.discription}</a>
                                        </div>
                                        <button>options</button>
                                    </div>
                                    <div className='heart'>
                      <CiHeart size={29}  />

                    </div>
                                </div>
                                )
                            })}   
                            </Carousel>}

                        </div>
                    </div>
                    <div className='picture-container'>
                        <div className='picture'>

                            <img src='/Bar-image/big photo.jpg'></img>

                            <div className='picture-text'>
                                <p>Live,love,pink</p>
                                <div><h1>Be An Icon</h1></div>
                                <button>Shop now</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className='custom-hr'/>
            <section className='products-container1'>
                <div className='products-container-box1'>
                    <div className='products-container-box1-image1'>
                        <a href='#'><img src='/images/girlss.webp'></img></a>
                        <div className='products-box1-text'>
                            <p>Hispanic Heritage Month </p>
                            <h1>Celebrating la comunidad</h1>
                            <button>Shop all</button>
                        </div>

                    </div>
                </div>
                <div className='products-container-box2'>
                    <div className='products-box2-image1'>
                        <a href='#'> <img src='/images/flawer.webp'></img></a>
                        <div className='products-box2-text1'>
                            <p>Let’s fiesta!</p>
                            <h1>Día de los Muertos</h1>
                            <a href='#'>Shop now</a>
                        </div>

                    </div>
                    <div className='products-container-box2-mid'>
                        <div className=' products-box2-mid-image1'>
                            <a href='#'> <img src='/images/cap.jpg'></img></a>
                            <div className='box2-mid--text'>
                                <p>The Nuevolution Project</p>

                                <a href=''>Shop now</a>
                            </div>

                        </div>
                        <div className='products-box2-mid-image2'>
                            <a href='#'> <img src='/images/gogals.webp'></img></a>
                            <div className='products-box2-mid-text'>
                                <p>Kids’ prescription eyewear</p>

                                <a href=''>Shop now</a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='products-container-box3'>
                    <div className='products-container-box3-image'>
                        <a href='#'> <img src='/images/bear.jpg'></img></a>
                        <div className='products-box3--text'>
                            <p>Faves from Open Call</p>
                            <h1>OMG, obsessed</h1>
                            <a href=''>Shop now</a>
                        </div>

                    </div>
                </div>
            </section>







          

            <section className='entertainment'>

                <div className='bar-hadding'>
                    <div>
                        <h1>Hours of entertainment</h1>
                        <p>
                            For every age & stage
                        </p>
                    </div>
                    <a href=''>View all</a>
                </div>
                <div className='bar-items'>

                    {<Carousel responsive={responsives} >
                    {EntertainmentProduct.map((ele,i)=>{
                        return(
                            <div class='items' key={i}>
                            <a href='#'><img src={ele?.Image}></img></a>
                            <div className='bar-price'>
                                <h2>${ele?.price}</h2>
                                <span></span>
                                <div className='discription'>
                                    <a href='#'>5 Tier Storage Shelf foldable Shelf with...</a>
                                </div>
                                <div className='buttons'>
                                    <FiPlus size={19} /><button>
                                        Add</button>
                                </div>
                                <div className='heart'>
                    <CiHeart size={29}  />

                    </div>
                            </div>
                        </div> 
                        )
                    })}
                    </Carousel>}
                </div>
            </section>
            <hr className='custom-hr'></hr>
        </section>
    )
}

export default Product