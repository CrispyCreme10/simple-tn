import pb from "..";
import { CategoriesResponse } from "../../../types/pocketbase-types";

export const getDbCategories = async (): Promise<CategoriesResponse[]> => {
  return await pb.collection("categories").getFullList<CategoriesResponse>();
};
