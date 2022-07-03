class Comentario {
    com_id: number;
    texto: string;

    constructor(id:number, texto: string) {
        this.com_id = id;
        this.texto = texto;
    }
}

export{Comentario}