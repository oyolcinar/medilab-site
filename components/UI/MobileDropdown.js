import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import styles from '../../styles/MobileDropdown.module.css';
import setLanguage from 'next-translate/setLanguage';
import { FiLogIn } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';

const MobileDropdown = ({ setMobile }) => {
  const { data: session, status } = useSession();

  function logoutHandler() {
    signOut();
  }

  return (
    <div
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
        {!session ? (
          <div className={styles.item}>
            <Link href='/auth'>
              <div className={styles.log}>
                LOGIN <FiLogIn className={styles.icon} />
              </div>
            </Link>
          </div>
        ) : (
          <div className={styles.item}>
            <div onClick={logoutHandler} className={styles.log}>
              LOGOUT <FiLogOut className={styles.icon} />
            </div>
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
