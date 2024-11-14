import Titulo from "./Titulo.jsx"
import "./App.css"
import { useEffect, useState } from "react";

function App() {
    const [contador, setContador] = useState(1);
    const [nome, setNome] = useState("Guilherme");
    const [email, setEmail] = useState("guilherme.emanuel@sistemafiep.org");

    useEffect(())

    return (
        <>
            <Titulo />
            <h2>{contador}</h2>
            <button onClick={() => {
                setContador(contador + 1)
            }}>+</button>
            <button onClick={() => {
                setContador(contador - 1)
            }}>-</button>

            <h1>Cadastro</h1>
            {nome} - {email}
            <div>
                <input type="text" 
                    placeholder="Nome" 
                    onChange={(e)=>{
                        setNome(e.target.value)
                    }}/>

                <input type="email" placeholder="E-mail" />
            </div>
            
        </>
    )
}

export default App