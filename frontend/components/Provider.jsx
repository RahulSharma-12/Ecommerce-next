
// import { store } from "@/store";
// import React from "react"

// import { Provider } from "react-redux";

//  export const ProviderWrapper = ({Children}) =>{
//     return (

//         <Provider store={store}>
//             {Children}
//         </Provider>
//     )
// }

import React from 'react';
import { Provider } from 'react-redux';
import store from "../src/store"; 

export const ProviderWrapper = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};