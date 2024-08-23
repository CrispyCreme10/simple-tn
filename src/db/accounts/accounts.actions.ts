import { ListResult } from "pocketbase";
import { AccountsResponse } from "../../../types/pocketbase-types";
import { getDbUserAccounts } from "./accounts.repo";

export const getUserAccounts = async (
  userId: string
): Promise<ListResult<AccountsResponse>> => {
  return await getDbUserAccounts(userId);
};
