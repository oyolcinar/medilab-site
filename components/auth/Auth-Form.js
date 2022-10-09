import { useState, useRef } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import styles from '../../styles/Auth-Form.module.css';
import { redirect } from 'next/dist/server/api-utils';

async function createUser(email, password) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
  redirect();
  return data;
}

function AuthForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  function redirect() {
    router.push('/');
  }
  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    /* validation */

    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      redirect();
      console.log(result);
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.auth}>
        <div className={styles.header}>
          <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        </div>
        <form onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' required ref={emailInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={styles.actions}>
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
            <button
              type='button'
              className={styles.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AuthForm;
