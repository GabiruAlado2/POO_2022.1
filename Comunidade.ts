import { Categoria } from "./Categoria";
import { Forum } from "./forum";
import { Usuario } from "./Usuario";

class Comunidade {
    com_id: number;
    nome: string;
    imagem: string;

    categoria: Categoria; //N:1
    usuarios: Usuario[]; //1:N
    foruns: Forum[]; //1:N


    constructor(id:number, nome:string, imagem: string, categoria:Categoria) {
        this.com_id = id;
        this.nome = nome;
        this.imagem = imagem;
        this.categoria = categoria;
        this.usuarios = [];
        this.foruns = [];
    }

    add_usuario(usuario:Usuario){
        this.usuarios.push(usuario);
    }

    cadastrar_forum(usuario:Usuario, novo_forum:Forum) {
        let e_membro:boolean = false;

        for (let i=0; i < this.usuarios.length; i++) {
            if (usuario.nome == this.usuarios[i].nome) {
                e_membro = true;
                break;
            }
        }
        
        if (e_membro == true) {
            this.foruns.push(novo_forum)
            console.log('Comunidade criada com sucesso!')
        }
        else {
            console.log('Usuário não é membro; fórum não cadastrado')
        }
    }
}

export{Comunidade}