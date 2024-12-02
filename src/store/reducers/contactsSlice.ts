import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../../types';

interface ContactsState {
    contacts: Contact[];
}

const initialState: ContactsState = {
    contacts: []
    };

    const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
        const newContact = {
            ...action.payload,
            id: Date.now()
        };
        state.contacts.push(newContact);
        },
        removeContact: (state, action: PayloadAction<number>) => {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
        editContact: (state, action: PayloadAction<Contact>) => {
        const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
        if (index !== -1) {
            state.contacts[index] = action.payload;
        }
        }
    }
});

export const { addContact, removeContact, editContact } = contactsSlice.actions;
export default contactsSlice.reducer;