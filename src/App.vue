<template>
  <div>
    <NavbarComponent />
    <div class="ml-16">
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
