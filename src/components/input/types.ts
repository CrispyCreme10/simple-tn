import { FieldErrors, FieldName } from "react-hook-form";
import { AddTransactionFormType } from "@/models/AddTransaction";

export interface InputErrorProps {
  name: FieldName<AddTransactionFormType>;
  errors: FieldErrors<AddTransactionFormType>;
}

export interface InputProps extends InputErrorProps {
  label: string;
  type?: "text" | "email" | "time";
  placeholder?: string;
}

export interface SelectProps extends InputProps {
  options: {
    value: string;
    label: string;
  }[];
}

export interface ReactSelectProps extends SelectProps {
  isMulti: boolean;
}
