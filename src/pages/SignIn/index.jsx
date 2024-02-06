import { Container, Form ,Background } from "./style";
import {FiMail , FiLock} from 'react-icons/fi'
import { Link } from "react-router-dom";

import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

export function SignIn(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const {SignIn} = useAuth();

    function handdleSignIn(){
        SignIn({email,password})
    }


    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input type="email" placeholder="E-mail" icon={FiMail} onChange={e => setEmail(e.target.value)}/>
                <Input type="password" placeholder="Senha" icon={FiLock} onChange={e => setPassword(e.target.value)}/>

                <Button title='Entrar' onClick={handdleSignIn}/>

                <Link to="/register">Criar Conta</Link>
            </Form>

            <Background src="../../../assets/back.jpg" alt="" srcset="" />
        </Container>
    )
}