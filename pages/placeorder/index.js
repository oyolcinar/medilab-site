import styles from '../../styles/Auth-Form.module.css';
import tableStyles from '../../styles/Cart.module.css';
import CheckoutWizard from '../../components/checkout/CheckoutWizard';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../../utils/Store';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { getError } from '../../utils/error';
import axios from 'axios';
import Cookies from 'js-cookie';
import { getSession } from 'next-auth/react';

const PlaceOrderScreen = () => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems, billingAddress, paymentMethod, accommodation } = cart;

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

  const itemsPrice = round2(
    cartItems.reduce((a, c) => a + c.quantity * c.price, 0),
  );

  const taxPrice = round2(itemsPrice * 0.2);

  const totalPrice = round2(itemsPrice + taxPrice);

  const router = useRouter();

  useEffect(() => {
    if (!paymentMethod) {
      router.push('/payment');
    }
  }, [paymentMethod, router]);

  const [loading, setLoading] = useState(false);

  const placeOrderHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post('/api/orders', {
        orderItems: cartItems,
        billingAddress,
        accommodation,
        paymentMethod,
        itemsPrice,
        taxPrice,
        totalPrice,
      });
      setLoading(false);
      dispatch({ type: 'CART_CLEAR_ITEMS' });
      Cookies.set(
        'cart',
        JSON.stringify({
          ...cart,
          cartItems: [],
        }),
      );
      router.push(`/order/${data._id}`);
    } catch (err) {
      setLoading(false);
      toast.error(getError(err));
    }
  };

  return (
    <div className={`${styles.container} ${styles.billingContainer}`}>
      <CheckoutWizard activeStep={3} />
      <div className={styles.auth}>
        <div className={styles.header}>
          <h1>Place Order</h1>
        </div>
        <div>
          {cartItems.length === 0 ? (
            <div className={styles.cartEmpty}>
              <div className={styles.cartText}>Cart is empty. </div>{' '}
              <Link href='/services'>Continue shopping.</Link>
            </div>
          ) : (
            <div>
              <div className={styles.card}>
                <h4>Billing Address:</h4>
                <div className={styles.cardInfo}>
                  {billingAddress.firstName} {billingAddress.lastName},{' '}
                  {billingAddress.address}, {billingAddress.city},{' '}
                  {billingAddress.postalCode}, {billingAddress.country}
                </div>
                <div>
                  <Link href='/billing'>Edit</Link>
                </div>
              </div>
              <div className={styles.seperator}></div>
              <div className={styles.card}>
                <h4>Payment Method:</h4>
                <div className={styles.cardInfo}>{paymentMethod}</div>
                <div>
                  <Link href='/payment'>Edit</Link>
                </div>
              </div>
              <div className={styles.seperator}></div>
              <div className={styles.card}>
                <h4>Purchased Services:</h4>
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
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className={tableStyles.infoCell}>
                          <Link href={item.query}>
                            <a>
                              {/*             <Image alt={item.name} width={50} height={50}></Image> */}
                              &nbsp;
                              {item.name}
                            </a>
                          </Link>
                        </td>
                        <td className={tableStyles.tableCell}>
                          {item.quantity}
                        </td>
                        <td className={tableStyles.priceCell}>
                          {item.price} €
                        </td>
                        <td className={tableStyles.totalCell}>
                          {item.price * item.quantity} €
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div>
                  <Link href='/cart'>Edit</Link>
                </div>
              </div>
              <div className={styles.seperator}></div>
              <div className={styles.card}>
                <h4>Order Summary:</h4>
                <ul>
                  <li>
                    <div className={styles.orderCell}>
                      <div>Items:</div>
                      <div className={styles.orderInfo}>{itemsPrice} €</div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.orderCell}>
                      <div>Tax:</div>
                      <div className={styles.orderInfo}>{taxPrice} €</div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.orderCell}>
                      <div>Total:</div>
                      <div className={styles.orderInfo}>{totalPrice} €</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={styles.seperator}></div>
              <div className={styles.buttonContainer}>
                <button
                  disabled={loading}
                  onClick={placeOrderHandler}
                  className={styles.pbutton}
                >
                  {loading ? 'Loading...' : 'Place Order'}
                </button>
              </div>
            </div>
          )}
        </div>
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

export default PlaceOrderScreen;
