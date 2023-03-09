import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { setFirstPopup_hidden } from "../redux/slices/firstPopup-slice";
import { setCategory } from "../redux/slices/category-slice";
import { setQuizStarted } from "../redux/slices/startQuiz-slice";
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
  const firstPopup = useSelector((state) => state.firstPopup);
  const category = useSelector((state) => state.category);
  const difficulty = useSelector((state) => state.difficulty);
  const [noCategorySelected, setNoCategorySelected] = useState(true);
  const [noDifficultySelected, setNoDifficultySelected] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    selectedCategory && dispatch(setCategory(selectedCategory.value));
  }, [selectedCategory]);

  useEffect(() => {
    selectedDifficulty && dispatch(setDifficulty(selectedDifficulty.value));
  }, [selectedDifficulty]);

  const handleStartClick = () => {
    category &&
      difficulty &&
      dispatch(setQuizStarted()) &&
      dispatch(setFirstPopup_hidden());
    if (!category) setNoCategorySelected(false);
    if (!difficulty) setNoDifficultySelected(false);
  };

  const handleMenuOpen = () => {
    setNoCategorySelected(true);
    setNoDifficultySelected(true);
  };

  return (
    <>
      {firstPopup && (
        <div className="quiz-select-category w-4/5 md:w-3/5 lg:w-1/2 bg-gray-300 p-4 rounded-lg flex flex-col justify-between ">
          <div className="border-b-2 border-zinc-400/20 m-4 pb-2">
            <span className="quiz-title block font-ubuntu font-medium text-zinc-800/70 text-center text-xl md:text-2xl lg:text-3xl ">
              BRAINER QUIZ
            </span>
          </div>
          <div className="flex flex-col justify-between items-center">
            <div
              className={` select-category-container w-4/5 lg:w-1/2 m-8 rounded-sm ${
                noCategorySelected ? "" : "shadow-s2-red"
              }`}
            >
              <Select
                className="category-select  md:text-xl "
                defaultValue={selectedCategory}
                onChange={setSelectedCategory}
                options={category_options}
                placeholder="Select Category"
                onMenuOpen={handleMenuOpen}
              />
            </div>
            <div
              className={` select-difficulty-container w-4/5 lg:w-1/2 m-8 rounded-sm ${
                noDifficultySelected ? "" : "shadow-s2-red"
              }`}
            >
              <Select
                className="difficulty-select md:text-xl"
                defaultValue={selectedDifficulty}
                onChange={setSelectedDifficulty}
                options={difficulty_options}
                placeholder="Select Difficulty"
                onMenuOpen={handleMenuOpen}
              />
            </div>
            <button
              className="p-2 bg-sky-700 text-white rounded-lg lg:hover:bg-sky-600 m-2"
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
