import AuthForm from '../../components/auth/Auth-Form';
import { getSession } from 'next-auth/react';
import useTranslation from 'next-translate/useTranslation';

function AuthPage() {
  const { t } = useTranslation('auth');

  return (
    <AuthForm
      login={`${t('login')}`}
      emailMode={`${t('emailMode')}`}
      email={`${t('email')}`}
      signup={`${t('signup')}`}
      password={`${t('password')}`}
      create={`${t('create')}`}
      newPassword={`${t('newPassword')}`}
      notFound={`${t('notFound')}`}
      exists={`${t('exists')}`}
      incorrect={`${t('incorrect')}`}
      existing={`${t('existing')}`}
      newAccount={`${t('newAccount')}`}
      passwordError={`${t('passwordError')}`}
    />
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default AuthPage;
