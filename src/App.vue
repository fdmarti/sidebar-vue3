<template>
  <div>
    <NavbarComponent />
    <div class="bg-green-100 min-h-screen">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import NavbarComponent from "./components/UI/SideBar/NavbarComponent.vue";
export default {
  setup() {},
  components: { NavbarComponent },
};
</script>
