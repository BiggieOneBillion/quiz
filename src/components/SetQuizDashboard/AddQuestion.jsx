import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addQuestionSchema } from "../../validation/addQuestion";

const AddQuestion = ({ quizQuestion, setQuizQuestion }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(addQuestionSchema),
  });

  const [alreadyExits, setAlreadyExist] = useState(false);

  const onSubmit = (value) => {
    // console.log(value);

    const inputValue = {
      question: value.question,
      options: [value.optionA, value.optionB, value.optionC, value.optionD],
      answer: value.answer,
    };

    console.log(inputValue);

    const result = quizQuestion.filter(
      (el) => el.question === inputValue.question
    );

    if (result.length === 0) {
      setQuizQuestion([inputValue, ...quizQuestion]);
      reset()
      return
    }
    setAlreadyExist(true)
  };

  const InputContainer = ({ label, register, name }) => (
    <div className="flex flex-col gap-2 text-black">
      <label className="capitalize text-sm font-semibold">{label}:</label>
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

  const TextAreaContainer = ({ label, register, name }) => (
    <div className="flex flex-col gap-2 text-black">
      <label className="capitalize text-sm font-semibold">{label}:</label>
      <textarea
        rows={1}
        className="px-4 w-full py-2 text-base border rounded-md text-black bg-white"
        {...register(name)}
      ></textarea>
      <span className="h-4 text-red-600 text-sm">
        {errors[name] && errors[name].message}
      </span>
      {/* <span className="h-4  text-red-600 text-sm">Hello boss</span> */}
    </div>
  );

  return (
    <div className="mt-20 px-10 space-y-10">
      <h3 className="font-medium text-2xl text-black">Add Question</h3>
      <form className="flex bg-[#F1F1F1] flex-col gap-5 py-10 px-10 border border-[rgba(0,0,0,0.3)]">
        <span
          className={`h-6  ${
            alreadyExits ? "bg-red-400 visible" : "bg-white invisible"
          } font-semibold  text-red-900 text-sm w-full flex items-center justify-center`}
        >
          {alreadyExits && "Question Already Exist!!"}
        </span>

        <TextAreaContainer
          label={"Question"}
          name={"question"}
          register={register}
        />
        <div className="grid grid-cols-2 gap-4">
          <InputContainer
            label={"option-A"}
            register={register}
            name={"optionA"}
          />
          <InputContainer
            label={"option-B"}
            register={register}
            name={"optionB"}
          />
          <InputContainer
            label={"option-C"}
            register={register}
            name={"optionC"}
          />
          <InputContainer
            label={"option-D"}
            register={register}
            name={"optionD"}
          />
        </div>
        <InputContainer
          label={"Correct Answer (A, B, C OR D)"}
          register={register}
          name={"answer"}
        />

        <button
          className="py-3 px-10 mt-5 rounded-md bg-black text-white font-medium"
          onClick={handleSubmit(onSubmit)}
        >
          Set Question
        </button>
      </form>
    </div>
  );
};

export default AddQuestion;
