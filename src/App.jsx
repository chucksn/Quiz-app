import SelectCategorySlide from "./components/selectCategorySlide";
import QuizInstructionSlide from "./components/quiz-instructions-slide";
import QuizMainSlide from "./components/quiz-main-slide";
import QuizScoreSlide from "./components/quiz-score-slide";

function App() {
  return (
    <div className=" flex justify-center items-center min-h-screen bg-slate-600">
      <SelectCategorySlide />
      <QuizInstructionSlide />
      <QuizMainSlide />
      <QuizScoreSlide />
    </div>
  );
}

export default App;
