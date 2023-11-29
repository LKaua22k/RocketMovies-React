import {FiArrowLeft,FiClock} from 'react-icons/fi'
import { Container, Content, Status} from "./style";

import { Header } from '../../components/Header'
export function Details(){
    return(
        <Container>
            <Header />

            <main>
                <Content>
                    <a href=""><FiArrowLeft/> Voltar</a>

                    <h1>Interestellar</h1>

                    <Status>
                        <div>
                            <img src="https://github.com/LKaua22k.png" alt="" srcset="" />
                            <span>Por Kauã Araujo</span>
                        </div>

                        <div>
                            < FiClock />
                            <span>23/05/22 às 08:00</span>
                        </div>
                    </Status>
                </Content>
            </main>
        </Container>
    )
}