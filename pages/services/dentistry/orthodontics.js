import styles from '../../../styles/Product.module.css';
import Head from 'next/head';
import Pricetag from '../../../components/UI/Pricetag';
import { useSession } from 'next-auth/react';

const Orthodontics = () => {
  const { data: session, status } = useSession();

  return (
    <div className={styles.layout}>
      <Head>
        <title>Orthodontics | Medilab Estetik</title>
        <meta
          name='description'
          content='Orthodontic treatment is the process of moving a person’s teeth by
          enforcing them with brackets to move to their correct spots. Teeth
          perplexity may occur because of various reasons such as the early loss
          of a decayed tooth, movement of teeth due to gum problems, cleft
          palate, mouth breathing, finger sucking/pacifier usage at early ages,
          wisdom teeth growth or teeth grinding. Although it can be treated at
          any age, it is recommended to start the treatment at before pubirty
          (before the age of 10-12) to use physical growth and bone development
          as an advantage.'
        />
      </Head>
      <div className={styles.product}>
        <div>
          <h1>Orthodontics</h1>
        </div>
        <p>
          <b>Service Code: </b>ORTH01
        </p>
        <p>
          Orthodontic treatment is the process of moving a person’s teeth by
          enforcing them with brackets to move to their correct spots. Teeth
          perplexity may occur because of various reasons such as the early loss
          of a decayed tooth, movement of teeth due to gum problems, cleft
          palate, mouth breathing, finger sucking/pacifier usage at early ages,
          wisdom teeth growth or teeth grinding. Although it can be treated at
          any age, it is recommended to start the treatment at before pubirty
          (before the age of 10-12) to use physical growth and bone development
          as an advantage.
        </p>
        {session && (
          <Pricetag
            newPrice={1000}
            name='Orthodontics'
            code='ORTH01'
            query='/services/dentistry/orthodontics'
          />
        )}
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <h3>Product Details</h3>
        </div>
        <div className={styles.content}>
          <p>
            Prior to the treatment, patients should go through certain tests and
            analysis to be diagnosed and to create a personal treatment plan.
            Our dentists examine the jaw and the position of the teeth with the
            help of the cephalometric film. Smile and profile analysis are also
            taken into consideration with photographs.
          </p>
          <p>
            <b>Metal Brackets: </b>Gray metal braces and wires attached to the
            teeth, most common technique
          </p>
          <p>
            <b>Porcelain Brackets: </b>White ceramic braces attached to the
            teeth, aesthetically more pleasing
          </p>
          <p>
            <b>Orthodontics with Transparent Plaque: </b>Transparent plaques
            applied to teeth without wires, latest technology in braces
            treatment
          </p>
          <p>
            <b>Incognita (Lingual Bracketing): </b>Braces attached to the teeth
            from inside, not visible from the outside, longer treatment process
          </p>
          <p>
            <b>Is tooth extraction required in orthodontic treatment?</b>
            <br />
            Tooth extraction for orthodontic treatment is a situation that
            patients do not want to encounter. The conditions of the patient’s
            upper and lower jaw and the shape of their face are taken into
            consideration while deciding on tooth extraction. In certain cases
            tooth extraction may be required for a more successful orthodontic
            treatment result.
          </p>
          <p>
            <b>What is the frequency of the follow-up examinations?</b>
            <br />
            The follow-up examinations are scheduled for every 4-5 weeks. If
            your orthodontic treatment requires tooth extraction, the
            examination sessions may be more frequent for the first months.
          </p>
          <p>
            <b>What should I do if my bracket is broken?</b> <br />
            Since the broken bracket will affect the treatment, it is necessary
            to see your dentist as soon as possible. If the braces hurt your
            gum, braces wax can be used.
          </p>
          <p>
            <b>
              Will my teeth return to their original state after my braces
              treatment is completed?
            </b>
            <br />
            After orthodontic treatment, your anterior teeth will be fixed with
            stabilizer wires. When the treatment is finished, you will have a
            beautiful teeth structure However, once the braces are removed from
            your mouth, your teeth will try to return to their previous spots.
            Therefore, with the help of reinforcement appliances, your teeth
            will stay in their new positions while the bones are hardened.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Orthodontics;
