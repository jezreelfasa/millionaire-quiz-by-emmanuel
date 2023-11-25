import { useState, useEffect } from "react";
import styles from "./Game.module.css";
import useSound from 'use-sound';
import play from "../../assets/play.mp3";
import correct from "../../assets/src_sounds_correct.mp3";
import wrong from "../../assets/wrong.mp3";
import final from "../../assets/final.mp3" 


//eslint-disable-next-line react/prop-types
const Trivia = ({ data, setStop, questionNumber, setQuestionNumber }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState(styles.answer);

  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);
  const [finalAnswer]  = useSound(final)
  
  
  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName(`${styles.answer} ${styles.selected}`);
    delay(3000, () =>
      setClassName(
        a.correct
          ? `${styles.answer} ${styles.correct}`
          : `${styles.answer} ${styles.wrong}`
      )
    );

    delay(5000, () => {
      if (a.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);

          // Check if it's the 15th question and the answer is correct//
          if (questionNumber === 15 && a.correct) {
            finalAnswer();
            setStop(true);
            delay(1000, () => {
              setQuestionNumber(null);
              setSelectedAnswer(null);
            });
          }
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setStop(true);
        });
      }
    });
  };


  return (
    <div className={styles.trivia}>
      <div className={styles.question}>{question?.question}</div>
      <div className={styles.anscontainer}>
        {question?.answers.map((a, index) => (
          <div
            key={index}
            className={`${styles.answers} ${selectedAnswer === a ? `${className} ${styles.active}` : styles.answers}`}
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Trivia;


