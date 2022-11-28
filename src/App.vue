<template>
  <div class="mx-width p-14 text-primary bg-background  font-proxima-nova">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "HomeView",
  components: {
    Header,
    Footer,
  },
};
</script>
