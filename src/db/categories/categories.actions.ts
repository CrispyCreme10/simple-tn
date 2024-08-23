import { CategoriesResponse } from "../../../types/pocketbase-types";
import { getDbCategories } from "./categories.repo";

export const getCategories = async (): Promise<CategoriesResponse[]> => {
  return await getDbCategories();
};
