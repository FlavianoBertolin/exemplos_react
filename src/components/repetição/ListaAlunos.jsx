import React from "react";
import alunos from "../../data/alunos"
export default function alu(props){


    const lis = alunos.map(function liss(aluno) {
        return (
            <li key={aluno.id}>
                {aluno.id} {")"} {aluno.nome} {"->"} {aluno.nota}
            </li>
        )
    })
    return (
        <div>
            <ul style={{ listStyle: "none"}}>
               {lis}
            </ul>
        </div>
    )
}