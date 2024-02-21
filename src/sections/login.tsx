'use client';

import SignIn from '@/components/signin';
import Signout from '@/components/signout';
import { useSession } from 'next-auth/react';
import React from 'react';

type Props = {};

export default function LoginSection({}: Props) {
  const session = useSession();
  console.log('session from component:', session);

  return <>{session.data ? <Signout /> : <SignIn />}</>;
}
