import React from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

const SetQuestions = () => {
  const sampleData = [
    {
      topic: "Life Mystries",
      question: "what is my version of life?",
      options: ["philosophy", "pyschology", "history", "futuristic"],
      answer: "C",
    },
  ];
  return (
    <div className="space-y-20">
      <header className=" lg:w-[500px] ">
        <h3 className="font-medium text-2xl text-black mb-5">Take Quiz</h3>
        <p className="text-sm text-slate-600 mb-2 font-medium">
          Below is the list of the quiz you have set.
        </p>
        <p className="text-sm text-slate-500 mb-2 hover:underline hover:text-slate-950 transition-color duration-300 ">
          <span className="font-medium text-black">Note : </span>Click on the
          card and set if the user needs to be authenticated or not. Which ever
          you choose, it would generate a unique url for your students to visit
          to take the quiz.
        </p>
      </header>
      {/* quiz cards */}
      <main className="grid grid-cols-3 gap-10">
        {sampleData.map((datum) => (
          <div key={v4()} className="py-5 px-5 rounded-md border space-y-5 hover:border-slate-600 transition-colors duration-300">
            {/* title and info button */}
            <div className="flex justify-between items-center pb-5 border-b">
              <h3 className="text-xl font-semibold text-slate-800">
                Life Lessons
              </h3>
              <Link
              to={'life lesson'}
              className="text-sm font-semibold text-slate-600 border border-slate-300 rounded-mdy px-2 py-1 hover:border-slate-600 hover:text-slate-800 active:scale-95 transition-all duration-300 ">
                see quiz
              </Link>
            </div>
            {/* user access level */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-slate-600">
                User Access Level
              </h3>
              <div className="btn-container flex items-center gap-5">
                <Link to={'/set-quiz/set-question/authenticate-user'} className="text-xs font-medium border py-1 px-2 border-slate-500 uppercase hover:scale-[0.98] active:scale-95 transition-transform duration-300 ease-in-out">
                  Authenticate User
                </Link>
                <button className="text-xs font-medium border py-1 px-2 border-slate-500 uppercase hover:scale-[0.98] active:scale-95 transition-transform duration-300 ease-in-out">
                  Free User
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default SetQuestions;
