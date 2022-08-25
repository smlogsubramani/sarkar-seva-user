import React from 'react'
import '../css/homepage.css'

const Contactus = () => {
  return (
    <div id='contactus'>
        <div className="row">
            <div className="contactus">
                
                <h2 className='contact-top'>GET IN TOUCH</h2>
                <p className='contact-para'> Fill out the form below and we will get back to you soon! </p>
                <hr />
                <div className="space5"></div>
                <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-2">
                <label className='contact-label'>NAME</label>
                </div>
                <div className="col-md-3">
                <input className='contact-placeholder' type="text" placeholder='Name' />
                </div>
                <div className="col-md-2">
                <label className='contact-label'>EMAIL-ID</label>
                </div>
                <div className="col-md-3">
                <input className='contact-placeholder' type="email" placeholder='email-id' />
                </div>
                <div className="col-md-1"></div>
                </div>
                <div className="space5"></div>
                <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-2">
                <label className='contact-label'>CONTACT</label>
                </div>
                <div className="col-md-3">
                <input className='contact-placeholder' type="number" placeholder='phone number' />
                </div>
                <div className="col-md-2">
                <label className='contact-label'>PINCODE</label>
                </div>
                <div className="col-md-3">
                <input className='contact-placeholder' type="number" placeholder='pincode' />
                </div>
                <div className="col-md-1"></div>
                </div>
                <div className="space5"></div>
                <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-2">
                    <label className='contact-label'>DESCRIPTION</label>
                </div>
                <div className="col-md-8">
                    <input className='contact-placeholder-desc' type="text" placeholder='hi, im logasubramani' />
                </div>
           
                </div>
                <div className="space5"></div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                   
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col">
                    <button className='contact-button'>Submit</button>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="space5"></div>
            </div>
        </div>
    </div>
  )
}

export default Contactus