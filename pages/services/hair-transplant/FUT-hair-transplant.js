import styles from '../../../styles/Product.module.css';
import Head from 'next/head';
import Pricetag from '../../../components/UI/Pricetag';
import { useSession } from 'next-auth/react';

const FUTHairTransplant = () => {
  const { data: session, status } = useSession();

  return (
    <div className={styles.layout}>
      <Head>
        <title>FUT Hair Transplant | Medilab Estetik</title>
        <meta
          name='description'
          content='FUT (Follicular Unit Transplantation) hair transplant, also known as
          strip harvesting, is an alternative hair transplantation technique to
          the more commonly operated FUE (Follicular Unit Extraction) procedure.'
        />
      </Head>
      <div className={styles.product}>
        <h1>FUT Hair Transplant</h1>
        <p>
          <b>Service Code :</b>FUT01
        </p>
        <p>
          FUT (Follicular Unit Transplantation) hair transplant, also known as
          strip harvesting, is an alternative hair transplantation technique to
          the more commonly operated FUE (Follicular Unit Extraction) procedure.
        </p>
        <p>
          Round-Trip Airport Transfer:
          <b> Free</b>
          <br />
          Hotel-Hospital Transfers:
          <b> Free</b>
          <br />
          Covid-19 PCR Test:
          <b> Free</b>
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
            price={1550}
            newPrice={1470}
            name='FUT Hair Transplant'
            code='FUT01'
            query='/services/hair-transplant/FUT-hair-transplant'
          />
        )}
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <h3>Product Details</h3>
        </div>
        <div className={styles.content}>
          <p>
            <b>Donor Harvesting</b>
            <br />
            Initial step in FUT technique is identifying and assessing the donor
            area for suitability of harvesting follicles and the removal of the
            donor strip from the back of the sculp. Afterwards the tissue strip
            is dissected into follicular units at optimal approximate measures
            for implanting. This surgical procedure is neatly made for
            concealing the donor area surgical scar by allowing some hair to
            grow through the scar tissue, minimising its visibility.
          </p>
          <p>
            <b>Graft preparation</b>
            <br />
            Higly skilled and equipped team of specialists dissect the donor
            tissue efficiently under a microscope into individual grafts of 1- 4
            hairs. A correct procedure creates no trauma to, or transection of,
            the grafts. Such dissection creates small and neat grafts in natural
            groupings of 1- 4 hairs. This enables applying the smallest possible
            incision into which the grafts are placed, in turn, means less
            trauma and better graft survival.
          </p>
          <p>
            <b>Creating recipient area</b>
            <br />
            During harvesting the grafts, the surgeon creates the recipient
            sites in the proper angle, direction and orientation as planned and
            designed specifically for the patient to produce amazing results.
            The surgeon aims to make thousands of tiny incisions in such a way
            that will ensure maximum survival of the grafts and minimal trauma.
          </p>
          <p>
            <b>Placement of grafts</b>
            <br />
            In preparing the implantation area, the surgeon engraves the low
            density recipient area to place the follicles at the appropriate
            angles to give a natural look in the hairline for ensuring denser
            and comfortable feel.
          </p>
          <p>
            Finally, hair grafts are implanted into the recipient area of the
            scalp by a surgical technician who places each graft carefully and
            meticulously.
          </p>
          <p>
            <b>Advantages of FUT technique</b>
          </p>
          <ul>
            <li> Natural result</li>
            <li> Greater density</li>
            <li> Permanent solution for hair loss</li>
            <li> Can be applied to the patients with reduced doner area</li>
            <li>
              FUT (Follicular Unit Transplantation) hair transplant, also known
              as strip harvesting, is an alternative hair transplantation
              technique to the more commonly operated FUE (Follicular Unit
              Extraction) procedure.
            </li>
          </ul>
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
              You can check your hotel options after pressing add to cart
              button.
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FUTHairTransplant;
