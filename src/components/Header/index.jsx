import { Container, Profile } from "./style";

import { Input } from "../../components/Input"



export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>

            <Input placeholder="Pesquisar pelo título" />

            <Profile>

                <div>
                    <strong>Kauã Araujo</strong>
                    <a href="">sair</a>
                </div>

                <img src="https://github.com/LKaua22k.png" alt="User img" />
            </Profile>
        </Container>
    )
}