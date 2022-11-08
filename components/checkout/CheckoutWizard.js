import styles from '../../styles/Checkout.module.css';
import useTranslation from 'next-translate/useTranslation';

const CheckoutWizard = ({ activeStep = 0 }) => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.flow}>
      {[`${t('billing')}`, `${t('payment')}`, `${t('order')}`].map(
        (step, index) => (
          <div
            key={step}
            className={`${styles.flowSection} ${
              index <= activeStep ? styles.flowActive : styles.flowNotActive
            }`}
          >
            {step}
          </div>
        ),
      )}
    </div>
  );
};

export default CheckoutWizard;
