import React from 'react'
import '../css/ownerform.css'

const Ownerform = () => {
  return (
    <div>
               
        <div className="container">
            <div className="row">
                <div className="col-md-6 ">
                <div className="space10"></div>
              
                <div className="row">
                    <div className="col">
                    <i id="form-icon-1" class="fa-solid fa-message"></i>
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
               
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col"><i id="form-icon-2" class="fa-solid fa-anchor"></i></div>
                    <div className="col"></div>
                
                </div>
                <div className="row">
                    <div className="col"><i id="form-icon-3" class="fa-brands fa-twitter"></i></div>
                    <div className="col"></div>
                    <div className="col"></div>
                
                </div>
                <div className="spacehalf"></div>
                </div>
                <div className="col-md-6">
                <div className="space5"></div>
                    <div className="owner-form">
                    <div className="space5"></div>
                    <h2 className='owner-head'>RECRUITER FORM</h2>
                    <div className="space10"></div>

                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">NAME</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="text" placeholder='Logasubramani' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div>  

                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">PHONE NUMBER</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="text" placeholder='9790778113' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div> 


                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">DOB</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="date" placeholder='35' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div> 


                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">TYPE OF WORKERS NEEDED</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="text" placeholder='FARMING' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div> 

                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">NUMBER OF WORKERS NEEDED</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="number" placeholder='50' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div> 

                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">LOCATION</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="text" placeholder='usulampati' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div> 

                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">TIME DURATION</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="text" placeholder='2 months' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div> 

                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">Wage per day(in Rs)</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="number" placeholder='250' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div> 
                    <div className="space10"></div>
                    <div className="row">
                        <div className="col"></div>
                      
                        <div className="col"><button className='owner-form-submit'>Submit</button></div>
                    <div className="col"></div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>

  )
}

export default Ownerform