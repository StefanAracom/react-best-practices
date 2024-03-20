import axios from 'axios';
import { Form } from './Form.tsx';

export function Good() {
    const handleSubmit = async (email: string, password: string) => {
        await axios.post('https://localhost:3000/login', {
            email,
            password,
        });
    };
    return <Form onSubmit={handleSubmit} />;
}
