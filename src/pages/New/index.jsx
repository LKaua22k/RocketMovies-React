import {FiArrowLeft} from 'react-icons/fi'

import { Container , Form} from "./style";
import {Link} from '../../components/Link'
import {Input} from '../../components/Input'
import {Textarea} from '../../components/Textarea'
import {Button} from '../../components/Button'
import { NoteItem } from '../../components/NoteItem';

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

                    <div className='inputs'>
                        <Input type="text" placeholder="Título" />
                        <Input type="number" placeholder="Sua nota (de 0 a 5)" />
                    </div>

                    <Textarea placeholder="Observações" />

                    <section>
                        <h2>Marcadores</h2>

                        <div className='tags'>
                            <NoteItem value='React'/>
                            <NoteItem isNew value="Nodejs"/>
                        </div>
                    </section>

                    <div className='btns'>
                        <Button title="Excluir filme"></Button>
                        <Button title="Salvar alterações"></Button>
                    </div>
                </Form>
            </main>
        </Container>
    )
}