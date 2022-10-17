import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';
import ButtonLarge from '../UI/ButtonLarge';
import { useState } from 'react';
import DropdownMenu from '../UI/DropdownMenu';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const { t } = useTranslation('common');

  const [open, setOpen] = useState(false);

  function toggleDropdown() {
    setOpen((prevState) => !prevState);
  }

  function logoutHandler() {
    signOut();
  }

  function loginHandler() {
    router.push('/auth');
  }

  function linkClickHandler() {
    setOpen(false);
  }

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <Link href='/'>
            <a className={styles.logo}>Medilab Estetik</a>
          </Link>
          <div>
            <ul className={styles.list}>
              <Link href='/about'>{t('about')}</Link>
              {!session && <Link href='/pricing'>{t('pricing')}</Link>}
              <Link href='/services'>
                <a
                  onMouseEnter={() => {
                    setOpen(true);
                  }}
                  onMouseLeave={() => {
                    setOpen(false);
                  }}
                  onClick={linkClickHandler}
                >
                  {t('services')}
                  <IoMdArrowDropdown className={styles.dropdown} />
                  {open && <DropdownMenu />}
                </a>
              </Link>
              <Link href='/blog'>{t('blog')}</Link>
              {session && <Link href='/cart'>CART</Link>}
              {!session && !loading && (
                <ButtonLarge name='Login' onClick={loginHandler} />
              )}
              {session && <ButtonLarge onClick={logoutHandler} name='Logout' />}
              <div className={styles.langbox}>
                <button onClick={async () => await setLanguage('en')}>
                  EN
                </button>
                <button onClick={async () => await setLanguage('tr')}>
                  TR
                </button>
                <button onClick={async () => await setLanguage('ru')}>
                  RU
                </button>
                <button onClick={async () => await setLanguage('ar-ae')}>
                  AR
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
