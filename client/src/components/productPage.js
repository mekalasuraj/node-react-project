import React,{useEffect} from 'react';
import {getProduct,removeSelectedProduct,addToCart,addTotalCost,removeFromCart,reduceTotalCost} from '../actions/products';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import CartComponent from './cartComponent';


const ProductPage = (props) => {
  
  useEffect(()=>{
    let id=props.match.params.id;
    props.getProduct(id);
    return () => {
     props.removeSelectedProduct();
    };
  },[])

  const onAddCart=(cartItems,product)=>{  
 
    props.addToCart(cartItems, product);
    props.addTotalCost(product.price);
  
  }

  const onRemoveCart=(cartItems,product)=>{  

    props.removeFromCart(cartItems,product);
    props.reduceTotalCost(product.price*product.count)
   }

  return (
    <>
        {
          props.isLoading ?
          (
            <div>...Loading</div>
          )
          :(
            <div className="col-12">
            <h4 className="text-center mt-3">Product Page</h4>
            
            <div className="row">
              <div className="col-sm-12 col-md-4">
              <Link to={`/`}><h3>Back</h3></Link>
                <h3></h3>
                <div style={{height: 500,padding:20,background:'#fff',margin:'auto',textAlign:'center'}}>
                    <img src={props.productItem.image} className="card-img-top animated fadeIn" alt='...'
                    style={{height: '100%',maxWidth: '100%',width: 'auto'}}/>
                </div>
                
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="mt-4">
                    <h5>{props.productItem.title}</h5>
                    <p className="mt-3">{props.productItem.description}</p>
                    <p className="mt-3">Category: <span className="product-category">{props.productItem.category}</span></p>
                    <p className="mt-3">Rs {props.productItem.price}</p>
                    <button  className="btn btn-primary card-button-color"  onClick={(e) => onAddCart(props.cartItems, props.productItem)}>Add To Cart</button>
               </div>
              </div>
              <div className="col-sm-12 col-md-4">
              <CartComponent cartList={props.cartItems} cartTotalCost={props.totalCost} removeCart={onRemoveCart} />
              </div>
            </div>
           
        </div>
          )
        }
    </>
  );
};

const mapStateToProps = state => {
  
  console.log('product page');
console.log(state.productReducer);
    return {
      productItem:{...state.productReducer.productItem,price:Math.round(state.productReducer.productItem.price)},
      isLoading:state.productReducer.isLoading,
      cartItems:state.productReducer.cartItems,
      totalCost:state.productReducer.totalCost
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        getProduct: (id) => dispatch(getProduct(id)),
        removeSelectedProduct:()=> dispatch(removeSelectedProduct),
        addToCart: (items,product) => dispatch(addToCart(items,product)),
        addTotalCost: (num) => dispatch(addTotalCost(num)),
        removeFromCart:(items,product)=>dispatch(removeFromCart(items,product)),
        reduceTotalCost:(num)=>dispatch(reduceTotalCost(num))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage);

