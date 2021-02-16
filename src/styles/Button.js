import styled, { css } from 'styled-components'
import { shade } from 'polished'

const Button = styled.a`
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

export default Button;