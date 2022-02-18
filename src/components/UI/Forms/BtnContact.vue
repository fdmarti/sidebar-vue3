<template>
  <button
    class="bg-green-600 text-white p-3 shadow-lg rounded-lg uppercase font-semibold hover:bg-green-400 focus:ring transition-all active:translate-y-1 active:transform"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  props: ["text"],
};
</script>
