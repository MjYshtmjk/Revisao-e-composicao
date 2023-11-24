"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotaFiscal_1 = require("./model/NotaFiscal");
const notaF1 = new NotaFiscal_1.NotaFiscal(`213578-952`);
notaF1.pessoaF.setNome(`Matthew Patel`);
notaF1.pessoaF.setCpf(`79797979544-67`);
console.log(`Nome: ${notaF1.pessoaF.getNome()}`);
console.log(`CPF: ${notaF1.pessoaF.getCpf()}`);
console.log(`Nota Fiscal N: ${notaF1.getNumeroNotaFiscal()}`);
const notaF2 = new NotaFiscal_1.NotaFiscal(`547frfr5-22`);
notaF2.pessoaF.setNome(`Ramona Flower`);
notaF2.pessoaF.setCpf(`97397487559-58`);
console.log(`Nome: ${notaF2.pessoaF.getNome()}`);
console.log(`CPF: ${notaF2.pessoaF.getCpf()}`);
console.log(`Nota Fiscal N: ${notaF2.getNumeroNotaFiscal()}`);
//# sourceMappingURL=index.js.map