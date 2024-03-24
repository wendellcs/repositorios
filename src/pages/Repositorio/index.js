import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

import { Container, Owner, Loading, BackButton, IssuesList, PageActions } from "./styles";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Repositorio() {
    const { repositorio } = useParams();

    const [repo, setRepo] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

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

    useEffect(() => {
        async function loadIssue() {
            const nomeRepo = decodeURIComponent(repositorio);

            const response = await api.get(`/repos/${nomeRepo}/issues`, {
                params: {
                    state: 'open',
                    page,
                    per_page: 5
                }
            });

            setIssues(response.data);
        }

        loadIssue();
    }, [repositorio, page]);

    function handlePage(action) {
        setPage(action === 'back' ? page - 1 : page + 1);
    }


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

            <IssuesList>
                {issues.map(issue => {
                    return (
                        <li key={String(issue.id)}>
                            <img src={issue.user.avatar_url} alt={issue.user.login} />

                            <div>
                                <strong>
                                    <a href={issue.html_url}>{issue.title}</a>

                                    {issue.labels.map(label => {
                                        return <span key={String(label.id)}>{label.name}</span>
                                    })}
                                </strong>

                                <p>{issue.user.login}</p>
                            </div>
                        </li>
                    )
                })}
            </IssuesList>

            <PageActions>
                <PageActions>
                    <button type="button" disabled={page < 2} onClick={() => handlePage('back')}><FaArrowLeft /></button>
                    <button type="button" onClick={() => handlePage('next')}><FaArrowRight /></button>
                </PageActions>
            </PageActions>

        </Container>
    )
};

export default Repositorio;