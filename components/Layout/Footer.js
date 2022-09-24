import styles from '../../styles/Footer.module.css';
import Link from 'next/link';
import {
  IoMdMail,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoFacebook,
} from 'react-icons/io';
import { HiPhone } from 'react-icons/hi';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>CATEGORIES</h3>
          <Link href='/'>
            <a>HAIR TRANSPLANT</a>
          </Link>
          <Link href='/'>
            <a>DENTISTRY</a>
          </Link>
          <Link href='/'>
            <a>CHECK UP PACKAGES</a>
          </Link>
        </div>
        <div className={styles.column}>
          <h3>RECENT BLOG POSTS</h3>
          <Link href='/'>
            <a>BLOG POST #1</a>
          </Link>
          <Link href='/'>
            <a>BLOG POST #2</a>
          </Link>
          <Link href='/'>
            <a>BLOG POST #3</a>
          </Link>
        </div>
        <div className={styles.column}>
          <h3>CORPORATE</h3>
          <Link href='/about'>
            <a>ABOUT US</a>
          </Link>
          <Link href='/'>
            <a>HOSPITALS AND CLINICS</a>
          </Link>
          <Link href='/'>
            <a>TESTIMONIALS</a>
          </Link>
        </div>
        <div className={styles.column}>
          <h3>CONTACT US</h3>
          <Link href='/'>
            <a>
              Büyükdere Caddesi Tankaya Palas No:14 Kat:6 34360 Şişli - İSTANBUL
            </a>
          </Link>
          <Link href='/'>
            <a>
              <HiPhone className={styles.inlineIcon} />
              +90 549 170 12 00
            </a>
          </Link>
          <Link href='/'>
            <a>
              <IoMdMail className={styles.inlineIcon} />
              info@medilabestetik.com
            </a>
          </Link>
          <div className={styles.icons}>
            <Link href='/'>
              <a>
                <IoLogoTwitter />
              </a>
            </Link>
            <Link href='/'>
              <a>
                <IoLogoFacebook />
              </a>
            </Link>
            <Link href='/'>
              <a>
                <IoLogoInstagram />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.terms}>
        <Link href='/policies/privacy-and-cookie-policy'>
          <a>Privacy Policy And Cookie Policy</a>
        </Link>
        <div>|</div>
        <Link href='/policies/terms-of-service'>
          <a>Website Terms Of Service</a>
        </Link>
        <div>|</div>
        <Link href='/policies/terms-and-conditions-and-services-agreement'>
          <a>Terms Conditions And Services Agreement</a>
        </Link>
      </div>
      <div>
        <p>
          Copyright © 2022, Medilab Estetik,
          <Link href='https://www.medilabassist.com.tr/en-US/'>
            <a> MedilabAssist</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
