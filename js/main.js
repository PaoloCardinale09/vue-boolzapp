const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      message: "hello",
    };
  },
});

app.mount("#app");
