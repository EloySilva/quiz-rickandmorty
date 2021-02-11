import { useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Widget, { Container, Header, List, ListItem } from '../styles/Quiz.js';
import questionsData from '../mock/perguntas.json';
import { ImRadioUnchecked, ImRadioChecked } from "react-icons/im";

const Quiz = () => {
    const router = useRouter();
    const [selectedIten, setSelectedIten] = useState(undefined);
    const [isAnswered, setIsAnswered] = useState(false);
    const [nextQuizes, setNextQuizes] = useState(() => {
      return questionsData.quizes.slice(1, questionsData.quizes.length);
    });
    const [currentQuestion, setCurrentQuestion] = useState(() => {
      return questionsData.quizes[0];
    });

    const [corretQuestion, setCorrectQuestion] = useState('');

    const handleItenClick = useCallback((id) => {
      setSelectedIten(id);
    }, [setSelectedIten]);

    const handleConfirmClick = useCallback((event) => {
      //setIsAnswered(true);
      event.preventDefault();
      setIsAnswered(true);

    }, [setIsAnswered]);

    const handleNextQuestion = useCallback((event) => {
      
      if(nextQuizes.length === 0 ) return;

      const nextQuizesCopy = nextQuizes.slice();
      const question = nextQuizesCopy.shift();
      setCurrentQuestion(question);
      setNextQuizes(nextQuizesCopy);
      setIsAnswered(false);

    }, [nextQuizes, setNextQuizes, corretQuestion, setIsAnswered, setCurrentQuestion])

    useEffect(() => {
      if(isAnswered) {
        const correctOption = currentQuestion.answer.find((answer) => answer.isRight);
        setCorrectQuestion(correctOption.id);
      }
    }, [isAnswered])

    return (
    <Container>
        <img src="" />
          <Widget>
            <Header>
              <Widget.Title>
                Responda a Pergunta { router.query.name }
              </Widget.Title>
            </Header>
            <Widget.Content>
              <p>{currentQuestion.question}</p>
              <List>
                { 
                  currentQuestion.answer.map((resposta, index) => (
                  <ListItem key={resposta.id}
                  isSelected={ selectedIten === resposta.id }
                  isCorrect={ corretQuestion == resposta.id }
                  onClick={ 
                    (event) => {
                      if(isAnswered) {
                        event.preventDefault();
                        return;
                      }
                      handleItenClick(resposta.id);
                    } 
                  }>
                  { resposta.label }   
                    
                    {
                      selectedIten === resposta.id ? <ImRadioChecked size={20} /> : <ImRadioUnchecked size={20} />
                    }

                  </ListItem>
                  ) )
                }
              </List>
            </Widget.Content>

            {
              isAnswered ? <button onClick={handleNextQuestion}>Próxima</button>
              : <button onClick={handleConfirmClick}>Confirmar</button>
            }
          </Widget>
    </Container>

    )
}

export default Quiz;