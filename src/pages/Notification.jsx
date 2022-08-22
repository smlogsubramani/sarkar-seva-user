import React from 'react'
import '../css/notification.css'

const Notification = () => {
  return (
    <div className="container">
        <div className="space5"></div>
        <h2 className="notification-head">
        <i id="bell"class="fa-solid fa-bell"></i>   Notification 
        </h2>
    
        {/* SINGLE NOTIFICATION */}
            <div class="accordion" id="accordionExample">
                <div className="space1"></div>
  <div id="one-notification" class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button id="notification-btn"class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       To usulampati-vao <span className='time'>6:45pm</span>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="space1"></div>
  <div id="one-notification" class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button id="notification-btn" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        To adayar-vao <span className='time'>6:45pm</span>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="space1"></div>
  <div id="one-notification" class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button id="notification-btn" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="True" aria-controls="collapseThree">
        To mangadu-vao <span className='time'>6:45pm</span>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="space1"></div>
  
  <div id="one-notification" class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button id="notification-btn"class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="True" aria-controls="collapseFour">
        To vigilance-vao <span className='time'>6:45pm</span>
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="space1"></div>
  <div id="one-notification" class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button id="notification-btn"class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="True" aria-controls="collapseFive">
        To madurai-vao <span className='time'>6:45pm</span>
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
      <div className="space1"></div>    
  <div id="one-notification" class="accordion-item">
    <h2 class="accordion-header" id="headingSix">
      <button id="notification-btn" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="True" aria-controls="collapseSix">
        Msg-regarding-cleaning <span className='time'>6:45pm</span>
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
        {/* SINGLE NOTIFICATION */}
        <div className="space3"></div>
    <div className="row">
        <div className="col">
             <button className='notification-edit-btn'>Edit</button>
        </div>
        <div className="col"></div>
        <div className="col"></div>
    </div>
    <div className="space3"></div>
    
    </div>
  )
}

export default Notification