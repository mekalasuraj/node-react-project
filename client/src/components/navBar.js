import React,{useEffect,useState} from 'react';
import WHITE from '../img/WHITE.svg'
//import '../App.css'
import user_icon from '../img/user_icon_white.svg';
const NavBar = (props) => {
  
  const [isScrolled,setIsSetScroll]=useState(false);
 
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener('scroll',handleScroll);
    };
  })

 const handleScroll= () => {
    if (window.pageYOffset > 140) {
          setIsSetScroll(true)
    }else{
          setIsSetScroll(false)
    }
  }
  return (
    <>
     
     <div className="col-12">
     <header className="site-header fullscreen-bg">
              <nav className= {isScrolled ? `site-header navbar navbar-expand-lg navbar-dark z-depth-0 px-md-1 mainNavBar fixNav pt-3`: 'site-header navbar navbar-expand-lg navbar-dark z-depth-0 px-md-1 mainNavBar pt-5'}>
                <div className="container">
                  <a className="navbar-brand" href="/" id="main_logo">
                    <img src={WHITE} style={{ width: 100 }} alt="Card cap"/>
                  </a>
                  <button className="navbar-toggler p-0" type="button" data-toggle="collapse" data-target="#mainMenuNavbar" aria-controls="mainMenuNavbar" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
                  <div className="collapse navbar-collapse" id="mainMenuNavbar">
                    <ul className="navbar-nav ml-auto custom-navbar">
                     
                    <li className="nav-item ml-md-3">
                        <a className="nav-link custom-nav-link"  href=''>
                         
                          <div className="dropdown">
  <button className="dropdown-toggle transparent_btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  CITIES
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>
                        </a>
                      </li>
                      <li className="nav-item ml-md-3">
                        <a className="nav-link custom-nav-link" >
                          EXPLORE
                        </a>
                      </li>
                      <li className="nav-item ml-md-3">
                        <a className="nav-link custom-nav-link" >
                          PARTNER WITH US
                        </a>
                      </li>
                      <li className="nav-item ml-md-3">
                        <a className="nav-link custom-nav-link" >
                          OFFERS
                        </a>
                      </li>
                      <li className="nav-item ml-md-3 nav_btn" >
                        <a className="nav-link custom-nav-link" >
                          
                            <img src={user_icon} />
                          <button className="login_btn">Login</button>
                          
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
           
       </div>
       
       {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">Hidden brand</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"
            >Disabled</a
          >
        </li>
      </ul>
      <form className="d-flex input-group w-auto">
        <input
          type="search"
          className="form-control"
          placeholder="Type query"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          data-mdb-ripple-color="dark"
        >
          Search
        </button>
      </form>
    </div>
  </div>
</nav> */}



    </>
  );
};



export default NavBar;

