import Cards from '../cards/Cards';
import DataList from '../cards/datalist/DataList';
import TobBar from '../topbar/TopBar';
import { DMain } from './StyledCom';

const Main = () => {
    return (
        <DMain id="Main">
            <TobBar/>
            <Cards/>
            <DataList/>
        </DMain>
    )
}

export default Main
