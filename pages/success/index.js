import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';

import styles from '../../styles/Auth-Form.module.css';

const SuccessPage = () => {
  const { t } = useTranslation('success');

  return (
    <div className={`${styles.container} ${styles.billingContainer}`}>
      <Head>
        <title>{t('head')} | Medilab Estetik</title>
      </Head>
      <div className={styles.auth}>
        <div className={styles.header}>
          <h1>{t('header')}</h1>
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

export default SuccessPage;
