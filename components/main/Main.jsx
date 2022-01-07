import Cards from '../cards/Cards';
import TobBar from '../topbar/TopBar';
import { DMain } from './StyledCom';

const Main = () => {
    return (
        <DMain id="Main">
            <TobBar/>
            <Cards/>
        </DMain>
    )
}

export default Main
