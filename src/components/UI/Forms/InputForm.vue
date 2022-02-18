<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="p-3 bg-green-50 rounded shadow-sm focus:outline-none focus:bg-slate-100"
  />
</template>
<script>
export default {
  props: ["placeholder", "modelValue"],
};
</script>
