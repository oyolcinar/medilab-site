import useTranslation from 'next-translate/useTranslation';
import styles from '../../styles/Terms.module.css';
import Head from 'next/head';

const Blog = () => {
  const { t } = useTranslation('blog');

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

export default Blog;
