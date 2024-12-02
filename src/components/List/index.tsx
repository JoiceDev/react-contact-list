import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { removeContact } from '../../store/reducers/contactsSlice';
import * as S from './styles';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Contact } from '../../types';
import ContactForm from '../Form';


const ContactList: React.FC = () => {
    const contacts = useSelector((state: RootState) => state.contacts.contacts);
    const dispatch = useDispatch();
    const [contactFormVisibility, setContactFormVisibility] = useState(false);
    const [editingContact, setEditingContact] = useState<Contact | null>(null);

    const toggleContactFormVisibility = () => {
        setContactFormVisibility(prev => !prev);
        // Reset editing contact when closing the form
        if (contactFormVisibility) {
            setEditingContact(null);
        }
        
    };

    const handleDelete = (id: number) => {
        dispatch(removeContact(id));
    };

    const handleEdit = (contact: Contact) => {
        setEditingContact(contact); // Set the specific contact to be edited
        setContactFormVisibility(true); // Show the form
    };

    return (
        <>
            <S.Container>
                <S.Header>
                    <h2>Lista de Contatos</h2>
                    <span title='Adicionar novo' onClick={toggleContactFormVisibility} className="add-contact">
                        <i className="fas fa-plus"></i>
                    </span>
                </S.Header>
                {contactFormVisibility && (
    <ContactForm 
        onClose={toggleContactFormVisibility} 
        contact={editingContact || undefined} 
    />
)}
                <S.List>
                    {contacts.map(contact => (
                        <S.ListItem key={contact.id}>
                            <S.ContactInfo>
                                <strong>{contact.fullName}</strong>
                                <p>{contact.email}</p>
                                <p>{contact.phone}</p>
                            </S.ContactInfo>
                            <S.ButtonGroup>
                                <S.EditButton onClick={() => handleEdit(contact)}>
                                    Editar
                                </S.EditButton>
                                <S.DeleteButton onClick={() => handleDelete(contact.id)}>
                                    Remover
                                </S.DeleteButton>
                            </S.ButtonGroup>
                        </S.ListItem>
                    ))}
                </S.List>
            </S.Container>
        </>
    );
};

export default ContactList;
