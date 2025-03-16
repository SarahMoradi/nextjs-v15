
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
  
export const config = {
  matcher: '/:path*' // Apply this middleware to all paths
};