import * as ActionTypes from '../actionTypes'
import axios from 'axios'


export const AddProductToStore = (newProduct)=>{
    return {
        type: ActionTypes.AddProductToStore,
        payload: newProduct
    }
} 

export const saveProductToDb =  (product)=>{
    return (dispatch) => {
        console.log("called by dispatch");
        axios.post("http://localhost:9000/product/api/save",
            product
        )
        .then((savedProduct)=>{
            let signedProduct = savedProduct.data
            console.log(signedProduct);

            dispatch(AddProductToStore(signedProduct))

        })
        .catch((err)=>{
            console.log(err);
        });
    }
}