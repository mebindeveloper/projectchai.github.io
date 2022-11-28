<template>
  <div class="grid grid-flow-col md:grid-flow-row grid-cols-2 gap-0 items-center">
    <div class="">
      <h2 class="font-bely text-5xl my-6">Start an Open Enterprise</h2>
      <p class="text-lg max-w-4xl mb-10">
        If you can’t wait to run a new or existing organization on Open Enterprise and are willing to explore and navigate the beta, we’d love to get you started.
      </p>

      <CommonButton text="Request early access" greenBtn=true />
    </div>
    <div class="h-96">
      <img alt="Vue logo" src="../assets/Vector.png" />
    </div>
  </div>
</template>
<script>

import CommonButton from "@/components/CommonButton.vue";
export default {
  name: "EnterpriseSection",
  components: {
  CommonButton
 }
};
</script>