"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { AddTransactionModel } from "../../../models/AddTransaction";

const ImportTransactions = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [transactions, setTransactions] = useState<AddTransactionModel[]>([]);

  const handleBtnClick = () => {
    if (!fileInputRef.current) return;

    fileInputRef.current.value = "";

    fileInputRef.current.click();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      console.log(content);
      const lines = content.split("\n");
      if (lines.length < 2) {
        alert("Invalid file format");
        return;
      }

      const headers = lines[0].split(",");
      if (headers.length !== 6) {
        alert("Invalid file format");
        return;
      }

      const transactions = lines.slice(1, -1).map((line) => {
        const [accountName, category, date, description, amount, notes] =
          line.split(",");
        return {
          accountName,
          category,
          date: new Date(date),
          description,
          amount: Number(amount),
          notes,
        };
      });

      console.log(transactions);
      setTransactions(transactions);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <h1>Import Transactions</h1>
      <p>Upload a CSV file with your transactions.</p>
      <input
        ref={fileInputRef}
        hidden
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
      />
      <Button onClick={handleBtnClick}>Import</Button>
      <table>
        <thead>
          <tr>
            <th>Account Name</th>
            <th>Category</th>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.accountName}</td>
              <td>{transaction.category}</td>
              <td>{transaction.date.toLocaleDateString()}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ImportTransactions;
