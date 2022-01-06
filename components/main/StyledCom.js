import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';


export const DMain = styled.div`
    position: absolute;
    width: calc(100% - 80px);
    left: 80px;
    min-height: 100vh;
    background-color: ${COLORS.white};
    transition: all .3s;
    -moz-transition: all .3s;
    -webkit-transition:all .3s;
    -o-transition: all .3s;

    &.maintain {
        width: calc(100% - 300px);
        left: 300px;
    }

`
