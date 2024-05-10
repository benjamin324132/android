import * as z from "zod";

export const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email().min(2),
});

export const movieSchema = z.object({
  name: z.string().min(1).max(70),
  plot: z.string().min(1).max(300),
  year: z.string().length(4),
  rating: z.string().min(1),
  img: z.string().url().min(5),
  url: z.string(),
});

export const transactionSchema = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
  amount: z.string(),
  expense: z.boolean(),
});

export type TransactionType = z.infer<typeof transactionSchema>;