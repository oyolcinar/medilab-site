import styles from '../../styles/Auth-Form.module.css';
import CheckoutWizard from '../../components/checkout/CheckoutWizard';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../../utils/Store';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const Payment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { billingAddress, paymentMethod } = cart;

  const router = useRouter();

  function submitHandler(e) {
    e.preventDefault();
    if (!selectedPaymentMethod) {
      return toast.error('Payment method is required');
    }
    dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: selectedPaymentMethod });
    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        paymentMethod: selectedPaymentMethod,
      }),
    );
    router.push('/placeorder');
  }

  useEffect(() => {
    if (!billingAddress.address) {
      return router.push('/billing');
    }
    setSelectedPaymentMethod(paymentMethod || '');
  }, [paymentMethod, router, billingAddress.address]);

  return (
    <div className={`${styles.container} ${styles.billingContainer}`}>
      <CheckoutWizard activeStep={1} />
      <div className={styles.auth}>
        <div className={styles.header}>
          <h1>Payment Method</h1>
        </div>
        <form onSubmit={submitHandler}>
          {['PayPal', 'Credit Card', 'Google Pay', 'Apple Pay'].map(
            (payment) => (
              <div key={payment} className={styles.paymentContainer}>
                <input
                  name='paymentMethod'
                  id={payment}
                  type='radio'
                  checked={selectedPaymentMethod === payment}
                  onChange={() => setSelectedPaymentMethod(payment)}
                />
                <label htmlFor={payment}>{payment}</label>
              </div>
            ),
          )}
          <div className={`${styles.actions} ${styles.actionsTwoButton}`}>
            <button onClick={() => router.push('/billing')} type='button'>
              Back
            </button>
            <button>Next</button>
          </div>
        </form>
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

export default Payment;
