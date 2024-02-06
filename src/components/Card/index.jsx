import { Container } from "./style";
import {FiStar} from 'react-icons/fi'
import {Tag} from '../../components/Tag'
import { Rating } from "../Rating";


export function Card({data, ...rest}){
    return(
        <Container {...rest}>
            <header>
                <strong>{data.title}</strong>
                        
                <Rating ratingStar={data.rating} isBig={false}> </Rating>

            </header>

            <main>
                <p>{data.description}</p>
            </main>

                {
                    data.tags && (
                        <footer>
                            {data.tags.map(tag => (
                                <Tag key={String(tag.id)} title={tag.name}/>
                            ))}
                        </footer>
                    )
                }
        </Container>        
    )    
}