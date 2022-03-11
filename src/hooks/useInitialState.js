import { useState } from "react";
import InitialState from '../initialState.js';

// Este Custom Hook se encarga de manejar el estado, recibirlo y tener funciones que lo van actualizar segun sea el caso
// En este cso sera al agregar al carrito y al eliminar el carrito 

const useInitialState = () => {
    const [state, setState] = useState(InitialState); // a useState(InitialState) le pasamos un estado inicial que es el archivo JSON "InitialState"

    const addToCart = payload => {
        const cartList = state.cart;
        var newCartList = cartList;
        const index = cartList.findIndex(item => item.id === payload.id);

        if (index >= 0) {
            newCartList[index] = {
                ...newCartList[index],
                qty: newCartList[index].qty + 1
            }
        } else {
            payload.qty = 1;
            newCartList = [...cartList, payload]
        }

        setState({
            ...state, // Me regresa el estado actaul que tiene 
            // cart = propiedad que tiene nuestro archivo JSON
            //cart: [...state.cart, payload] // trae lo que tiene cart y agregale lo que este en el paylad
            cart: newCartList
        });
    }

    const removeFromCart = payload => {
        const cartList = state.cart;
        var newCartList = cartList;

        const index = cartList.findIndex(item => item.id === payload.id);
        newCartList[index] = {
            ...newCartList[index],
            qty: newCartList[index].qty - 1
        }

        const updatedList = newCartList.filter(item => item.qty > 0);

        setState({
            ...state,
            cart: updatedList,
        });
    };

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders, payload]  // orders Que lo declaramos en initialState.js
        })
    }

    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        state,
    }
};

export default useInitialState;