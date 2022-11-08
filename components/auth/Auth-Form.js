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

function AuthForm({
  login,
  emailMode,
  email,
  signup,
  password,
  create,
  newPassword,
  notFound,
  exists,
  incorrect,
  existing,
  newAccount,
}) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isForgot, setIsForgot] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [loginResError, setLoginResError] = useState();
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
    setIsForgot(false);
    setIsPasswordValid(true);
    setLoginResError('');
  }

  function switchIsForgotHandler() {
    setIsForgot((prevState) => !prevState);
    setIsPasswordValid(true);
    setLoginResError('');
  }

  function redirect() {
    router.push('/');
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = isForgot ? ' ' : passwordInputRef.current.value;

    if (isForgot) {
      signIn('email', { email: enteredEmail });
    }

    if (enteredPassword.length < 8) {
      setIsPasswordValid(false);
      return;
    }

    setIsPasswordValid(true);

    if (isLogin) {
      try {
        const result = await signIn('credentials', {
          redirect: false,
          email: enteredEmail,
          password: enteredPassword,
        });

        if (result.error) {
          setLoginResError(result.error);
        } else {
          redirect();
        }
      } catch (error) {
        setLoginResError(error.message);
      }
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        console.log(result);
      } catch (error) {
        setLoginResError(error.message);
      }
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.auth}>
        <div className={styles.header}>
          <h1>
            {isForgot ? `${emailMode}` : isLogin ? `${login}` : `${signup}`}
          </h1>
        </div>
        <form onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor='email'>
              {email}
              {isLogin && !isForgot && loginResError === `${notFound}` && (
                <span className={styles.warning}>{loginResError}</span>
              )}
              {!isLogin && !isForgot && loginResError === `${exists}` && (
                <span className={styles.warning}>{loginResError}</span>
              )}
            </label>
            <input type='email' id='email' required ref={emailInputRef} />
          </div>
          {!isForgot && (
            <div className={styles.control}>
              <label htmlFor='password'>
                {password}
                {!isPasswordValid && !isForgot && (
                  <span className={styles.warning}>
                    The password must be at least 8 characters.
                  </span>
                )}
                {isLogin && loginResError === `${incorrect}` && (
                  <span className={styles.warning}>{loginResError}</span>
                )}
              </label>
              <input
                type='password'
                id='password'
                required
                ref={passwordInputRef}
              />
            </div>
          )}
          <div className={styles.actions}>
            <button>
              {isForgot ? `${newPassword}` : isLogin ? `${login}` : `${create}`}
            </button>
            {isLogin && !isForgot && (
              <button
                type='button'
                className={styles.toggle}
                onClick={setIsForgot}
              >
                Forgot password?
              </button>
            )}
            {isForgot && (
              <button
                type='button'
                className={styles.toggle}
                onClick={switchIsForgotHandler}
              >
                Login with existing account
              </button>
            )}
            <button
              type='button'
              className={styles.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? `${newAccount}` : `${existing}`}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AuthForm;
