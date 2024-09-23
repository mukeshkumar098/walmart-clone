import React from 'react'
import './Login.css'

function Login() {
  return (
    <main className='main'>
         <section className='main-container'>
        <section className='second-container'>
         <header className='heddings'>
            <a href='#'><img src='/images/logo.png'></img></a>
            <h1>Sign in or create your account</h1>
           
            <p className='pera'>Not sure if you have an account?</p>
            <p> Enter your email and we’ll check for you.</p>
           
            </header>
         <form className='form'>
            <label for="loginId">Email Address</label>
            <div className='form-input'>
                <input type='email' name='Email address' ></input>
            </div>
            <button>Continue</button>
            <p>Securing your personal information is our priority.</p>
            <a href='#'>See our privacy measures.</a>
         </form>
         </section>
         </section>
         <footer className='footer'>
         <div className='walmart'>© 2024 Walmart. All Rights Reserved.</div>
            <ul className='lists'>
            <li><a href='#'>Give feedback</a></li>
            <li><a href='#'>CA Privacy Rights</a></li>
            <li><a href='#'>Your Privacy Choices</a></li>
            <li><a href='#'>Notice at Collection</a></li>
            <li><a href='#'>Request My Personal Information</a></li>
            <li><a href='#'>Delete Account</a></li>
            <li><a href='#'>California Supply Chains Act</a></li>
            </ul>
         </footer>
    </main>
  )
}

export default Login