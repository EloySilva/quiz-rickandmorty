import styled from 'styled-components'


export const Container = styled.div`
    background-image: url('https://wallpapercave.com/wp/wp1822736.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
`;

const Widget = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    width: 500px;
    height: 180px;
    margin: 25px 45px;
    background: ${(props) => props.theme.colors.bgColor};
    border-radius: 5px;
    border: 2px solid ${(props) => props.theme.colors.primary};
    overflow: hidden;
`;

Widget.Title = styled.h4`
    color: #fff;
    width: 100%;
    padding: 12px 0;
    text-align: center;
    background: ${(props) => props.theme.colors.secondary};
`;

Widget.Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 10px;
    p {
        color: #fff;
    }
`;

export default Widget;