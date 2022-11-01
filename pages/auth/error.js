import styles from '../../styles/Auth-Form.module.css';
import { useRouter } from 'next/router';

const Error = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.auth}>
        <div className={styles.header}>
          <h1>Error</h1>
        </div>
        <p>An error occured!</p>
        <p>{router.query.error}</p>
        <a
          className={styles.toggle}
          onClick={() => {
            router.back();
          }}
        >
          Go back
        </a>
      </div>
    </div>
  );
};

export default Error;
