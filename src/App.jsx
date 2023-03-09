import SelectCategoryStart from "./components/selectCategoryStart";
import QuizInstructions from "./components/quiz-instructions";
import QuizMain from "./components/quiz-main";

function App() {
  return (
    <div className=" flex justify-center items-center min-h-screen bg-slate-500">
      <SelectCategoryStart />
      <QuizInstructions />
      <QuizMain />
    </div>
  );
}

export default App;
