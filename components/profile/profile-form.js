import { useRef } from 'react';
import styles from '../../styles/Auth-Form.module.css';

function ProfileForm(props) {
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;

    /* validation */

    props.onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    });
  }

  return (
    <div className={styles.container}>
      <form className={styles.auth} onSubmit={submitHandler}>
        <div className={styles.header}>
          <h1>Your Profile</h1>
        </div>
        <div className={styles.control}>
          <label htmlFor='new-password'>New Password</label>
          <input type='password' id='new-password' ref={newPasswordRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor='old-password'>Old Password</label>
          <input type='password' id='old-password' ref={oldPasswordRef} />
        </div>
        <div className={styles.actions}>
          <button type='button'>Change Password</button>
          <button type='button' className={styles.toggle}>
            Forgot password?
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
