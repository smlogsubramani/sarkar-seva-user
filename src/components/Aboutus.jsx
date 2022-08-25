import React from 'react'
import '../css/homepage.css'
import Image5 from '../assests/images/about.jpg'
const Aboutus = () => {
  return (
    <div id="aboutus">
       <div className="row">
            <h2 className='middle-name-1'>
                ABOUT US
            </h2>
        </div>
        <hr />
        <div className="row">
            <div className="col-md-6">
            <div className="row">
                    
                    <p className='middle-para'> 
                    <div className="space10"></div>
                    
                    Sarkar Seva is a platform where every individual under the MGNREGA act is been properly guided to fulfill their needs by providing them quality work and their desired work prospective which could help in rural development and empowerment.
                    
                    </p>

            </div>
                <div className="space5"></div>
                
            </div>            
            <div className="col-md-6">
                <img className='middle-page-image-1'src={Image5}/>
            </div>
        </div>
    </div>
  )
}

export default Aboutus