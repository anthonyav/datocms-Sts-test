
<template>
  <div>
    <section class="hero is-primary">

      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth is-large">
          <div class="container">
            <ul>
              <li class="tab" :class="{ 'is-active': index === 0 }" v-on:click="openTab($event, product.id)" v-for="(product, index) in tabProduct.product" :key="product.id">
                <a>{{ product.title}}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

    <div class="container section">
      <div :id="productContent.id" v-bind:style="{ 'display' : [indexContent !== 0 ? 'none' : '']}" class="content-tab" v-for="(productContent, indexContent) in tabProduct.product" :key="productContent.id">
        <div class="columns">
          <div class="column is-three-fifths" v-html="productContent.content ">            
          </div>
          <div class="column">
            <datocms-image :data="productContent.image.responsiveImage" />
          </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['tabProduct'],
  data() {
    return {
      triedToSend: false
    }
  },
  methods: {
    openTab(event, tabName) {
      var i, x, tablinks
      x = document.getElementsByClassName('content-tab')
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none'
      }
      tablinks = document.getElementsByClassName('tab')
      for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' is-active', '')
      }
      document.getElementById(tabName).style.display = 'block'
      event.currentTarget.className += ' is-active'
    } 
  }
}
</script>