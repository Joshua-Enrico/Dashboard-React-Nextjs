import styled from 'styled-components';
import Navigation from './navigation/Navigation';

const Cont = styled.div`
    position: relative;
    width: 100%;
`;


const Container = () => {
    return (
        <Cont>
            <Navigation/>
        </Cont>
    )
}

export default Container
