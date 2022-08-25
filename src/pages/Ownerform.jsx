import React from 'react'
import '../css/ownerform.css'
import Navbar from '../components/Navbar'
const Ownerform = () => {
  return (
    <div>
    <Navbar/>  
        <div className="container">
            <div className="row">
                <div className="col-md-6 ">
               
                <div className="space-recruiter"></div>
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
                    <div className="roll-on">
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
                    <label class="label-name">DOB</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box" type="date" name="dateOfBirth" /> </div> 
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
                    <label class="label-name">NUMBER OF HOURS PER DAY</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="number" placeholder='5 hrs' maxLength={30}/> </div> 
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
                    <label class="label-name">LOCATION OF THE WORK</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="text" placeholder='usulampati' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div> 

                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">WAGE PER DAY(IN RS)</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="NUMBER" placeholder='RS 250' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div> 
                    
                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name"> START DATE</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="DATE" placeholder='' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div> 
                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">END DATE</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="DATE" placeholder='' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div> 
                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">PHONE NUMBER</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="NUMBER" placeholder='9876543210' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div> <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">BANK ACCOUNT NUMBER</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="number" placeholder='543678291734563' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div> 
                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">BANK IFSC CODE</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="number" placeholder='abcd12345678' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div>
                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">BANK NAME</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="NAME" placeholder='state bank' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div>  
                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">BANK BRANCH</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="text" placeholder='perambur' maxLength={30}/> </div> 
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
        </div>

  )
}

export default Ownerform