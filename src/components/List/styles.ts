import styled from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    `;

    export const List = styled.ul`
    list-style: none;
    padding: 0;
    `;

    export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    margin-bottom: 10px;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);

    `;

    export const ContactInfo = styled.div`
    flex-grow: 1;
    `;

    export const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    `;

    export const EditButton = styled.button`
    background-color: #2c2c54;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    `;

    export const DeleteButton = styled.button`
    background-color: #b8e994;
    color: #2c2c54;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    .add-contact {
        font-size: 24px; /* Tamanho do ícone */
        color: #007bff; /* Cor do ícone */
        cursor: pointer; /* Indica que é clicável */
        display: inline-flex; /* Garante visibilidade e alinhamento */
        align-items: center;
    }

    .add-contact:hover {
        color: #0056b3; /* Alteração de cor ao passar o mouse */
    }
`;
