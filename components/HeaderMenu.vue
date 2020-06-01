<template>
  <nav class="navbar is-transparent">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img
            src="/images/logo-stoptalon-serrurerie1-212x80.png"
            alt="Stoptalon Serrurerie"
            width="80"
          />
        </nuxt-link>
        <a class="navbar-burger" role="button" data-target="navMenuHeader" aria-label="menu" aria-expanded="false" :class="[navbarOpen ? 'is-active' : '']" v-on:click="toggleNavbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navMenuHeader" class="navbar-menu" :class="[navbarOpen ? 'is-active' : '']">
        <div class="navbar-start">
          <template v-for="menuItem in menu">
            <nuxt-link
              :to="`/${menuItem.menuLink._modelApiKey}s/${menuItem.menuLink.slug}/`"
              class="navbar-item"
              :key="menuItem.id"
              v-if="!menuItem.hasOwnProperty('submenuItem')"
              v-on:click.native="toggleNavbar"
            >{{ menuItem.name }}</nuxt-link>

            <div
              class="navbar-item has-dropdown is-hoverable"
              v-if="menuItem.hasOwnProperty('submenuItem')"
              :key="menuItem.id"
            >
              <a class="navbar-link">{{ menuItem.name }}</a>

              <div class="navbar-dropdown is-boxed">
                <nuxt-link
                  :to="`/${submenuItem._modelApiKey}s/${submenuItem.slug}/`"
                  class="navbar-item"
                  v-for="submenuItem in menuItem.submenuItem"
                  :key="submenuItem.slug"
                  v-on:click.native="toggleNavbar"
                >{{ submenuItem.title }}</nuxt-link>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex"

export default {
  data({ req }) {
    return {
      navbarOpen: false,
    }
  },
  methods: {
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen
    }
  },
  computed: mapState({
    menu: state => state.headerMenu.menu
  })
}
</script>