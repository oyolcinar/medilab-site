import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  cart: { cartItems: [] },
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
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.code !== action.payload.code,
      );
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
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case 'CART_DECREMENT_ITEM': {
      if (action.payload.quantity === 1) {
        const cartItems = state.cart.cartItems.filter(
          (item) => item.code !== action.payload.code,
        );
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

      return { ...state, cart: { ...state.cart, cartItems } };
    }

    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}
