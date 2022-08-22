import React from 'react'
import '../css/homepage.css'
import AboutUs from '../components/Aboutus'
import Contactus from '../components/Contactus'
import Gallery from '../components/Gallery'
import Image3 from '../assests/images/homepage.jpg'
import Image4 from '../assests/images/middle.jpg'
import Image6 from '../assests/images/designer.jpeg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'





const Homepage = () => {
  return (
    <div>
       <Navbar/>
        {/* TOP-PAGE */}    
        <div className="homepage-image">
        <div className="row">       
            <img loading="eager" className='top-image' src={Image3} />
            <div className="content-head">
                <h2 className='homepage-head'> SARKAR SEVA</h2>
                <p className='homepage-para'>~Quality sucess with the Quality team</p>
            </div>
        </div>          
        </div>
        {/* TOP-PAGE */}
       <div className="space5"></div>
       <div className="container">
        {/* MIDDLE PAGE */}
        <div className="row">
            <h2 class="middle-head">FEATURES</h2>
        </div>
        <hr />
        <div className="space5"></div>
        <div className="row">
            <div className="col-md-6">
                <img className='middle-page-image'src={Image4}  />
            </div>
            <div className="col-md-6">
                <div className="row">
                    
                    <p className='middle-para'> 
                    <div className="space10"></div>
                    Read a bit more about some important global environment settings that Bootstrap utilizes.
                    Read about what’s included in Bootstrap in our contents section and the list of components 
                    that require JavaScript below.
                    </p>

                </div>
                <div className="space5"></div>
                <div className="row">
                    <div className="col"><button className='read-me-btn'>Read More</button></div>
                    
                    <div className="col"></div>
                </div>
            </div>
        </div>
        <div className="space5"></div>
        {/* MIDDLE PAGE */}
        {/* MIDDLE CONTENT 1 */}
            <AboutUs/>
        {/* MIDDLE CONTENT 1 */}
        {/* MIDDLE CONTENT 2 */}
        <div className="space5"></div>
        <div className="middle-content-2">
            <div className="row">
                <div className="middle-content-2-head">
                <h2 >MEET THE TEAM</h2>
                </div>
                <div className="row">
                  
                    <div className="col-md-3"></div>
                    <div  className="col-md-6"><hr /></div>
                    <div className="col-md-3"></div>
                   
                
                </div>
         
            
            </div>
        <div className="row">
                <div className="col-md-3">
                    <div className="photo">
                        <img className='photo-1' src={Image6} />
                        <p className='photo-content'>Designer</p>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="photo">
                        <img className='photo-1' src={Image6} />
                        <p className='photo-content'>Designer</p>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="photo">
                        <img className='photo-1' src={Image6} />
                        <p className='photo-content'>Designer</p>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="photo">
                        <img className='photo-1' src={Image6} />
                        <p className='photo-content'>Designer</p>
                    </div>
                </div>
        </div>
        </div>
        {/* MIDDLE CONTENT 2 */}
        <div className="space5"></div>
        {/* MIDDLE-CONTENT-3 */}
            <Contactus/>
        {/* MIDDLE-CONTENT-3 */}
        {/* MIDDLE CONTENT-4 */}
            <Gallery/>
        {/* MIDDLE CONTENT-4 */}
        
        </div>
        <div className="space5"></div>
        <Footer/>
        
    </div>
  )
}

export default Homepage