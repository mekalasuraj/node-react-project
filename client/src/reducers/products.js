import { GET_PRODUCTS ,ADD_TO_CART,TOTAL_COST,GET_PRODUCT,REMOVE_SELECTED_PRODUCT,REMOVE_FROM_CART,REDUCE_TOTAL_COST} from '../actions/types';

const initialState = {items:[],cartItems:[],totalCost:0,productItem:{},isLoading:true};

function productReducer(state = initialState, action) {
    
  const { type, payload } = action;
 
  
  switch (type) {
    case GET_PRODUCTS:
      return {...state, items:payload};

    case ADD_TO_CART:
      return { ...state, cartItems: payload.cartItems};

      case TOTAL_COST:
      return { ...state, totalCost:state.totalCost+payload };  

      case GET_PRODUCT:
      return {...state, productItem:payload,isLoading:false};
    
      case REMOVE_SELECTED_PRODUCT:
      return {...state, productItem:{},isLoading:true};

      case REMOVE_FROM_CART:
      return { ...state, cartItems: payload.cartItems };

      case REDUCE_TOTAL_COST:
      return { ...state, totalCost:state.totalCost-payload };
      
    default:
      return state;
  }
}

export default productReducer;