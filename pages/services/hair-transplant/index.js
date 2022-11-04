import Head from 'next/head';
import styles from '../../../styles/Terms.module.css';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const HairTransplant = () => {
  const { t } = useTranslation('hair-transplant');

  return (
    <div className={styles.terms}>
      <Head>
        <title>{t('head')} | Medilab Estetik</title>
      </Head>
      <div>
        <h2>{t('header')}</h2>
      </div>
      <div className={styles.boxContainer}>
        <Link href='/services/hair-transplant/FUT-hair-transplant'>
          <div className={styles.box}>
            <h3>FUT Hair Transplant</h3>
          </div>
        </Link>
        <Link href='/services/hair-transplant/DHI-hair-transplant'>
          <div className={styles.box}>
            <h3>DHI Hair Transplant</h3>
          </div>
        </Link>
        <Link href='/services/hair-transplant/sapphire-hair-transplant'>
          <div className={styles.box}>
            <h3>Sapphire Hair Transplant</h3>
          </div>
        </Link>
        <Link href='/services/hair-transplant/FUE-hair-transplant'>
          <div className={styles.box}>
            <h3>FUE Hair Transplant</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HairTransplant;
