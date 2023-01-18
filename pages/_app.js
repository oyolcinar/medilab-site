import '../styles/globals.css';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { StoreProvider } from '../utils/Store';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <Layout>
          <Head>
            <title>Medilab Estetik</title>
            <meta
              name='description'
              content='As Medilab Estetik we are devoted ourselves to your self-renewal journey. We extend the latest and most effective techniques by leading surgeons and acrredited hospitals and clinics in Turkey'
            />
            <meta
              name='Keywords'
              content='Medilab Estetik, Hair Transplant, Dentistry, Check Up, Medical Tourism, Turkey, Travel, Health, Beauty, Self-Renewal '
            />
            <meta
              name='viewport'
              content='initial-scale=1.0, width=device-width'
            />
          </Head>
          <PayPalScriptProvider deferLoading={true}>
            <Component {...pageProps} />
          </PayPalScriptProvider>
        </Layout>
      </StoreProvider>
    </SessionProvider>
  );
}

export default MyApp;
