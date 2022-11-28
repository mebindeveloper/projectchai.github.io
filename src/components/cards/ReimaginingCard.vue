<template>
  <div class="flex flex-col items-center text-center shadow-md h-80 justify-center p-6">
    <img :src="require(`@/assets/${info.image}`)" />
    <h3 class="text-2xl font-bold my-4">{{ info.title }}</h3>
    <p class="text-lg">{{ info.dec }}</p>
  </div>
</template>
<script>
export default {
  name: "ReimaginingCard",
  props: {
    info: Object,
  },
};
</script>
