import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { set } from "zod";
import { LuTrash } from "react-icons/lu";
import { zodResolver } from "@hookform/resolvers/zod";
import { addUserSchema } from "../../../validation/addUser";

const AuthenticateUser = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(addUserSchema),
  });

  const [addStudent, setAddStudent] = useState([]);

  //   {
  //     username:'sam',
  //     password: 'sam09',
  //   }

  const handleAddStudent = (student) => {
    setAddStudent([...addStudent, student]);
    reset();
  };

  const handleDelete = (username) => {
    const result = addStudent.filter(
      (student) => student.username !== username
    );
    setAddStudent(result);
  };

  const InputContainer = ({ label, register, name, type = "text" }) => (
    <div className="flex flex-col gap-2 text-black">
      <label className="capitalize text-sm font-semibold">{label}:</label>
      <input
        type={type}
        className="px-4 w-full py-2 text-base border rounded-md text-black bg-white"
        {...register(name)}
      />
      <span className="h-4 text-red-600 text-sm">
        {errors[name] && errors[name].message}
      </span>
    </div>
  );
  

  return (
    <div className=" space-y-10">
      <header className=" lg:w-[500px]">
        <h3 className="font-medium text-2xl text-black mb-5">
          Add Authenticated User
        </h3>
        <p className="text-sm text-slate-600 mb-2 font-medium">
          Use the form below to add students
        </p>
        <p className="text-sm text-slate-500 mb-2 hover:underline hover:text-slate-950 transition-color duration-300">
          <span className="font-medium text-black">Note : </span>
          When you finish adding the students, click the register button to
          register the list of student.
        </p>
      </header>
      {/* ADD USER FORM */}
      <form className="space-y-3 lg:w-[600px] bg-[#f1f1f1] py-8 px-5 rounded-md">
        <InputContainer label={"Name"} name={"username"} register={register} />
        <InputContainer
          label={"Password"}
          name={"password"}
          register={register}
        />
        <div className="flex items-center justify-between">
          <button
            onClick={handleSubmit(handleAddStudent)}
            className="text-base font-medium text-white rounded-md bg-blue-700 px-6 py-2"
          >
            Save
          </button>
          <button className="text-base font-medium text-white rounded-md bg-green-700 px-6 py-2">
            Register Users
          </button>
        </div>
      </form>
      {/* Display Users */}
      <div className="space-y-5">
        <h3 className="font-medium text-lg text-slate-600">
          Added Student List
        </h3>
        {/* users container */}
        <div className="space-y-4">
          {addStudent.map((student) => (
            <div className="relative py-4 border rounded-md px-4 min-w-[200px] max-w-[500px] hover:border-slate-600 duration-300 ease-in-out transition-color">
              <p className="flex items-center justify-between text-slate-900 text-sm font-semibold">
                <span>Name: {student.username}</span>
                <span>Password: {student.password}</span>
              </p>
              <button
                onClick={() => handleDelete(student.username)}
                className="absolute top-[-12px] grid place-content-center right-[-12px] h-6 w-6 rounded-full bg-white cursor-pointer border hover:border-red-500 active:scale-[0.96] duration-300 ease-in-out transition-transform transition-color"
              >
                <span className="active:scale-[0.96] duration-200 transition-transform">
                  <LuTrash />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthenticateUser;
