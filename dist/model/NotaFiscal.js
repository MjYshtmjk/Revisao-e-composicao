"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotaFiscal = void 0;
const PessoaFisica_1 = require("./PessoaFisica");
const PessoaJurudica_1 = require("./PessoaJurudica");
class NotaFiscal {
    constructor(_numeroNotaFiscal) {
        this.pessoaF = new PessoaFisica_1.PessoaFisica(``, ``);
        this.pessoaJ = new PessoaJurudica_1.PessoaJuridica(``, ``);
        this.numeroNotaFiscal = _numeroNotaFiscal;
    }
    setNumeroNotaFiscal(_numeroNotaFiscal) {
        this.numeroNotaFiscal = _numeroNotaFiscal;
    }
    getNumeroNotaFiscal() {
        return this.numeroNotaFiscal;
    }
}
exports.NotaFiscal = NotaFiscal;
//# sourceMappingURL=NotaFiscal.js.map