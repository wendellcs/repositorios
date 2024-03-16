import styled from 'styled-components'

export const Container = styled.div`
    max-width: 700px;
    background: #FFF;
    border-radius: 4px;
    padding: 30px;
    margin: 80px auto;
    box-shadow: 0 0 25px #000;

    h1 {
        font-size: 22px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        
        .title-icon{
            margin-top: -3px;
        }
    }
`

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        border: 1px solid #DDD;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 17px;
        transition: .3s;
        letter-spacing: 1px;

        &:hover {
            box-shadow: 0 0 5px #DDD;
        }

        &:focus {
            border-color: #000;
        }

        &::placeholder {
            color: #999;
            font-style: italic;
        }
    }

`
export const SubmitButton = styled.button.attrs({
    type: 'submit'
})`
    background: #0D2636;
    border: 1px solid transparent;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s;

    &:hover {
        transform: scale(1.05);
    }


`