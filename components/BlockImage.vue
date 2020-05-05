
<template>
  <div class="section container has-text-centered">
    <datocms-image :data="blockImage.image.responsiveImage" />
  </div>
</template>

<script>
export default {
  props: ['blockImage']
}
</script>