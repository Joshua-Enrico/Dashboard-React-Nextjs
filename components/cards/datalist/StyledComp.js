import styled from 'styled-components';
import { COLORS } from '../../../styles/Colors';

export const Details = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 30px;
`

export const RecentOrders = styled.div`
    position: relative;
    display: grid;
    min-height: 400px;
    background-color: ${COLORS.white};
    padding: 20px;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
`

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
`

export const H2 = styled.h2`
    margin-top: 1px;
    font-weight: 600;
    color: ${COLORS.blue};
`

export const Aref = styled.a`
    position: relative;
    padding: 5px 10px;
    background-color: ${COLORS.blue};
    text-decoration: none;
    color: ${COLORS.white};
    border-radius: 6px;
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
`

export const Thead = styled.thead`
    font-weight: 600;
`

export const Tr = styled.tr`
    color: ${COLORS.black1};
    & > td:last-child {
        text-align: end;
    }

    & > td:nth-child(2) {
        text-align: end;
    }
    & > td:nth-child(3) {
        text-align: center;
    }
    

`
export const Td = styled.td`
    padding: 10px;
`

export const Tbody = styled.tbody`
    & > tr {
        border-bottom: 1px solid ${COLORS.gray};
        &:hover {
            background-color: ${COLORS.blue};
        }

    }
    & > tr:last-child {
        border-bottom: none;
    }
`

export const Span = styled.span`
    padding: 2px 4px;
    font-size: 14px; font-weight: 500;
    border-radius: 4px;
    ${props => props.status === 'Pending' && `background: #f7b733; color: ${COLORS.white}`}
    ${props => props.status === 'Delivered' && `background: rgb(40, 199, 111); color: ${COLORS.white};`}
    ${props => props.status === 'In Progress' && `background: #468DE3; color: ${COLORS.white};`}
    ${props => props.status === 'Return' && `background: #ea5455; color: ${COLORS.white};`}

`