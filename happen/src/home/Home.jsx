import React from 'react'
import '../home/bootstrap.min.css';
import '../home/Home.css'

import Row  from 'react-bootstrap';

function Home() {
  return (
    <>
    
      <nav  className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
        <div className=' none '>
      <img src= "https://krinfud.com/wp-content/uploads/2021/05/KrinfudLogo@4x-8.png" alt=""/>
      </div>
      <div className='links collapse navbar-collapse'>
          <ul  className="justify-content-end  navbar-nav ms-auto  ">
           
  <li  className="nav-item">
    <a  className="nav-link text-warning"  href="#home">home</a>
  </li>
  <li  className="nav-item">
    <a  className="nav-link text-warning" href="#about">about</a>
  </li>
  <li  className="nav-item">
    <a  className="nav-link text-warning " href="#serivce">service</a>
  </li>
  <li  className="nav-item">
    <a  className="nav-link text-warning " href="#contact">contact</a>
  </li>
  <li  className="nav-item">
    <a  className="nav-link text-warning" href="#blog" >blog</a>
  </li>
</ul>
</div>
      </nav>
      
  <section>
    <div className='container-fluid' id="home">
      <img className='home' src="https://krinfud.com/wp-content/uploads/2021/05/background-1.jpg " alt="" />
    </div>
  </section>

  <section>
  <div className='container-fluid-fluid bg-warning py-5 px-3'>
    <div className='text-center'>
      <h1 className='text-dark '>Who are we?</h1>
      <p className='py-5 px-5 '>
        Krinfud is a digital marketing firm set to change the digital scene <br />
        in Ethiopia. We are a team of digitally skilled individuals that are constantly learning <br /> and developing as the industry grows.
      </p>
      <p className='py-5 px-5'>
        Our mission is to provide innovative digital marketing solutions tailored <br /> to our clients' needs. With our expertise and dedication, we strive to make a positive impact <br /> on businesses in Ethiopia and beyond.
      </p>
    </div>
  </div>
</section>

  <section>
  <div className='container-fluid py-5'>
    <h1 className='text-center text-dark py-5'>Our services</h1>
  </div>
  <div className='row'>
    <div className="col-sm-4">
      <div className="card text-danger">
        <img className="card-img-top bom" src="https://krinfud.com/wp-content/uploads/2020/04/social-media_1@5x.png" alt="Card image cap" />
        <div className="">
          <h2 className="card-title ">Social Media Marketing</h2>
          <p className="card-text">We help companies increase brand 
          exposure and broaden customer reach by providing 
             include,development for our clients that is backed with the latest cutting edge technologies and designed to your specific needs.
  </p>
        </div>alt
      </div>
    </div>
    <div className="col-sm-4">
      <div className="card">
        <img className="card-img-top bom" src="https://krinfud.com/wp-content/uploads/2020/04/Branding@5x.png" alt="Card image cap" />
        <div className="text-danger">
          <h2 className="card-title">Branding & Graphic </h2>
          <p className="card-text">A great brand identity   Your company logo, business card, a website all should tell the story about your brand. At krinfud, get your high-quality branding needs fulfilled, which would create an everlasting image 
     <br /> eyes.</p>
        </div>
      </div>
    </div>
   
    <div className="col-sm-4">
      <div className="card">
        <img className="card-img-top bom" src="https://krinfud.com/wp-content/uploads/2020/04/development@5x.png" alt="Card image cap" />
        <div className="text-danger">
          <h2 className="card-title">Service 3</h2>
          <p className="card-text">If you have an idea that can  ve a digital solution that have a digital solution that can be realized by a web or a mobile application software, We provide custom website and app development for our clients that is backed with the latest cutting edge technologies  and designed to your specific needs.</p>
        </div>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="card">
        <img className="card-img-top bom" src="https://krinfud.com/wp-content/uploads/2020/04/Inflluencer@5x.png" alt="Card image cap" />
        <div className="text-danger">
          <h2 className="card-title">Service 2</h2>
          <p className="card-text">increase its visibility in search results on search engines like Google and Bing. You specifically focus on search results related to your company, products, services, or industry. We give topnotch search engine optimization services for our clients</p>
        </div>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="card">
        <img className="card-img-top bom" src="https://krinfud.com/wp-content/uploads/2020/04/Inflluencer@5x.png" alt="Card image cap" />
        <div className="text-danger">
          <h2 className="card-title">Service 2</h2>
          <p className="card-text">At krinfud we run top notch campaigns through the digital world and leverage the different tiktok and instagram influencers we manage. We provide the right influencer for your campaign with the set budget you have for your promotional needs.</p>
        </div>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="card">
        <img className="card-img-top bom" src="https://krinfud.com/wp-content/uploads/2020/04/Seo@5x.png" alt="Card image cap" />
        <div className="text-danger">
          <h2 className="card-title">Service 2</h2>
          <p className="card-text">to increase its visibility in search results on search engines like Google and Bing. You specifically focus on search results related to your company, products, services, or industry. We give topnotch search engine optimization services for our clients</p>
        </div>
      </div>
    </div>
    <div className="col-sm-4 center-image">
      <div className="card">
        <img className="card-img-top bom " width={30} src="https://krinfud.com/wp-content/uploads/2020/04/Branding@5x.png" alt="Card image cap" />
        <div className="text-danger ">
          <h2 className="card-title">Service 2</h2>
          <p className="card-text">With SEO, your business wants to increase its visibility in search results on search engines like Google and Bing. You specifically focus on search results related to your company, products, services, or industry. We give topnotch search engine optimization services for our clients</p>
        </div>
      </div>
    </div>
  </div>

</section>
<section>
  <div className='container-fluid py-5'>
    <h1 className='text-center text-danger py-5'>Who We've Worked With
</h1>
  </div>
  <div>
 
  </div>
</section>
<section>
  <div className='container-fluid py-5'>
    <h1 className='text-center text-dark py-5'>Additional Section</h1>
  </div>
</section>


<section>

</section>





<footer>

  

</footer>
     </>
  
  )
}

export default Home;
