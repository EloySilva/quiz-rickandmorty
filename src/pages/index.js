import { useState, useCallback } from 'react';
import Widget, { Container, Header } from '../styles/Home.js';
import Link from 'next/link';
import Button from '../styles/Button.js';
export default function Home() {
  const [ nome, setNome ] = useState('');

  const handleInput = useCallback ((event) => {
    setNome(event.target.value);
  }, [setNome] );

  return (
    <Container>
      <img src="" />
        <Widget>
          <Header>
            <Widget.Title>
              Rick and Morty
            </Widget.Title>
          </Header>
          <Widget.Content>
            <p>Teste seus conhecimentos do mundo Rick e Morty e divirta-se com nosso Quiz.</p>

            <Widget.TextBox 
              onInput={handleInput}
              placeholder="Digite o seu nome"/>
            <Link href={
              {
                pathname: '/quiz',
                query: {name: nome}
              }
            }>
              <Button>JOGAR {nome}</Button>
            </Link>
          </Widget.Content>
        </Widget>
        <Widget>
        </Widget>
    </Container>
  )
}


//https://wallpapercave.com/wp/wp1822736.jpg