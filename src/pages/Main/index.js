import React, { useState, useCallback, useEffect } from "react";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa'
import { Container, Form, SubmitButton, List, DeleteButton } from "./styles";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import api from "../../services/api";

function Main() {

    const [newRepo, setNewRepo] = useState('')
    const [repositorios, setRepositorios] = useState([])
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(null)


    useEffect(() => {
        if (localStorage.getItem('repos')) {
            setRepositorios(JSON.parse(localStorage.getItem('repos')))
        }
    }, [])

    // Salvar as alterações
    useEffect(() => {
        localStorage.removeItem('repos')
        localStorage.setItem('repos', JSON.stringify(repositorios))
    }, [repositorios])

    const handleSubmit = useCallback((e) => {
        e.preventDefault();


        async function submit() {
            setLoading(true)
            setAlert(null)
            try {
                if (!newRepo) {
                    throw new Error("Você precisa indicar um repositório...")
                }

                const response = await api.get(`repos/${newRepo}`)

                const hasRepo = repositorios.find(repo => repo.name === newRepo)
                if (hasRepo) {
                    throw new Error('Repositório já adicionado.')
                }

                const data = {
                    name: response.data.full_name
                }

                setRepositorios([...repositorios, data])
                toast.success('Encontrado')
                setNewRepo('')

            } catch (err) {
                setAlert(true)
                toast.error(err.message)
            } finally {
                setLoading(false)
            }
        }

        submit()
    }, [newRepo, repositorios])

    const handleDelete = useCallback((repo) => {
        const find = repositorios.filter(r => r.name !== repo)
        setRepositorios(find)
    }, [repositorios])


    return (
        <Container>
            <h1>
                <FaGithub size={25} className="title-icon" />
                Meus repositórios
            </h1>

            <Form onSubmit={handleSubmit} error={alert}>
                <input type="text"
                    placeholder="Adicionar Repositórios"
                    value={newRepo}
                    onChange={(e) => {
                        setNewRepo(e.target.value)
                        setAlert(null)
                    }}
                />

                <SubmitButton loading={loading ? 1 : 0}>
                    {loading ? (
                        <FaSpinner color="#fff" size={14} />
                    ) : (

                        <FaPlus color="#fff" size={14} />
                    )}
                </SubmitButton>
            </Form>


            <List>
                {repositorios.map(repo => {
                    return (

                        <li key={repo.name}>
                            <span>
                                <DeleteButton onClick={() => { handleDelete(repo.name) }}>
                                    <FaTrash size={14} />
                                </DeleteButton>
                                {repo.name}
                            </span>
                            <Link to={`/repositorio/${encodeURIComponent(repo.name)}`}>
                                <FaBars size={20} />
                            </Link>
                        </li>
                    )
                })}

            </List>

        </Container>
    )
}

export default Main