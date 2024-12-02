export interface Contact {
    id: number;
    fullName: string;
    email: string;
    phone: string;
}

export interface ContactFormProps {
    onSave: (newContact: Contact) => void;
    onClose: () => void;
    initialContact?: Contact | null; // Add this line
    contact?: Contact; // Se o formulário permitir edição
}

export interface AddContactProps {
    onClose: () => void; // Função para fechar o formulário
    initialContact?: Contact | null;
}