import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='main-footer'>
         <div className='first'>
      
            <p>We’d love to hear what you think!</p>
            <button>Give feedback</button>

         </div>
         <div className='second-footer'>
           <div className='main-lists'>
            <ul className='list'>
            <li><a href='#'>Give feedback</a></li>
            <li><a href='#'>CA Privacy Rights</a></li>
            <li><a href='#'>Your Privacy Choices</a></li>
            <li><a href='#'>Notice at Collection</a></li>
            <li><a href='#'>Request My Personal Information</a></li>
            <li><a href='#'>Delete Account</a></li>
            <li><a href='#'>California Supply Chains Act</a></li>
            </ul>
            </div>
            <div className='walmarts'>
            <h4>© 2024 Walmart. All Rights Reserved.</h4>
            </div>
            </div>
    </footer>
  )
}

export default Footer