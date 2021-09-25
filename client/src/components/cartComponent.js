import React from 'react';


const CartComponent = (props) => {
  
  return (
    <>
        {
          props.cartList.length>0 ?
          (
            <div className="cartbox mt-3" >
          <h5 className="text-center card-button-color p-3">Cart Items</h5>

            {
              props.cartList.map((item,i)=>(
               <div key={i} className="cart-items mt-2 p-3">
               <p className="card-title-color">{item.title}</p>
               <div className="row">
                 <div className="col-6">
                    <p>Qty:{item.count}</p>
                 </div>
                 <div className="col-6">
                    <p>Rs {item.price}</p>
                 </div>
               </div>
               
               <a onClick={(e) => props.removeCart(props.cartList, item)}><i className="fa fa-trash"></i> remove</a>
              
             </div>
              ))
            }
            <h4 className="text-center">Total:Rs {props.cartTotalCost}</h4>
            </div>
          )
          :(
            <div className="cartbox mt-3">
                  <h5 className="text-center p-2">Cart is empty</h5>
                </div>
          )
        }
    </>
  );
};

export default CartComponent;

