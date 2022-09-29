import styles from '../../../styles/Product.module.css';

const Fillings = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.product}>
        <div>
          <h1>Fillings</h1>
        </div>
        <p>
          <b>Service Code: </b>Fl01
        </p>
        <p>
          Inlay-onlay ceramic fillings are recommended for the patients whose
          tooth tissue is too damaged to be treated with regular filling methods
          but also solid enough to not require a full crown treatment.
        </p>
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <h3>Product Details</h3>
        </div>
        <div className={styles.content}>
          <p>
            In certain cases that a patient’s decays have progressed over more
            teeth and cause distortion on the appearance, inlay-onlay fillings
            can be utilized as the most aesthetic and durable solution. The
            porcelain filling material used in this treatment is very compatible
            with the patients’ teeth and resistant to movements and forces while
            they are chewing.
          </p>
          <p>
            During inlay-onlay filling treatments, are held in two different
            sessions. In the first session our dentists clean all decays in the
            patient’s mouth. Then, the shape and measurements of the parts in
            the mouth are taken, to prevent any problem with the attachment of
            new porcelain filling material. The precise measurements are sent to
            the laboratory to get the most suitable result and meanwhile the
            cavity is filled with a temporary material. Once the inlay-onlay
            filling is prepared by the technicians in the laboratory, our
            dentists hold the second session to apply it to the patient’s mouth
            and to polish the material to achieve a natural look.
          </p>
          <p>
            <b>Advantages of Inlay-Onlay Fillings</b>
          </p>
          <ul>
            <li>Unnecessary tooth cuts are not made on the teeth</li>
            <li>No coloration on the porcelain material over time</li>
            <li>Resistant to chewing forces</li>
            <li>No lectern or breakage over the years</li>
            <li>Aesthetic and hygenic results</li>
            <li>Easy to apply</li>
            <li>No hot-cold sensitivity and no decay after the process</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Fillings;
