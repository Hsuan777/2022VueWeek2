export default {
  template: "#pagination",
  props: ["pages"],
  methods: {
    emitPages(item) {
      this.$emit("emit-pages", item);
    },
  },
}
