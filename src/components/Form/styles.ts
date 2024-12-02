import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 400px;
    margin: 0 auto;
    `;

    export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    `;

    export const Button = styled.button`
    padding: 10px;
    background-color: #2c2c54;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #1c1c44;
    }
`;