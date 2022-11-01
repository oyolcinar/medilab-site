import Link from 'next/link';
import styles from '../../styles/Auth-Form.module.css';

const VerifyMail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.auth}>
        <div className={styles.header}>
          <h1>Check your email</h1>
        </div>
        <p>A sign in link has been sent to your email address.</p>
        <Link href='/'>
          <a>www.medilabestetik.com</a>
        </Link>
      </div>
    </div>
  );
};

export default VerifyMail;
