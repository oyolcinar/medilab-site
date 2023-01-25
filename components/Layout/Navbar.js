import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';
import ButtonLarge from '../UI/ButtonLarge';
import { useState } from 'react';
import DropdownMenu from '../UI/DropdownMenu';
import { IoMdArrowDropdown } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';
import { useContext, useEffect } from 'react';
import { Store } from '../../utils/Store';
import MobileDropdown from '../UI/MobileDropdown';

const Navbar = () => {
  const { state } = useContext(Store);
  const router = useRouter();
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const { t } = useTranslation('common');

  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(state.cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [state.cart.cartItems]);

  function toggleDropdown() {
    setMobile((prevState) => !prevState);
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
        <GiHamburgerMenu
          className={styles.hamburger}
          onClick={toggleDropdown}
        />
        {mobile && <MobileDropdown setMobile={setMobile} mobile={mobile} />}
        <div className={styles.container}>
          <Link href='/'>
            <a className={styles.logo}>Medilab Estetik</a>
          </Link>
          <div>
            <ul className={styles.list}>
              <Link href='/about'>{t('about')}</Link>
              {!session && <Link href='/pricing'>{t('pricing')}</Link>}
              <Link href='/services'>
                <ins
                  onMouseEnter={() => {
                    setOpen(true);
                  }}
                  onMouseLeave={() => {
                    setOpen(false);
                  }}
                  onClick={linkClickHandler}
                  className={styles.dropdownBtn}
                >
                  {t('services')}
                  <IoMdArrowDropdown className={styles.dropdown} />
                  {open && <DropdownMenu open={open} />}
                </ins>
              </Link>
              <Link href='/blog'>{t('blog')}</Link>
              {session && (
                <Link href='/cart'>
                  <a>
                    {t('cart')}
                    {cartItemsCount > 0 && <span>({cartItemsCount})</span>}
                  </a>
                </Link>
              )}
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
