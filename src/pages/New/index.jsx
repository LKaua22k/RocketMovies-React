import {FiArrowLeft} from 'react-icons/fi'
import { Container , Form} from "./style";
import {Link} from '../../components/Link'

import { Header } from '../../components/Header'
export function New(){
    return(
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <Link icon={FiArrowLeft} title="Voltar"/>
                        <h1>Novo filme</h1>
                    </header>
                </Form>
            </main>
        </Container>
    )
}