import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import styles from '../../styles/MobileDropdown.module.css';
import setLanguage from 'next-translate/setLanguage';
import { FiLogIn } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import useTranslation from 'next-translate/useTranslation';

const MobileDropdown = ({ setMobile }) => {
  const { data: session, status } = useSession();
  const { t } = useTranslation('common');

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
          <Link href='/about'>{t('about')}</Link>
        </div>
        <div className={styles.item}>
          <Link href='/services'>{t('services')}</Link>
        </div>
        <div className={styles.item}>
          <Link href='/blog'>{t('blog')}</Link>
        </div>
        {!session ? (
          <div className={styles.item}>
            <Link href='/pricing'>{t('pricing')}</Link>
          </div>
        ) : (
          <div className={styles.item}>
            <Link href='/cart'>{t('cart')}</Link>
          </div>
        )}
        {!session ? (
          <div className={styles.item}>
            <Link href='/auth'>
              <div className={styles.log}>
                {t('SIGNIN')} <FiLogIn className={styles.icon} />
              </div>
            </Link>
          </div>
        ) : (
          <div className={styles.item}>
            <div onClick={logoutHandler} className={styles.log}>
              {t('SIGNOUT')} <FiLogOut className={styles.icon} />
            </div>
          </div>
        )}
        <div className={styles.item}>
          {t('language')}:{' '}
          <div className={styles.lang}>
            <div
              onClick={async () => await setLanguage('en')}
              className={styles.item}
            >
              {t('EN')}
            </div>
            <div
              onClick={async () => await setLanguage('tr')}
              className={styles.item}
            >
              {t('TR')}
            </div>
            <div
              onClick={async () => await setLanguage('ru')}
              className={styles.item}
            >
              {t('RU')}
            </div>
            <div
              onClick={async () => await setLanguage('ar-ae')}
              className={styles.item}
            >
              {t('AR')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDropdown;
