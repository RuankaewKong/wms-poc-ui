import { Button } from '@nextui-org/button';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import React from 'react';

type Props = {};

export default function SignIn({}: Props) {
  const searchParams = useSearchParams();

  return (
    <>
      <Button
        onClick={() =>
          signIn('google', {
            callbackUrl: searchParams.get('callbackUrl') || '/',
          })
        }
      >
        Sign In
      </Button>
    </>
  );
}
