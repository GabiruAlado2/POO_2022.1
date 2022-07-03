import { Forum } from "./forum";
import { Usuario } from "./Usuario";

class Mensagem {
    //Atributos
    men_id: number;
    texto: string;

    //Relacionamentos;
    usuario:Usuario;
    
    constructor(id:number, texto: string, usuario: Usuario) {
        this.men_id = id;
        this.texto = texto;
        this.usuario = usuario;
    }  
}

export{Mensagem}