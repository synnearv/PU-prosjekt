import { redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/auth'; // Or wherever your demo variable lives

export const load = async () => {
  // If the global demo variable is false, stop everything and kick them to login
  if (!auth.isLoggedIn) {
    throw redirect(303, '/login');
  }

  // If we reach here, they are logged in.
  return {
    user: "Demo User"
  };
};
