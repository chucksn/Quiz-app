import SelectCategoryStart from "./components/selectCategoryStart";
import QuizInstructions from "./components/quiz-instructions";

function App() {
  return (
    <div className=" flex justify-center items-center min-h-screen bg-slate-500">
      <SelectCategoryStart />
      <QuizInstructions />
    </div>
  );
}

export default App;
