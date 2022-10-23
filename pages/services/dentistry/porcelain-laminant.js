import styles from '../../../styles/Product.module.css';
import Head from 'next/head';
import Pricetag from '../../../components/UI/Pricetag';
import { useSession } from 'next-auth/react';

const PorcelainLaminant = () => {
  const { data: session, status } = useSession();

  return (
    <div className={styles.layout}>
      <Head>
        <title>Porcelain Laminant | Medilab Estetik</title>
        <meta
          name='description'
          content='One of the biggest concerns of dentistry patients have always been
          about the final look of their treatment. While these aesthetic
          concerns have been tried to overcome with full crown applications for
          years, they haven’t been the best solution as they cause substance
          loss in the patients’ teeth. With the latest developments, now
          porcelain coats can be much thinner by strengthening its physical
          properties and therefore they have become more aesthetically pleasing.
          These very thin and strong porcelain coats are called Laminant
          Coatings and they have become one of the most popular treatments for
          the frontal teeth group.'
        />
      </Head>
      <div className={styles.product}>
        <div>
          <h1>Porcelain Laminant</h1>
        </div>
        <p>
          <b>Service Code: </b>PRCL01
        </p>
        <p>
          One of the biggest concerns of dentistry patients have always been
          about the final look of their treatment. While these aesthetic
          concerns have been tried to overcome with full crown applications for
          years, they haven’t been the best solution as they cause substance
          loss in the patients’ teeth. With the latest developments, now
          porcelain coats can be much thinner by strengthening its physical
          properties and therefore they have become more aesthetically pleasing.
          These very thin and strong porcelain coats are called Laminant
          Coatings and they have become one of the most popular treatments for
          the frontal teeth group.
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
        {session && (
          <Pricetag
            newPrice={500}
            name='Porcelain Laminant'
            code='PRCL01'
            query='/services/dentistry/porcelain-laminant'
          />
        )}
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <h3>Product Details</h3>
        </div>
        <div className={styles.content}>
          <p>
            As the loss of a natural tooth or removal of a part of the dental
            tissue are difficult and undesired solutions, it is important to
            restore a tooth with the least amount of material loss or tissue
            damage. Laminant Coating is a very useful application since it
            allows the dentists to provide a natural look to their patients with
            almost no damage in their mouth.
          </p>
          <p>
            Laminant Coating can be applied on the patients that have teeth gap,
            short frontal teeth, severe tooth stains or colour changes and gummy
            smile. The treatment takes 7-10 days if no additional treatment is
            required. It can be applied to everyone, except for the patients
            that have teeth grinding problems, jaw deformations and advanced gum
            diseases.
          </p>
          <p>
            During the treatment process, first the patient’s teeth are abraded
            and their measurements are taken with a special material. Then, the
            new laminate coating is prepared with the help of a system called
            CAD CAM in the laboratory. The dental technician finalizes the thin
            ceramic porcelain leaf according to the needs and expectations of
            the patient by adding small additions and polishing.
          </p>
          <p>
            Lastly, the new leaf porcelain is applied on the patient’s original
            tooth by using a material that provides chemical adhesion.
          </p>
          <p>
            <b>Advantages of Porcelain Laminant</b>
          </p>
          <ul>
            <li>Minimal erosion on the original tooth</li>
            <li>
              Minimal surgical applications, no tooth extraction or cut is
              needed
            </li>
            <li>Quick results</li>
            <li>Natural look</li>
            <li>
              Easy after care (not affected by tea, coffee or cigarettes and
              minimal tooth stone formation in the future)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PorcelainLaminant;
