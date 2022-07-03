import { Comunidade } from "./Comunidade";
import { Usuario } from "./Usuario";

class Orkut_quixada {
    //Atrbiutos
    ork_id: number;
    nome: string;
    descricao: string;

    //Relcionamentos
    comunidades: Comunidade[];
    usuarios: Usuario[];

    constructor(id:number, nome:string, descricao:string) {
        this.ork_id = id;
        this.nome = nome;
        this.descricao = descricao;
    }

    cadastrar_usuario(novo_usuario:Usuario) {
        this.usuarios.push(novo_usuario);
    }
}

export{Orkut_quixada}









