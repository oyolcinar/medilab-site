import styles from '../../../styles/Product.module.css';
import Head from 'next/head';
import Pricetag from '../../../components/UI/Pricetag';
import { useSession } from 'next-auth/react';

const PanoramicXray = () => {
  const { data: session, status } = useSession();

  return (
    <div className={styles.layout}>
      <Head>
        <title>Panoramic XRay | Medilab Estetik</title>
        <meta
          name='description'
          content='Panoramic x-ray or panoramic radiography, a medical image that
          dentists use to diagnose and treat their patients. It is a 2-D
          examination of your mouth with a single image.'
        />
      </Head>
      <div className={styles.product}>
        <div>
          <h1>Panoramic XRay</h1>
        </div>
        <p>
          <b>Service Code:</b>PXRAY01
        </p>
        <p>
          Panoramic x-ray or panoramic radiography, a medical image that
          dentists use to diagnose and treat their patients. It is a 2-D
          examination of your mouth with a single image.
        </p>
        {session && <Pricetag price={200} />}
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <h3>Product Details</h3>
        </div>
        <div className={styles.content}>
          <p>
            A jaw has a curved structure, but the panoramic x-ray produces a
            flat image which shows the details of the patient’s bones and teeth.
          </p>
          <p>
            Although x-rays involve a small dose of ionizing radiation, they are
            the most common form of medical imaging.
          </p>
          <p>
            <b>Is it harmful?</b>
            <br />
            Due to its minimal radiation, it is not harmful to the patient, but
            we still take caution by providing our patients with a lead vest.
          </p>
          <p>
            <b>Can I have an x-ray while pregnant?</b>
            <br />
            Like a lot of x-rays, dental x-ray must not be performed while
            pregnant. Therefore, all x-ray procedures must be postponed until
            after the birth. Our recommendation for patients is to have their
            panoramic x-rays taken before planned parenthood and to solve their
            dental problems beforehand. Even if there are problems during
            pregnancy, the previously taken film will be very helpful to the
            physician during the pregnancy.
          </p>
          <p>
            <b>Is x-ray a must?</b>
            <br />
            While not being required in all cases, it can be helpful for your
            dentist to fully comprehend the patient’s dental structure for
            certain treatments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PanoramicXray;
