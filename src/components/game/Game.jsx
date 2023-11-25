import styles from './Game.module.css';
import Trivia from "./Trivia";
import Timer from "./Timer";
import Start from "./Start";
import Image from "../../assets/bg.jpg";
import { useEffect, useState, useMemo } from "react";

  const Game = () => {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0: $");
  useEffect(() => {
  
  }, [questionNumber, stop]);
  
  
  
   const data =  [
     {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers:[
        {
      text: "Phone",
      correct: false,
     },
     {
      text: "Watches",
      correct: true,
     },
     {
      text:"Food",
      correct: false,
     },
     {
      text: "Cosmetic",
      correct: false,
     },
    ],
  },
   {
    id: 2,
    question: "When did the website `Facebook` launch?",
    answers:[
      {
    text: "1992",
    correct: false,
   },
   {
    text: "2004",
    correct: true,
   },
   {
    text:"2022",
    correct: false,
   },
   {
    text: "1900",
    correct: false,
   },
   
  ],
  },
  {
    id: 3,
    question: "What sort of animal is Walt Disney's Dumbo?",
    answers:[
      {
    text: "Deer",
    correct: false,
   },
   {
    text: "Rabbit",
    correct: false,
   },
   {
    text:"Elephant",
    correct: true,
   },
   {
    text: "Donkey",
    correct: false,
   },
  ],
  },
  
  {
    id: 4,
    question: "In what Year and Month did Nigeria gain Her Independence?",
    answers:[
      {
    text: "1st October, 1992",
    correct: false,
   },
   {
    text: "1st October, 1961",
    correct: false,
   },
   {
    text:"1st November, 19960",
    correct: false,
   },
   {
    text: "1st October, 1960",
    correct: true,
   },
  ],
  },
  
  
  {
    id: 5,
    question: "Which battles took place between the Royal Houses of York and Lancaster?",
    answers:[
      {
    text: "Thirty Years War",
    correct: false,
   },
   {
    text: "Hundred Years War",
    correct: false,
   },
   {
    text:"Wars of the Roses",
    correct: true,
   },
   {
    text: "English Civil War",
    correct: false,
   },
  ],
  },
  
  
  {
    id: 6,
    question: "Queen Anne was the daughter of which English Monarch?",
    answers:[
      {
    text: "James II",
    correct: true,
   },
   {
    text: "Henry VIII",
    correct: false,
   },
   {
    text:"Victoria",
    correct: false,
   },
   {
    text: "William I",
    correct: false,
   },
  ],
  },
  
  
  {
    id: 7,
    question: "Who composed the hit `Billie Jean` ?",
    answers:[
      {
    text: "Whiz Kid",
    correct: false,
   },
   {
    text: "Michael Jackson",
    correct: true,
   },
   {
    text:"Burna Boy",
    correct: false,
   },
   {
    text: "Drake",
    correct: false,
   },
  ],
  },
  
  {
    id: 8,
    question: "What is the Celsius equivalent of 77 degrees Fahrenheit?",
    answers:[
      {
    text: "15",
    correct: false,
   },
   {
    text: "20",
    correct: false,
   },
   {
    text:"25",
    correct: true,
   },
   {
    text: "30",
    correct: false,
   },
  ],
  },
  
  {
    id: 9,
    question: "Which Shakespeare play features the line `Neither a borrower nor a lender be`?",
    answers:[
      {
    text: "Hamlet",
    correct: true,
   },
   {
    text: "Macbeth",
    correct: false,
   },
   {
    text:"The Merchant of Venice",
    correct: false,
   },
   {
    text: "Othello",
    correct: false,
   },
  ],
  },
  
  {
    id: 10,
    question: "Which is the largest city in the USA's largest state?",
    answers:[
      {
    text: "Dallas",
    correct: false,
   },
   {
    text: "Los Angeles",
    correct: true,
   },
   {
    text:"New York",
    correct: false,
   },
   {
    text: "Anchorage",
    correct: true,
   },
  ],
  },
  
  {
    id: 11,
    question: "The word `aristocracy` literally means power in the hands of ",
    answers:[
      {
    text: "The few",
    correct: false,
   },
   {
    text: "The best",
    correct: true,
   },
   {
    text:"The barons",
    correct: false,
   },
   {
    text: "The rich",
    correct: false,
   },
  ],
  },
  
  {
    id: 12,
    question: "Where would a `peruke` be worn?",
    answers:[
      {
    text: "Around the neck",
    correct: false,
   },
   {
    text: "On the head",
    correct: true,
   },
   {
    text:"Around the waist",
    correct: false,
   },
   {
    text: "On the wrist",
    correct: false,
   },
  ],
  },
  
  {
    id: 13,
    question: "In which palace was Queen Elizabeth I born?",
    answers:[
      {
    text: "Greenwich",
    correct: true,
   },
   {
    text: "Richmond",
    correct: false,
   },
   {
    text:"Hampton Court",
    correct: false,
   },
   {
    text: "Kesington",
    correct: false,
   },
  ],
  },
  
  {
    id: 14,
    question: "Which of these islands was ruled by Britain from 1815 until 1864?",
    answers:[
      {
    text: "Crete",
    correct: false,
   },
   {
    text: "Cyprus",
    correct: false,
   },
   {
    text:"Corsica",
    correct: false,
   },
   {
    text: "Corfu",
    correct: true,
   },
  ],
  },
  
  {
    id: 15,
    question: "Who designed The Nigerian Flag",
    answers:[
      {
    text: "Pa Akindayomi",
    correct: false,
   },
   {
    text: "Rev. Chris Oyakhilome",
    correct: false,
   },
   {
    text:"Michael Taiwo Akinwunmi",
    correct: true,
   },
   {
    text: "Michael Kehinde Akwinwumni",
    correct: false,
   },
  ],
  },
  
  
   ];
  
   
   const moneyPyramid = useMemo(() => 
    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1000" },
      { id: 6, amount: "$ 2000" },
      { id: 7, amount: "$ 4000" },
      { id: 8, amount: "$ 8000" },
      { id: 9, amount: "$ 16000" },
      { id: 10, amount: "$ 32000" },
      { id: 11, amount: "$ 64000" },
      { id: 12, amount: "$ 125000" },
      { id: 13, amount: "$ 250000" },
      { id: 14, amount: "$ 500000" },
      { id: 15, amount: "$ 1000000" },
    ].reverse(),
    []
   );
    useEffect(() =>{
  questionNumber >1 && setEarned(moneyPyramid.find (m=> m.id === questionNumber -1).amount)
    }, [moneyPyramid, questionNumber])
  

  const restartGame = () => {
    setUsername(null);
    setQuestionNumber(1);
    setStop(false);
    setEarned("0: $");
  };

  return (
    <div className={styles.app} style={{backgroundColor: "#020230"}}>

      {username ? (
        <>
          <div className={styles.main}>
            <img src={Image} style={{width: "100%", height:"100%"}} />
            
            {stop ? (
              <>
                <h1 className={styles.end}>Hello {username}, You earned: {earned}</h1>
                <button className={styles.restartButton} onClick={restartGame}>
                  Restart Game
                  
                </button>
                
                
              </>
            ) : (
              <>
              
                <div className={styles.top}>
                <div className={styles.timer}>
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className={styles.bottom}>
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className={styles.pyramid}>
            <ul className={styles.moneyList}>
              {moneyPyramid.map((m) => (
                <li
                  key={m.id}
                  className={
                    questionNumber === m.id
                      ? `${styles.moneyListItem} ${styles.active}`
                      : styles.moneyListItem
                  }
                >
                  <span className={styles.moneyListItemNumber}>{m.id}</span>
                  <span className={styles.moneyListItemAmount}>{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
};

export default Game;


