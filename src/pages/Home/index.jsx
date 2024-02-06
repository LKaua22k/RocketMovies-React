import {FiPlus} from 'react-icons/fi'
import {Container,Content} from './style'
import { Link,useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import {Input} from '../../components/Input'

export function Home(){
    const [notes,setNotes] = useState([])
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    function handdleDetails(id){
        navigate(`/details/${id}`)
    }


        useEffect(() => {
            async function fetchNotes(){
                const response = await api.get(`/notes?title=${search}`)
                setNotes(response.data)
            }

            fetchNotes();
        },[search])
        
    return(
        <Container>
            <Header>
                <Input placeholder="Pesquisar pelo título" onChange={e => setSearch(e.target.value)} />
            </Header>

            <section>
                <h1>Meus Filmes</h1>

                <Link to="/new">
                    <FiPlus />
                    Adicionar filme 
                </Link>
            </section>

            <Content>
                {
                    notes.map((note) => (
                        <Card key={String(note.id)} data={note} onClick={() => handdleDetails(note.id)}/>
                    ))
                }
            </Content>
        </Container>
    )
}