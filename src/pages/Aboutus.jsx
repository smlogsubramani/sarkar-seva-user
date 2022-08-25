import React, { useEffect, useState } from 'react'
import axios from "axios";
import '../css/aboutus.css'
import Navbar from '../components/Navbar';
import Image1 from '../assests/images/vao.jpeg'

const INITIAL = {
    "_id": "",
    "name": "loga Req",
    "email": "aravind@gmail.com",
    "phone_number": "1478523692",
    "aadhar": "1234 4321 1234",
    "password": "$2b$10$SFJLb5Kg0uY4UpO.efroQ.GaoizUIokVxotmYMJOzqGvbEs4MJBIi",
    "age": 20,
    "gender": "M",
    "address": "ABC street, Chennai",
    "district": "Cuddalore",
    "pincode": "600098",
    "state": "TN",
    "__v": 0
};

const AboutUs = () => {
    const [data, setData] = useState(INITIAL);

    const body = {
        "user_id": "63045e9b6e71f7633fa57823"
    };

    const initProfile = async () => {
        const url = `http://localhost:8000/user/user-profile`;
        console.log(body)
        const response = await axios.post(url, body);
        // if(response.status === 200) {
            response.data ? setData(response.data) : setData(INITIAL);
            console.log("Response ", response.data);
        // }
    }

    useEffect(() => {
        initProfile();
        console.log("Hello");
    }, []);

  return (
    
    <div>
 <Navbar/>
    <div className="space3"></div>
        <div className="container">
        <h2 className='profile-head'><i class="fa-solid fa-user"></i> PROFILE PAGE </h2>
        <div className="row">
            <hr />
        </div>
        <div className="space5"></div>
          
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                      
                        <div className="col">  <div className="profile-image">
                            <img className="profile-image" src={Image1} alt="" />
                        </div></div>
            
                  
                    </div>
                    <div className="space10"></div>
                    <div className="row">
                    <h5 className='profile-page-subtitle-1'>VILLAGE UNDER CONTROL</h5>
         
                    </div>
                    <div className="space5"></div>
                    <div className="row">
                    <div className="space10"></div>
                    <label className='label-profile'><a href=''>usulambati</a>-34,500 people</label>
                    <div className="space5"></div>
                    <label className='label-profile'><a href=''>Ambathur</a>-32,500 people</label>
                    <div className="space5"></div>
                    <label className='label-profile'><a href=''>karur</a>-33,500 people</label>
                    <div className="space5"></div>
                    <label className='label-profile'><a href=''>kovilpatti</a>-36,500 people</label>
                    <div className="space5"></div>
                    </div>
                </div>
                
                <div className="col-md-6">
                    <h1 className='about-us'> About Me </h1>
                    <p className='profile-page-subtitle'>VAO OF USULAMBATI</p>
                    <hr />
                    <div className="space5"></div>
                    <p className='profile-para'>
                    It is hidden by default, until the collapse plugin adds the appropriate 
                    classes that we use to style each element. These classes control the overall
                    appearance, as well as the showing and hiding via CSS transitions. 
                    You can modify any of this with custom CSS or overriding our default variables.
                     It's also worth noting that just about any HTML can go within the
                    </p>
                    <div className="space5"></div>
                    <div className="row">
                        <h5 className='profile-page-subtitle-1'>DETAILED DESCRPTION</h5>
                    </div>
                    <hr />
                    <div className="space5"></div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <label className='label-profile'>Name : { data.name }</label>
                                <div className="space5"></div>
                                <label className='label-profile'>Age : { data.age }</label>
                                <div className="space5"></div>
                                <label className='label-profile'>Residence : { data.district }</label>
                                <div className="space5"></div>
                                <label className='label-profile'>Address : { data.address }</label>
                                <div className="space5"></div>
                                <label className='label-profile'>Dob : 01.05.2002 </label>
                                <div className="space5"></div>
                                <label className='label-profile'>Email : { data.email }</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="row">
                                <div className="space5"></div>
                                <label className='label-profile'>Projects completed : 2</label>
                                <div className="space5"></div>
                                <label className='label-profile'>Phone : 9790778113</label>
                                <div className="space5"></div>
                                <label className='label-profile'>Username : Priya_123</label>
                                <div className="space5"></div>
                                <label className='label-profile'>AmountSanctioned : 3,00000</label>
                                <div className="space5"></div>
                                <label className='label-profile'>Your profession : construction</label>
                                <div className="space5"></div>
                                <label className='label-profile'>Total transaction : 2,45000</label>
                                <div className="space5"></div>
                                
                        </div>
                        
                        </div>
                    </div>
                    <div className="space10"></div>
                  
                </div>
                
            </div>
            <button className='button-profile'>Edit<i id="edit-icon" class="fa-solid fa-pen-to-square"></i></button>
            <div className="space5"></div>
        </div>
    </div>
  )
}

export default AboutUs;