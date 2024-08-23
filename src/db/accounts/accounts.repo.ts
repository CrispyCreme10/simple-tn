import { ListResult } from "pocketbase";
import pb from "..";
import { AccountsResponse } from "../../../types/pocketbase-types";

export const getDbUserAccounts = async (
  userId: string
): Promise<ListResult<AccountsResponse>> => {
  return await pb.collection("accounts").getList<AccountsResponse>(1, 20, {
    filter: pb.filter("user_id = {:userId}", { userId }),
  });
};
