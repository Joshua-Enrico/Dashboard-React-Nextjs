import styled from 'styled-components';
import { COLORS } from '../../../styles/Colors';


export const Numbers = styled.div`
    position: relative;
    font-weight: 500;
    font-size: 2.5em;
    color: ${COLORS.blue};
`

export const CardName = styled.div`
    color: ${COLORS.black2};
    font-size: 1.1em;
    margin-top: 5px;
`

export const Card = styled.div`
    position: relative;
    background: ${COLORS.white};
    padding: 30px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    &:hover {
        background: ${COLORS.blue};
        ${Numbers}, ${CardName}, >* {
            color: ${COLORS.white};
        }
    }
`
export const BoxItems = styled.div`

`


export const IconBox = styled.div`
    font-size: 3.5em;
    color: ${COLORS.black2};
`