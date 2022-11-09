import styles from '../../styles/Footer.module.css';
import Link from 'next/link';
import {
  IoLogoWhatsapp,
  IoMdMail,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoFacebook,
} from 'react-icons/io';
import { HiPhone } from 'react-icons/hi';
import useTranslation from 'next-translate/useTranslation';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>{t('categories')}</h3>
          <Link href='/services/hair-transplant'>
            <a>{t('hairTransplant')}</a>
          </Link>
          <Link href='/services/dentistry'>
            <a>{t('dentistry')}</a>
          </Link>
          <Link href='/services/check-up-packages'>
            <a>{t('checkUp')}</a>
          </Link>
        </div>
        <div className={styles.column}>
          <h3>{t('blogposts')}</h3>
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
          <h3>{t('corporate')}</h3>
          <Link href='/about'>
            <a>{t('about')}</a>
          </Link>
          <Link href='/hospitals-and-clinics'>
            <a>{t('hospitals')}</a>
          </Link>
          <Link href='/testimonials'>
            <a>{t('testimonials')}</a>
          </Link>
        </div>
        <div className={styles.column}>
          <h3>{t('contact')}</h3>
          <Link href='/contact'>
            <a>
              Büyükdere Caddesi Tankaya Palas
              <br />
              No:14 Kat:6 34360 Şişli - İSTANBUL
            </a>
          </Link>
          <Link href='/'>
            <a>
              <HiPhone className={styles.inlineIcon} />
              +90 549 170 12 00
            </a>
          </Link>
          <Link href='mailto:info@medilabestetik.com'>
            <a>
              <IoMdMail className={styles.inlineIcon} />
              info@medilabestetik.com
            </a>
          </Link>
          <div className={styles.icons}>
            <Link href='/'>
              <a target='_blank' rel='noopener noreferrer'>
                <IoLogoTwitter />
              </a>
            </Link>
            <Link href='/'>
              <a target='_blank' rel='noopener noreferrer'>
                <IoLogoFacebook />
              </a>
            </Link>
            <Link href='/'>
              <a target='_blank' rel='noopener noreferrer'>
                <IoLogoInstagram />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.terms}>
        <Link href='/policies/privacy-and-cookie-policy'>
          <a>{t('privacy')}</a>
        </Link>
        <div>|</div>
        <Link href='/policies/terms-of-service'>
          <a>{t('service')}</a>
        </Link>
        <div>|</div>
        <Link href='/policies/terms-and-conditions-and-services-agreement'>
          <a>{t('conditions')}</a>
        </Link>
      </div>
      <div>
        <p>
          Copyright © 2022, Medilab Estetik,
          <Link href='https://www.medilabassist.com.tr/en-US/'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className={styles.lastLink}
            >
              Medilab Assist
            </a>
          </Link>
        </p>
      </div>
      <Link href='https://wa.me/+905365245426'>
        <a target='_blank' rel='noopener noreferrer'>
          <IoLogoWhatsapp className={styles.whatsapp} />
        </a>
      </Link>
    </div>
  );
};

export default Footer;
