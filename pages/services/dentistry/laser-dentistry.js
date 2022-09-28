import styles from '../../../styles/Product.module.css';

const LaserDentistry = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.product}>
        <div>
          <h1>Laser Dentistry</h1>
        </div>
        <p>
          <b>Service Code: </b>LD01
        </p>
        <p>
          In the previous years, laser treatments were only used in soft tissue
          operations or certain aesthetic procedures such as teeth whitening.
          However, with the latest developments it is now possible to benefit
          lasers even for the hard tissue operations. The new lasers can used in
          different procedures from tooth and gum diseases to dental aesthetics.
          It is now possible to treat the patients with precise laser movements
          by avoiding healthy teeth or gums.
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
      <div>
        <div>
          <h3>Product Details</h3>
        </div>
        <div>
          <p>
            Laser treatments are applied to minimize the post-operative swelling
            and pain in implant surgeries, to create the right level and
            symmetrical gingiva in aesthetic dentistry, to remove the need of
            anesthesia in the caries removal process, to abrade the buried bone
            while removing the tooth, to treat a gum disease without surgical
            operation, to reduce procedure complications in root canal
            treatment, to create in jaw locking due to muscle spasm, to cure
            aphthae and herpes.
          </p>
          <p>
            Unlike the common belief, laser treatment is not harmful for health
            as it is a non-ionised light and it doesn’t gather at the patient’s
            tissue. However, it is important to apply the proper laser length
            and doses, thus it should be applied by a qualified specialist.
          </p>
          <p>
            <b>Advantages of Laser Dentistry</b>
          </p>
          <ul>
            <li>
              The laser beam with adjustable power treats the decayed tissue
              with less material loss
            </li>
            <li>
              Better results in shorter period in teeth whitening procedures
            </li>
            <li>Minimum bleeding in laser surgical applications</li>
            <li>
              Less post-operative complications such as swelling, pain and
              discomfort
            </li>
            <li>Quicker recovery</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LaserDentistry;
