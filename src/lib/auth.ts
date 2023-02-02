import getConfig from "next/config";
import { pb, usersCollection } from "./pocketbase";

const { publicRuntimeConfig: config } = getConfig();

export async function signInWithEmail(email: string, password: string) {
  return await usersCollection.authWithPassword(email, password);
}

export async function registerWithEmail(
  username: string,
  email: string,
  password: string
) {
  return await pb
    .collection("users")
    .create({ username, email, password, passwordConfirm: password });
}

export function logout() {
  pb.authStore.clear();
}
