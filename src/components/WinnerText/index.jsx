import { GiLaurelsTrophy } from "react-icons/gi";
import {Container, Message} from './styles';

const WinnerText = ({text}) => {
    return (
        <Container>
            <Message>{text}</Message>
            <GiLaurelsTrophy size={70}/>
        </Container>
    );
}

export default WinnerText;