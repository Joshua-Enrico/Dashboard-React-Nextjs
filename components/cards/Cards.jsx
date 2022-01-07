import { CardsContainer} from "./StyledComp"
import CardBox from "./cardbox/CardBox";
import DataList from "./datalist/DataList";


const Cards = () => {
    return (
        <CardsContainer>
            <CardBox
            numb={"1504"}
            title={"Daily Views"}
            icon={"eye"}
            />

            <CardBox
            numb={"80"}
            title={"Sales"}
            icon={"cart"}
            />

            <CardBox
            numb={"300"}
            title={"Comments"}
            icon={"comment"}/>

            <CardBox
            numb={"$5,000"}
            title={"Earnings"}
            icon={"money"}
            />
            
        </CardsContainer>
    )
}

export default Cards
