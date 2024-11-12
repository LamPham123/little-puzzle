import PuzzleQuiz from "./components/puzzlequiz";
import {Header} from "./components/header"

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <Header></Header>
      <PuzzleQuiz />
    </main>
  )
}