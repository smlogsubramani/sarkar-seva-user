import React from 'react'
import '../css/aboutus.css'
import Image1 from '../assests/images/vao.jpeg'

const aboutus = () => {
  return (
    <div>
 
    <div className="space3"></div>
        <div className="container">
        <h2 className='profile-head'> PROFILE PAGE</h2>
          <hr />
            <div className="row">
                <div className="col-md-6">
                    
                    <div className="row">
                      
                        <div className="col">  <div className="profile-image">
                            <img className="profile-image" src={Image1} alt="" />
                        </div></div>
            
                  
                    </div>
                    <div className="space10"></div>
                    <div className="row">
                    <h5 className='profile-page-subtitle-1'>VILLAGE UNDER CONTROL</h5>
         
                    </div>
                    <div className="space5"></div>
                    <div className="row">
                    <div className="space10"></div>
                    <label className='label-profile'><a href=''>usulambati</a>-34,500 people</label>
                    <div className="space5"></div>
                    <label className='label-profile'><a href=''>Ambathur</a>-32,500 people</label>
                    <div className="space5"></div>
                    <label className='label-profile'><a href=''>karur</a>-33,500 people</label>
                    <div className="space5"></div>
                    <label className='label-profile'><a href=''>kovilpatti</a>-36,500 people</label>
                    <div className="space5"></div>
                    </div>
                </div>
                
                <div className="col-md-6">
                    <h1 className='about-us'> About Me </h1>
                    <p className='profile-page-subtitle'>VAO OF USULAMBATI</p>
                    <hr />
                    <div className="space5"></div>
                    <p className='profile-para'>
                    It is hidden by default, until the collapse plugin adds the appropriate 
                    classes that we use to style each element. These classes control the overall
                    appearance, as well as the showing and hiding via CSS transitions. 
                    You can modify any of this with custom CSS or overriding our default variables.
                     It's also worth noting that just about any HTML can go within the
                    </p>
                    <div className="space5"></div>
                    <div className="row">
                        <h5 className='profile-page-subtitle-1'>DETAILED DESCRPTION</h5>
                    </div>
                    <hr />
                    <div className="space5"></div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <label className='label-profile'>Name : Priya.J</label>
                                <div className="space5"></div>
                                <label className='label-profile'>Age : 27</label>
                                <div className="space5"></div>
                                <label className='label-profile'>Residence : India</label>
                                <div className="space5"></div>
                                <label className='label-profile'>Address : 3/788,vivekanandha st,madhanadhapuram,porur</label>
                                <div className="space5"></div>
                                <label className='label-profile'>Dob : 01.05.2002 </label>
                                <div className="space5"></div>
                                <label className='label-profile'>Email : priya@gmail.com</label>
                                
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="row">
                                <div className="space5"></div>
                                <label className='label-profile'>Projects completed : 2</label>
                                <div className="space5"></div>
                                <label className='label-profile'>Phone : 9790778113</label>
                                <div className="space5"></div>
                                <label className='label-profile'>Username : Priya_123</label>
                                <div className="space5"></div>
                                <label className='label-profile'>AmountSanctioned : 3,00000</label>
                                <div className="space5"></div>
                                <label className='label-profile'>Your profession : construction</label>
                                <div className="space5"></div>
                                <label className='label-profile'>Total transaction : 2,45000</label>
                                <div className="space5"></div>
                                
                        </div>
                        
                        </div>
                    </div>
                    <div className="space10"></div>
                  
                </div>
                
            </div>
            <button className='button-profile'>Edit<i id="edit-icon" class="fa-solid fa-pen-to-square"></i></button>
            <div className="space5"></div>
        </div>
    </div>
  )
}

export default aboutus