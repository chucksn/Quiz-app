import SelectCategorySlide from "./components/selectCategorySlide";
import QuizInstructionSlide from "./components/quiz-instructions-slide";
import QuizMainSlide from "./components/quiz-main-slide";
import QuizScoreSlide from "./components/quiz-score-slide";
import Footer from "./components/footer";

function App() {
  return (
    <div className=" flex justify-center items-center min-h-screen w-screen bg-slate-600 overflow-hidden relative">
      <SelectCategorySlide />
      <QuizInstructionSlide />
      <QuizMainSlide />
      <QuizScoreSlide />
      <Footer />
    </div>
  );
}

export default App;
