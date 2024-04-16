import React from "react";
import { v4 } from "uuid";
import { LuTrash } from "react-icons/lu";
import { AiOutlineEdit } from "react-icons/ai";
import DeleteDialog from "./DeleteDialog";
import { Tooltip } from "@radix-ui/react-tooltip";

const QuestionCard = ({ data, handleDeleteQuestion = null }) => {
  const optionLabel = ["A", "B", "C", "D"];
  return (
    <div className="space-y-3 py-5 px-5 border w-full bg-white relative">
      <div className="flex items-center gap-2">
        <h3 className="text-base text-black font-medium capitalize">
          Question : {data.question.replaceAll("?", "")}?
        </h3>
        {/* <Tooltip content="Edit question">
          <button
           onClick={() => handleDeleteQuestion(data.question)}
            className=" px-2 py-1 bg-blue-400y flex items-center justify-center gap-2 mr-10 active:scale-95 transition-all duration-300 ease-in-out "
          >
            <AiOutlineEdit />
          </button>
        </Tooltip> */}
      </div>
      {data.options.map((opt, i) => (
        <div
          key={v4()}
          className="text-black flex items-center justify-start gap-2"
        >
          <span className="inline-block ">{optionLabel[i]}.</span>
          <span className="text-sm font-medium">{opt}</span>
        </div>
      ))}
      <div className="text-black flex items-center gap-2 text-sm">
        <span className="inline-block px-2 py-1 bg-black text-white">
          Answer
        </span>
        <span className="font-medium uppercase">{data.answer}</span>
      </div>
      {handleDeleteQuestion !== null && (
        <div className="absolute top-[-25px] right-[-20px]">
          <DeleteDialog deleteFn={() => handleDeleteQuestion(data.question)} />
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
