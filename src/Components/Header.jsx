import logo from '../assets/quiz-logo.png';

export default function Header(){

    return <header>
        <img src={logo} alt='Quix Logo'/>
        <h1>NBAQuiz</h1>
    </header>
}