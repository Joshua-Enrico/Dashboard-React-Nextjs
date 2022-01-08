import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
import { mobile, mobilesm } from '../Responsive';

export const CardsContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    ${mobile({
        gridTemplateColumns: 'repeat(2, 1fr)',
    })}
    ${mobilesm({
        gridTemplateColumns: 'repeat(1, 1fr)',
    })}
`

