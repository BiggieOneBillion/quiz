import React, { useState } from "react";
import AddQuestion from "./AddQuestion";
import DisplayQuestion from "./DisplayQuestion";

const SetQuiz = () => {
  const [quizQuestion, setQuizQuestion] = useState([]);
  // console.log(quizQuestion);
  return (
    <section className="h-screen grid grid-cols-2">
      {/* Add question */}
      <div className="border-r border-blue-600y">
         <AddQuestion quizQuestion={quizQuestion} setQuizQuestion={setQuizQuestion}/>
      </div>
      {/* Add question */}
      <div className="border-r  bg-[#F1F1F1]">
         <DisplayQuestion quizQuestion={quizQuestion} setQuizQuestion={setQuizQuestion}/>
      </div>
    </section>
  );
};

export default SetQuiz;
