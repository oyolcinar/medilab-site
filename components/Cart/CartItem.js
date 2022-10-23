import Link from 'next/link';
import styles from '../../styles/CartItem.module.css';

const CartItem = (props) => {
  return (
    <div>
      <div className={styles.container}>
        <Link href={props.query}>
          <div className={styles.info}>
            <div className={styles.details}>
              <div>{props.name}</div>
              <div>{props.code}</div>
            </div>
            <div>{props.price} EUR</div>
            <div>{props.quantity}</div>
            <div>{props.price * props.quantity} EUR</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CartItem;
