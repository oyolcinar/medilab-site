import styles from '../../styles/Terms.module.css';
import Head from 'next/head';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const Services = () => {
  const { t } = useTranslation('services');

  return (
    <div className={styles.terms}>
      <Head>
        <title>{t('head')} | Medilab Estetik</title>
        <meta
          name='description'
          content='Services provided by Medilab Estetik'
        />
      </Head>
      <div>
        <h2>{t('header')}</h2>
      </div>
      <div className={styles.boxContainer}>
        <Link href='/services/dentistry'>
          <div className={styles.box}>
            <h3>Dentistry</h3>
          </div>
        </Link>
        <Link href='/services/hair-transplant'>
          <div className={styles.box}>
            <h3>Hair Transplant</h3>
          </div>
        </Link>
        <Link href='/services/check-up-packages'>
          <div className={styles.box}>
            <h3>Check Up</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
