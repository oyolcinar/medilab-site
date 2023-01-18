import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import styles from '../../styles/Auth-Form.module.css';
import tableStyles from '../../styles/Cart.module.css';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { getError } from '../../utils/error';
import Link from 'next/link';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { toast } from 'react-toastify';

const OrderScreen = () => {
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

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
      case 'PAY_REQUEST':
        return { ...state, loadingPay: true };
      case 'PAY_SUCCESS':
        return { ...state, loadingPay: false, successPay: true };
      case 'PAY_FAIL':
        return { ...state, loadingPay: false, errorPay: action.payload };
      case 'PAY_RESET':
        return { ...state, loadingPay: false, successPay: false, errorPay: '' };
      default:
        state;
    }
  }

  const [{ loading, error, order, successPay, loadingPay }, dispatch] =
    useReducer(reducer, {
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
    if (!order._id || successPay || (order._id && order._id !== orderId)) {
      fetchOrder();
      if (successPay) {
        dispatch({ type: 'PAY_RESET' });
      }
    } else {
      const loadPaypalScript = async () => {
        const { data: clientId } = await axios.get('/api/keys/paypal');
        paypalDispatch({
          type: 'resetOptions',
          value: {
            'client-id': clientId,
            currency: 'EUR',
          },
        });
        paypalDispatch({ type: 'setLoadingStatus', value: 'pending' });
      };
      loadPaypalScript();
    }
  }, [orderId, order, paypalDispatch, successPay]);

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

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: totalPrice },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }

  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        dispatch({ type: 'PAY_REQUEST' });
        const { data } = await axios.put(
          `/api/orders/${order._id}/pay`,
          details,
        );
        dispatch({ type: 'PAY_SUCCESS', payload: data });
        toast.success('Order is paid successfully.');
      } catch (err) {
        dispatch({ type: 'PAY_FAIL', payload: getError(err) });
        toast.error(getError(err));
      }
    });
  }

  function onError(err) {
    toast.error(getError(err));
  }

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
                {!isPaid && (
                  <li>
                    {isPending ? (
                      <div>Loading...</div>
                    ) : (
                      <div>
                        <PayPalButtons
                          createOrder={createOrder}
                          onApprove={onApprove}
                          onError={onError}
                        ></PayPalButtons>
                      </div>
                    )}
                    {loadingPay && <div>Loading...</div>}
                  </li>
                )}
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
