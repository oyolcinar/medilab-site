import styles from '../../../styles/Product.module.css';
import Head from 'next/head';
import Pricetag from '../../../components/UI/Pricetag';
import { useSession } from 'next-auth/react';

const Implants = () => {
  const { data: session, status } = useSession();

  return (
    <div className={styles.layout}>
      <Head>
        <title>Implants | Medilab Estetik</title>
        <meta
          name='description'
          content='Implants are titanium screws that are placed into the jawbone to act
          as the root of a natural tooth while making prothesis.'
        />
      </Head>
      <div className={styles.product}>
        <div>
          <h1>Implants</h1>
        </div>
        <p>
          <b>Service Code: </b>IMP01
        </p>
        <p>
          Implants are titanium screws that are placed into the jawbone to act
          as the root of a natural tooth while making prothesis.{' '}
        </p>
        <p>
          Round-Trip Airport Transfer: <b>Free</b>
          <br />
          Hotel-Hospital Transfers: <b>Free</b>
          <br />
          Covid-19 PCR Test: <b>Free</b>
        </p>
        <p>
          <b>Free Mini Check-Up:</b>
          <br />
          Glucose
          <br />
          Hemogram (24 Parameters)
          <br />
          Sedimentation
          <br />
          Anti HIV
          <br />
          Anti HCV
          <br />
          HBsag
        </p>
        <p>
          <b>Free 2-Night Accommodation </b>(There might be a price difference
          based on your hotel selection).
          <br />
          <b>
            You can check your hotel options after pressing add to cart button.
          </b>
        </p>
        {session && <Pricetag price={1400} discount={14} />}
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <h3>Product Details</h3>
        </div>
        <div className={styles.content}>
          <p>
            Once it is compatible with the bone, then the prothesis can be
            applied on it without damaging the teeth next to it.
          </p>
          <p>
            Patients don’t feel pain during the operation, as local anesthesia
            is applied. They may experience slight swelling or bruises after the
            operation, but they can be minimized by applying ice treatment after
            the operation.
          </p>
          <p>
            Implants are titanium screws that are placed into the jawbone to act
            as the root of a natural tooth while making prothesis.{' '}
          </p>
          <p>
            <b>Free Mini Check-Up:</b>
            <br />
            Glucose
            <br />
            Hemogram (24 Parameters)
            <br />
            Sedimentation
            <br />
            Anti HIV
            <br />
            Anti HCV
            <br />
            HBsag
          </p>
          <p>
            <b>Free 2-Night Accommodation </b>(There might be a price difference
            based on your hotel selection).
            <br />
            <b>
              You can check your hotel options after pressing add to cart
              button.
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Implants;
