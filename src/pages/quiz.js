import { useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Widget, { Container, Header, List, ListItem } from '../styles/Quiz.js';
import questions from '../mock/perguntas.json';
import { ImRadioUnchecked, ImRadioChecked } from "react-icons/im";

const Quiz = () => {
    const router = useRouter();
    const [selectedIten, setSelectedIten] = useState(undefined);
    const [isAnswered, setIsAnswered] = useState(false);
    const [corretQuestion, setCorrectQuestion] = useState(undefined);

    const handleItenClick = useCallback((id) => {
      setSelectedIten(id);
    }, [setSelectedIten]);

    const handleConfirmClick = useCallback(() => {
      setIsAnswered(true);

    }, [setIsAnswered])

    useEffect(() => {
      if(isAnswered) {
        const correctOption = questions.quiz[0].answer.find((answer) => answer.isRight);
        setCorrectQuestion(correctOption);
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
              <p>{questions.quiz[0].question}</p>
              <List>
                { 
                  questions.quiz[0].answer.map((resposta, index) => (
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
              <button onClick={handleConfirmClick}>Proxima</button>
            </Widget.Content>
          </Widget>
    </Container>

    )
}

export default Quiz;