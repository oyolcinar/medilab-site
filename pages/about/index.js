import styles from '../../styles/Terms.module.css';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const About = () => {
  const { t } = useTranslation('about');

  return (
    <div className={styles.terms}>
      <Head>
        <title>{t('head')} | Medilab Estetik</title>
      </Head>
      <h2>{t('header')}</h2>
      <p>
        At Medilab Estetik we devoted ourselves to your self-renewal journey.
      </p>
      <p>
        At Medilab Estetik we are committed to achieve the best results
        possible. To make this happen, we are equipped with the state of art
        technologies and the latest advanced techniques.
      </p>
      <p>
        Our doctors, medical specialists, hospitals and clinics are amongst the
        most experienced in their field, and you can be assured that our advises
        and propositions will be the best suited solutions for you.
      </p>
      <p>
        In Istanbul you will see two continents greet each other so close, there
        is no other place to experience this. We are dedicated to provide a
        devoted reliable service not only on medical procedures but also on
        support and coordination.
      </p>
      <p>
        As part of our medical tourism package including the cost of airport
        transfers in Turkey, accommodation and the medical procedure, you will
        have a unique experience of leaving yourself in the hands of our support
        staff to take care of you.
      </p>
      <p>
        <b>
          Find out more about our doctors, specialists and procedure centers
          here.
        </b>
      </p>
      <p>
        You can start your self-renewal journey with a simple click. Just click
        on the Book Free Consultation button on our website and get in touch
        with our medical team. Once you learn all about the medical process that
        will suit best for you, make your deposit payment and book your
        procedure. Our travel coordinators, then will take care of you and
        compile all your personalised arrangements for you.From airport transfer
        in Turkey, to your medical appointments, and hotel bookings they will
        handle each and everty detail on your behalf. All services are inclusive
        of your package from the first moment thay you arrive to Turkey until
        your leave.
      </p>
      <p>
        <b>Medical experts and quality specialists</b>
      </p>
      <p>
        Our doctors and clinical specialists are amongst Turkey’s best, most
        approachable and most competent professionals in their fields. They will
        take you through our bespoke propositions of medical procedures to make
        sure to designate the matching process with your expectations. Our
        medical and support teams have been working together for many years and
        we have numerous experiences with vast reasons of a need for renewal.
      </p>
      <p>
        We will always be right next to you with the care and support you may
        need to make sure your self-renewal journey be one of the best
        experiences of your life.
      </p>
    </div>
  );
};

export default About;
