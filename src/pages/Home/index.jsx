import {FiPlus} from 'react-icons/fi'
import {Container,Content} from './style'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Card } from '../../components/Card'

export function Home(){
    return(
        <Container>
            <Header /> 

            <section>
                <h1>Meus Filmes</h1>
                <Link to="/new">
                    <FiPlus />
                    Adicionar filme 
                </Link>
            </section>

            <Content>
                <Card title='Interestellar'/>
                <Card title='Interestellar'/>
            </Content>
        </Container>
    )
}