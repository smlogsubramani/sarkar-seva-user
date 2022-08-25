import React from 'react'
import '../css/homepage.css'
import Image7 from '../assests/images/gal-1.jpeg'
import Image8 from '../assests/images/gal-2.jpeg'
import Image9 from '../assests/images/gal-3.jpeg'
import Image10 from '../assests/images/gal-4.jpeg'
import Image11 from '../assests/images/gal-5.jpeg'
import Image12 from '../assests/images/gal-6.jpeg'
import Image13 from '../assests/images/gal-7.jpeg'
import Image14 from '../assests/images/gal-8.jpeg'
import Image15 from '../assests/images/gal-9.jpeg'
import Image16 from '../assests/images/gal-10.jpeg'
import Image17 from '../assests/images/gal-11.jpeg'
import Image18 from '../assests/images/gal-12.jpeg'
import Image19 from '../assests/images/gal-13.jpeg'
import Image20 from '../assests/images/gal-14.jpeg'
import Image21 from '../assests/images/gal-15.jpeg'
import Image22 from '../assests/images/gal-16.jpeg'
import Image23 from '../assests/images/gal-17.jpeg'
import Image24 from '../assests/images/gal-18.jpeg'
import Image27 from '../assests/images/gal-21.jpeg'
import Image28 from '../assests/images/gal-22.jpeg'
import Image29 from '../assests/images/gal-23.jpeg'
import Image30 from '../assests/images/gal-27.jpeg'
import Image31 from '../assests/images/gal-25.jpg'

const Gallery = () => {
  return (
    <div id='gallery'>
      <div className="space5"></div>
        <div className="container">
            <div className="row">
                <h2 className='gallery-head'>GALLERY</h2>
            </div>
            <hr />
            <div class="row"> 
  <div class="column">
    <img className='grid-image' src={Image7}/>
    <img  className='grid-image' src={Image8}/>
    <img  className='grid-image' src={Image9}/>
    <img  className='grid-image' src={Image24}/>
    <img  className='grid-image' src={Image23}/>
    <img  className='grid-image' src={Image28}/>

    

  </div>
  <div class="column">
  <img  className='grid-image'  src={Image10}/>
    <img  className='grid-image'  src={Image11}/>
    <img  className='grid-image'  src={Image12}/>
    <img  className='grid-image' src={Image21}/>
    <img  className='grid-image' src={Image22}/>
    <img  className='grid-image' src={Image27}/>



  </div>  
  <div class="column">
  <img className='grid-image' src={Image15}/>
    <img  className='grid-image'  src={Image13}/>
    <img  className='grid-image'  src={Image14}/>
    <img  className='grid-image' src={Image27}/>
    <img  className='grid-image' src={Image28}/>
    <img  className='grid-image' src={Image29}/>


  </div>
  <div class="column">
  <img  className='grid-image'  src={Image16}/>
    <img  className='grid-image'  src={Image17}/>
    <img  className='grid-image'  src={Image18}/>
    <img  className='grid-image' src={Image19}/>
    <img  className='grid-image' src={Image20}/>
    <img className='grid-image' src={Image30}/>
    <img className='grid-image' src={Image31}/>
    


  </div>
</div>
        </div>
    </div>
  )
}

export default Gallery