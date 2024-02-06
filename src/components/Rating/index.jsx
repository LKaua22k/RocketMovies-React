import { Container } from "./style";
import {FaRegStar,FaStar} from "react-icons/fa"

export function Rating({ratingStar,isBig}){

    let stars = []

    for (let i = 1; i <= 5; i++) {
        if (i <= ratingStar) {
            stars.push(<FaStar key={i}/>)
        } else {
            stars.push(<FaRegStar key={i}/>)
        }
    }
    return(
        <Container isBig={isBig}>
            {stars}
        </Container>
    )
}