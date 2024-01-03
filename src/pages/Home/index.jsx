import {FiPlus} from 'react-icons/fi'
import {Container,Content} from './style'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'

export function Home(){
    return(
        <Container>
            <Header /> 

            <section>
                <h1>Meus Filmes</h1>
                <Button  title="Adicionar filme" icon={FiPlus}/>
            </section>

            <Content>
                <Card title='Interestellar'/>
                <Card title='Interestellar'/>
            </Content>
        </Container>
    )
}