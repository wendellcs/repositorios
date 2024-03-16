import React from "react";
import { FaGithub, FaPlus } from 'react-icons/fa'
import { Container, Form, SubmitButton } from "./styles";

function Main() {
    return (
        <Container>
            <h1>
                <FaGithub size={25} className="title-icon" />
                Meus repositórios
            </h1>

            <Form onSubmit={() => { }}>
                <input type="text" placeholder="Adicionar Repositórios" />

                <SubmitButton >
                    <FaPlus color="#fff" size={14} />
                </SubmitButton>
            </Form>
        </Container>
    )
}

export default Main