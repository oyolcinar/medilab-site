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
        (item) => item.slug === newItem.slug,
      );

      const cartItems = existItem
        ? state.cart.cartItem.map((item) =>
            item.name === existItem.name ? newItem : item,
          )
        : [...state.cart.cartItem, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <StoreProvider value={value}>{children}</StoreProvider>;
}
