import { getSession } from 'next-auth/react';
import styles from '../../styles/Terms.module.css';
import CartComponent from '../../components/Cart/Cart';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const Cart = () => {
  const { t } = useTranslation('cart');

  return (
    <div className={styles.terms}>
      <Head>
        <title>{t('head')} | Medilab Estetik</title>
      </Head>
      <CartComponent
        header={`${t('header')}`}
        product={`${t('product')}`}
        quantity={`${t('quantity')}`}
        unitPrice={`${t('unitPrice')}`}
        totalPrice={`${t('total')}`}
        subtotal={`${t('subtotal')}`}
        checkout={`${t('checkout')}`}
        empty={`${t('empty')}`}
        continueService={`${t('continue')}`}
      />
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
