import styled from 'styled-components';

const UlMensajes = styled.ul`
    max-width: 800px;
    margin: 10px auto;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;


const LiMensaje = styled.li`
    background-color: #fff3cd;
    border: 2px solid #ffeeba;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 8px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
`;



export {
    UlMensajes, LiMensaje
}