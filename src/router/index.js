import React from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Notification from "../pages/Notification";
import Aboutus from "../pages/Aboutus";
// import Villagesurvailance from "../pages/Villagesurvailance";
// import Villageinfo from "../pages/Villageinfo";
// import Agriculture from "../pages/Agriculture";
import Ownerform from "../pages/Ownerform";
import Errorpage from "../pages/Errorpage";
import Homepage from "../pages/Homepage";
import Importantlink from "../pages/Importantlink";
// import Addworkerform from "../pages/Addworkerform";
// import Request from "../pages/Request";
// import Nonactiveworkerdb from "../pages/Nonactiveworkerdb";
// import Agriinfo from "../pages/Agriinfo";
// import Navbar from "../components/Navbar"


const AppRouter = () => (

    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
      <Route path="/" element={<Homepage/>} exact={true} />
        <Route path="/login" element={<Login/>} exact={true} />
        <Route path="/signup" element={<Signup/>} exact={true} />
        <Route path="/Notification" element={<Notification/>} exact={true} />
        <Route path="/profilepage" element={<Aboutus/>} exact={true} />
        {/* <Route path="/villagesurvailance" element={<Villagesurvailance/>} exact={true} />
        <Route path="/villageinfo" element={<Villageinfo/>} exact={true} />
        <Route path="/Agriculture" element={<Agriculture/>} exact={true} /> */}
        <Route path="/recruiterform" element={<Ownerform/>} exact={true} />
        <Route path="*" element={<Errorpage/>} exact={true} />
        <Route path="/importantlink" element={<Importantlink/>} exact={true} />
        {/* <Route path="/addworkerform" element={<Addworkerform/>} exact={true} />
        <Route path="/request" element={<Request/>} exact={true} />  
        <Route path="/nonworkerdb" element={<Nonactiveworkerdb/>} exact={true} />    
        <Route path="/agriinfo" element={<Agriinfo/>} exact={true} />    */}

      </Routes>     
    </BrowserRouter>

);

export default AppRouter;