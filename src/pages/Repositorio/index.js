import React from "react";
import { useParams } from "react-router-dom";

function Repositorio() {
    const { repositorio } = useParams()
    return (
        <div style={{ color: 'white' }}>
            {decodeURIComponent(repositorio)}
        </div>
    )
}

export default Repositorio