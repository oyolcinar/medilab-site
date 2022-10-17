import { getSession } from 'next-auth/react';
import styles from '../../styles/Terms.module.css';
import CartComponent from '../../components/Cart/Cart';

const Cart = () => {
  return (
    <div className={styles.terms}>
      <div>
        <h2>Cart</h2>
      </div>
      <CartComponent />
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

export default Cart;
