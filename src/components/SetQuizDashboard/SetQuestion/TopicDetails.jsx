import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import QuestionCard from "../QuestionCard";
import { FaArrowLeftLong } from "react-icons/fa6";

const TopicDetails = () => {
  const params = useParams();
  const navigate = useNavigate()
  // get the params.topic
  // use it to fetch the data from the database using tanstack query and axios
  // if any error handle the error
  // if topic doesn't exist in database then we send an error
  // when successful we send back the data and display it

  // replace this data for actual data later---!!!
  const sampleData = [
    {
      topic: "Life Mystries",
      question: "what is my version of life?",
      options: ["philosophy", "pyschology", "history", "futuristic"],
      answer: "C",
    },
  ];

  return (
    <div className="w-full h-full space-y-10">
      <div className="space-y-5">
        <div onClick={() => navigate(-1)} className="text-[13px] flex items-center gap-2 py-1 px-4 border text-slate-700 font-medium w-fit cursor-pointer hover:border-slate-700 hover:scale-[0.98] active:scale-95 transition-all ease-in-out duration-200 ">
          <span>
            <FaArrowLeftLong />
          </span>
          <span>Go Back</span>
        </div>
        <h1 className="font-semibold text-2xl text-black capitalize">
          Topic : <span className="font-medium">{params.topic}</span>
        </h1>
      </div>
      <div className="lg:w-[600px]">
        {sampleData.map((datum) => (
          <QuestionCard data={datum} />
        ))}
      </div>
    </div>
  );
};

export default TopicDetails;
