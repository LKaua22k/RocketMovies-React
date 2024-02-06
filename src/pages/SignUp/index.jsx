import { Container, Form ,Background } from "./style";
import {FiMail , FiLock, FiUser, FiArrowLeft} from 'react-icons/fi'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

export function SignUp(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const Navigate = useNavigate()

    function handdleSignUp(){
        if(!name || !email || !password){
            alert('Algum campo não esta preenchido')
        }

        api.post('/users', {name,email,password}).then(() =>{
            alert('Usuario cadastrado')
            Navigate(-1)
        }).catch(error => {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert('Não foi possivel cadastrar')
            }
        })
    }


    return(
        <Container>

            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input type="text" placeholder="Nome" icon={FiUser} onChange={e => setName(e.target.value)}/>
                <Input type="email" placeholder="E-mail" icon={FiMail} onChange={e => setEmail(e.target.value)}/>
                <Input type="password" placeholder="Senha" icon={FiLock} onChange={e => setPassword(e.target.value)}/>

                <Button title='Cadastrar' onClick={handdleSignUp}/>

                <Link to="/"> <FiArrowLeft />Voltar para o login</Link>
            </Form>

            <Background src="../../../assets/back.jpg" alt="" srcset="" />
        </Container>
    )
}