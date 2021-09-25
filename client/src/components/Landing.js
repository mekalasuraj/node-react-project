import React, { useEffect } from 'react';
import {getProducts,addToCart,addTotalCost,removeFromCart,reduceTotalCost} from '../actions/products';
import { connect } from 'react-redux';
import ProductItem from './productItem';
import CartComponent from './cartComponent';
//import '../App.css'

const LandingPage = (props) => {
  
useEffect(()=>{
  props.getProducts();
},[])

const onAddCart=(cartItems,product)=>{  
 
  props.addToCart(cartItems, product);
  props.addTotalCost(product.price);

}

const onRemoveCart=(cartItems,product)=>{  

 props.removeFromCart(cartItems,product)
 props.reduceTotalCost(product.price*product.count)
}

  return (
    <div>
     
     <div className="col-12">
        <div className="row">
          <div className="col-sm-6 col-md-8">
            <div className="row">
               <ProductItem productLists={props.items} onProductCLick={onAddCart} cartItems={props.cartItems}/>
            </div>
          </div>
          {/* {
            props.cartItems.length>0 && 
            (
             <div className="col-sm-6 col-md-4">
               <CartComponent cartList={props.cartItems} cartTotalCost={props.totalCost}/>
           </div>
            )
          } */}
          <div className="col-sm-6 col-md-4">
            {
              props.cartItems.length>0 ? 
              (
                <CartComponent cartList={props.cartItems} cartTotalCost={props.totalCost} removeCart={onRemoveCart}/>
                
              )
              :(
                <div className="cartbox mt-3">
                  <h5 className="text-center p-2">Cart is empty</h5>
                </div>
              )
            }  
           </div>
       </div>
       </div>
    </div>
  );
};

const mapStateToProps = state => {
  
  return {
    items: state.productReducer.items.map((item,i)=>{
      item.count=0;
      item.price=Math.round(item.price);
      return item;
    }),
    cartItems:state.productReducer.cartItems,
    totalCost:state.productReducer.totalCost
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts()),
    addToCart: (items,product) => dispatch(addToCart(items,product)),
    addTotalCost: (num) => dispatch(addTotalCost(num)),
    removeFromCart:(items,product)=>dispatch(removeFromCart(items,product)),
    reduceTotalCost:(num)=>dispatch(reduceTotalCost(num))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LandingPage);

