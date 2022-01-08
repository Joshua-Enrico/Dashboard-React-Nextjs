import styled from 'styled-components';
import { COLORS } from '../../../../styles/Colors';


export const Span = styled.span`
    font-size: 14px;
    color: ${COLORS.black2};
`
export const Tr = styled.tr`
   height: 10%;
    &:hover {
        background-color: ${COLORS.blue};
        color: ${COLORS.white};
        ${Span} {
            color: ${COLORS.white};
        }
    }
`


export const Td = styled.td`
    padding: 12px 10px;
`
export const ImgBox = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
`
export const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const H4 = styled.h4`
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2em;
`

