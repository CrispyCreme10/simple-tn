import { getUserAccounts } from "@/db/accounts/accounts.actions";
import { getCategories } from "@/db/categories/categories.actions";
import { CategoryListType } from "@/dtos/category";
import { AccountsResponse } from "../../../../types/pocketbase-types";
import AddTransactionForm from "./AddTransactionForm";

const AddTransactionsPage = async () => {
  const accounts = await getUserAccounts("ts6sxemtcqnx7v1");
  const categories = await getCategories();

  return (
    <main>
      <h1>Add Transaction</h1>
      <AddTransactionForm
        accountNames={accounts.items.map(
          (account: AccountsResponse) => account.name
        )}
        categoryNames={categories.map(
          (category: CategoryListType) => category.name
        )}
      />
    </main>
  );
};

export default AddTransactionsPage;
