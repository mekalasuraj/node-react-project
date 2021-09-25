import React from 'react';
import {Link} from "react-router-dom";
import AddCartComponent from './addCartButton';

const ProductItem = ({productLists,onProductCLick,cartItems}) => {
  
  const addProduct=()=>{

  }
  return (
    <>
   
    {
          productLists.map((item,i)=>(
            <div className="col-sm-12 col-md-6 col-xl-4 mt-3 " key={i}>
           <div className="card" >
             <div style={{height: 250,padding:20,background:'#fff',margin:'auto'}}
>
  <img
    src={item.image}
    className="card-img-top animated fadeIn"
    alt="..."
    style={{height: '100%',maxWidth: '100%',width: 'auto'}}
  />
  </div>
  <div className="card-body">
    {/* <h5 className="card-title">{item.title.substr(0, 14)}</h5> */}
    <Link className="card-title" to={`/product/${item.id}`}>
       
        <h5 className="card-title card-title-color">{item.title.substr(0, 30)}</h5>
    </Link>
    <p className="card-text">
      Rs {item.price}
    </p>
    
    <p className="card-text">
      Category : {item.category}
    </p>
    <p className="card-text">
      {item.description.substr(0, 70)}
    </p>
  <button  className="btn btn-primary btn-md btn-block card-button-color"  onClick={(e) => onProductCLick(cartItems, item)}>Add</button>
  </div>
</div>
</div>
          ))
      } 
    </>
  );
};

export default ProductItem;

