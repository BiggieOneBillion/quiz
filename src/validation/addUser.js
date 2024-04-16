import { z } from "zod";

export const addUserSchema = z.object({
  username: z.string().min(5, { message: "Name cannot be empty" }),
  password: z
    .string()
    .min(6, { message: "Password can not be less than 6 characters" }),
});


