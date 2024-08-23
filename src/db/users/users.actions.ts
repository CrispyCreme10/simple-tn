import { UsersResponse } from "../../../types/pocketbase-types";

export const getUser = async (
  email: string,
  password: string
): Promise<UsersResponse> => {
  return await getUser(email, password);
};
