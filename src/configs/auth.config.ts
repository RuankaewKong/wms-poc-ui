import { AuthOptions } from 'next-auth';
import Google from 'next-auth/providers/google';

export const authConfig: AuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      // console.log('callback jwt account:', account);
      // console.log('callback jwt token:', token);

      if (account) {
        token.staffProfile = account.staffProfile;
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      // console.log('callback session session:', session);
      // console.log('callback session token:', token);
      // session.accessToken = token.accessToken;

      return {
        ...session,
        accessToken: token.accessToken,
        staffProfile: token.staffProfile,
      };
    },
    async signIn({ account }) {
      console.log(account);

      if (!account) return false;
      const response = await fetch(
        `${process.env.WMS_SERVICE_API_BASE_URL}/api/v1/auth/exchange-token/google`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            idToken: account.id_token,
          }),
        }
      );
      if (!response.ok) return false;

      return true;
    },
  },
};
