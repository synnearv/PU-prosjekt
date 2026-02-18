import { browser } from '$app/environment'
import type { User } from './types';
import { goto } from '$app/navigation';

const STORAGE_KEY = 'user_data';

const data = browser ? localStorage.getItem(STORAGE_KEY) : null;
const initialUser = data ? JSON.parse(data) : null;

export const auth = $state({
  user: initialUser as User | null
});

export function setLoggedInUser(user: User | null) {
  auth.user = user;
  sync();
}

export function setAvatarUrl(url: string) {
  if (auth.user) {
    auth.user.avatar_url = url;
    sync();
  }
}

export async function signOut() {
  auth.user = null;
  sync();
  goto("/login");
}

function sync() {
  if (!browser) return;

  if (auth.user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(auth.user));
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
}
