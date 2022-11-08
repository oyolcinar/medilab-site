import styles from '../../styles/Auth-Form.module.css';
import CheckoutWizard from '../../components/checkout/CheckoutWizard';
import { getSession } from 'next-auth/react';

const Payment = () => {
  function submitHandler() {}

  return (
    <div className={`${styles.container} ${styles.billingContainer}`}>
      <CheckoutWizard activeStep={1} />
      <div className={styles.auth}>
        <div className={styles.header}>
          <h1>Payment Method</h1>
        </div>
        <form onSubmit={submitHandler}></form>
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
