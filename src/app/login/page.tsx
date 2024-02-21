'use client';

import LoginSection from '@/sections/login';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

type Props = {};

export default function Login({}: Props) {
  return (
    <SessionProvider basePath="/api/auth">
      <LoginSection />
    </SessionProvider>
  );
}
