import {FiArrowLeft} from 'react-icons/fi'

import { useState } from 'react';
import { api } from '../../services/api';

import { Container , Form} from "./style";
import {Input} from '../../components/Input'
import {Textarea} from '../../components/Textarea'
import {Button} from '../../components/Button'
import { NoteItem } from '../../components/NoteItem';

import { Header } from '../../components/Header'
import { useNavigate, Link } from 'react-router-dom';


export function New(){
    const [title, setTitle] = useState("")
    const [rating , setRating] = useState("")
    const [description, setDescription] = useState("")

    const [tags , setTags] = useState([])
    const [newTags , setNewTags] = useState("")

    const navigate = useNavigate()

    function handdleBack(){
        navigate(-1)
    }

    function handdleAddTags(){
        setTags(prevState => [...prevState, newTags]);

        setNewTags("")
    }

    function handdleRemoveTags(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handdleNewNote(){
        if(!title){
            return alert("Campo de titulo esta vazio")
        }

        if(!rating){
            return alert("Campo de nota esta vazio")            
        }

        if(newTags){
            return alert("Campo de Tags esta vazio")            
        }

        await api.post("/notes" ,{
            title,
            rating,
            description,
            tags
        }) 

        alert('Filme adicionado')
        navigate(-1)
    }

    return(
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <Link to="/">
                            <FiArrowLeft />
                            Voltar
                        </Link>
                        <h1>Novo filme</h1>
                    </header>

                    <div className='inputs'>
                        <Input type="text" placeholder="Título" onChange={e => setTitle(e.target.value)} />
                        <Input type="number" placeholder="Sua nota (de 0 a 5)" onChange={e => setRating(e.target.value)}/>
                    </div>

                    <Textarea placeholder="Observações" onChange={e => setDescription(e.target.value)} />

                    <section>
                        <h2>Marcadores</h2>

                        <div className='tags'>
                            {
                                tags.map((tag, index) =>{
                                    return(
                                        <NoteItem key={String(index)} value={tag} onClick={() => handdleRemoveTags(tag)}/>
                                    )
                                })                                
                            }

                            <NoteItem isNew value={newTags} placeholder="Nova nota" onChange={e => setNewTags(e.target.value)} onClick={handdleAddTags}/>
                        </div>
                    </section>

                    <div className='btns'>
                        <Button title="Excluir filme"></Button>
                        <Button title="Salvar alterações" onClick={handdleNewNote}></Button>
                    </div>
                </Form>
            </main>
        </Container>
    )
}