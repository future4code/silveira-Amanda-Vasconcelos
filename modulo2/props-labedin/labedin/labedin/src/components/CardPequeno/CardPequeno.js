import React from "react";

export default function CardPequeno(props) {
    return(
        <div className="bigcard-container">
            <img src={props.imagem}/>
            <div>
                <h6>{ props.nome }</h6>
                <p>{ props.descricao }</p>
            </div>
        </div>
    );

}