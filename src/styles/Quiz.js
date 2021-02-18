import styled, { css } from 'styled-components'
//import { shade } from 'polished'


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
    margin: 25px 45px;
    background: ${(props) => props.theme.colors.bgColor};
    border-radius: 5px;
    border: 2px solid ${(props) => props.theme.colors.primary};
    overflow: hidden;
    padding-bottom: 10px;
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

export const List = styled.ul`
    width: 100%;
    margin: 25px 0;
    list-style: none;
    display: flex;
    flex-direction: column;

    li + li {
        margin-top: 10px;
    }
`;

export const ListItem = styled.li.attrs(props => {
    isSelected: false;
    isCorrect: false || undefined;
})`
    color: #fff;
    padding: 15px;
    border: 2px solid #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${(props) => props.isSelected ? css`
        background-color: #33eaff;
        color: #000;
    `: ''}

    ${(props) => props.isCorrect == true ? css`
        background-color: #76ff03;
        color: #000;
    `: ''}

    &:hover {
        background-color: #33eaff;
        color: #000
    }
`;

export default Widget;