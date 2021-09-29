import React from 'react';

const CardSection = (props) => {
  

    let cardData=[
        {
            image:"https://img.vistarooms.com/angular_assets/common/static_prop/05+Villa+Kinara_1.jpg",
            title:'Villa Kinara',
            location:'Reis Magos, Goa',
            amineties:'BBQ & Bonfire | 4 Bedrooms',
            price:'61,000'
        },
        {
            image:"https://img.vistarooms.com/angular_assets/common/static_prop/06+Ashore_1.jpg",
            title:'Ashore',
            location:'Morjim, Goa',
            amineties:'Infinity Pool | 6 Bedrooms',
            price:'67,000'
        },
        {
            image:"https://img.vistarooms.com/angular_assets/common/static_prop/10+Baag+e+fursat_1.jpg",
            title:'Baag E fursat',
            location:'Chandigarh, Punjab',
            amineties:'Infinity Pool | 10 Bedrooms',
            price:'51,000'
        }
    ]

  return (
    <>
        <div className="row">
        
        {
            cardData.map((item,i)=>(
                <div className="col-lg-4 col-md-12">
        <div className="card mb-4">
            <img
              src={item.image}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
              {item.location}
              </p>
              <p className="card-text text-dark">
              {item.amineties}
              </p>
              <hr/>
              <p className="card-text">
               <span className="redhat_Medium text-dark" style={{fontSize:18}}>₹ {item.price}</span>/ night 
              </p>
            </div>
          </div>
        </div>
            ))
        }
      </div>
    </>
  );
};



export default React.memo(CardSection);

