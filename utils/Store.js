import { createContext, useReducer } from 'react';
import Cookies from 'js-cookie';

export const Store = createContext();

const initialState = {
  cart: Cookies.get('cart')
    ? JSON.parse(Cookies.get('cart'))
    : { cartItems: [], billingAddress: {} },
};

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;

      const existItem = state.cart.cartItems.find(
        (item) => item.code === newItem.code,
      );

      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item,
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.code !== action.payload.code,
      );
      Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case 'CART_INCREMENT_ITEM': {
      const cartItems = state.cart.cartItems.map((item) => {
        if (item.code === action.payload.code) {
          const newQuantity = item.quantity + 1;
          return { ...item, quantity: newQuantity };
        } else {
          return item;
        }
      });
      Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case 'CART_DECREMENT_ITEM': {
      if (action.payload.quantity === 1) {
        const cartItems = state.cart.cartItems.filter(
          (item) => item.code !== action.payload.code,
        );
        Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
        return { ...state, cart: { ...state.cart, cartItems } };
      }

      const cartItems = state.cart.cartItems.map((item) => {
        if (
          item.code === action.payload.code &&
          action.payload.quantity !== 1
        ) {
          const newQuantity = item.quantity - 1;
          return { ...item, quantity: newQuantity };
        } else {
          return item;
        }
      });
      Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case 'SAVE_BILLING_ADDRESS':
      return {
        ...state,
        cart: {
          ...state.cart,
          billingAddress: {
            ...state.cart.billingAddress,
            ...action.payload,
          },
        },
      };

    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}
