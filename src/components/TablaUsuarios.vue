<template>
    <div id="tabla-usuarios">
        <div v-if="!usuarios.length" class="alert alert-info" role="alert">
            No hay usuarios registrados
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="usuario in usuarios" :key="usuario.id">

                    <td v-if="editando === usuario.id">
                        <input type="text" class="form-control" v-model="usuario.name">
                    </td>
                    <td v-else>
                        {{usuario.name}}
                    </td>

                    <td v-if="editando === usuario.id">
                        <input type="text" class="form-control" v-model="usuario.email">
                    </td>
                    <td v-else>
                        {{usuario.email}}
                    </td>

                    <td v-if="editando === usuario.id">
                        <button class="btn btn-success" @click="guardarUsuario(usuario)">💾 Guardar</button>
                        <button class="btn btn-secondary ml-2" @click="cancelarEdicion(usuario)">❌ Cancelar</button>
                    </td>
                    <td v-else>
                        <button class="btn btn-danger" @click="$emit('eliminar-usuario',usuario)">🗑️ Borrar</button>
                        <button class="btn btn-info ml-2" @click="editarUsuario(usuario)">✏️ Editar</button>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default{
        name: 'tabla-usuarios',
        props:{
            usuarios: Array,
        },
        data(){
            return{
                editando : null,
            }
        },
        methods: {
            editarUsuario(usuario){
                this.usuarioEditado = Object.assign({},usuario)
                this.editando = usuario.id
            },
            guardarUsuario(usuario){
                if(!usuario.name.length || !usuario.email.length){
                    return
                }
                this.$emit('actualizar-usuario',usuario)
                this.editando = null
            },
            cancelarEdicion(usuario){
                Object.assign(usuario,this.usuarioEditado)
                this.editando = null
            }
        },
    }
</script>