import getConfig from "next/config";
import { pb, usersCollection } from "./pocketbase";

const { publicRuntimeConfig: config } = getConfig();

export async function signInWithEmail(email: string, password: string) {
  return await usersCollection.authWithPassword(email, password);
}

export function logout() {
  pb.authStore.clear();
}
