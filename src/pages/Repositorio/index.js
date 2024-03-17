import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

import { Container } from "./styles";

function Repositorio() {
    const { repositorio } = useParams()

    const [repo, setRepo] = useState({})
    const [issues, setIssues] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            const nomeRepo = decodeURIComponent(repositorio)

            const [repositorioData, issuesData] = await Promise.all([
                api.get(`/repos/${nomeRepo}`),
                api.get(`/repos/${nomeRepo}/issues`, {
                    params: {
                        state: 'open',
                        per_page: 5
                    }
                })
            ])

            setRepo(repositorioData.data)
            setIssues(issuesData.data)
            setLoading(false)
        }

        load()

    }, [repositorio])

    return (
        <Container>

        </Container>
    )
}

export default Repositorio