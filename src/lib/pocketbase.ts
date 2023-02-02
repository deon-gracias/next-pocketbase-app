import getConfig from "next/config";
import PocketBase from "pocketbase";

const config = getConfig();

export const pb = new PocketBase(config.ENV_API_URL || "http://127.0.0.1:8090");
export const usersCollection = pb.collection("users");
