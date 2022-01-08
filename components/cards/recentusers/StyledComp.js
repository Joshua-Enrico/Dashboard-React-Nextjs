import styled from 'styled-components';
import { COLORS } from '../../../styles/Colors';

export const RecentCustomers = styled.div`
    position: relative;
    display: grid;
    min-height: 400px;
    padding: 20px;
    background-color: ${COLORS.white};
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

export const Table = styled.table`
    width: 10%;
    border-collapse: collapse;
    margin-top: 10px;
`
