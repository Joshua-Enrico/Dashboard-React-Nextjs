import styled from 'styled-components';
import DataList from './cards/datalist/DataList';
import Main from './main/Main';
import Navigation from './navigation/Navigation';
import TobBar from './topbar/TopBar';

const Cont = styled.div`
    position: relative;
    width: 100%;
`;


const Container = () => {
    return (
        <Cont>
            <Navigation/>
            <Main/>
        </Cont>
    )
}

export default Container
