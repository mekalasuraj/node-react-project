import React from 'react';
import p1 from '../../img/p1.svg';
import p2 from '../../img/p2.svg';
import p3 from '../../img/p3.svg';
import p4 from '../../img/p4.svg';
import p5 from '../../img/p5.svg';

const ChooseUs = (props) => {
  
  return (
    <>
     
     
          <div className="col-12" style={{background:'#f7f7f7'}}>
          <h3 className="img_name_desc pt-5">Why Choose Vista For Your Ideal Getaway</h3>
          
          <div className="row text-center">
          
          <div className="col-md-12 col-lg-1">
            
            </div>
            <div className="col-md-12 col-lg-2">
              <img className="gate_img" src={p1} alt="Card cap"/>
              <p className="img_name_desc pt-4">We empower the local community</p>
            </div>

            <div className="col-md-12 col-lg-2">
            <img className="gate_img" src={p2} alt="Card cap"/>
              <p className="img_name_desc pt-4">500+ Handpicked homes across India</p>
            </div>

            <div className="col-md-12 col-lg-2">
            <img className="gate_img" src={p3} alt="Card cap"/>
              <p className="img_name_desc pt-4">Homes are regularly audited for 200+ factors</p>
            </div>

            <div className="col-md-12 col-lg-2">
            <img className="gate_img" src={p4} alt="Card cap" />
              <p className="img_name_desc pt-4">Hosted over 250,000+ happy guests</p>
            </div>

            <div className="col-md-12 col-lg-2">
            <img className="gate_img" src={p5} alt="Card cap"/>
              <p className="img_name_desc pt-4">Only 1 in 50 homes are accepted</p>
            </div>
            <div className="col-md-12 col-lg-1">
            
            </div>
            
          
          </div>
            </div>
       

    </>
  );
};



export default React.memo(ChooseUs);

