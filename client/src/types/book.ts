import { z } from "zod";

export type Book = {
  id: string;
  title: string;
  author: string;
  language: string;
  genres: string;
  published: string;
  descriptions: string;
};

export const BookSchema = z.object({
  title: z.string().min(3, { message: "Title is Required" }),
  author: z.string().min(3, { message: "Author name is Required" }),
  language: z.string().min(3, { message: "Language is Required" }),
  publishedDate: z.string().optional(),
  publishedBy: z.string(),
  description: z.string().optional(),
});

export type BookFormFields = z.infer<typeof BookSchema>;
