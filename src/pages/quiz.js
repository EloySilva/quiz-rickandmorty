import { useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Widget, { Container, Header, List, ListItem } from '../styles/Quiz.js';
import questionsData from '../mock/perguntas.json';
import Link from 'next/link';
import { ImRadioUnchecked, ImRadioChecked } from "react-icons/im";
import Button from '../styles/Button.js';
import WinnerText from '../components/WinnerText';

const Quiz = () => {
    const router = useRouter();
    const [selectedItem, setselectedItem] = useState(undefined);
    const [isAnswered, setIsAnswered] = useState(false);
    const [nextQuizes, setNextQuizes] = useState(() => {
      return questionsData.quizes.slice(1, questionsData.quizes.length);
    });
    const [currentQuestion, setCurrentQuestion] = useState(() => {
      return questionsData.quizes[0];
    });

    const [corretQuestion, setCorrectQuestion] = useState('');

    const [myHits, setMyHits] = useState(0);

    const handleItenClick = useCallback((id) => {
      setselectedItem(id);
    }, [setselectedItem]);

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
        if(selectedItem === correctOption.id)
          setMyHits(myHits + 1);
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
            
                {
                  isAnswered && nextQuizes.length === 0 ? 
                  <WinnerText text={`Você acertou ${myHits} de ${questionsData.quizes.length}`} />
                  :
                  <>
                    <p>{currentQuestion.question}</p>
                    <List>
                      { 
                        currentQuestion.answer.map((resposta, index) => (
                        <ListItem key={resposta.id}
                        isSelected={ selectedItem === resposta.id }
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
                            selectedItem === resposta.id ? <ImRadioChecked size={20} /> : <ImRadioUnchecked size={20} />
                          }

                        </ListItem>
                        ) )
                      }
                    </List>
                  </>
                }

            </Widget.Content>
            {
            (() => {
              if(isAnswered && nextQuizes.length === 0 ) {
                return(
                  <Link href="/">
                    <Button type='button'>Jogar de novo?</Button>
                  </Link>
                )
              }
               
              if(isAnswered){
                return <Button onClick={handleNextQuestion}>Próxima</Button>
              }

              return <Button onClick={handleConfirmClick}>Confirmar</Button>
            })()
          }
          </Widget>
    </Container>

    )
}

export default Quiz;