import { z } from "zod";

const usernameSchema = z.object({
    email: z.string().email('Email invalido'),
    age: z.number().min(18,'A idade deve ser entre 18 e 100').max(100),
    surname: z.string().min(2).optional()
})

const user = {
    email: 'jose@test.com',
    age: 18,
    surname: 'Zé'
}

const {success, error} = usernameSchema.safeParse(user)
console.log(success)
console.log(error)
console.log(usernameSchema.parse(user))