import pb from "..";
import { UsersResponse } from "../../../types/pocketbase-types";

export const getDbUser = async (
  email: string,
  password: string
): Promise<UsersResponse> => {
  return (await pb
    .collection("users")
    .authWithPassword(email, password)) as unknown as Promise<UsersResponse>;
};
