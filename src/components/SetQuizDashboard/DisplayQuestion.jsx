import React from "react";
import QuestionCard from "./QuestionCard";
import { v4 } from "uuid";
import SetQuizSubmit from "./SetQuizSubmit";

const DisplayQuestion = ({ quizQuestion, setQuizQuestion }) => {
  const handleSubmitQuiz = (e) => {
    e.preventDefault();
    // Make an axios call and send the data to the backend and save it to the database.
    // Do that using axios.
  };

  const handleDeleteQuestion = (question) => {
    const result = quizQuestion.filter(el => el.question !== question)
    // console.log(result);
    setQuizQuestion(result)
  }

  // console.log(quizQuestion);

  return (
    <div className="mt-20 px-10 space-y-10">
      {/* title and description */}
      <div>
        <h3 className="font-medium text-2xl text-black mb-3">Question List</h3>
        <p className="text-sm text-slate-600 ">
          Must be between 5 to 15 questions.
        </p>
        <p className="text-sm text-slate-400 mb-1 ">
          When you have finish adding question then click submit button to save
          the quiz question.
        </p>
      </div>
      {/* Qustion List  */}
      <main className="space-y-5">
        {quizQuestion.map((question) => (
          <QuestionCard key={v4()} data={question} handleDeleteQuestion={handleDeleteQuestion}/>
        ))}
      </main>
      {/* submit btn */}

      {quizQuestion.length > 0 && (
        <SetQuizSubmit handleSubmitQuiz={handleSubmitQuiz} />    
      )}
    </div>
  );
};

export default DisplayQuestion;
