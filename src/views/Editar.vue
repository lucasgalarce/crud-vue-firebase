<template>
  <div>
    <h1>editar</h1>
    <div>{{ tarea.id }}</div>
    <div>{{ tarea.nombre }}</div>
    <form @submit.prevent="editarTarea(tarea)" class="form-inline">
      <!-- <input v-model="tarea.nombre" /> -->
      <!-- <button type="submit" class="btn btn-secondary btn-sm">Editar</button> -->
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">Nombre</div>
        </div>
        <input type="text" v-model="tarea.nombre" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary mb-2">Editar</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Editar",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  methods: {
    ...mapActions(["getTarea", "editarTarea"]),
  },
  created() {
    this.getTarea(this.id);
  },
  computed: {
    ...mapState(["tarea"]),
  },
};
</script>
