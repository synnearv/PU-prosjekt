import { auth } from '$lib/currentUser.svelte';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => {
  return {
    user: auth.user
  };
};
