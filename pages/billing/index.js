import CheckoutWizard from '../../components/checkout/CheckoutWizard';
import { getSession } from 'next-auth/react';
import styles from '../../styles/Auth-Form.module.css';
import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import { Store } from '../../utils/Store';
import Cookies from 'js-cookie';

const Billing = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { billingAddress } = cart;

  useEffect(() => {
    setValue('firstName', billingAddress.firstName);
    setValue('lastName', billingAddress.lastName);
    setValue('country', billingAddress.country);
    setValue('city', billingAddress.city);
    setValue('address', billingAddress.address);
    setValue('postalCode', billingAddress.postalCode);
    setValue('phoneNumber', billingAddress.phoneNumber);
  }, [setValue, billingAddress]);

  function submitHandler({
    firstName,
    lastName,
    country,
    city,
    address,
    postalCode,
    phoneNumber,
  }) {
    dispatch({
      type: 'SAVE_BILLING_ADDRESS',
      payload: {
        firstName,
        lastName,
        country,
        city,
        address,
        postalCode,
        phoneNumber,
      },
    });
    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        billingAddress: {
          firstName,
          lastName,
          country,
          city,
          address,
          postalCode,
          phoneNumber,
        },
      }),
    );
  }

  return (
    <div className={`${styles.container} ${styles.billingContainer}`}>
      <CheckoutWizard activeStep={0} />
      <div className={styles.auth}>
        <div className={styles.header}>
          <h1>Billing Address</h1>
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className={styles.control}>
            <label htmlFor='firstName'>
              First name:{' '}
              {errors.firstName && (
                <span className={styles.warning}>
                  {errors.firstName.message}
                </span>
              )}
            </label>
            <input
              id='firstName'
              autoFocus
              {...register('firstName', {
                required: 'Please enter your first name.',
              })}
            />
          </div>
          <div className={styles.control}>
            <label>
              Last name:{' '}
              {errors.lastName && (
                <span className={styles.warning}>
                  {errors.lastName.message}
                </span>
              )}
            </label>
            <input
              id='lastName'
              autoFocus
              {...register('lastName', {
                required: 'Please enter your last name.',
              })}
            />
          </div>
          <div className={styles.control}>
            <label>
              Country:{' '}
              {errors.country && (
                <span className={styles.warning}>{errors.country.message}</span>
              )}
            </label>
            <input
              id='country'
              autoFocus
              {...register('country', {
                required: 'Please enter your country.',
              })}
            />
          </div>
          <div className={styles.control}>
            <label>
              City:{' '}
              {errors.city && (
                <span className={styles.warning}>{errors.city.message}</span>
              )}
            </label>
            <input
              id='city'
              autoFocus
              {...register('city', {
                required: 'Please enter your city.',
              })}
            />
          </div>
          <div className={styles.control}>
            <label>
              Address:{' '}
              {errors.address && (
                <span className={styles.warning}>{errors.address.message}</span>
              )}
            </label>
            <input
              id='address'
              autoFocus
              {...register('address', {
                required: 'Please enter your address.',
              })}
            />
          </div>
          <div className={styles.control}>
            <label>
              Postal code:{' '}
              {errors.postalCode && (
                <span className={styles.warning}>
                  {errors.postalCode.message}
                </span>
              )}
            </label>
            <input
              id='postalCode'
              autoFocus
              {...register('postalCode', {
                required: 'Please enter your postal code.',
              })}
            />
          </div>
          <div className={styles.control}>
            <label>
              Phone:{' '}
              {errors.phoneNumber && (
                <span className={styles.warning}>
                  {errors.phoneNumber.message}
                </span>
              )}
            </label>
            <input
              id='phoneNumber'
              autoFocus
              {...register('phoneNumber', {
                required: 'Please enter your phone number.',
              })}
            />
          </div>
          <div className={styles.actions}>
            <button>Save Billing Address</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default Billing;
