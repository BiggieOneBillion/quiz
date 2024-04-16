import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import Dashboard from "./components/UserDashboard/Dashboard";
import Intro from "./components/Intro";
import SetQuiz from "./components/SetQuizDashboard/SetQuiz";
import SetQuizLayout from "./components/SetQuizDashboard/Layout";
import ViewQuiz from "./components/SetQuizDashboard/ViewQuiz/ViewQuiz";
import Users from "./components/SetQuizDashboard/Users/Users";
import SetQuestions from "./components/SetQuizDashboard/SetQuestion/SetQuestions";
import SetQuestionLayout from "./components/SetQuizDashboard/SetQuestion/SetQuestionLayout";
import TopicDetails from "./components/SetQuizDashboard/SetQuestion/TopicDetails";
import AuthenticateUser from "./components/SetQuizDashboard/SetQuestion/AuthenticateUser";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={<Home />} />
    <Route path="intro" element={<Intro />}/>
    <Route path="set-quiz" element={<SetQuizLayout />}>
       <Route index element={<SetQuiz />} /> 
       <Route path="view-quizes" element={<ViewQuiz/>}/>
       <Route path="users" element={<Users/>}/>
       <Route path="set-question" element={<SetQuestionLayout />}>
         <Route index element={<SetQuestions />} />
         <Route path=":topic" element={<TopicDetails />} />
         <Route path="/set-quiz/set-question/authenticate-user" element={<AuthenticateUser />} />
       </Route>
    </Route>
    <Route path="dashboard" element={<Dashboard />}/>
  </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
