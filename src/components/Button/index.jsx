import { Container } from "./style";

export function Button({icon: Icon,title}){
    return(
        <Container type='button'> 
            {Icon && <Icon/>}
            {title}
        </Container>
    )
}