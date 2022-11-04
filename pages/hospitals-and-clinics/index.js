import styles from '../../styles/Terms.module.css';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const HospitalsAndClinics = () => {
  const { t } = useTranslation('hospitals-and-clinics');

  return (
    <div className={styles.terms}>
      <Head>
        <title>{t('head')} | Medilab Estetik</title>
      </Head>
      <h2>{t('header')}</h2>
      <p>
        <b>MEDILAB ASSIST</b>
      </p>
      <p>
        Medilab which has gained your confidence with the high standart services
        provided since the year 1999 has set up Medilab Assist in the year 2011
        in line with the principle of “providing better service in a more
        effective manner”.
      </p>
      <p>
        The services provided by Medilab Assist are carried out through business
        partnerships established with such insurance companies like particularly
        Anadolu Sigorta as well as Maphre Genel Sigorta, Allianz Sigorta and
        other insurance companies on the basis of the priviliged projects
        tailored to the specific needs of the customers.
      </p>
      <p>
        Medilab Assist which facilitates your life and stands by you whenever
        you need it ensures the holders of the private health insurance policy
        not to loose the control of their healthcare expenses and furthermore
        make use of the A plus service standarts with VIP priviliges while
        making use of healthcare services.
      </p>
      <p>
        Medilab Assist which is growing with a very rapid momentum since the
        date of its foundation provides service to an average number of 10000
        people a month as of the year 2015.
      </p>
      <p>
        <b>ABOUT MEDILAB</b>
      </p>
      <p>
        Medilab which has been founded in October 1999 provide service in the
        field of laboratory services and screening which occupies an important
        place in the healthcare sector. Medilab which is aware of the importance
        of being involved in the health sector and providing service for human
        health provides the means required for the doctors to make a correct
        diagnosis by:
      </p>
      <ul>
        <li>
          Continiously following up the developments in the field of laboratory
          and screening,
        </li>
        <li>
          Incorporating the state of the art products of technology into its
          structure,
        </li>
        <li>
          Ensuring the infrastructural means required to obtain reliable
          results,
        </li>
        <li>
          Working with a personnel that unites the awareness about the
          importance of producing good quality Works with the training that they
          have taken,
        </li>
        <li>
          And finally by giving timely and reliable results to its patients.
        </li>
      </ul>
      <p>
        Medilab which carries out its laboratory operations with state of the
        art autoanalysers produced by BeckmanCoulter and RocheDiagnostic makes
        use of the latest knowledge provided in today’s world by following up
        the actual developments in the healthcare sector.
      </p>
      <p>
        Medilab has obtained the accreditation certificate required by ISO 15189
        quality standart as a result of the the importance that it has
        attributed to qualified and scientific work and maintains and enhances
        the quality standarts through multilateral controls by participating in
        BIO-RAD international control program and (EQUAS) as well as in
        BIO-RADIO national quality program (QC).
      </p>
      <p>
        Medilab provides service to average number of 3000 people a month thanks
        to its high service standarts.
      </p>
    </div>
  );
};

export default HospitalsAndClinics;
