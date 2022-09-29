import styles from '../../../styles/Product.module.css';
import Head from 'next/head';

const Zirconium = () => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Zirconium | Medilab Estetik</title>
        <meta
          name='description'
          content='When it comes to dental aesthetics, durability, texture harmony and
          natural results are the most important elements. Zirconium dental
          crowns are a new technology product, that meets all these requirements
          for patients and dentists.'
        />
      </Head>
      <div className={styles.product}>
        <div>
          <h1>Zirconium</h1>
        </div>
        <p>
          <b>Service Code: </b>ZRC01
        </p>
        <p>
          When it comes to dental aesthetics, durability, texture harmony and
          natural results are the most important elements. Zirconium dental
          crowns are a new technology product, that meets all these requirements
          for patients and dentists.
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
            Zirconium’s transparent structure allows the teeth look more natural
            while it is also very resistant to your mouth’s chewing forces. It
            can be used in the entire mouth as it has very aesthetically
            pleasing results for the frontal teeth and it is robust enough to be
            applied to the rear teeth.
          </p>
          <p>
            The procedure starts with taking the photos and measures of the
            patient’s face and mouth. Then our dentists apply local anesthesia
            to the patient to extract a small part from the tooth and send it to
            the laboratory.
          </p>
          <p>
            As the Zirconium crowns are shaped in a compatible form with the
            patient’s tooth, there are no areas under the crown for plaque or
            bacteria to grow. Therefore, there is no risk for the patients to
            experience decays or gum diseases. As the material itself is even
            more resistant than a natural tooth it can be used for a very long
            time by the patients.
          </p>
          <p>
            There is no metal in Zirconium crowns therefore it can be used even
            with the patients that are allergic to metal. The whole treatment
            takes around 1 week. However, patients with gum diseases or other
            dental problems have to go through other treatments before this
            procedure.
          </p>
          <p>
            <b>Empress or Zirconium?</b>
            <br />
            Empress and Zirconium both prove great results and frequently used
            by dentists.
            <br />
            They both don’t include metal base and therefore they are
            aesthetically pleasing.
            <br />
            Empress crowns are preferred when dental bridges are not required.
            <br />
            If the patient requires a frontal teeth treatment for one or two
            teeth, empress crowns are preferred. If further aesthetics and
            durability is needed, then zirconium is recommended.
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

export default Zirconium;
