<template>
  <v-container hidden-xs-and-up class="container__full TopBar__container d-none hidden-xs-and-up">
    <v-layout class="layout__block">
      <v-flex :shrink="!state.isMobile" class="TopBar__logo">
        <a href="http://dcardenas.com" alt="dcardenas">
          <img src="~/assets/img/logo_white.png">
        </a>
      </v-flex>
      <v-flex v-if="!state.isMobile" class="TopBar__slogan">
        <span>Technical direction | Project management</span>
      </v-flex>
      <v-flex v-if="state.isDesktop" grow class="TopBar__profile">
        <v-avatar height="70" width="70">
          <img class="hidden-xs-and-up d-none" src="~/assets/img/profile.jpg">
        </v-avatar>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    state () {
      return this.$store.state
    }
  }
}
</script>

<style lang="sass">

.TopBar__container
  background-color: transparent

.TopBar__logo img
  width: 280px

.TopBar__logo
  @include for-phone
    display: block
    text-align: center

.TopBar__slogan span
  color: white
  font-size: 1rem
  padding-left: 20px
  margin-top: 40px
  display: block

.TopBar__profile
  text-align: right
  margin-top: 10px

</style>
