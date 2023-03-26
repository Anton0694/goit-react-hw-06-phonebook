import { createSlice } from '@reduxjs/toolkit';

const contactsList = [];

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsList,
    reducers: {
        addContact(state, action) {
            state.push(action.payload);
        },
        deleteContact(state, action) {
            return state.filter(contact => contact.id !== action.payload.id)
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;