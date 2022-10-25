import { useContext } from 'react';
import { Store } from '../../utils/Store';
import styles from '../../styles/Cart.module.css';
import Link from 'next/link';
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import ButtonLarge from '../UI/ButtonLarge';

const Cart = () => {
  const { state, dispatch } = useContext(Store);

  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const incrementItemHandler = (item) => {
    dispatch({ type: 'CART_INCREMENT_ITEM', payload: item });
    console.log(state.cart.cartItems);
  };

  const decrementItemHandler = (item) => {
    dispatch({ type: 'CART_DECREMENT_ITEM', payload: item });
    console.log(state.cart.cartItems);
  };

  let total = 0;

  const cartItemsArr = state.cart.cartItems.map((item) => {
    total = item.price * item.quantity;
    return (
      <tr key={item.code}>
        <td className={styles.infoCell}>
          <Link href={item.query}>
            <a>
              {/*             <Image alt={item.name} width={50} height={50}></Image> */}
              &nbsp;
              {item.name}
            </a>
          </Link>
        </td>
        <td className={styles.tableCell}>
          <AiOutlineMinus
            className={styles.icons}
            onClick={() => decrementItemHandler(item)}
          />
          {item.quantity}
          <AiOutlinePlus
            className={styles.icons}
            onClick={() => incrementItemHandler(item)}
          />
        </td>
        <td className={styles.priceCell}>{item.price} €</td>
        <td className={styles.totalCell}>{total} €</td>
        <td className={styles.removeCell}>
          <button
            className={styles.remove}
            onClick={() => removeItemHandler(item)}
          >
            <AiOutlineClose />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      {state.cart.cartItems.length < 1 ? (
        <div className={styles.empty}>
          <p>Your cart is currently empty.</p>
          <Link href='/services'>
            <p className={styles.continue}>Continue to our services</p>
          </Link>
        </div>
      ) : (
        <div>
          <div className={styles.header}>
            <div>Your Cart</div>
          </div>
          <table className={styles.table}>
            <thead className={styles.tableHeader}>
              <tr>
                <th className={styles.infoCell}>Product</th>
                <th className={styles.tableCell}>Quantity</th>
                <th className={styles.priceCell}>Unit Price</th>
                <th className={styles.totalCell}>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={styles.cartItem}>{cartItemsArr}</tbody>
          </table>
          <div className={styles.subtotal}>
            Subtotal ({state.cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
            ) :{' '}
            {state.cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}{' '}
            €
          </div>
          <div className={styles.checkOut}>
            <div>
              <ButtonLarge name='Checkout' />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
