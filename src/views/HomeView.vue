<template>
   
    <div class="home h-full mx-width space-y-48">
      <MainBanner />
      <ReimageSection />
      <FounderSection />
      <EnterpriseSection />
  </div>
</template>

<script>
import MainBanner from '@/components/MainBanner.vue'
import ReimageSection from '@/components/ReimageSection.vue'
import EnterpriseSection from '@/components/EnterpriseSection.vue'
import FounderSection from '@/components/FounderSection.vue'
export default {
  name: 'HomeView',
  components: {
    MainBanner,
    ReimageSection,
    EnterpriseSection,
    FounderSection
  }
}
</script>
