import Head from 'next/head';
import styles from '../../../styles/Terms.module.css';
import Link from 'next/link';

const Dentistry = () => {
  return (
    <div className={styles.terms}>
      <Head>
        <title>Dentistry | Medilab Estetik</title>
      </Head>
      <div>
        <h2>Dentistry</h2>
      </div>
      <div className={styles.boxContainer}>
        <Link href='/services/dentistry/zirconium'>
          <div className={styles.box}>
            <h3>Zirconium</h3>
          </div>
        </Link>
        <Link href='/services/dentistry/porcelain-laminant'>
          <div className={styles.box}>
            <h3>Porcelain Laminant</h3>
          </div>
        </Link>
        <Link href='/services/dentistry/panoramic-xray'>
          <div className={styles.box}>
            <h3>Panoramic XRay</h3>
          </div>
        </Link>
        <Link href='/services/dentistry/orthodontics'>
          <div className={styles.box}>
            <h3>Orthodontics</h3>
          </div>
        </Link>
        <Link href='/services/dentistry/laser-dentistry'>
          <div className={styles.box}>
            <h3>Laser Dentistry</h3>
          </div>
        </Link>
        <Link href='/services/dentistry/fillings'>
          <div className={styles.box}>
            <h3>Fillings</h3>
          </div>
        </Link>
        <Link href='/services/dentistry/implants'>
          <div className={styles.box}>
            <h3>Implants</h3>
          </div>
        </Link>
        <Link href='/services/dentistry/root-canal-treatment'>
          <div className={styles.box}>
            <h3>Root Canal Treatment</h3>
          </div>
        </Link>
        <Link href='/services/dentistry/smile-aesthetics'>
          <div className={styles.box}>
            <h3>Smile Aesthetics</h3>
          </div>
        </Link>
        <Link href='/services/dentistry/empress-full-porcelain'>
          <div className={styles.box}>
            <h3>Empress (Full Porcelain)</h3>
          </div>
        </Link>
        <Link href='/services/dentistry/whitening'>
          <div className={styles.box}>
            <h3>Whitening</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dentistry;
