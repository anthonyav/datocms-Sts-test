
<template>
  <div class="section container">
    <div class="columns is-vcentered">
      <div class="column" v-for="image in blockMultiImage.image" :key="image.id">
        <datocms-image :data="image.responsiveImage" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blockMultiImage']
}
</script>