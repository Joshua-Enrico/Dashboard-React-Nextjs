import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
import { mobile, desktop, mobilesm } from '../Responsive';



export const Tbar = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    ${desktop({
        '& > div:first-child': {
            display: 'none',
        }
    })}
    ${mobile({
        '& > div:nth-child(2)': {
            display: 'none',
        }
    })}
`

export const FastMenu = styled.div`
    position: relative;
    top: 0;
    width: 5%;
    ${mobile({
        width: '7%',
    })}
    ${mobilesm({
        width: '20%',
    })}
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    
    border-radius: 20px;
    border: 1px solid #ececec;
    background-color: #ececec;

    & > svg {
        cursor: pointer;
        margin: 0px 5px;
    }

`
export const Search = styled.div`
    position: relative;
    width: 400px;
    margin: 0 10px;

`

export const Label = styled.label`

    & > svg {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 1.2em;
    }
    
`
export const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 40px;
    padding: 5px 20px;
    padding-left: 40px;
    outline: none;
    border: 1px solid ${COLORS.black2};

`

export const User = styled.div`
    position: relative;
    min-width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;

`
export const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`