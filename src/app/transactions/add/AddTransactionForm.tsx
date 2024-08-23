"use client";

import {
  DateInput,
  Input,
  NumberInput,
  SelectInput,
  SubmitInput,
} from "@/components/input";
import "@/components/input/input.scss";
import {
  AddTransactionFormType,
  AddTransactionSchema,
} from "@/models/AddTransaction";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

const AddTransactionForm = ({
  accountNames,
  categoryNames,
}: {
  accountNames: string[];
  categoryNames: string[];
}) => {
  const methods = useForm<AddTransactionFormType>({
    resolver: zodResolver(AddTransactionSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const onSubmit: SubmitHandler<AddTransactionFormType> = (data) => {
    console.log(data);
    reset();
  };

  const formatOptions = (
    data: string[]
  ): {
    value: string;
    label: string;
  }[] => {
    return data.map((item) => ({
      value: item,
      label: item,
    }));
  };

  const accountNameOptions = formatOptions(accountNames);
  const categoryOptions = formatOptions(categoryNames);

  console.log(accountNameOptions);
  console.log(categoryOptions);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <SelectInput
            name={"accountName"}
            label="Select Account"
            errors={errors}
            options={accountNameOptions}
          />
          <SelectInput
            name={"category"}
            label="Select Category"
            errors={errors}
            options={categoryOptions}
          />
          <DateInput name={"date"} label="Date" errors={errors} />
          <Input name={"description"} label="Description" errors={errors} />
          <NumberInput name={"amount"} label="Amount" errors={errors} />
          <Input name={"notes"} label="Notes" errors={errors} />
        </div>
        <div className="flex justify-center">
          <SubmitInput />
        </div>
      </form>
    </FormProvider>
  );
};

export default AddTransactionForm;
