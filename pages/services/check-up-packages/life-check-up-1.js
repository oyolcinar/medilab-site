import styles from '../../../styles/Product.module.css';
import Head from 'next/head';
import Pricetag from '../../../components/UI/Pricetag';
import { useSession } from 'next-auth/react';

const LifeCheckUpOne = () => {
  const { data: session, status } = useSession();

  return (
    <div className={styles.layout}>
      <Head>
        <title>Life Check Up #1| Medilab Estetik</title>
        <meta
          name='description'
          content='Check in with your well-being with our Check Up Packages. Our experienced and competent team accompanies you on your
          self-renewal journey with Giseya and ensures that the examinations in
          your package are completed.'
        />
      </Head>
      <div className={styles.product}>
        <h1>Life Check Up 1</h1>
        <p>
          <b>Service Code: </b>LCUP01
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
        {session && <Pricetag price={250} newPrice={200} />}
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <h3>Product Details</h3>
        </div>
        <div className={styles.content}>
          <ul>
            <li>
              <b>CARDIOVASCULAR EXAMINATION</b>
            </li>
            <li>
              <b>ECHOCARDIOGRAPHY</b>
            </li>
            <li>
              <b>LAB</b>
            </li>
            <li>
              <b>GLUCOSE</b>
            </li>
            <li>
              <b>HBA1C</b>
            </li>
            <li>
              <b>UREA</b>
            </li>
            <li>
              <b>CREATININE</b>
            </li>
            <li>
              <b>EGFR</b>
            </li>
            <li>
              <b>AST</b>
            </li>
            <li>
              <b>ALT</b>
            </li>
            <li>
              <b>GGT</b>
            </li>
            <li>
              <b>TOTAL CHOLESTEROL</b>
            </li>
            <li>
              <b>LDL CHOLESTEROL</b>
            </li>
            <li>
              <b>TRIGLYCERIDES</b>
            </li>
            <li>
              <b>TSH</b>
            </li>
            <li>
              <b>FREE T4</b>
            </li>
            <li>
              <b>IRON (FE)</b>
            </li>
            <li>
              <b>CALCIUM</b>
            </li>
            <li>
              <b>SODIUM</b>
            </li>
            <li>
              <b>POTASSIUM</b>
            </li>
            <li>
              <b>CHLORIDE</b>
            </li>
            <li>
              <b>SEDIMENTATION</b>
            </li>
            <li>
              <b>ASO</b>
            </li>
            <li>
              <b>CRP</b>
            </li>
            <li>
              <b>RF</b>
            </li>
            <li>
              <b>ANTI HCV</b>
            </li>
            <li>
              <b>ANTI HIV</b>
            </li>
            <li>
              <b>ANTI HBS</b>
            </li>
            <li>
              <b>HBSAG</b>
            </li>
            <li>
              <b>CK</b>
            </li>
            <li>
              <b>CK-MB</b>
            </li>
            <li>
              <b>CEA</b>
            </li>
            <li>
              <b>VITAMIN B12</b>
            </li>
            <li>
              <b>25-OH VITAMIN D3</b>
            </li>
            <li>
              <b>FULL URINE TEST</b>
            </li>
            <li>
              <b>TOTAL PSA (40+ YO MALE)</b>
            </li>
            <li>
              <b>FREE PSA (40+ YO MALE)</b>
            </li>
            <li>
              <b>FREE PSA / TOTAL PSA (40+ YO MALE)</b>
            </li>
            <li>
              <b>RADIOLOGY</b>
            </li>
            <li>
              <b>FULL ABDOMINAL USG</b>
            </li>
            <li>
              <b>ECG</b>
            </li>
            <li>
              <b>PA CHEST</b>
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

export default LifeCheckUpOne;
