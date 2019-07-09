<template>
  <div>
    <h1>Vue Training</h1>

    <text-input label="First Name" v-model="firstName" />

    <text-input label="Last Name" v-model="lastName" />

    <div id="full-name">
      <b>Name:</b>
      {{ firstName }} {{ lastName }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TextInput from "@/components/TextInput.vue";

@Component({
  components: {
    TextInput
  }
})
export default class Home extends Vue {
  firstName: string = "";
  lastName: string = "";
}
</script>

<style lang="scss" scoped>
#full-name {
  margin: 20px 0px;
}
</style>
