import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class InputMixin extends Vue {
  @Prop() label!: string;
}
