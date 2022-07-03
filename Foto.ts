import{Comentario} from './Comentario';
import { Usuario } from './Usuario';

class Foto {
    //Atributos
    fot_id: number;
    url: string;
    likes: number = 0;

    //Relacionamentos
    comentarios:Comentario[];
    
    constructor(id:number, url: string) {
        this.fot_id = id;
        this.url = url;
        this.comentarios = [];
    }

    add_comentario(comentario:Comentario) {
        this.comentarios.push(comentario);
    }

    curtir_foto(usuario: Usuario){
        this.likes +=1;
    }

}

export{Foto}