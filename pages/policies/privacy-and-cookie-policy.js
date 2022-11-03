import styles from '../../styles/Terms.module.css';
import Link from 'next/link';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const PrivacyPolicy = () => {
  const { t } = useTranslation('privacy-page');

  return (
    <div className={styles.terms}>
      <Head>
        <title>{t('head')} | Medilab Estetik</title>
      </Head>
      <h2>{t('header')}</h2>
      <p>
        <b>Medilab Estetik Privacy Policy And Cookie Policy</b>
      </p>
      <p>
        This Privacy Policy covers how <b>Medilab Estetik</b> collects, uses,
        protects and shares your Personal information. Please peruse this policy
        carefully and thoroughly to learn more about, if you have any comments
        on this privacy policy, please reach us via{' '}
        <Link href='mailto:info@medilabestetik.com'>
          <a>info@medilabestetik.com</a>
        </Link>
      </p>
      <p>
        <b>Personal Data and Information</b>
      </p>
      <p>
        For purposes of this Policy, Personal Information is any information or
        data about you that is personally identifiable indicators to you, like
        your name, gender, age, occupation, address, phone number, email
        address, particulars of your medical or health conditions and concerns
        etc. and additionally might include your medical data if required by the
        medical staff of Medical Procedure Provider, which are not otherwise
        publicly available, and collected in all kinds of verbal, written or
        electronic media. Within this scope, your personal data are collected in
        order to provide related medical services within the specified legal
        framework and to fulfill the contractual and legal obligations of{' '}
        <b>Medilab Estetik</b>.
      </p>
      <p>
        Within our knowledge, people under the age of 18 are not given any
        medical / health-related advice without parental consent.
      </p>
      <p>
        Through <b>medilabestetik.com</b>; the details and data of your visits
        to our web site and the resources you use, the information about your
        computer, the details of your transactions within the website, the data
        and details you give while filling related forms or surveys might be
        collected.
      </p>
      <p>
        If your data is collected and processed, we will ensure that it will be
        managed fairly and lawfully within the alignment of GDPR and Turkish
        equivalent regulations (KVKK). Your personal data will only be processed
      </p>
      <ul>
        <li>
          if we receive your consent to the processing of your personal data,
        </li>
        <li>
          if it is required in accordance with the law, regulations and honesty
          rules
        </li>
        <li>
          if it is necessary for the performance of a contract to which you are
          a party
        </li>
        <li>
          if it is necessary to provide you the healthcare services you have
          requested
        </li>
        <li>
          if it is required to protect the vital interests of you or of another
          person
        </li>
      </ul>
      <p>
        <b>Data Processing Time</b>
      </p>
      <p>
        Your personal data will be processed in compliance with the data
        processing and limitation periods specified in the legislation that
        Medilab Estetik is subject to with all relevant laws and other legal
        regulations, limited to the purposes specified in this Privacy Policy.
      </p>
      <p>
        <b>Your Rights</b>
      </p>
      <p>
        Within the scope of this Privacy Policy, you have the following rights
        regarding your personal data:
      </p>
      <ul>
        <li>
          request information about whether your personal data is processed,
        </li>
        <li>
          learn the purpose of processing, if processed, and whether they are
          used for that same purpose
        </li>
        <li>
          know the third parties to whom your personal data is shared or
          transferred,
        </li>
        <li>
          request correction if your data is processed incorrectly or is
          incomplete
        </li>
        <li>
          request the deletion or destruction of your personal data if there is
          no longer a reason to process
        </li>
        <li>
          request notification of these transactions to third parties to whom
          your personal data is shared or transferred,
        </li>
        <li>
          object to the occurrence of a result against you by analyzing the
          processed data exclusively through automated systems,
        </li>
        <li>
          Demand compensation for the damage if you suffer damage due to
          unlawful processing of personal data
        </li>
      </ul>
      <p>
        In order to benefit from your rights stated above, please send a request
        to{' '}
        <Link href='mailto:info@medilabestetik.com'>
          <a>info@medilabestetik.com</a>
        </Link>
        , in written form by identifying your identity and your explanations
        about the right you want to use, by stating clearly with your signature,
        specifying the subject of request, your name and surname; ID number for
        Turkey citizens, nationality for foreigners, passport number / ID
        number, residential notification address or business address, main
        electronic mail or the phone or fax number.
      </p>
      <p>
        In the application containing your explanations regarding the right you
        have as a personal data owner and that you will make to benefit from
        your rights stated above and that you request to use; The subject you
        request must be clear and understandable, the subject you request is
        related to you in person, or if you are acting on behalf of someone
        else, you must be formally authorized and document your authorization,
        the application must contain identity and address information, and
        documents certifying your identity must be attached to the application.
      </p>
      <p>
        Your application within this scope will be finalized as soon as possible
        and within 30 days at the latest.
      </p>
      <p>
        <b>Data Usage</b>
      </p>
      <p>We might use information about you to:</p>
      <ul>
        <li>
          Provide you healthcare services that you requested for, medical
          diagnosis and aftercare services
        </li>
        <li>Carry out our contracts with you</li>
        <li>
          Provide analysis, feedbacks and valuable information to improve our
          services and our website
        </li>
        <li>
          Inform you about medical purposes such as your appointment, your
          status, your travel details, your transportation etc.
        </li>
        <li>Confirm your identity via Health Professionals and Call Center</li>
        <li>
          Share information demanded by Ministry of Health and other public
          institutions and organizations according to the related legislation
        </li>
        <li>
          Contact you in regards to the financing, and meeting the expenses of
          the related healthcare services
        </li>
        <li>Detect, prevent and address technical issues</li>
        <li>
          Respond to all your questions and complaints related to our health
          services
        </li>
        <li>
          Contact you for marketing and communication purposes to inform you
          about our services, products. If you don’t want to be contacted for
          marketing purposes, please tick the relevant box that you will find
          within the contact form or send an email to{' '}
          <Link href='mailto:info@medilabestetik.com'>
            <a>info@medilabestetik.com</a>
          </Link>
          requesting to unsubscribe from our list.
        </li>
      </ul>
      <p>
        In addition, if you no longer want us to use and process your personal
        data for any of the other reasons, you can let us know at any time by
        contacting us at info@medilabestetik.com and we will delete your data
        from our systems. However, you acknowledge this will limit our ability
        to provide the best possible services to you.
      </p>
      <p>
        In some cases, the collection of personal data may be a statutory or
        contractual requirement, and we will be limited in the services we can
        provide you if you don’t provide your personal data in these cases.
      </p>
      <p>
        <b>The Storage of Data</b>
      </p>
      <p>
        Our services may require sharing and transferring your collected data to
        storage outside the European Economic Area (EEA). It may be processed
        outside the EEA to fulfil your order and deal with payment.
      </p>
      <p>
        Your Personal Data will be retained as long as it is required for the
        purposes for which the data is collected. Once you have terminated the
        contractual relationship with us, we will permanently remove your
        personal data unless it is required due to the related GDPR regulations
        and their Turkish equivalents.
      </p>
      <p>
        By giving us your personal data, you agree to this arrangement. We will
        do what we reasonably can to keep your data secure and we are committed
        to using our technological resources in an effort to ensure that our
        customers and users receive the kind of privacy protection that will
        make them confident and secure. We are not responsible, however, for
        harm that you or any person may suffer as a result of a breach of
        confidentiality due to your use of the Internet.
      </p>
      <p>
        We only keep your personal data for as long as we need to in order to
        use it as described in this Policy, and/or for as long as you allow us
        to keep it. As part of our activities, we will perform an annual review
        our database to ascertain whether we need to keep your personal data.
        Your personal data will be deleted if we no longer need it.
      </p>
      <p>
        <b>Disclosing your information</b>
      </p>
      <p>
        Your information might be disclosed if it is our legal obligation in
        accordance with GDPR and Turkish equivalent and/or related privacy laws
        and regulations, if we are intend to sell/transfer our business to
        another company/group or party, if it is necessary to share with other
        third parties to provide healthcare services you have requested for
        and/or it is required to provide protection against fraud or credit
        risks.
      </p>
      <p>
        Where any of your data is required for such a purpose, we will take all
        reasonable steps to ensure that your data will be handled safely,
        securely, lawfully and in accordance with your rights, our obligations,
        and the obligations of the third party under GDPR and and Turkish
        equivalent.
      </p>
      <p>
        <b>Tracking & Cookies</b>
      </p>
      <p>
        As it is a general practice to do so, we use cookies and similar
        tracking methods and technologies to track the activity on our Service
        and retain certain information.
      </p>
      <p>
        Cookies are files with small amount of data which may include an
        anonymous unique identifier. Cookies are sent to your browser from a
        website and stored on your device. Tracking technologies also used are
        beacons, tags, and scripts to collect and track information and to
        improve and analyze our Service.
      </p>
      <p>
        You can instruct your browser to refuse all cookies or to indicate when
        a cookie is being sent. However, if you do not accept cookies, you may
        not be able to use certain functionalities of our site and some portions
        of our Service.
      </p>
      <p>
        <b>Changes</b>
      </p>
      <p>
        If we change our Privacy and Cookie Policy, we will post the changes on
        this page.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
