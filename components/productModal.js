export default {
  template: "#productModalTemplate",
  props: ["product"],
  data() {
    return {
      apiURL: "https://vue3-course-api.hexschool.io/v2/",
      path: "vics",
      newImageUrl: "",
    };
  },
  methods: {
    addImageUrl (){
      this.product.imagesUrl.push(this.newImageUrl);
      this.newImageUrl = "";
    },
    async addProduct() {
      try {
        await axios.post(this.apiURL + "api/" + this.path + "/admin/product", {data: this.product});
        this.$emit("update");
        alert("新增成功");
        this.$emit("closeModal");
      } catch (error) {
        alert("新增失敗");
      }
    },
    async editProduct() {
      try {
        await axios.put(this.apiURL + "api/" + this.path + "/admin/product/" + this.product.id, {data: this.product});
        this.$emit("update");
        alert("修改成功");
        this.$emit("closeModal");
      } catch (error) {
        alert("修改失敗");
      }
    },
  },
}
