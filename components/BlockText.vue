
<template>
  <div class="section container" v-html="blockText.text"></div>
</template>

<script>
export default {
  props: ['blockText']
}
</script>