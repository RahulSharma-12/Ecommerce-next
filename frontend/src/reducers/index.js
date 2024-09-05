import {combineReducers} from "@reduxjs/toolkit"
// import productReducer from './productReducer';
import productReducer from "./productreducer";
import categoryReducer from './categoryReducer';
import userReducer from './userReducer';
import singleProductReducer from './singleProductReducer';
import reviewsReducer from './reviewsReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';

const rootReducers= combineReducers({

    products: productReducer,
    categories: categoryReducer,
    user: userReducer,
    product: singleProductReducer,
    reviews: reviewsReducer,
    cart: cartReducer,
    orders: orderReducer

});

export default rootReducers;