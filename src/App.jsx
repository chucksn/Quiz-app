import SelectCategoryStart from "./components/selectCategoryStart";
import QuizInstructions from "./components/quiz-instructions";
import QuizMain from "./components/quiz-main";
import QuizScore from "./components/quiz-score";

function App() {
  return (
    <div className=" flex justify-center items-center min-h-screen bg-slate-600">
      <SelectCategoryStart />
      <QuizInstructions />
      <QuizMain />
      <QuizScore />
    </div>
  );
}

export default App;
