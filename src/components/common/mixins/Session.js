export default {
  methods: {
    checkSessionValue() {
      if (!this.$session.get("token")) {
        this.$session.destroy();
        this.$router.push("/register");
      } else {
        alert("get value");
      }
    }
  }
};
