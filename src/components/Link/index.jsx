import { Container } from "./style";
import {FiArrowLeft} from 'react-icons/fi'

export function Link({icon:Icon,title}){
    return(
        <Container>
            {Icon && <Icon/>}
            {title}
        </Container>
    )
}