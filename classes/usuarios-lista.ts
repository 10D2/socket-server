import { Usuario } from "./usuario";


export class UsuariosLista {

    private lista: Usuario[] = []

    constructor() {
    }

    //Agregar un usuario
    public agregar(usuario: Usuario) {

        this.lista.push(usuario)
        console.log(this.lista)
        return usuario
    }

    // Actualizar nombre
    public actualizarNombre(id: string, nombre: string) {

        for (const usuario of this.lista) {

            if (usuario.id === id) {

                usuario.nombre = nombre
                break
            }
        }
        console.log('===== Actualizando usuario =====')
        console.log('ACTUALIZAR USUARIO:', this.lista)
    }

    // Obtener lista de usuario
    public getLista() {
        return this.lista.filter(usuario =>  usuario.nombre !== 'sin-nombre')
    }

    // Retornar un usuario

    public getUsuario(id: string) {

        return this.lista.find(usuario => usuario.id === id)

    }

    // Obtener los usuarios en una sala en particular

    public getUsuariosEnSala(sala: string) {

        return this.lista.filter(usuario => usuario.sala === sala)
    }

    // Borrar un usuario

    public borrarUsuario(id: string) {
        const tempUsuario = this.getUsuario(id)

        this.lista = this.lista.filter(usuario => {
            return usuario.id !== id
            //       console.log('La lista actual es: ', this.lista.length)
        })
        //  console.log('La lista actual es: ', this.lista.length)
        return tempUsuario;
    }

}