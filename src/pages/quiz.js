import { useRouter } from 'next/router';
import Widget, { Container, Header } from '../styles/Quiz.js';

const Quiz = () => {
    const router = useRouter();

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
              <p>PERGUNTAS NESSA CARAIA</p>
            </Widget.Content>
          </Widget>
    </Container>

    )
}

export default Quiz;