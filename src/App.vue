<template>
  <div id="app" class="container">
    <div class="text-center">
      <router-link :to="{ name: 'inicio' }">
        <img src="@/assets/logo.png" alt="" />
      </router-link>
    </div>
    <router-view />
  </div>
</template>

//
<script>
// import Inicio from './components/'

// export default {
//   name: app,
//   components: {
//     Inicio
//   }
// }
//
</script>
