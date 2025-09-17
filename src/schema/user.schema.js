import {z} from 'zod';

const userSchema = z.object({
    username: z.string().min(3, "Username is required"),
    email: z.email("Invalid email"),
    password: z.string().min(6, 'Password is required'),
    avatar: z.url('Invalid URL').optional()
});

const userIdSchema = z.object({
    userId: z.number().int().positive('User ID must be a positive integer'),
});

export {userSchema, userIdSchema}; 