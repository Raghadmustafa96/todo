import { useState } from 'react';

export default function useForm(cb) {
    const [item, setItem] = useState({});
    const handleInputChange = event => {
        setItem({ ...item, [event.target.name]: event.target.value })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
        cb(item)
        setItem({});
    }
    
    return {
        handleSubmit,
        handleInputChange,
    }
}
