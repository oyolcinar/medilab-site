import Head from 'next/head';
import styles from '../../../styles/Terms.module.css';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const CheckUpPackages = () => {
  const { t } = useTranslation('check-up-packages');

  return (
    <div className={styles.terms}>
      <Head>
        <title>{t('head')} | Medilab Estetik</title>
      </Head>
      <div>
        <h2>{t('header')}</h2>
      </div>
      <div className={styles.boxContainer}>
        <Link href='/services/check-up-packages/standard-check-up'>
          <div className={styles.box}>
            <h3>Standard Check Up</h3>
          </div>
        </Link>
        <Link href='/services/check-up-packages/life-check-up-1'>
          <div className={styles.box}>
            <h3>Life Check Up #1</h3>
          </div>
        </Link>
        <Link href='/services/check-up-packages/life-check-up-2'>
          <div className={styles.box}>
            <h3>Life Check Up #2</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CheckUpPackages;
