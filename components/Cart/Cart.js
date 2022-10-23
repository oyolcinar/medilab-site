import { useContext } from 'react';
import CartItem from './CartItem';
import { Store } from '../../utils/Store';
import styles from '../../styles/Cart.module.css';

const Cart = () => {
  const { state } = useContext(Store);

  const cartItemArray = state.cart.cartItems.map((item) => (
    <CartItem
      key={item.code}
      name={item.name}
      code={item.code}
      price={item.price}
      query={item.query}
      quantity={item.quantity}
    />
  ));

  return (
    <div>
      <div className={styles.header}>
        <div>Product</div>
        <div>Unit Price</div>
        <div>Quantity</div>
        <div>Total</div>
      </div>
      <div>{cartItemArray}</div>
      <div className={styles.checkOut}>
        <div>Subtotal: </div>
      </div>
    </div>
  );
};

export default Cart;
