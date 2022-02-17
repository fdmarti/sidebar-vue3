<template>
  <router-link :to="to" class="flex justify-center gap-2 items-center">
    <i class="bx bx-sm" :class="icon"></i>
    <span v-if="!stateSideBar">{{ text }}</span></router-link
  >
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  props: ["to", "text", "icon"],

  setup() {
    const store = useStore();
    const stateSideBar = computed(() => store.getters["sideBarCollapsed"]);

    return {
      stateSideBar,
    };
  },
};
</script>
