<template>
  <div class="home">
    <Body />
  </div>
</template>

<script>
// @ is an alias to /src
import Body from "@/components/Body.vue";

export default {
  name: "HomeView",
  components: {
    Body,
  },
};
</script>
