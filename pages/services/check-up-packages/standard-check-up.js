import styles from '../../../styles/Product.module.css';
import Head from 'next/head';

const StandardCheckUp = () => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Standard Check Up | Medilab Estetik</title>
        <meta
          name='description'
          content='Check in with your well-being with our Check Up Packages. Our experienced and competent team accompanies you on your
          self-renewal journey with Giseya and ensures that the examinations in
          your package are completed.'
        />
      </Head>
      <div className={styles.product}>
        <h1>Standard Check Up</h1>
        <p>
          <b>Service Code: </b>SCUP01
        </p>
        <p>
          Our experienced and competent team accompanies you on your
          self-renewal journey with Giseya and ensures that the examinations in
          your package are completed.
        </p>
        <p>
          Once your procedures are concluded,you meet with our Doctors for your
          examination and to design the steps youneed to take for a life- long
          sustainable health.
        </p>
        <p>
          <b>
            Life-long sustainable health. Things to consider and apply before
            your check-up:
          </b>
        </p>
        <ul>
          <li>
            Do not eat anything for at least 8 and at most 14 hours (water is
            allowed to be consumed)
          </li>
          <li>Stop consuming alcoholic beverage at least 3 days before</li>
          <li>
            Stop taking supplements (vitamins, multivitamins, herbal medicines,
            etc.) at least 3 days before
          </li>
          <li>
            Do not use any flu medication and/or painkillers for at least 3 days
            before
          </li>
          <li>
            If there is a medication that is used regularly due to a chronic
            disease, do not take in the morning of check-up (if it must be
            taken, please inform the person in charge during the blood
            collection)
          </li>
          <li>
            Consume a light meal (rich in fat and low carbohydratevegetables)
            for the dinner before check up
          </li>
        </ul>
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <h3>Product Details</h3>
        </div>
        <div className={styles.content}>
          <ul>
            <li>
              <b>MEDICAL EXAMINATION</b>
            </li>
            <li>
              <b>FULL ABDOMINAL USG</b>
            </li>
            <li>
              <b>PA CHEST</b>
            </li>
            <li>
              <b>ECG</b>
            </li>
            <li>
              <b>FULL BLOOD COUNT (26 PARAMETERS)</b>
            </li>
            <li>
              <b>GLUCOSE</b>
            </li>
            <li>
              <b>TRIGLYCERIDES</b>
            </li>
            <li>
              <b>TOTAL CHOLESTEROL</b>
            </li>
            <li>
              <b>HDL CHOLESTEROL</b>
            </li>
            <li>
              <b>LDL CHOLESTEROL</b>
            </li>
            <li>
              <b>SGOT (AST)</b>
            </li>
            <li>
              <b>SGPT (ALT)</b>
            </li>
            <li>
              <b>CREATININE</b>
            </li>
            <li>
              <b>FULL URINE TEST</b>
            </li>
            <li>
              <b>NUTRITIONIST CONSULTATION</b>
            </li>
            <li>
              <b>BODY COMPOSITION (MUSCLE, FAT, WATER)</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StandardCheckUp;
