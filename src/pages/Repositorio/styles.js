import styled from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const Container = styled.div`
    max-width: 700px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0 , 0 , 0 , 0.2);
    padding: 30px;
    margin: 80px auto;
`

export const Owner = styled.header`
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
        width: 150px;
        border-radius: 20%;
        margin: 20px 0 ;
    }

    h1 {
        font-size: 30px;
        color: #0D2636;
    }

    p {
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 14px;
        color: #000;
        text-align: center;
        letter-spacing: 1px;
        line-height: 1.4;
        max-width: 400px;
    }

`

export const BackButton = styled(Link)`
    border: 0;
    outline: 0;
    background: transparent;
`

export const IssuesList = styled.ul`
    list-style: none;
    margin-top: 30px;
    padding-top: 30px;
    border-top:1px solid #DDD;
    
    li {
        display: flex;
        padding: 15px 10px;

        & + li {
            margin-top: 10px;
        }

        img {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            border: 2px solid #0D2636;
        }

        div {
            flex: 1;
            margin-left: 12px;

            p {
                margin-top: 10px;
                font-size: 12px;
                color: #000;
            }
        }

        strong {
            font-size: 15px;

            a {
                text-decoration: none;
                color: #222;
                transition: .3s;

                &:hover {
                    color:#0071db;
                }
            }

            span {
                background: #222;
                color: #FFF;
                border-radius: 4px;
                font-size: 12px;
                font-weight: 600;
                padding: 5px 7px;
                margin-left: 10px;
            }
        } 
    }
`

export const PageActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;

    button {
        outline: 0;
        border: 0;
        background: 0;
        font-size: 30px;
        transition: .3s;

        &:disabled {
            cursor: default;
            opacity: 0;
        }

        &:hover {
            transform: scale(1.1);
        }
    }

`

export const FilterList = styled.div`
    width: 100%;
    margin: 15px 0;
    display: flex;
    justify-content: center;
    gap: 14px;

    button {
        outline: 0;
        border: 1px solid #999;
        background: none;
        border-radius: 4px;
        padding: 5px 8px;
        transition: .3s;

        &:hover {
            background: #0D2636;
            color: #FFF;
        }

        &:nth-child(${props => props.active + 1}) {
            background: #0D2636;
            color: #FFF;
        }
    }

`