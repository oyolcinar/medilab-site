import styles from '../../styles/Terms.module.css';
import Head from 'next/head';

const Services = () => {
  return (
    <div className={styles.terms}>
      <Head>
        <title>Services | Medilab Estetik</title>
        <meta
          name='description'
          content='Services provided by Medilab Estetik'
        />
      </Head>
      <div>
        <h2>Services</h2>
      </div>
    </div>
  );
};

export default Services;
