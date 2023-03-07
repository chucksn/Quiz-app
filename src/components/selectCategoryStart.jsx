import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/category-slice";
import { setQuizStart } from "../redux/slices/startQuiz-slice";
import { setDifficulty } from "../redux/slices/difficulty-slice";

const category_options = [
  { value: 9, label: "General Knowledge" },
  { value: 17, label: "Science and Nature" },
  { value: 18, label: "Computers" },
  { value: 19, label: "Mathematics" },
  { value: 20, label: "Mythology" },
  { value: 22, label: "Geography" },
  { value: 27, label: "Animals" },
  { value: 23, label: "History" },
];

const difficulty_options = [
  { value: "easy", label: "easy" },
  { value: "medium", label: "medium" },
  { value: "hard", label: "hard" },
];

function SelectCategoryStart() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const quizHasStarted = useSelector((state) => state.quizHasStarted);
  const category = useSelector((state) => state.category);
  const difficulty = useSelector((state) => state.difficulty);

  const dispatch = useDispatch();

  useEffect(() => {
    selectedCategory && dispatch(setCategory(selectedCategory.value));
  }, [selectedCategory]);

  useEffect(() => {
    selectedDifficulty && dispatch(setDifficulty(selectedDifficulty.value));
  }, [selectedDifficulty]);

  const handleStartClick = () => {
    category && difficulty && dispatch(setQuizStart());
  };

  return (
    <>
      {!quizHasStarted && (
        <div className=" w-4/5 md:w-3/5 lg:w-1/2 bg-gray-300 p-4 rounded-lg flex flex-col justify-between ">
          <div className="border-b-2 border-zinc-400/20 m-4 pb-2">
            <span className="quiz-title block font-ubuntu font-medium text-zinc-900/60 text-center text-xl md:text-2xl lg:text-3xl ">
              BRAINER QUIZ
            </span>
          </div>
          <div className="flex flex-col justify-between items-center">
            <Select
              className="category-select w-4/5 lg:w-1/2 md:text-xl m-8"
              defaultValue={selectedCategory}
              onChange={setSelectedCategory}
              options={category_options}
              placeholder="Select Category"
            />
            <Select
              className="difficulty-select w-4/5 lg:w-1/2 md:text-xl m-8"
              defaultValue={selectedDifficulty}
              onChange={setSelectedDifficulty}
              options={difficulty_options}
              placeholder="Select Difficulty"
            />
            <button
              className="p-2 bg-sky-600 text-white rounded-lg lg:hover:bg-sky-500 m-2"
              onClick={handleStartClick}
            >
              START QUIZ
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SelectCategoryStart;
