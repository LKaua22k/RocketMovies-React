import { Container } from "./style";
import {FiStar} from 'react-icons/fi'


export function Card({title}){
    return(
        <Container>
            <header>
                <strong>{title}</strong>
                        
                <div className='stars'>
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                </div>
            </header>

            <main>
                <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se</p>
            </main>

                <ul>
                    <li>Ficção Científica</li>
                    <li>Drama</li>
                    <li>Família</li>
                </ul>    
        </Container>        
    )    
}