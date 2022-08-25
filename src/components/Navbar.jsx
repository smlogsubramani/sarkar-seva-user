import React from 'react'
import '../components/navbar.css'




const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">SARKAR SEVA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href='#aboutus'>AboutUs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#contactus">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#gallery">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/importantlink">Stats</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/recruiterform">Need worker</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/Notification">Notification</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/signup">Signup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/profilepage"><i class="fa-solid fa-user"></i></a>
        </li>
  
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar