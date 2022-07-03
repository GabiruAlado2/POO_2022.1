import { Mensagem } from "./Mensagem";
import { Usuario } from "./Usuario";

class Forum {
    //Atributos
    for_id: number;
    titulo: string;
    descricao: string;
    
    //Relacionamentos
    mensagens: Mensagem[] // 1:N

    constructor(id: number, titulo: string, descricao:string) {
        this.for_id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.mensagens = []
    }
       
    enviar_mensagem(usuario:Usuario, mensagem: Mensagem){
        this.mensagens.push(mensagem);
    }
}

export{Forum}