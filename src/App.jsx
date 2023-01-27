//react, componentes, estáticos
// Componente principal

import { useContext, useEffect } from 'react'
import './App.css'
import Welcome from "./components/Welcome"
import Question from './components/Question'
import { QuizContext } from './context/quiz'
import GameOver from './components/GameOver'

function App() {
const [quizState, dispatch] = useContext(QuizContext)

useEffect(()=> {
// embaralhar as perguntas
dispatch({type:"REORDER_QUESTIONS"})
}, [])

  return (
    <div className='App'>
    <h1 style={{color: 'white'}}> Quiz de programação</h1>
    {quizState.gameStage === 'Start' && <Welcome />}
    {quizState.gameStage === 'Playing' && <Question />}
    {quizState.gameStage === 'End' && <GameOver />}
    </div>
  )
}

export default App
