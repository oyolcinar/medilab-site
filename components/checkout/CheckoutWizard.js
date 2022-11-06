import styles from '../../styles/Checkout.module.css';

const CheckoutWizard = ({ activeStep = 0 }) => {
  return (
    <div className={styles.flow}>
      {['Billing Address', 'Payment Method', 'Place Order'].map(
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
