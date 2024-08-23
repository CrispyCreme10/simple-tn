import { z } from "zod";

export const AddTransactionSchema = z.object({
  accountName: z.string().min(1, { message: "Account must be selected" }),
  category: z.string().min(1, { message: "Category must be selected" }),
  date: z.date({
    required_error: "Date is required",
    invalid_type_error: "Format invalid",
  }),
  description: z
    .string()
    .trim()
    .min(1, { message: "Description is required. Required min length: 1" }),
  amount: z
    .number({ required_error: "Amount is required" })
    .positive()
    .max(Number.MAX_SAFE_INTEGER),
  notes: z.string().trim().optional(),
});

export type AddTransactionFormType = z.infer<typeof AddTransactionSchema>;

export type AddTransactionModel = {
  accountName: string;
  category: string;
  date: Date;
  description: string;
  amount: number;
  notes: string;
};
