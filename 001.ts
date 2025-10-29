import { z } from "zod";

const usernameSchema = z
  .string()
  .min(3, "O nome deve ter no mínimo 3 caracteres")
  .max(20, "O nome deve ter no máximo 20 caracteres");

const validParse = usernameSchema.parse("Jose");
const invalidParse = usernameSchema.parse("Jo");

console.log("Válido:", validParse);
console.log("Inválido:", invalidParse);
