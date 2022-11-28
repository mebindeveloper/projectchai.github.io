<template>
  <div class="flex flex-col items-center">
    <h2 class="font-bely text-5xl">Reimagining what it means to work</h2>
    <p class="text-lg max-w-4xl my-6">
      Teams and communities using Open Enterprise fundamentally unlock a reality
      of work that reimagines how people engage in economic opportunity, meeting
      the demands and expectations of a modern organization.
    </p>
    <div class="w-full grid grid-flow-col md:grid-flow-row grid-cols-3 gap-4 mt-12">
      <div v-for="(item, index) of items">
        <ReimaginingCard :info="item" />
      </div>
    </div>
  </div>
</template>
<script>
import ReimaginingCard from "@/components/cards/ReimaginingCard.vue";
export default {
  name: "ReimageSection",
  components: {
    ReimaginingCard,
  },
  data() {
    return {
      items: [
        {
          title: "Modern workforce",
          dec: "Multistakeholder governance aligns employees with the organization’s wider community.",
          image: "item_1.png",
        },
        {
          title: "Meritocratic by design",
          dec: "Tokenized ownership aligns deeply committed individuals with the organization’s success.",
          image: "item_2.png",
        },
        {
          title: "Engineered for resilience",
          dec: "Open Enterprise supports best practices in sociocratic management.",
          image: "item_3.png",
        },
      ],
    };
  },
};
</script>
