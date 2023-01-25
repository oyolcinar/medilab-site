import Link from 'next/link';
import { useSession } from 'next-auth/react';
import styles from '../../styles/MobileDropdown.module.css';
import setLanguage from 'next-translate/setLanguage';

const MobileDropdown = ({ setMobile }) => {
  const { data: session, status } = useSession();

  return (
    <div
      className={styles.container}
      onClick={() => {
        setMobile(false);
      }}
    >
      <div className={styles.list}>
        <div className={styles.item}>
          <Link href='/about'>ABOUT US</Link>
        </div>
        <div className={styles.item}>
          <Link href='/services'>SERVICES</Link>
        </div>
        <div className={styles.item}>
          <Link href='/blog'>BLOG</Link>
        </div>
        {!session ? (
          <div className={styles.item}>
            <Link href='/pricing'>PRICING</Link>
          </div>
        ) : (
          <div className={styles.item}>
            <Link href='/cart'>YOUR CART</Link>
          </div>
        )}
        <div className={styles.item}>
          LANGUAGE:{' '}
          <div className={styles.lang}>
            <div
              onClick={async () => await setLanguage('en')}
              className={styles.item}
            >
              EN
            </div>
            <div
              onClick={async () => await setLanguage('tr')}
              className={styles.item}
            >
              TR
            </div>
            <div
              onClick={async () => await setLanguage('ru')}
              className={styles.item}
            >
              RU
            </div>
            <div
              onClick={async () => await setLanguage('ar-ae')}
              className={styles.item}
            >
              AR
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDropdown;
