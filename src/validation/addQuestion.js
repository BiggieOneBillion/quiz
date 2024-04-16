import { z } from "zod";

export const addQuestionSchema = z.object({
  question: z.string().min(1, { message: "Question cannot be empty" }),
  optionA: z.string().min(1, { message: "option cannot be empty" }),
  optionB: z.string().min(1, { message: "option cannot be empty" }),
  optionC: z.string().min(1, { message: "option cannot be empty" }),
  optionD: z.string().min(1, { message: "option cannot be empty" }),
  answer: z
    .string()
    .min(1, { message: "answer cannot be empty" })
    .refine((val) => ["A", "B", "C", "D"].includes(val.toUpperCase()), {
      message: "Field only accepts A,B,C,D",
    }),
});

export const setTopicSchema = z.object({
  topic: z.string().min(1, { message: "Topic cannot be empty" }),
})
