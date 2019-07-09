<template>
  <div>
    <h1>Vue Training</h1>

    <text-input label="First Name" v-model="firstName" />

    <text-input label="Last Name" v-model="lastName" />

    <div id="full-name">
      <b>Name:</b>
      {{ fullName }}
    </div>

    <button @click="submit">Submit</button>
    <button @click="clearInputs">Clear All</button>
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
  get firstName(): string {
    return this.$store.state.firstName;
  }

  set firstName(value: string) {
    this.$store.commit("UPDATE_FIRST_NAME", value);
  }

  get lastName(): string {
    return this.$store.state.lastName;
  }

  set lastName(value: string) {
    this.$store.commit("UPDATE_LAST_NAME", value);
  }

  get fullName(): string {
    return this.$store.getters.fullName;
  }

  submit() {
    this.$store.dispatch("submit");
  }

  clearInputs() {
    this.$store.dispatch("clearAll");
  }
}
</script>

<style lang="scss" scoped>
#full-name {
  margin: 20px 0px;
}

button {
  margin-right: 10px;
}
</style>
