<template>
  <div class="ta-input">
    <label>{{ label | capitalize }}</label>
    <div>
      <input :value="value" @input="$emit('input', $event.target.value)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins, Model } from "vue-property-decorator";
import InputMixin from "../mixins/InputMixin";

@Component
export default class TextInput extends Mixins(InputMixin) {
  @Prop() value!: string;
}
</script>

<style lang="scss" scoped>
.ta-input {
  margin: 20px 0px;
}

label {
  font-size: 14px;
}
</style>
