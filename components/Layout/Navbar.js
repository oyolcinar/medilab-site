import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';
import ButtonLarge from '../UI/ButtonLarge';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href='/'>
          <a className={styles.logo}>Medilab Estetik</a>
        </Link>
        <div>
          <ul className={styles.list}>
            <Link href='/about'>
              <a>ABOUT US</a>
            </Link>
            <Link href='/pricing'>
              <a>PRICING</a>
            </Link>
            <Link href='/services'>
              <a>SERVICES</a>
            </Link>
            <Link href='/blog'>
              <a>BLOG</a>
            </Link>
            <ButtonLarge name='Log In' />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
