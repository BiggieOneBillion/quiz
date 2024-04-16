import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { setTopicSchema } from "../../validation/addQuestion";

const InputContainer = ({ label, register, name, errors }) => (
  <div className="flex flex-col gap-2 text-black">
    <label className="capitalize text-sm">{label}</label>
    <input
      type={"text"}
      className="px-4 w-full py-2 text-base border rounded-md text-black bg-white"
      {...register(name)}
    />
    <span className="h-4 text-red-600 text-sm">
      {errors[name] && errors[name].message}
    </span>
  </div>
);

const SetQuizSubmit = ({ handleSubmitQuiz }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(setTopicSchema),
  });
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
          <button
            className="w-full bg-black py-3 text-lg font-medium rounded-md text-white"
          >
            Submit Quiz
          </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-[rgba(0,0,0,0.5)] data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-fit translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
           Set Topic 
          </Dialog.Title>

          <div className="lg:w-[500px] py-10 rounded-md bg-white text">
            <InputContainer
              label={"Topic"}
              register={register}
              name={"topic"}
              errors={errors}
            />
            <button
              onClick={(e) => handleSubmitQuiz(e)}
              className="w-full bg-black py-3 text-lg font-medium rounded-md text-white"
            >
              Submit Quiz
            </button>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default SetQuizSubmit;
