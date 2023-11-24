import { PessoaFisica } from "./PessoaFisica";
import { PessoaJuridica } from "./PessoaJurudica";

export class NotaFiscal {

    private numeroNotaFiscal: string;
    public pessoaF = new PessoaFisica(``,``);
    public pessoaJ = new PessoaJuridica(``,``);

    constructor(_numeroNotaFiscal: string){
        this.numeroNotaFiscal = _numeroNotaFiscal;
    }

    public setNumeroNotaFiscal(_numeroNotaFiscal: string):void{
        this.numeroNotaFiscal = _numeroNotaFiscal;
    }

    public getNumeroNotaFiscal():string{
        return this.numeroNotaFiscal;
    }
}