import "./App.css"
import React from "react"

import ParOuImpar from "./components/condicional/ParOuImpar"
import TabelaProdutos from "./components/repetição/TabelaProdutos"
import ListaAlunos from "./components/repetição/ListaAlunos"
import Familia from "./components/basicos/Familia"
import FamiliaMenbro from "./components/basicos/FamiliaMenbro"
import Card from "./components/layout/Card"
import Aleatorio from "./components/basicos/Aleatorio"
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'



export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos react</h1>
            <div className="Cards" >
                <Card titulo="#08 - Par ou Impar" color="#597"> 
                    <ParOuImpar numero={20}></ParOuImpar>
                </Card>

                 <Card titulo="#07 - Desafio Repetição" color="#193"> 
                    <TabelaProdutos></TabelaProdutos>
                </Card>
                
                <Card titulo="#06 - Repetição" color="#123"> 
                <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componente com filhos" color="#783"> 
                <Familia sobrenome="Silva">
                    <FamiliaMenbro nome="Pedro" />
                    <FamiliaMenbro nome="Ana"/> 
                    <FamiliaMenbro nome="Gustavo" />
                </Familia>
                </Card>
                
                
                <Card titulo="#04 - Desafio Aleatório" color="#080">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#03 - Componente Freagmentado" color="#008">
                    <Fragmento />
                </Card>
                <Card titulo="#02 - Component com parametro" color="#800">
                    <ComParametro
                        titulo="Situação do aluno"
                        aluno="Pedro"
                        nota={9.3} />
                </Card>
                <Card titulo="#01 - Priemiro Component" color="#620">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}