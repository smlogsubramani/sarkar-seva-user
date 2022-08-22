import React from 'react'
import '../css/Login.css'
import Image from '../assests/images/login-page.jpeg'
const Login = () => {
  return (
    <div>
        <div className="container">
          <div className="space5"></div>
          <div className="row">
            <div className="col">
              <img className='login-image' src={Image} alt="" />
            </div>
            <div className="col">
              <div className="space10"></div>
                <div className="form">
                  <form>
                    <h3 className='login-head'>LOGIN</h3>
                   
                    <p className='tagline'>Welcome to SarkarSeva</p>
          
                    {/* SINGLE FIELD */}
                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">NAME</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="text" placeholder='Logasubramani' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div>               
                    {/* SINGLE FIELD */}


                    {/* SINGLE FIELD */}
                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">USERNAME</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="text" placeholder='loga_007' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div>               
                    {/* SINGLE FIELD */}
                    {/* SINGLE FIELD */}
                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">PASSWORD</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="text" placeholder='link@357' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div>               
                    {/* SINGLE FIELD */}
                    <div className="space5"></div>
                    {/*buttons and login */}
                    <div className="row">
                      <div className="col-4"></div>
                      <div className="col-4">
                        <button className='login-button'> LOGIN </button>
                      </div>
                      <div className="col-4"></div>
                    </div>
                    <div className="space5"></div>
                    <div className="row">
                        <div className="signup-tagline">
                        Doesn't have an account?<a href="/signup">Signup</a>
                        </div>
                    </div>

                    {/*buttons and login */}
                    <div className="space5"></div>
                  
                  </form>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login