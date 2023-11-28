import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi"

import { Container, Form, Avatar} from "./style";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Profile(){
    return(
        <Container>
            <header>
                <a href=""> <FiArrowLeft /> Voltar</a>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/LKaua22k.png" alt="User img" srcset="" />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input type="file" name="" id="avatar" />
                    </label>
                </Avatar>

                <Input placeholder="Seu nome" icon={FiUser}/>
                <Input placeholder="Seu Email" icon={FiMail}/>
                <Input placeholder="Senha atual" icon={FiLock}/>
                <Input placeholder="Nova senha" icon={FiLock}/>
                <Button title="Salvar"></Button>
            </Form>
        </Container>
    )
}