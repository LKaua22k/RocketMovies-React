import {FiPlus} from 'react-icons/fi'
import {Container,Content} from './style'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

export function Home(){
    return(
        <Container>
            <Header /> 

            <section>
                <h1>Meus Filmes</h1>
                <Button  title="Adicionar filme" icon={FiPlus}/>
            </section>

            <Content>
                <section>
                    <header>
                        <strong>Interestellar</strong>
                    </header>

                    <main>
                        <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se</p>
                    </main>

                        <ul>
                            <li>Ficção Científica</li>
                            <li>Drama</li>
                            <li>Família</li>
                        </ul>
                </section>

            </Content>
        </Container>
    )
}