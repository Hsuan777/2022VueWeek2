export default {
  template: "#productDelModalTemplate",
  props: ["item"],
  data() {
    return {
      apiURL: "https://vue3-course-api.hexschool.io/v2/",
      path: "vics",
    }
  },
  methods: {
    async delProduct() {
      try {
        await axios.delete(this.apiURL + "api/" + this.path + "/admin/product/" + this.item.id);
        this.$emit("update");
        alert("刪除成功");
        this.$emit("closeModal");
      } catch (error) {
        alert("刪除失敗");
      }
    },
  },
}
