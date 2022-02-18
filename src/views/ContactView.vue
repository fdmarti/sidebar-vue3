<template>
  <div class="flex justify-center">
    <section class="flex flex-col mt-40 w-2/4 gap-5">
      <InputForm v-model="form.name" placeholder="Name" />
      <InputForm v-model="form.email" placeholder="Email" />
      <textarea
        placeholder="Message"
        v-model="form.message"
        cols="30"
        rows="10"
        class="p-3 bg-green-50 rounded shadow-sm focus:outline-none focus:bg-slate-100"
      ></textarea>
      <BtnContact text="Submit" />
    </section>
  </div>
</template>
<script>
import { reactive } from "@vue/reactivity";
import InputForm from "../components/UI/Forms/InputForm.vue";
import BtnContact from "../components/UI/Forms/BtnContact.vue";
export default {
  components: { InputForm, BtnContact },

  setup() {
    const form = reactive({
      email: "",
      name: "",
      message: "",
    });

    return {
      form,
    };
  },
};
</script>
