"use server"
import prismaDb from "@/lib/db";
import { TransactionType } from "@/validations";
import { revalidatePath } from "next/cache";


export const getTransactions = async () => {
   const transactions = await prismaDb.transaction.findMany({
      orderBy:{
         date: "desc"
      }
   });
   return transactions;
}

export const addTransaction =  async (values: TransactionType) => {
   const transaction = await prismaDb.transaction.create({
      data:{
         name: values.name,
         category: values.category,
         amount: parseInt(values.amount) ?? 0,
         expense: values.expense
      }
   });

   revalidatePath("/transactions");
}

export const deleteTransaction = async (id: string) => {
    await prismaDb.transaction.delete({
      where:{
         id
      }
    });
    revalidatePath("/transactions");
}

export const analitycsData = async () => {
   const testdata = await prismaDb.transaction.aggregate({
      where:{
       expense: true
      },
      _sum: {
        amount: true,
      }
    });
  console.log(testdata)
}