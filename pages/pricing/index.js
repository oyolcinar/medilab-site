import styles from '../../styles/Terms.module.css';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const Pricing = () => {
  const { t } = useTranslation('pricing');

  return (
    <div className={styles.terms}>
      <Head>
        <title>{t('head')} | Medilab Estetik</title>
      </Head>
      <div>
        <h2>{t('header')}</h2>
      </div>
    </div>
  );
};

export default Pricing;
