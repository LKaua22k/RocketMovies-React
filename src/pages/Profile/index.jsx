import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi"
import { Container, Form, Avatar} from "./style";

import {useAuth} from '../../hooks/auth'
import { useState} from "react";
import { api } from "../../services/api";

import avatarPlaceholder from '../../../assets/avatar_placeholder.svg'

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { useNavigate } from "react-router-dom";

export function Profile(){

    const {user , updateProfile} = useAuth()
    const [name,setName] = useState(user.name)
    const [email,setEmail] = useState(user.email)
    const [passwordNew,setPasswordNew] = useState()
    const [oldPassword,SetOldPasswordd] = useState()
    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    
    const [avatar,setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    const navigate = useNavigate()
    
    function handdleBack(){
        navigate(-1)
    }
    
    async function handdleUpdate(){

        const user = {
            name: name,
            email: email,
            password: passwordNew,
            old_password: oldPassword
        }

        await updateProfile({user, avatarFile})
    }


    function handdleUpdateAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview)
    }


    return(
        <Container>
            <header>
                <button onClick={handdleBack}> <FiArrowLeft /> Voltar</button>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt={user.name} />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input type="file" name="" id="avatar" onChange={handdleUpdateAvatar} />
                    </label>
                </Avatar>

                <Input placeholder="Seu nome" icon={FiUser} value={name} onChange={e => setName(e.target.value)}/>
                <Input placeholder="Seu Email" icon={FiMail} value={email} onChange={e => setEmail(e.target.value)}/>
                <Input placeholder="Senha atual" type='password' icon={FiLock} onChange={e => SetOldPasswordd(e.target.value)}/>
                <Input placeholder="Nova senha" type='password' icon={FiLock} onChange={e => setPasswordNew(e.target.value)}/>
                <Button title="Salvar" onClick={handdleUpdate}></Button>
            </Form>
        </Container>
    )
}