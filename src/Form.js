
import React from "react";
import  images from './myimage.png';
import './forms.css';
function Forms() {
  
    return (
        <div className="container">
            <div className="logo">
                <p><span>EddieShop</span></p>
                <p className='signup'>Don't have an account? <span>Sign Up</span></p>
            </div>
            <div />
            
            <h1>Welcome Back</h1>
            <div className='col'>

                    <div className='txt-fld'>
                        <label className="form-label">Your Email
                            <input type="email" name="emailAddress" placeholder="name@domain.com" />
                        
                        </label>
                </div>
                <div className='txt-fld'>
                        <label>Password
                            <input type="password" name="password" placeholder="at least 8 characters" value="password"
                            />
                        </label>
                </div>

                <div className='check_box'>
                        <label>
                            <input type="checkbox" name="text" />
                            Keep me logged in
                        </label>
                       <label className='forget'>forget Password?</label>
                  </div>

                <div>
                        <button type="login">Login</button>
                    </div>

                     <img src={images} alt='#'/>
                    

                    <p>____________________________ OR _____________________________</p>

                <div class='myicons'>
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-google" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                    </div>


            </div>
        </div>
    )}


export default Forms