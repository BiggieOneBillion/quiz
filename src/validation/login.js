import { z } from "zod";

export const EmailSchema = z.object({
  email: z.string().email().min(5, { message: "Email cannot be empty" }),
});

export const PasswordSchema = z.string().min(6, { message: "Password can not be less than 6 characters" });