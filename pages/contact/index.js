import Head from 'next/head';
import styles from '../../styles/Terms.module.css';
import useTranslation from 'next-translate/useTranslation';

const Contact = () => {
  const { t } = useTranslation('contact');

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

export default Contact;
