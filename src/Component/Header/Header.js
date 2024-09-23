import React, { useState } from 'react'
import { TbBrandWalmart } from "react-icons/tb";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoSearchCircleSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineHome } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";
import { CiGrid42 } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoGiftOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsDownload } from "react-icons/bs";
import './Header.css'
import { MdShowChart } from 'react-icons/md';
import { hover } from '@testing-library/user-event/dist/hover';
import { Link } from 'react-router-dom';
import { CiSaveDown2 } from "react-icons/ci";




function Header() {
  const [showcart, setshowcart] = useState(false);
  const [showcart1, setshowcart1] = useState(false);
  const [showcart2, setshowcart2] = useState(false);
  return (
    <>
      <header className='mainheader'>
        <nav className='top-header'>
          <TbBrandWalmart color='#ffc220' size={36} />
          <div className='select-bar' onClick={() => setshowcart(!showcart)||setshowcart1(false )}>
            <img src='./images/k2.webp'></img>
            <div className='barr'>
              <h4>How do you want your items?</h4>
              <p>Sacramento, 95829</p>

            </div>
            {showcart ? <MdKeyboardArrowUp/> : <IoMdArrowDropdownCircle /> }

          </div>


          <div className='search-bar'>
            <input type='search' name='search' placeholder='search everything at walmart online and in store' />
            <IoSearchCircleSharp color='004F9A' size={40} />


          </div>
          <div className='my-item' onClick={() => setshowcart1(!showcart1)}>
            <CiHeart size={20} />
            <div className='reorder'>
              <p>Reorder</p>
              <h4>My Item</h4>

            </div>

          </div>
          <div className='account' onClick={()=>setshowcart2(!showcart2)}>
            <MdAccountCircle color='white' size={20} />
            <div className='login'>
              <p>Sign in</p>
              <h4>Account</h4>
            </div>
          </div>
          <div className='cart'>
            <FiShoppingCart color='white' size={20} />
            <p>$0.00</p>
          </div>
        </nav>
        <nav>
          <div className='nav2'>
            <div className='services'>
               <div className='department'>
               <CiGrid41  size={17}/>
                <h3>Departments</h3>
                <MdOutlineKeyboardArrowDown size={17}/>
               </div>
               <div className='service'>
               <CiGrid42 />
                <h3>Services</h3>
                <MdOutlineKeyboardArrowDown  size={17}/>
               </div>
            </div>
            <div>|</div>
            <div className='head'>
            <ul>
            <li>
              <a href='#'>Saving</a>
              </li>
              <a href='#'>Grocery & Essentials</a>
              <li>
              <a href='#'>New & Treding</a>
              </li>
              <a href='#'>Halloween</a>
              <li>
              <a href='#'>Beauty Glow Up</a>
              </li>
              <a href='#'>Electronics</a>
              <li>
              <a href='#'>Home</a>
              </li>
              <a href='#'>Fashion</a>
              <li>
              <a href='#'>Topo shop</a>
              </li>
              <a href='#'>Registry</a>
              </ul>
            </div>
          
          </div>
        </nav>
      </header>
     
      {showcart &&   <div className='cart-transperancy' onClick={()=>setshowcart(false)}><div className='addres-card'>
        <div className='bar'>
          <div className='deliver'>

            <div>
              <img src='/images/deliver.png' />
              <h5>Shipping</h5>
            </div>
            <div>
              <img src='/images/car.png' />
              <h5>Pickup</h5>
            </div>
            <div>
              <img src='/images/delivery.png' />
              <h5>Delivery</h5>
            </div>
          </div>
        </div>
      
        <div className='location'>
          <div className='loc'>
            <div className='locc'>
              <CiLocationOn size={20} />
              <div className='f7'>Add an address for shipping and delivery</div>
            </div>
            <div className='f8'> Sacramento, CA 95829</div>
            <div className='loca'>


              <div className='button'>
                <button>Add address</button>
              </div>
            </div>


          </div>
        </div>
        <div className='sacra'>
          <div className='sac'>
            <div className='f2'>
              <div className='icon'>
                <MdOutlineHome size={20} />
                <div className='Sacramento'>
                  Sacramento Supercenter
                </div>

              </div>
              <div className='f9'>8915 GERBER ROAD, Sacramento, CA 95829</div>
            </div>
            <FaChevronRight size={20} />

          </div>
        </div>

      </div>
      </div>}
      {showcart1 && <div className='cart-transperancy' onClick={()=>setshowcart1(false)}><div className='reoderr'>
           <div className='itms'>
           <BsDownload size={15}/>

            <a href='#'>Reorder</a>
           </div>
           <div className='itms'>
           <IoIosHeartEmpty size={18} />

            <a href='#'>List</a>
           </div>
           <div className='itms'>
           <IoGiftOutline />

            <a href='#'>Registries</a>
           </div>
      </div>
      </div>
      }
      {showcart2 && <div className='cart-transperancy'onClick={()=>setshowcart2(false)}> <div className='account-bar' owl-dot={false} nav>
            <div className='account-button'>
              <Link to='/login'><button>Sign in or create account</button></Link>
            </div>
            <hr></hr>
            <div className='purches'>
              <ul>
              <li> <CiSaveDown2 />
              <a href=''>Purchase History</a></li> 
              <li> <TbBrandWalmart /><a href=''>Walmart+</a></li>
              </ul>
            </div>
            </div>
      </div>}
    </>

  )
}

export default Header