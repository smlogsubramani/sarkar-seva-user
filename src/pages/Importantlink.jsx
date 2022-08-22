import React from 'react'
import '../css/importantlinks.css'

const Importantlink = () => {
  return (
    <div >
        <div className="container">
            <div className="space5"></div>
            <div className="row">
                <h2 className='importantlink-head'>IMPORTANT LINK</h2>
            </div>
            <hr />
            {/* IMPORTANT ONE LINK */}
            <div className="space5"></div>
          
                <div className="one-link">
                <div className="row">
                    <h2 className='one-link-content'>
                      <a className='imp-link' href='https://eshram.gov.in/'>E-SHRAM</a>  
                    </h2>
                </div>
                </div>
            
            {/* IMPORTANT ONE LINK */}

            {/* IMPORTANT ONE LINK */}
            <div className="space3"></div>          
            <div className="two-link">
            <div className="row">
                <h2 className='one-link-content'>
                  <a className='imp-link' href='https://nrega.nic.in/Nregahome/MGNREGA_new/Nrega_home.aspx'>MGNREGA</a>  
                </h2>
            </div>
            </div>
        
            {/* IMPORTANT ONE LINK */}

            {/* IMPORTANT ONE LINK */}
            <div className="space3"></div>          
            <div className="three-link">
            <div className="row">
                <h2 className='one-link-content'>
                   <a className='imp-link' href='https://nrega.nic.in/Nregahome/MGNREGA_new/Nrega_StateReport.aspx?typeN=2'>ASSETS OF GOVERNMENT</a> 
                </h2>
            </div>
            </div>
        
            {/* IMPORTANT ONE LINK */}

            {/* IMPORTANT ONE LINK */}
            <div className="space3"></div>          
            <div className="four-link">
            <div className="row">
                <h2 className='one-link-content'>
                   <a className='imp-link' href='https://nrega.nic.in/Nregahome/MGNREGA_new/Nrega_StateReport.aspx?typeN=1'>ACTIVE WORKER STATS</a> 
                </h2>
            </div>
            </div>
        
            {/* IMPORTANT ONE LINK */}

            {/* IMPORTANT ONE LINK */}
            <div className="space3"></div>          
            <div className="five-link">
            <div className="row">
                <h2 className='one-link-content'>
                    ASSETS FOR AGRICULTURAL LAND
                </h2>
            </div>
            </div>
        
            {/* IMPORTANT ONE LINK */}
            <div className="space5"></div>
            <div className="row">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"><button className='important-btn'>ADD</button></div>
                <div className="col"></div>
            </div>
        </div>
    </div>
  )
}

export default Importantlink