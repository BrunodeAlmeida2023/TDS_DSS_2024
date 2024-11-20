import { useEffect, useState } from "react";
import axios from "axios";
import Titulo from "./Titulo.jsx"
import "./App.css"

const Api = axios.create({
    baseURL: "http://localhost:8080/"
});

function App() {
    const [contador, setContador] = useState(1);
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();

    const [alunos, setAlunos] = useState();

    useEffect(() => {
        consultaAlunos();
    }, [])

    function salvarAluno() {
        Api.post("aluno", {nome, email}).then((response)=>{
            console.log(response.data)
            consultaAlunos();
        });   
    }

    function consultaAlunos(){
        Api.get("aluno").then((response) => {
            // console.log(response.data)
            setAlunos(response.data)
        });
    }

    return (
        <>
            <Titulo />
            <h2>{contador}</h2>
            <button onClick={() => (
                setContador(contador + 1)
            )}>+</button>
            <button onClick={() => (
                setContador(contador - 1)
            )}>-</button>

            <h1>Cadastro</h1>

            <ol>
                {alunos?.map((item, index) => (
                    <li key={index}>{item.nome} - {item.email}</li>
                ))}
            </ol>

            {nome} - {email}

            <div>
                <input type="text"
                    placeholder="Nome"
                    onChange={(e) => (
                        setNome(e.target.value)
                    )} />

                <input
                    type="email"
                    placeholder="E-mail"
                    onChange={(e) => (
                        setEmail(e.target.value)
                    )}
                />
                <button
                    onClick={() => {
                        salvarAluno()
                    }}>
                    Salvar
                </button>
            </div>



        </>
    )
}

export default App