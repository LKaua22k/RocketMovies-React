import {FiArrowLeft,FiClock,FiStar} from 'react-icons/fi'
import { Container, Content, Status, Cate} from "./style";
import { Header } from '../../components/Header'
import {Tag} from '../../components/Tag'
import { Button} from '../../components/Button';
import { Rating } from '../../components/Rating';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import avatarPlaceholder from '../../../assets/avatar_placeholder.svg'

import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export function Details(){
    const navigate = useNavigate()
    const {user} = useAuth()
    const [data, setData] = useState(null)
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const params = useParams()

    function handdleBack(){
        navigate(-1)
    }

    async function handdleRemove(){
        const confirm = window.confirm('Deseja excluir essa nota?')
    
        if(confirm){
          api.delete(`/notes/${params.id}`)
          navigate(-1)
        }
      }

    useEffect(() => {
        async function fecthNote(){
            const response = await api.get(`/notes/${params.id}`);
            setData(response.data)
        }

        fecthNote();
    }, [])

    
    return(
        <Container>
            <Header />

            {
                data && 
                    <main>
                        <Content>
                            <a onClick={() => handdleBack()}><FiArrowLeft/> Voltar</a>

                            <div className='Title'>
                                <h1>{data.title}</h1>

                            <Rating ratingStar={data.rating} isBig> </Rating>
                                
                            </div>

                            <Status>
                                <div>
                                    <img src={avatarUrl} alt={user.name} />
                                    <span>{user.name}</span>
                                </div>

                                <div>
                                    < FiClock />
                                    <span>23/05/22 às 08:00</span>
                                </div>
                            </Status>

                            {
                                data.tags && 
                                    <Cate>
                                        {
                                            data.tags.map(tag => {
                                                return(
                                                    <Tag key={String(tag.id)} title={tag.name}/>                                                
                                                )
                                            })
                                        }
                                    </Cate>
                            }

                            <p>{data.description}</p>

                            <footer>
                                <Button title="Excluir filme" onClick={() => handdleRemove()}></Button>
                            </footer>
                        </Content>
                </main>
                
            }
        </Container>
    )
}