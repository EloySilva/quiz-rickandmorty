import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.section`
    background-image: url('https://wallpapercave.com/wp/wp1822736.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
`;

export const Header = styled.header`
    width: 100%;
`;

const Widget = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    justify-content: flex-start;
    width: 350px;
    height: 240px;
    margin: 25px 45px;
    background: ${(props) => props.theme.colors.bgColor};
    border-radius: 5px;
    border: 2px solid ${(props) => props.theme.colors.primary};
    overflow: hidden;
`;

Widget.Title = styled.h4`
    color: #9932CC;
    text-shadow: 0px 0px 5px #EE82EE;
    width: 100%;
    padding: 12px 0;
    text-align: center;
    background: ${(props) => props.theme.colors.secondary};
`;

Widget.Content = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0 10px;
    p {
        color: #33eaff;
    }
`;


Widget.TextBox = styled.input`
    width: 100%;
    height: 45px;
    border-color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.secondary};
    //color: #9932CC;
    text-shadow: 0px 0px 5px #EE82EE;
    text-align: center;

    &::placeholder {
        color: rgba(238, 130, 238, 0.8);
    }

`;

Widget.Button = styled.a`
    width: 150px;
    height: 40px;
    border-radius: 15px;
    border-color: transparent;
    background-color: #FFFF00;
    color: #36648B;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${ shade(0.2, '#FFFF00') };
        cursor: pointer;
    }

    &:visited {
        text-decoration: none;
        color: #36648B;
    }
`

export default Widget;