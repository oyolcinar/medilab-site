import styles from '../../../styles/Product.module.css';
import Head from 'next/head';

const SmileAesthetics = () => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Smile Aesthetics | Medilab Estetik</title>
        <meta
          name='description'
          content='Everyone wants and deserves a beautiful smile. Therefore, in today’s
          aesthetic dentistry, “Smile Design” or “Smile Aesthetics” in other
          words, is the most popular treatment among patients.'
        />
      </Head>
      <div className={styles.product}>
        <div>
          <h1>Smile Aesthetics</h1>
        </div>
        <p>
          <b>Service Code:</b>SA01
        </p>
        <p>
          Everyone wants and deserves a beautiful smile. Therefore, in today’s
          aesthetic dentistry, “Smile Design” or “Smile Aesthetics” in other
          words, is the most popular treatment among patients.
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
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <h3>Product Details</h3>
        </div>
        <div className={styles.content}>
          <p>
            While designing a patient’s smile, several factors are taken into
            consideration such as gender, skin colour, facial features or lip
            thickness. These factors are getting combined with the preferences
            of the patient and with the results of the golden ratio to reach the
            most aesthetic and desirable outcome.
          </p>
          <p>
            Smile design procedure is a multi-disciplinary treatment that
            requires the co-operation of the patient, the dentist and the
            technician. During the process first, our dentists take the photos
            and measurements of the patient’s smile and listen to their
            aesthetic expectations. Then, they work with the technician together
            to find the best approach that suits the patient. The technician
            makes a silicone test material and apply it to the patient to show
            the aimed smile design. They can also utilize from a digital program
            that presents the outcome on a screen without any physical action.
            Once the patient is happy with the design, the aesthetic porcelains
            are being prepared and applied within 7-10 days.
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
            <b>Free 2-Night Accommodation </b>There might be a price difference
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

export default SmileAesthetics;
