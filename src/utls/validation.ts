import { z } from 'zod'

export const validateData = <T extends z.ZodTypeAny>(schema: T, formData: z.infer<T>) => {
    const validation = schema.safeParse(formData)

    if (!validation.success) {
        // If validation fails, flatten errors and return them along with null data
        const errors = validation.error.flatten().fieldErrors;
        return { errors, data: null };
    }

    return { errors: null, data: validation.data }
}