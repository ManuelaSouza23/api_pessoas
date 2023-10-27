"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("../model/Pessoa");
let pessoa = new Pessoa_1.Pessoa('João', '11111111', new Date(2000, 9, 15), '000000', 'Rua Numero 1', 170, 70);
pessoa.falar();
pessoa.falarFrase("hello guys");
console.log("\in");
let pessoa2 = new Pessoa_1.Pessoa('Maria Zeferina', '3333333', new Date(1972, 8, 29), '99999999', 'Rua das Corridas', 165, 55);
pessoa2.andar();
pessoa2.andarQuilometros(20);
console.log("\n");
let pessoa3 = new Pessoa_1.Pessoa('Garfield', '222222222', new Date(1978, 6, 19), '999999999', 'Rua das Lasanhas', 40, 15);
pessoa3.comer();
pessoa3.comerPrato("lasanha");
console.log("\n");
pessoa.cadastroPessoa(pessoa);
//# sourceMappingURL=teste.js.map