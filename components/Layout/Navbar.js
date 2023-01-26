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
import { useContext, useEffect } from 'react';
import { Store } from '../../utils/Store';
import MobileDropdown from '../UI/MobileDropdown';
import { useTransition, animated } from '@react-spring/web';
import { Cross as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const { state } = useContext(Store);
  const router = useRouter();
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const { t } = useTranslation('common');

  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const transition = useTransition(open, {
    from: { transform: 'scaleY(0)', 'transform-origin': 'top center' },
    enter: { transform: 'scaleY(1)', 'transform-origin': 'top center' },
    leave: { transform: 'scaleY(0)', 'transform-origin': 'top center' },
    config: {
      duration: 200,
    },
  });

  const transitionMobile = useTransition(mobile, {
    from: { transform: 'scaleY(0)', 'transform-origin': 'top center' },
    enter: { transform: 'scaleY(1)', 'transform-origin': 'top center' },
    leave: { transform: 'scaleY(0)', 'transform-origin': 'top center' },
    config: {
      duration: 200,
    },
  });

  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  useEffect(() => {
    if (windowSize > 1100) {
      setMobile(false);
    }
  }, [windowSize]);

  useEffect(() => {
    setCartItemsCount(state.cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [state.cart.cartItems]);

  function logoutHandler() {
    signOut();
  }

  function loginHandler() {
    router.push('/auth');
  }

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.hamburger}>
          <Hamburger
            easing='ease-in-out'
            rounded
            toggled={mobile}
            toggle={setMobile}
            color='#12aac5'
          />
        </div>
        {transitionMobile((style, item) =>
          item ? (
            <animated.div style={style} className={styles.mobileContainer}>
              <MobileDropdown setMobile={setMobile} />
            </animated.div>
          ) : (
            ''
          ),
        )}
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
                  className={styles.dropdownBtn}
                >
                  {t('services')}
                  <IoMdArrowDropdown className={styles.dropdown} />
                  {transition((style, item) =>
                    item ? (
                      <animated.div
                        style={style}
                        className={styles.dropContainer}
                      >
                        <DropdownMenu setOpen={setOpen} />
                      </animated.div>
                    ) : (
                      ''
                    ),
                  )}
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
