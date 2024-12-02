import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../../store/reducers/contactsSlice';
import { Contact } from '../../types';
import * as S from './styles';

interface ContactFormProps {
    contact?: Contact;
    onClose?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ contact, onClose }) => {
    const [fullName, setFullName] = useState(contact?.fullName || '');
    const [email, setEmail] = useState(contact?.email || '');
    const [phone, setPhone] = useState(contact?.phone || '');
    
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (fullName.split(' ').length < 2) {
            alert('Por favor, insira seu nome completo!');
            return;
        }
    
        // Verificação se telefone contém apenas números
        if (!/^\d+$/.test(phone)) {
            alert('O campo telefone deve conter apenas números');
            return; 
        }

        if (phone.length < 10) {
            alert('O número de telefone parece estar incompleto');
            return;
        }

        if (contact) {
            // Editar contato existente
            dispatch(editContact({ 
                id: contact.id, 
                fullName, 
                email, 
                phone 
            }));
        } else {
            // Adicionar novo contato
            dispatch(addContact({ 
                fullName, 
                email, 
                phone 
            }));
        }

        // Fechar o formulário após adicionar ou editar
        onClose?.();

        // Limpar o formulário
        setFullName('');
        setEmail('');
        setPhone('');
    };

    return (
        <S.Form onSubmit={handleSubmit}>
    <S.Input 
        type="text" 
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Nome Completo"
        required 
    />
    <S.Input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
        required 
    />
    <S.Input 
        type="tel" 
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Telefone: (xx)xxxx-xxxx"
        required
        title="O número de telefone deve conter apenas números"
    />
    <S.Button type="submit">
        {contact ? 'Atualizar Contato' : 'Adicionar Contato'}
    </S.Button>
</S.Form>
    );
};

export default ContactForm;
