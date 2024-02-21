import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";

import Quiz from "../img/quiz.svg";


const Welcome = () => {
    const quizState = useContext(QuizContext);

    console.log(quizState);

    return (
        <div id="welcome">
            <h2>Seja bem-vindo</h2>
            <p>Clique no botão a baixo para começar:</p>
            <button>Iniciar</button>
            <img src={Quiz} alt="Início do Quiz" />
        </div>
    )
}

export default Welcome