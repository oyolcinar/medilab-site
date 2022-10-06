import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';
import ButtonLarge from '../UI/ButtonLarge';
import { useState } from 'react';
import DropdownMenu from '../UI/DropdownMenu';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  const [open, setOpen] = useState(false);

  function toggleDropdown() {
    setOpen((prevState) => !prevState);
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
              <Link href='/about'>ABOUT US</Link>
              <Link href='/pricing'>PRICING</Link>
              <Link href='/services'>
                <a
                  onMouseEnter={() => {
                    setOpen(true);
                  }}
                  onMouseLeave={() => {
                    setOpen(false);
                  }}
                >
                  SERVICES
                  <IoMdArrowDropdown className={styles.dropdown} />
                  {open && <DropdownMenu />}
                </a>
              </Link>
              <Link href='/blog'>BLOG</Link>
              {!session && !loading && <ButtonLarge name='Login' />}
              {session && <ButtonLarge name='Logout' />}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
