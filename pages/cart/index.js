import { getSession } from 'next-auth/react';

const Cart = () => {
  return (
    <div>
      <div>
        <h2>Cart</h2>
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

export default Cart;
