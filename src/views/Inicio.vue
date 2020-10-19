<template>
  <div>
    <h1>Lita de tareas</h1>
    <router-link :to="{ name: 'agregar' }">
      <button>Agregar</button>
    </router-link>
    <ul class="list-group">
      <li class="list-group-item" v-for="tarea of tareas" :key="tarea.id">
        {{ tarea.id }} - {{ tarea.nombre }}
        <router-link :to="{ name: 'editar', params: { id: tarea.id } }">
          <button>Editar</button>
        </router-link>
        <button @click="eliminarTarea(tarea.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Inicio",
  methods: {
    ...mapActions(["getTareas", "eliminarTarea"]),
  },
  created() {
    this.getTareas();
  },
  computed: {
    ...mapState(["tareas"]),
  },
};
</script>
