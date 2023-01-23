import CheckoutWizard from '../../components/checkout/CheckoutWizard';
import { getSession } from 'next-auth/react';
import styles from '../../styles/Auth-Form.module.css';
import { useContext, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Store } from '../../utils/Store';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import DatePicker from 'react-datepicker';

const Accommodation = () => {
  const { t } = useTranslation('accommodation');

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { accommodation } = cart;
  const router = useRouter();

  useEffect(() => {
    setValue('firstName', accommodation.firstName);
    setValue('lastName', accommodation.lastName);
    setValue('phoneNumber', accommodation.phoneNumber);
    setValue('country', accommodation.country);
    setValue('hotel', accommodation.hotel);
    /*     setValue('stayStart', new Date(accommodation.stayStart));
    setValue('stayEnd', new Date(accommodation.stayEnd)); */
    setValue('guestNo', accommodation.guestNo);
    setValue('roomNo', accommodation.roomNo);
  }, [setValue, accommodation]);

  function submitHandler({
    firstName,
    lastName,
    phoneNumber,
    country,
    stayStart,
    stayEnd,
    hotel,
    guestNo,
    roomNo,
  }) {
    dispatch({
      type: 'SAVE_ACCOMMODATION',
      payload: {
        firstName,
        lastName,
        phoneNumber,
        country,
        stayStart,
        stayEnd,
        hotel,
        guestNo,
        roomNo,
      },
    });
    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        accommodation: {
          firstName,
          lastName,
          phoneNumber,
          country,
          stayStart,
          stayEnd,
          hotel,
          guestNo,
          roomNo,
        },
      }),
    );
    router.push('/billing');
  }

  console.log(state);

  return (
    <div className={`${styles.container} ${styles.billingContainer}`}>
      <CheckoutWizard activeStep={0} />
      <div className={styles.auth}>
        <div className={styles.header}>
          <h1>{t('header')}</h1>
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className={styles.control}>
            <label htmlFor='firstName'>
              {t('firstName')}{' '}
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
                required: `${t('firstNameError')}`,
              })}
            />
          </div>
          <div className={styles.control}>
            <label>
              {t('lastName')}{' '}
              {errors.lastName && (
                <span className={styles.warning}>
                  {errors.lastName.message}
                </span>
              )}
            </label>
            <input
              id='lastName'
              {...register('lastName', {
                required: `${t('lastNameError')}`,
              })}
            />
          </div>
          <div className={styles.control}>
            <label>
              {t('phoneNumber')}{' '}
              {errors.phoneNumber && (
                <span className={styles.warning}>
                  {errors.phoneNumber.message}
                </span>
              )}
            </label>
            <input
              id='phoneNumber'
              {...register('phoneNumber', {
                required: `${t('phoneNumberError')}`,
              })}
            />
          </div>
          <div className={styles.control}>
            <label>
              {t('country')}{' '}
              {errors.country && (
                <span className={styles.warning}>{errors.country.message}</span>
              )}
            </label>
            <input
              id='country'
              {...register('country', {
                required: `${t('countryError')}`,
              })}
            />
          </div>
          <div className={styles.control}>
            <label>
              {t('hotel')}{' '}
              {errors.hotel && (
                <span className={styles.warning}>{errors.hotel.message}</span>
              )}
            </label>
            <select
              id='hotel'
              name='hotel'
              {...register('hotel', {
                required: `${t('hotelError')}`,
              })}
            >
              <option value='Hotel1'>Hotel 1</option>
              <option value='Hotel2'>Hotel 2</option>
              <option value='Hotel3'>Hotel 3</option>
              <option value='Hotel4'>Hotel 4</option>
            </select>
          </div>
          <div className={styles.control}>
            <label>{t('stayStart')}</label>
            <Controller
              control={control}
              name='stayStart'
              defaultValue={new Date()}
              render={({ field: { value, onChange } }) => (
                <DatePicker
                  dateFormat='dd-MM-yyyy'
                  onChange={onChange}
                  selected={value}
                />
              )}
            />
          </div>
          <div className={styles.control}>
            <label>{t('stayEnd')}</label>
            <Controller
              control={control}
              name='stayEnd'
              defaultValue={new Date()}
              render={({ field: { value, onChange } }) => (
                <DatePicker
                  dateFormat='dd-MM-yyyy'
                  onChange={onChange}
                  selected={value}
                />
              )}
            />
          </div>
          <div className={styles.control}>
            <label>
              {t('guestNo')}{' '}
              {errors.guestNo && (
                <span className={styles.warning}>{errors.guestNo.message}</span>
              )}
            </label>
            <select
              id='guestNo'
              name='guestNo'
              {...register('guestNo', {
                required: `${t('guestNoError')}`,
              })}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
          <div className={styles.control}>
            <label>
              {t('roomNo')}{' '}
              {errors.roomNo && (
                <span className={styles.warning}>{errors.roomNo.message}</span>
              )}
            </label>
            <select
              id='roomNo'
              name='roomNo'
              {...register('roomNo', {
                required: `${t('roomNoError')}`,
              })}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
          <div>
            <div>Extra Costs:</div>
            <div></div>
          </div>
          <div className={styles.actions}>
            <button>{t('next')}</button>
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

export default Accommodation;
