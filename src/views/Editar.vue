<template>
  <div>
    <h1>editar</h1>
    <div>{{ tarea.id }}</div>
    <div>{{ tarea.nombre }}</div>
    <form @submit.prevent="editarTarea(tarea)">
      <input v-model="tarea.nombre" />
      <button type="submit">Editar</button>
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
