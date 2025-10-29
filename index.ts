import { z } from "zod";
import email = require("zod");

const cartSchema = z.object({
    clienteId: z.string().uuid('Deve ser UUID'),
    products: z.array(z.object({
        name: z.string().min(3,'Deve conter pelomenos 3 carcater'),
        price: z.number().min(1),
        qtd: z.number().min(1),
        category: z.array(z.string().min(1))
    }))
})


const cart = {
    clienteId: crypto.randomUUID(),
    products: [
       { 
        name: 'Notbook',
        price: 5000,
        qtd: 1,
        category: ['Eletronico']
        }
    ]
}

console.log(cartSchema.safeParse(cart))
