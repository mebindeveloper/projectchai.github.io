<template>
    <button 
    :class="greenBtn ? 'bg-green' : 'bg-primary'"
    class="py-5 px-6 text-white rounded-lg">
        {{text}}
    </button>
</template>
<script>
export default {
  name: 'CommonButton',
  props: {
    text: String,
    greenBtn: String
  }
}
</script>