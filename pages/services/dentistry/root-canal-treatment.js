import styles from '../../../styles/Product.module.css';
import Head from 'next/head';
import Pricetag from '../../../components/UI/Pricetag';
import { useSession } from 'next-auth/react';

const RootCanalTreatment = () => {
  const { data: session, status } = useSession();

  return (
    <div className={styles.layout}>
      <Head>
        <title>Root Canal Treatment | Medilab Estetik</title>
        <meta
          name='description'
          content='Root Canal Treatment is applied when a patient’s tooth decay is
          progressed to the nerves, the tooth is no longer vital or when a root
          tip infection has occurred. In this process, the tooth’s nerves and
          pulp chamber are extracted along with the soft tissues in the canals.
          The remaining channels are cleaned carefully to avoid any bacteria.
          Then the root canal walls are filed and the root is being shaped. Once
          these steps are completed, the channels are filled with the filling
          material.'
        />
      </Head>
      <div className={styles.product}>
        <div>
          <h1>Root Canal Treatment</h1>
        </div>
        <p>
          <b>Service Code: </b>RCT01
        </p>
        <p>
          Root Canal Treatment is applied when a patient’s tooth decay is
          progressed to the nerves, the tooth is no longer vital or when a root
          tip infection has occurred. In this process, the tooth’s nerves and
          pulp chamber are extracted along with the soft tissues in the canals.
          The remaining channels are cleaned carefully to avoid any bacteria.
          Then the root canal walls are filed and the root is being shaped. Once
          these steps are completed, the channels are filled with the filling
          material.
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
        {session && (
          <Pricetag
            price={1500}
            newPrice={1300}
            name='Root Canal Treatment'
            code='RCT01'
          />
        )}
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <h3>Product Details</h3>
        </div>
        <div className={styles.content}>
          <p>
            A health tooth has fluid circulation which allows the tooth to be
            flexible. With the root canal treatment this circulation is cut and
            the tooth becomes more fragile. Therefore, in some cases dentists
            cover the root canal treatment to avoid this problem.
          </p>
          <p>
            Also, patient’s lose their sensitivity to hot and cold
            food/beverages as their dental pulp is removed during the root canal
            treatment.
          </p>
          <p>
            Local anesthesia is applied before the procedure, thus patient’s
            don’t feel any pain. However, root canal treatment is a different
            process than other filling procedures and the healing may take more
            time. After the procedure, patients may feel pain when pressed on
            the tooth or swelling for a few days. In such cases, prescribed
            antibiotics or painkillers can be taken with the guidance of your
            dentist.
          </p>
          <p>
            <b>Advantages of Root Canal Treatment</b>
          </p>
          <ul>
            <li>Prevents the removal of the dead tooth</li>
            <li>More natural look</li>
            <li>
              Minimize dental problems such as loss of the functions of teeth or
              problems with speech
            </li>
          </ul>
          <p>
            Root Canal Treatment is applied when a patient’s tooth decay is
            progressed to the nerves, the tooth is no longer vital or when a
            root tip infection has occurred. In this process, the tooth’s nerves
            and pulp chamber are extracted along with the soft tissues in the
            canals. The remaining channels are cleaned carefully to avoid any
            bacteria. Then the root canal walls are filed and the root is being
            shaped. Once these steps are completed, the channels are filled with
            the filling material.
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
              You can check your hotel options after pressing add to cart
              button.
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RootCanalTreatment;
