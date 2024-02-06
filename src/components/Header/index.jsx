import { Container, Profile, Search } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import avatarPlaceholder from '../../../assets/avatar_placeholder.svg'



export function Header({children}){
    const {SignOut , user} = useAuth()
    const navigate = useNavigate()

    function handdleSignOut(){
        navigate('/');
        SignOut();
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return(
        <Container>
            <h1>RocketMovies</h1>

            <Search>{children}</Search>

            <Profile>
                <div>
                    <strong>{user.name}</strong>
                    <a onClick={handdleSignOut}>sair</a>
                </div>

                <Link className="Avatar" to='/profile'>
                    <img src={avatarUrl} alt={user.name} />
                </Link>
            </Profile>
        </Container>
    )
}