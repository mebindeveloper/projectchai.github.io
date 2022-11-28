<template>
  <div
    class="grid grid-flow-col md:grid-flow-row grid-cols-2 gap-0 items-center"
  >
    <div class="">
      <img alt="Vue logo" src="../assets/item_4.png" />
      <h2 class="font-bely text-5xl my-6">
        Kickstart an organization with your co-founders
      </h2>
      <p class="text-lg max-w-4xl mb-10">
        It’s the early days, you just had a long conversation with two friends
        about a meaningful challenge that you’re all passionate about and have a
        potential solution for. You’re ready to embark the startup journey.
      </p>
    </div>
    <div class="flex pl-32">
      <div class="relative">
        <div
          class="border-4 px-10 py-8 rounded-2xl border-primary bg-white w-484 font-pt-mono z-10 relative h-400"
        >
          <h4 class="text-3-2xl mb-6">Members</h4>
          <div class="flex flex-col space-y-6">
          <div class="flex">
            <img alt="Vue" src="@/assets/member_1.png" />
            <div class="flex-col ml-4 pt-1">
               <h5 class="text-2xl"> Dillon Kydd</h5>
              <span class="text-grey text-base">100 SHARES</span>  
            </div>
          </div>
          <div class="flex">
            <img alt="Vue" src="@/assets/member_2.png" />
            <div class="flex-col ml-4 pt-1">
               <h5 class="text-2xl"> Anna Olsen</h5>
              <span class="text-grey text-base">100 SHARES</span>  
            </div>
          </div>
          <div class="flex">
            <img alt="Vue" src="@/assets/member_3.png" />
            <div class="flex-col ml-4 pt-1">
               <h5 class="text-2xl"> Kas Moss</h5>
              <span class="text-grey text-base">100 SHARES</span>  
            </div>
          </div>
          </div>
        </div>
        <div class="rounded-2xl bg-green w-484 absolute -right-4 top-4 h-400">
            &nbsp;
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FounderSection",
};
</script>
