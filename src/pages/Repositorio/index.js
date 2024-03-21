import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

import { Container, Owner, Loading, BackButton } from "./styles";
import { FaArrowLeft } from 'react-icons/fa';

function Repositorio() {
    const { repositorio } = useParams();

    const [repo, setRepo] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const nomeRepo = decodeURIComponent(repositorio);

            const [repositorioData, issuesData] = await Promise.all([
                api.get(`/repos/${nomeRepo}`),
                api.get(`/repos/${nomeRepo}/issues`, {
                    params: {
                        state: 'open',
                        per_page: 5
                    }
                })
            ]);

            setRepo(repositorioData.data);
            setIssues(issuesData.data);
            setLoading(false);
        }

        load()

    }, [repositorio]);


    if (loading) {
        return (
            <Loading>
                Carregando...
            </Loading>
        )
    }

    return (
        <Container>
            <BackButton to={'/'}><FaArrowLeft color="#000" size={35} /></BackButton>
            <Owner>
                <img src={repo.owner.avatar_url} alt={repo.owner.login} />

                <h1>{repo.name}</h1>

                <p>{repo.description}</p>
            </Owner>

        </Container>
    )
};

export default Repositorio;