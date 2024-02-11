import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

export async function requireAuthentication(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
