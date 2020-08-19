import React, { Component } from 'react'

import {storeProducts, detailProduct} from './data';


const ProductContext=React.createContext();



class ProductProvider extends Component {
state={
    products:storeProducts,
    detailProduct:detailProduct
}
handleDetail=()=>{
    console.log('hello from adetails');
}
addToCart =()=>{
    console.log('hello fromm add to cart')
}

    render() {
        return (
            <ProductContext.Provider value={{
...this.state,
            }}>
            {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };