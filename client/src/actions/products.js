import axios from 'axios';


import {GET_PRODUCTS,ADD_TO_CART,TOTAL_COST,GET_PRODUCT,REMOVE_SELECTED_PRODUCT,REMOVE_FROM_CART,REDUCE_TOTAL_COST} from './types';

export const getProducts= () => async dispatch => {

  if(localStorage.getItem("productList") === null)
  {
    console.log('local storage is empty');
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      localStorage.setItem("productList",JSON.stringify(res.data));
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      });
    } catch (err) {
        console.log(err);
    }
  } else {
    console.log('local storage is not empty');
    dispatch({
      type: GET_PRODUCTS,
      payload:JSON.parse(localStorage.getItem("productList"))
    });
  }
   
    
  };


  export const addToCart = (items, product) => (dispatch) => {

    const cartItems = items.slice();
    let productAlreadyInCart = false;
  
    cartItems.forEach((cp) => {
      if (cp.id === product.id) {
        
        cp.count += 1;
        productAlreadyInCart = true;
      }
    });
  
    if (!productAlreadyInCart) {
      
      cartItems.push({ ...product, count: 1 });
      //cartItems.push(product);
    }

    
    //localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ type: ADD_TO_CART, payload: { cartItems } });
  };


  export const addTotalCost = (num) => (dispatch) => {
    //localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ type: TOTAL_COST, payload:num });
  };

  export const reduceTotalCost = (num) => (dispatch) => {
    //localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ type: REDUCE_TOTAL_COST, payload:num });
  };

  export const getProduct= (id) => async dispatch => {
   
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
     
      dispatch({
        type: GET_PRODUCT,
        payload: res.data
      });
    } catch (err) {
    
    console.log(err);
    }
  };

  export const removeSelectedProduct = (dispatch) => {
    console.log('unmount Hitted');
    dispatch({
      type: REMOVE_SELECTED_PRODUCT,
    });
  };

  export const removeFromCart = (items, product) => (dispatch) => {
    const cartItems = items.slice().filter((a) => a.id !== product.id);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  };