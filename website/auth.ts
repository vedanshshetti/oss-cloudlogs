import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import NeonAdapter from "@auth/neon-adapter";
import { Pool } from "@neondatabase/serverless";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: NeonAdapter(
    new Pool({ connectionString: process.env.DATABASE_URL }),
  ),
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
      allowDangerousEmailAccountLinking: true
    }),
  ],
  secret: process.env.AUTH_SECRET,
});
