import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import styles from '../../styles/Auth-Form.module.css';
import tableStyles from '../../styles/Cart.module.css';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { getError } from '../../utils/error';
import Link from 'next/link';

const OrderScreen = () => {
  const { query } = useRouter();
  const orderId = query.id;

  function reducer(state, action) {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true, error: '' };
      case 'FETCH_SUCCESS':
        return { ...state, loading: false, order: action.payload, error: '' };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
    }
  }

  const [{ loading, error, order }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: '',
  });

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/orders/${orderId}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    if (!order._id || (order._id && order._id !== orderId)) {
      fetchOrder();
    }
  }, [orderId, order]);

  const {
    billingAddress,
    paymentMethod,
    accommodation,
    orderItems,
    itemsPrice,
    taxPrice,
    totalPrice,
    isPaid,
    paidAt,
    isDelivered,
    deliveredAt,
  } = order;

  return (
    <div className={`${styles.container} ${styles.billingContainer}`}>
      <div className={styles.auth}>
        <div className={styles.header}>
          <h1>Order: {orderId}</h1>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div>
            <div className={styles.card}>
              <h4>Billing Address:</h4>
              <div className={styles.cardInfo}>
                {billingAddress.firstName}, {billingAddress.lastName},{' '}
                {billingAddress.city}, {billingAddress.postalCode},{' '}
                {billingAddress.country}
              </div>
            </div>
            <div className={styles.seperator}></div>
            {/*             <div className={styles.card}>
              {isDelivered ? (
                <div className={styles.cardInfo}>
                  Delivered at: {deliveredAt}
                </div>
              ) : (
                <div className={styles.cardInfo}>Not delivered.</div>
              )}
            </div> */}
            <div className={styles.card}>
              <h4>Payment Method:</h4>
              <div className={styles.paymentText}>
                <div className={styles.cardInfo}>{paymentMethod}</div>
                {isPaid ? (
                  <div className={styles.cardInfo}>Paid at: {paidAt}</div>
                ) : (
                  <div className={styles.cardInfo}>Not paid</div>
                )}
              </div>
            </div>

            <div className={styles.seperator}></div>
            <div className={styles.card}>
              <h4>Order Items:</h4>
              <table className={tableStyles.table}>
                <thead className={tableStyles.tableHeader}>
                  <tr>
                    <th className={tableStyles.infoCell}>Product</th>
                    <th className={tableStyles.tableCell}>Quantity</th>
                    <th className={tableStyles.priceCell}>Unit Price</th>
                    <th className={tableStyles.totalCell}>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className={tableStyles.cartItem}>
                  {orderItems.map((item) => (
                    <tr key={item._id} className={tableStyles.infoCell}>
                      <td>
                        <Link href={`/product/${item.slug}`}>
                          <a>
                            {/*             <Image alt={item.name} width={50} height={50}></Image> */}
                            &nbsp;
                            {item.name}
                          </a>
                        </Link>
                      </td>
                      <td className={tableStyles.tableCell}>{item.quantity}</td>
                      <td className={tableStyles.priceCell}>{item.price} €</td>
                      <td className={tableStyles.totalCell}>
                        {item.price * item.quantity} €
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={styles.seperator}></div>
            <div className={styles.card}>
              <h4>Order Summary:</h4>
              <ul>
                <li>
                  <div className={styles.orderCell}>
                    <div>Items:</div>
                    <div>{itemsPrice} €</div>
                  </div>
                </li>
                <li>
                  <div className={styles.orderCell}>
                    <div>Tax:</div>
                    <div>{taxPrice} €</div>
                  </div>
                </li>
                <li>
                  <div className={styles.orderCell}>
                    <div>Total:</div>
                    <div>{totalPrice} €</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default OrderScreen;
