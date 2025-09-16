import {z} from 'zod';

const userSchema = z.object({
    username: z.string().min(3, 'Username is required'),
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password is required'),
    avatar: z.string().url('Invalid URL').optional()
});

export {userSchema}; 