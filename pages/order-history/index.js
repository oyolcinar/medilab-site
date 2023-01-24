import { useEffect, useReducer } from 'react';
import { getError } from '../../utils/error';
import axios from 'axios';
import Link from 'next/link';
import { getSession } from 'next-auth/react';

import tableStyles from '../../styles/Cart.module.css';
import styles from '../../styles/Auth-Form.module.css';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, orders: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

const OrderHistoryScreen = () => {
  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    orders: [],
    error: '',
  });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/orders/history`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className={`${styles.container} ${styles.billingContainer}`}>
      <div className={styles.auth}>
        <div className={styles.header}>
          <h1>Order History</h1>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div>
            <table className={tableStyles.table}>
              <thead className={tableStyles.tableHeader}>
                <tr>
                  <th className={tableStyles.infoCell}>ID</th>
                  <th className={tableStyles.tableCell}>DATE</th>
                  <th className={tableStyles.priceCell}>TOTAL</th>
                  <th className={tableStyles.priceCell}>PAID</th>
                  <th className={tableStyles.priceCell}>ACTION</th>
                </tr>
              </thead>
              <tbody className={tableStyles.cartItem}>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td className={tableStyles.infoCell}>
                      {order._id.substring(20, 24)}
                    </td>
                    <td className={tableStyles.tableCell}>
                      {order.createdAt.substring(0, 10)}
                    </td>
                    <td className={tableStyles.priceCell}>
                      {order.totalPrice}
                    </td>
                    <td className={tableStyles.priceCell}>
                      {order.isPaid
                        ? `${order.paidAt.substring(0, 10)}`
                        : 'Not paid'}
                    </td>
                    <td className={tableStyles.priceCell}>
                      <Link href={`/order/${order._id}`}>
                        <a>Details</a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default OrderHistoryScreen;
