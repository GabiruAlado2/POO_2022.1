import { Comunidade } from "./Comunidade";
import { Foto } from "./Foto";

class Usuario {
    //Atributos
    id: number;
    nome: string;
    idade: number;
    email: string;
    login: string;
    senha: string;
    avatar: Foto;

    //Relacionamentos
    amigos: Usuario[]; //1:N
    fotos: Foto[]; //1:N
    comunidades: Comunidade[] //1:N

    constructor(id:number, nome: string, idade:number, email:string, login:string, senha:string, avatar:Foto, ) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.login = login;
        this.senha = senha;
        this.avatar = avatar;
    }

    add_amigo(usuario:Usuario){
        for (let i = 0; i < this.amigos.length; i++){
            if (usuario.nome != this.amigos[i].nome) {
                this.amigos.push(usuario);
                break;
            }
            else {
                console.log('Usuário já adicionado como amigo')
            }
        } 
    }

    add_foto(nova_foto:Foto){
        this.fotos.push(nova_foto)
    }

    cadastrar_comunidade(nova_comunidade:Comunidade) {
        this.comunidades.push(nova_comunidade);
    }
}

export{Usuario}