import styles from '../../styles/Pricetag.module.css';
import { useContext } from 'react';
import { Store } from '../../utils/Store';

const Pricetag = ({ name, code, price, newPrice, query }) => {
  const { state, dispatch } = useContext(Store);

  function addToCart(name, code, price, query) {
    const product = { name: name, code: code, price: price, query: query };

    const existItem = state.cart.cartItems.find(
      (item) => item.code === product.code,
    );

    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
  }

  function discount(price, newPrice) {
    let discount = Math.trunc(((price - newPrice) / price) * 100);
    return discount;
  }
  return (
    <div className={styles.container}>
      <div className={styles.border}></div>
      <div className={styles.tag}>
        {price && (
          <div className={styles.discount}>
            <div>%{discount(price, newPrice)} Off</div>
          </div>
        )}
        <div className={styles.prices}>
          {price && <div className={styles.oldPrice}>{price} EUR + VAT</div>}
          <div className={styles.newPrice}>{newPrice} EUR + VAT</div>
        </div>
        <button
          className={styles.button}
          onClick={() => {
            addToCart(name, code, newPrice, query);
          }}
        >
          Add To Cart
        </button>
      </div>
      <div className={styles.border}></div>
    </div>
  );
};

export default Pricetag;
