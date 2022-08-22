import React from 'react'
import '../css/homepage.css'
import Image5 from '../assests/images/about.png'
const Aboutus = () => {
  return (
    <div>
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
                    Read a bit more about some important global environment settings that Bootstrap utilizes.
                    Read about what’s included in Bootstrap in our contents section and the list of components 
                    that require JavaScript below.
                    Read a bit more about some important global environment settings that Bootstrap utilizes.
                    
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