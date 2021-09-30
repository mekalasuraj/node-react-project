import React, {useState,useEffect } from 'react';

//import '../App.css'
// import Swiper from 'react-id-swiper';
// import 'swiper/css/swiper.css';
import axios from 'axios';
import dubaibanner from '../img/dubaibanner.jpg';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


import NavBar from './navBar';
import TableSection from './landingPageSections/tableSection';
import ChooseUs from './landingPageSections/chooseUs'
import ImageGrid from './landingPageSections/imageGrid';
import CardSection from './landingPageSections/cardSection'

const LandingPage = (props) => {
  const [list,setList] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [activeId, setActiveId] = useState(1);
 useEffect(()=>{
   axios.get('https://jsonplaceholder.typicode.com/users')
   .then(response=>{
     setList(response.data);
   })
 },[])


  
const handleClick=(event, id)=>{
  
  setActiveId(id);
}

let gridOneImages=[
  {
    image:"https://img.vistarooms.com/gallery/amara-villa-6b8218.jpg",
  name:"Casa De Joy",
  location:"Alibaug, Maharashtra",
  price:'67,000'
  },
  {
    image:"https://img.vistarooms.com/gallery/casa-sol-one-70fea0.jpg",
  name:"Casa De Joy",
  location:"Nerul, Goa",
  price:'67,000'
  },
  {
  image:"https://img.vistarooms.com/angular_assets/common/property_grid/casa-ela-11-f23935.jpg",
  name:"Casa Ela 11",
  location:"Lonavala,Maha...",
  price:'67,000'
  }

];

  return (
    <div>
      <div className="bg-img banner-height">
        
        <NavBar/>
        <div className="header_margin" style={{position:'absolute',top:'19%',color:'#fff'}}>
         <h2 className="redhat_Bold">A NEW EVERYDAY <br/> BEGINS NOW.</h2>
         <p className="redhat_Regular">CHECK IN TO SUN, SERENITY & SPLENDOUR.</p>
       </div>
       <div style={{position: 'absolute',top:'62%',width:'100%'}}>
        <div className="serch_form ">
        
        <div className="form-outline p-3" style={{width:'30%'}}>
            <label className="form-label black-color redhat_Regular" htmlFor="typeEmail">Location</label>
            <input type="email" id="typeEmail" name="email" className="form-control input_border" placeholder="Where are you travelling to/from?" required/>            
        </div>
        <div className="form-outline p-3" style={{width:'30%'}}>
            <label className="form-label black-color redhat_Regular" htmlFor="typeEmail">Date</label>
           
            <DatePicker selected={startDate}calendarClassName="rasta-stripes"  onChange={(date) => setStartDate(date)} />
        </div>
        <div className="form-outline p-3" style={{width:'30%'}}>
            <label className="form-label black-color redhat_Regular" htmlFor="typeEmail">Guest</label>
            <input type="email" id="typeEmail" name="email" placeholder="1 Guest" className="form-control input_border" required/>            
        </div>
      
        <button type="button" className="btn btn-primary btn-sm search_btn">Search</button>
  </div>
        </div>
        </div>
        
        <section className="mt-5">
          <div className="col-12 section_padding" >

            <h3 className="heading_name">Explore the finest Homes in the most Desirable Destinations</h3>
            <p className="mb-5 text-center black-color redhat_Regular">Skip the cookie-cutter hotel stays for the charm and warmth of our luxury holiday homes and personalized experiences. With over 500+ homes in 50+ destinations, invite you to experience the authenticity of India without compromising on hospitality.</p>
        <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">



<div className="carousel-inner" role="listbox">

 
  <div className="carousel-item active">

    <div className="div-align">
    <div className="clearfix d-md-block carousel_div" >
      <img className="card-img-top" src="https://img.vistarooms.com/angular_assets/common/top-destination/Desktop_city/Bangalore_1.jpg"
               alt="Card cap" style={{width:'100%',borderRadius:'50%'}}/>
               <p className="item_names text-center mt-3 redhat_Medium black-color">Bangalore</p>
      </div>
      <div className="clearfix d-md-block carousel_div">
      <img className="card-img-top" src="https://img.vistarooms.com/angular_assets/common/top-destination/Desktop_city/Mumbai_1.jpg"
               alt="Card cap" style={{width:'100%',borderRadius:'50%'}}/>
               <p className="item_names text-center mt-3 redhat_Medium black-color">Mumbai</p>
      </div>
      <div className="clearfix d-md-block carousel_div">
      <img className="card-img-top" src="https://img.vistarooms.com/angular_assets/common/top-destination/Desktop_city/Delhi_1.jpg"
               alt="Card cap" style={{width:'100%',borderRadius:'50%'}}/>
               <p className="item_names text-center mt-3 redhat_Medium black-color">Delhi</p>
      </div>
      <div className="clearfix d-md-block carousel_div">
      <img className="card-img-top" src="https://img.vistarooms.com/angular_assets/common/top-destination/Desktop_city/Goa_1.jpg"
               alt="Card cap" style={{width:'100%',borderRadius:'50%'}}/>
               <p className="item_names text-center mt-3 redhat_Medium black-color">Goa</p>
      </div>
      <div className="clearfix d-md-block carousel_div">
      <img className="card-img-top" src="https://img.vistarooms.com/angular_assets/common/home_page/Dubai/Desktop+dubai+carousel+.jpg"
               alt="Card cap" style={{width:'100%',borderRadius:'50%'}}/>
               <p className="item_names text-center mt-3 redhat_Medium black-color">Dubai</p>
      </div>
</div>

  </div>
  
  <div className="carousel-item">
<div className="div-align">
    <div className="clearfix d-md-block carousel_div" >
      <img className="card-img-top" src="https://img.vistarooms.com/angular_assets/common/top-destination/Desktop_city/Alibaug_1.jpg"
               alt="Card cap" style={{width:'100%',borderRadius:'50%'}}/>
               <p className="item_names text-center mt-3 redhat_Medium black-color">Alibaug</p>
      </div>
      <div className="clearfix d-md-block carousel_div">
      <img className="card-img-top" src="https://img.vistarooms.com/angular_assets/common/top-destination/Desktop_city/Udaipur_1.jpg"
               alt="Card cap" style={{width:'100%',borderRadius:'50%'}}/>
               <p className="item_names text-center mt-3 redhat_Medium black-color">Udaipur</p>
      </div>
      <div className="clearfix d-md-block carousel_div">
      <img className="card-img-top" src="https://img.vistarooms.com/angular_assets/common/top-destination/Desktop_city/Lonavala_1.jpg"
               alt="Card cap" style={{width:'100%',borderRadius:'50%'}}/>
               <p className="item_names text-center mt-3 redhat_Medium black-color">Lonavala</p>
      </div>
      <div className="clearfix d-md-block carousel_div">
      <img className="card-img-top" src="https://img.vistarooms.com/angular_assets/common/top-destination/Desktop_city/Chail-Kasauli.jpg"
               alt="Card cap" style={{width:'100%',borderRadius:'50%'}}/>
               <p className="item_names text-center mt-3 redhat_Medium black-color">Chail-Kasauli</p>
      </div>
      <div className="clearfix d-md-block carousel_div">
      <img className="card-img-top" src="https://img.vistarooms.com/angular_assets/common/top-destination/Desktop_city/Kullu_1.jpg"
               alt="Card cap" style={{width:'100%',borderRadius:'50%'}}/>
               <p className="item_names text-center mt-3 redhat_Medium black-color">Kullu</p>
      </div>
</div>
  </div>
 
  <div className="carousel-item">

<div className="div-align">
    <div className="clearfix d-md-block carousel_div" >
      <img className="card-img-top" src="https://img.vistarooms.com/angular_assets/common/top-destination/Desktop_city/Nashik_1.jpg"
               alt="Card cap" style={{width:'100%',borderRadius:'50%'}}/>
               <p className="item_names text-center mt-3 redhat_Medium black-color">Nashik</p>
      </div>
      <div className="clearfix d-md-block carousel_div">
      <img className="card-img-top" src="https://img.vistarooms.com/angular_assets/common/top-destination/Desktop_city/Coorg_1.jpg"
               alt="Card cap" style={{width:'100%',borderRadius:'50%'}}/>
               <p className="item_names text-center mt-3 redhat_Medium black-color">Coorg</p>
      </div>
      <div className="clearfix d-md-block carousel_div">
      <img className="card-img-top" src="https://img.vistarooms.com/angular_assets/common/top-destination/Desktop_city/Dehradun_1.jpg"
               alt="Card cap" style={{width:'100%',borderRadius:'50%'}}/>
               <p className="item_names text-center mt-3 redhat_Medium black-color">Dehradun</p>
      </div>
      <div className="clearfix d-md-block carousel_div">
      <img className="card-img-top" src="https://img.vistarooms.com/angular_assets/common/top-destination/Desktop_city/Jaipur_1.jpg"
               alt="Card cap" style={{width:'100%',borderRadius:'50%'}}/>
               <p className="item_names text-center mt-3 redhat_Medium black-color">Jaipur</p>
      </div>
      <div className="clearfix d-md-block carousel_div">
      <img className="card-img-top" src="https://img.vistarooms.com/angular_assets/common/top-destination/Desktop_city/Shimla_1.jpg"
               alt="Card cap" style={{width:'100%',borderRadius:'50%'}}/>
               <p className="item_names text-center mt-3 redhat_Medium black-color">Shimla</p>
      </div>
</div>
  </div>
  

</div>
<ol className="carousel-indicators" style={{position:'static',marginTop:'4%'}}>
  <li data-target="#multi-item-example " data-slide-to="0" className="active" ></li>
  <li data-target="#multi-item-example " data-slide-to="1" ></li>
  <li data-target="#multi-item-example " data-slide-to="2" ></li>
</ol>

</div>
</div>
        </section>
        
        <section className="section_padding mt-5 mb-5">
          <div>
            <img src={dubaibanner} style={{width:'100%'}} alt="Card cap"/>
            </div>
        </section>

 {/* choose Us section */}
  <section className=" mt-5 section_padding" style={{background:'#f7f7f7'}}>
    <ChooseUs/>
  </section>
{/*End choose Us section */}

 
 {/* Image Grid section */}
  <section className="section_padding mt-5 mb-5" >
  <h3 className="heading_name" style={{marginBottom:'3%'}}>Our Featured Holiday Homes</h3>
            <p className="mb-5 text-center redhat_Regular black-text">We carefully handpick and manage all our homes, to ensure you have a hassle-free, pleasant stay.</p>
    <ImageGrid />
  </section>

{/* END of Image Grid section */}

       

        <section className="section_padding mt-5 mb-5">
          <div className="col-12">
          <h3 className="heading_name">We'll Spoil You For Choice</h3>
            <p className="mb-5 text-center redhat_Regular black-text">Whether you're looking for a spacious villa for a big group celebration, a romantic getway for a couple or a <br/>
peaceful place to sneak away from the hustle-bustle of city life, we've got something for everyone.</p>
            <div className="row mb-4">
              <div className="col-lg-3 col-md-12">
                <button className={activeId === 1 ?  "btn btn-primary redhat_Medium custom_btn_active": "btn btn-primary redhat_Medium custom_btn"} onClick={(e)=>handleClick(e,1)}>Luxury <br/> Villas</button>
              </div>
              <div className="col-lg-3 col-md-12">
                <button className={activeId === 2 ?  "btn btn-primary redhat_Medium custom_btn_active": "btn btn-primary redhat_Medium custom_btn"} onClick={(e)=>handleClick(e,2)}>Villas Near <br/> Mumbai</button>
              </div>
              <div className="col-lg-3 col-md-12">
                <button className={activeId === 3 ?  "btn btn-primary redhat_Medium custom_btn_active": "btn btn-primary redhat_Medium custom_btn"} onClick={(e)=>handleClick(e,3)}>Villas Near <br/> Delhi</button>
              </div>
              <div className="col-lg-3 col-md-12">
                <button className={activeId === 4 ?  "btn btn-primary redhat_Medium custom_btn_active": "btn btn-primary redhat_Medium custom_btn"} onClick={(e)=>handleClick(e,4)}>Villas Near <br/> Banglore</button>
              </div>
            </div>
           
            {/* Card Section */}
                <CardSection/>
            {/* End Of Card Section */}
            
            </div>
        </section>
        
        <section className=" mt-5 mb-5">
        <TableSection dataList={list}/>
          </section>
    </div>
  );
};



export default LandingPage;

