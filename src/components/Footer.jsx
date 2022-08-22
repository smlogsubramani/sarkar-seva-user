import React from 'react'
import '../components/footer.css'

const Footer = () => {
  return (
     <div>
        <div className="footer-background">
        <footer>
            <div class="row">
                <div class="col-md-3">
                    <h5>Follow us on :</h5><br/>
                    <a href="https://www.linkedin.com/in/smnavindurai/"><span>
                            <i class="fa-brands fa-linkedin"></i>
                            </span>&nbsp;{' '}Linked-In.</a><br/><br/>
                    <a href="https://github.com/Navin3d"><span>
                    <i class="fa-brands fa-github"></i> 
                            </span>&nbsp;{' '}Github.</a><br/><br/><br/><br/>
                </div>
                <div class="col-md-3">
                    <h5>Connect with us on :</h5><br/>
                    <a href="https://www.instagram.com/mr_navin.s.m/"><span>
                    <i class="fa-brands fa-instagram"></i>
                            </span>&nbsp;{' '} Instagram.</a><br/><br/>
                    <a href="https://twitter.com/S_M_Navin_Durai"><span>
                        <i class="fa-brands fa-twitter"></i>
                            </span>&nbsp;{' '} Twitter.</a><br/><br/>
                    <a href="https://www.facebook.com/"><span>
                    <i class="fa-brands fa-facebook"></i>
                            </span>&nbsp;{' '} Facebook.</a><br/><br/>
                    <a href="https://api.whatsapp.com/send?phone=9442807217"><span>
                    <i class="fa-brands fa-whatsapp"></i>
                            </span>&nbsp;{' '} whatsapp.</a>
                </div>
                <div class="col-md-3">
                    <h5>© Copyrights-2021</h5><br/>
                    <p>All rights reserved Gentlemen's Creation's</p>
                    
                </div>
                <div className="col-md-3">
                    <div className='col-md-3 '>
                        <div className='contact-item'>
                        <h5>Contact Info</h5><br/>
                        <p>
                            <span>
                            <i className='fa fa-map-marker'></i>&nbsp; Address
                            </span><br/>
                            GMC
                        </p>
                        </div>
                        <div className='contact-item'>
                        <p>
                            <span>
                            <i className='fa fa-phone'></i>&nbsp; Phone
                            </span>{' '}
                            9790778113
                        </p>
                        </div>
                        <div className='contact-item'>
                        <p>
                            <span>
                            <i className='fa fa-envelope-o'></i>&nbsp; Email
                            </span>{' '}
                            info.sarkarseva@gmail.com
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>  
        </div>
    </div>
  )
}   

export default Footer