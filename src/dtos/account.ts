export enum AccountType {
  Checking = "checking",
  Savings = "savings",
  CreditCard = "credit_card",
}

export type AccountListType = {
  id: string;
  name: string;
  accountType: AccountType;
};

export type AccountDetailsType = {
  currencyCode: string;
} & AccountListType;
