import styles from '../../../styles/Product.module.css';
import Head from 'next/head';
import Pricetag from '../../../components/UI/Pricetag';
import { useSession } from 'next-auth/react';

const Whitening = () => {
  const { data: session, status } = useSession();

  return (
    <div className={styles.layout}>
      <Head>
        <title>Whitening | Medilab Estetik</title>
        <meta
          name='description'
          content='Teeth whitening is a technique that makes your teeth look a few shades
          brighter than the existing colour.'
        />
      </Head>
      <div className={styles.product}>
        <div>
          <h1>Whitening</h1>
        </div>
        <p>
          <b>WhiteningService Code:</b> WHI01
        </p>
        <p>
          Teeth whitening is a technique that makes your teeth look a few shades
          brighter than the existing colour.
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
          <b>Free 2-Night Accommodation</b> (There might be a price difference
          based on your hotel selection).
          <br />
          <b>
            You can check your hotel options after pressing add to cart button.
          </b>
        </p>
        {session && <Pricetag price={750} newPrice={650} />}
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <h3>Product Details</h3>
        </div>
        <div className={styles.content}>
          <p>
            <b>Home whitening</b>
            <br />
            Our dental professionals take the measures of your mouth to prepare
            a custom-made whitening plaque specifically designed for you.
          </p>
          <p>
            Once your plaque is ready, you can use it at home without the need
            of a professional support. Our patients generally prefer to use it
            at nighttime with a very easy process. They pour some whitening gel
            in the plaques and replace it in their mouth for 6-8 hours.
          </p>
          <p>
            Depending on the shade of your teeth, this technique can be used
            between 1-4 weeks.
          </p>
          <p>
            <b>Clinical whitening</b>
            <br />
            With this method, the process takes about an hour and it is
            performed by our dental professionals in the clinic. During the
            operation, our dental professionals spread some whitening gel in
            your mouth and apply special lights while protecting your gum ridge
            with a special barrier.
          </p>
          <p>
            <b>Combined whitening</b>
            <br />
            Combined whitening method, involves both Home and Clinical Whitening
            processes as per the needs of the patient.
          </p>
          <p>
            <b>Biological whitening</b>
            <br />
            Biological whitening method is often preferred by the patients with
            sensitive tissues as in this method our dental professionals use a
            biological tissue friendly gel during the operation.
          </p>
          <p>
            Although teeth whitening is quite an easy operation, patients with
            decays, gum diseases or decreased gumlines should not be getting
            their teeth whitened. The operation itself is not a harmful process
            when done correctly by dental professionals, but it is strongly
            recommended for the patients to avoid coloured and acidic liquids
            such as coffee, coke or wine after the procedure. During the post
            procedure phase, some patients experience sensitivity against hot or
            cold food/beverages due to the minimal erosion on teeth but it fades
            after a short period.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whitening;
